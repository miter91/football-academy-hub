export class WhatsAppService {
    static async sendNotification(
      phoneNumber: string, 
      message: string, 
      type: 'schedule_change' | 'attendance' | 'achievement' | 'general' = 'general'
    ) {
      try {
        const response = await fetch('/api/whatsapp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: phoneNumber,
            message,
            type
          }),
        });
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('WhatsApp notification error:', error);
        return { success: false, error };
      }
    }
  }