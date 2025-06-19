import { NextResponse } from 'next/server';
import twilio from 'twilio';

// For demo/development - use Twilio sandbox credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Twilio Sandbox WhatsApp number (for testing)
const TWILIO_WHATSAPP_NUMBER = 'whatsapp:+XXXXXXXXXX'; // Twilio's sandbox number


export async function POST(request: Request) {
    try {
      const { to, message, type } = await request.json();
  
      // Format the recipient number
      const recipientNumber = `whatsapp:+${to.replace(/\D/g, '')}`;
  
      // Customize message based on type
      let fullMessage = message;
      if (type === 'schedule_change') {
        fullMessage = `⚽ *Football Code Academy*\n\n📅 *Schedule Update*\n${message}\n\nCheck the app for details.`;
      } else if (type === 'attendance') {
        fullMessage = `⚽ *Football Code Academy*\n\n✅ *Attendance Confirmed*\n${message}`;
      } else if (type === 'achievement') {
        fullMessage = `⚽ *Football Code Academy*\n\n🏆 *New Achievement!*\n${message}`;
      }
  
      // Send WhatsApp message
      const messageResponse = await client.messages.create({
        body: fullMessage,
        from: TWILIO_WHATSAPP_NUMBER,
        to: recipientNumber
      });
  
      return NextResponse.json({ 
        success: true, 
        messageId: messageResponse.sid 
      });
    } catch (error) {
      console.error('WhatsApp send error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send WhatsApp message' },
        { status: 500 }
      );
    }
  }