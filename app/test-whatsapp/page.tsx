'use client';

import { useState } from 'react';
import { MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { config } from '@/lib/config';

export default function TestWhatsApp() {
  const [phoneNumber, setPhoneNumber] = useState(config.whatsapp.demoPhoneNumber);
  const [message, setMessage] = useState('Hello from Football Code Academy! ⚽');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<any>(null);

  const sendTestMessage = async () => {
    setSending(true);
    setResult(null);

    try {
      const response = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: phoneNumber,
          message: message,
          type: 'general'
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error: any) {
      setResult({ success: false, error: error.message });
    }

    setSending(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">WhatsApp Integration Test</h1>
        
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Before Testing:</h3>
          <ol className="list-decimal list-inside text-blue-800 space-y-1">
            <li>Make sure recipient has sent "join [your-sandbox-code]" to +1 415 523 8886</li>
            <li>Add your Twilio credentials to .env.local</li>
            <li>Use full phone number with country code (e.g., +6281234567890)</li>
          </ol>
        </div>

        {/* Test Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-gray-900"
                placeholder="+6281234567890"
              />
              <p className="text-xs text-gray-500 mt-1">
                Default from NEXT_PUBLIC_DEMO_PHONE_NUMBER env variable
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 text-gray-900"
                rows={3}
              />
            </div>

            <button
              onClick={sendTestMessage}
              disabled={sending || !phoneNumber || !message}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sending ? (
                <>Sending...</>
              ) : (
                <>
                  <MessageCircle className="h-5 w-5" />
                  Send Test WhatsApp
                </>
              )}
            </button>
          </div>

          {/* Result */}
          {result && (
            <div className={`mt-4 p-4 rounded-lg ${result.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {result.success ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! Check your WhatsApp.</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>Error: {result.error || 'Failed to send message'}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Test Scenarios */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-4">Test Different Scenarios:</h3>
          <div className="space-y-2">
            <button
              onClick={() => setMessage('⚽ Training moved to 5:00 PM at Indoor Court today')}
              className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100"
            >
              📅 Schedule Change
            </button>
            <button
              onClick={() => setMessage('✅ Lucas marked present for today\'s training session')}
              className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100"
            >
              ✅ Attendance Update
            </button>
            <button
              onClick={() => setMessage('🏆 Lucas earned "Goal Scorer" achievement!')}
              className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100"
            >
              🏆 Achievement Unlocked
            </button>
            <button
              onClick={() => setMessage('📸 New photos from today\'s training are available')}
              className="w-full text-left px-4 py-2 bg-gray-50 rounded hover:bg-gray-100"
            >
              📸 Media Update
            </button>
          </div>
        </div>

        {/* Environment Info */}
        <div className="mt-8 bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
          <p className="font-semibold mb-2">Environment Configuration:</p>
          <ul className="space-y-1">
            <li>• Twilio Configured: {config.twilio.accountSid ? '✅ Yes' : '❌ No'}</li>
            <li>• Demo Phone: {config.whatsapp.demoPhoneNumber}</li>
            <li>• Environment: {config.app.environment}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}