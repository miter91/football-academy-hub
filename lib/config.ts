// Location: /lib/config.ts

export const config = {
  twilio: {
    // Server-side only (no NEXT_PUBLIC prefix)
    accountSid: process.env.TWILIO_ACCOUNT_SID || '',
    authToken: process.env.TWILIO_AUTH_TOKEN || '',
    // Check your Twilio console for YOUR specific sandbox number
    // It's usually +14155238886 but might be different
    sandboxNumber: process.env.TWILIO_SANDBOX_NUMBER || 'whatsapp:+14155238886',
  },
  
  whatsapp: {
    // Client-side accessible (NEXT_PUBLIC prefix)
    demoPhoneNumber: process.env.NEXT_PUBLIC_DEMO_PHONE_NUMBER || '+62XXXXXXXXXX',
  },
  
  app: {
    name: 'Football Code Academy',
    environment: process.env.NODE_ENV || 'development',
  }
};

// Validation function to check if Twilio is configured
export const isTwilioConfigured = () => {
  return !!(config.twilio.accountSid && config.twilio.authToken);
};