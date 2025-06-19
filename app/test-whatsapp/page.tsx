'use client';

import { useState } from 'react';
import WhatsAppNotification from '@/components/WhatsAppNotification';

export default function TestWhatsApp() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">WhatsApp Integration Test</h1>
        
        <button
          onClick={() => setShowNotification(true)}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
        >
          Test WhatsApp Notification
        </button>

        {showNotification && (
          <WhatsAppNotification
            message="Test message from Football Code Academy! ⚽"
            type="general"
            phoneNumber="+447802773950" // Replace with your actual phone number
            autoSend={false} // Shows button to manually send
          />
        )}
      </div>
    </div>
  );
}