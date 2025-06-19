// Location: /app/api/whatsapp/route.ts
import { NextResponse } from 'next/server';
import twilio from 'twilio';
import { config, isTwilioConfigured } from '@/lib/config';

// Debug: Log the credentials (remove this after fixing!)
console.log('Twilio Credentials Check:', {
  accountSid: config.twilio.accountSid ? `${config.twilio.accountSid.substring(0, 10)}...` : 'NOT SET',
  authToken: config.twilio.authToken ? 'SET' : 'NOT SET',
  hasClient: !!config.twilio.accountSid && !!config.twilio.authToken
});

// Initialize Twilio client only if configured
const client = isTwilioConfigured() 
  ? twilio(config.twilio.accountSid, config.twilio.authToken)
  : null;

export async function POST(request: Request) {
  // Check if Twilio is configured
  if (!client) {
    console.error('Twilio not configured. Environment variables missing.');
    return NextResponse.json(
      { success: false, error: 'WhatsApp service not configured. Check server logs.' },
      { status: 500 }
    );
  }

  try {
    const { to, message, type } = await request.json();

    // Validate phone number
    if (!to || !to.match(/^\+?[1-9]\d{1,14}$/)) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Format the recipient number
    const recipientNumber = to.includes('whatsapp:') ? to : `whatsapp:+${to.replace(/\D/g, '')}`;

    // Customize message based on type
    let fullMessage = message;
    if (type === 'schedule_change') {
      fullMessage = `⚽ *Football Code Academy*\n\n📅 *Schedule Update*\n${message}\n\nCheck the app for details.`;
    } else if (type === 'attendance') {
      fullMessage = `⚽ *Football Code Academy*\n\n✅ *Attendance Confirmed*\n${message}`;
    } else if (type === 'achievement') {
      fullMessage = `⚽ *Football Code Academy*\n\n🏆 *New Achievement!*\n${message}`;
    }

    // Debug log before sending
    console.log('Sending WhatsApp message:', {
      from: config.twilio.sandboxNumber,
      to: recipientNumber,
      bodyLength: fullMessage.length,
      accountSidPrefix: config.twilio.accountSid?.substring(0, 10)
    });

    // Send WhatsApp message
    const messageResponse = await client.messages.create({
      body: fullMessage,
      from: config.twilio.sandboxNumber,
      to: recipientNumber
    });

    console.log('Message sent successfully:', messageResponse.sid);

    return NextResponse.json({ 
      success: true, 
      messageId: messageResponse.sid 
    });
  } catch (error: any) {
    console.error('WhatsApp send error details:', {
      errorCode: error.code,
      errorMessage: error.message,
      errorStatus: error.status,
      moreInfo: error.moreInfo,
      details: error.details
    });
    
    // More specific error messages
    if (error.code === 20003) {
      return NextResponse.json(
        { success: false, error: 'Authentication failed. Please check your Twilio credentials in .env.local' },
        { status: 401 }
      );
    }
    
    if (error.code === 21608) {
      return NextResponse.json(
        { success: false, error: 'Phone number not registered with WhatsApp sandbox. Please join sandbox first.' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send WhatsApp message' },
      { status: 500 }
    );
  }
}