'use client'

import { useState, useEffect } from 'react'
import { AlertCircle, Clock, MapPin } from 'lucide-react'

export function LiveScheduleUpdate() {
  const [showUpdate, setShowUpdate] = useState(false)
  const [isNew, setIsNew] = useState(true)

  // Simulate live update after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUpdate(true)
      setTimeout(() => setIsNew(false), 3000)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!showUpdate) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Today's Schedule</h3>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">U12 Training Session</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    3:30 PM - 5:00 PM
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    Main Field
                  </span>
                </div>
              </div>
              <span className="text-green-600 font-semibold">On Schedule</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Today's Schedule</h3>
        {isNew && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            LIVE UPDATE
          </span>
        )}
      </div>
      <div className="space-y-3">
        <div className={`p-4 rounded-lg border-2 transition-all ${
          isNew ? 'bg-red-50 border-red-300 animate-pulse' : 'bg-orange-50 border-orange-200'
        }`}>
          <div className="flex items-start gap-3">
            <AlertCircle className="text-red-500 mt-1" size={20} />
            <div className="flex-1">
              <p className="font-semibold">U12 Training Session - TIME CHANGED</p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  <span className="line-through">3:30 PM</span>
                  <span className="text-red-600 font-semibold">4:00 PM - 5:30 PM</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  Main Field
                </span>
              </div>
              <p className="text-sm text-red-600 mt-2">
                ⚠️ Updated just now due to weather conditions
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        All parents have been notified via WhatsApp
      </p>
    </div>
  )
}