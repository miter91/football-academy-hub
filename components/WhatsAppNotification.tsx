'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WhatsAppService } from '@/lib/whatsapp-service';

interface WhatsAppNotificationProps {
  message: string;
  type?: 'schedule_change' | 'attendance' | 'achievement' | 'general';
  phoneNumber?: string; // For demo, we'll use a test number
  autoSend?: boolean;
}

export default function WhatsAppNotification({ 
  message, 
  type = 'general',
  phoneNumber = '+6281234567890', // Demo number
  autoSend = false 
}: WhatsAppNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (autoSend && !sent) {
      sendWhatsAppMessage();
    }
  }, [autoSend]);

  const sendWhatsAppMessage = async () => {
    setIsSending(true);
    
    const result = await WhatsAppService.sendNotification(
      phoneNumber,
      message,
      type
    );

    if (result.success) {
      setSent(true);
      // Auto-hide after 5 seconds if sent successfully
      setTimeout(() => setIsVisible(false), 5000);
    }
    
    setIsSending(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-lg p-4 border border-gray-200 z-50">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <MessageCircle className="h-6 w-6 text-green-500" />
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
            WhatsApp Notification {sent && '✓ Sent'}
          </p>
          <p className="mt-1 text-sm text-gray-500">{message}</p>
          
          {/* Demo controls */}
          {!sent && (
            <div className="mt-3 flex gap-2">
              <button
                onClick={sendWhatsAppMessage}
                disabled={isSending}
                className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 disabled:opacity-50"
              >
                {isSending ? 'Sending...' : 'Send Demo WhatsApp'}
              </button>
              <span className="text-xs text-gray-400 py-1">
                To: {phoneNumber}
              </span>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}