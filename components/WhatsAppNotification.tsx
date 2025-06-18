'use client'

import { useState, useEffect } from 'react'
import { X, MessageCircle } from 'lucide-react'

interface WhatsAppNotificationProps {
  message: string
  delay?: number
}

export function WhatsAppNotification({ message, delay = 3000 }: WhatsAppNotificationProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (!show) return null

  return (
    <div className="fixed bottom-4 right-4 max-w-sm animate-slide-up">
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
        <div className="flex items-start gap-3">
          <MessageCircle size={24} />
          <div className="flex-1">
            <p className="font-semibold">WhatsApp Notification</p>
            <p className="text-sm mt-1">{message}</p>
          </div>
          <button 
            onClick={() => setShow(false)}
            className="text-white/80 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-600 mt-2 text-right">
        Tap to open WhatsApp
      </div>
    </div>
  )
}