'use client'

import { useState } from 'react'
import { Bell, Calendar, Users, Home, X } from 'lucide-react'
import { Logo } from '@/components/Logo'

export default function DemoPage() {
  const [showNotification, setShowNotification] = useState(false)
  
  // Simulate notification after 2 seconds
  setTimeout(() => setShowNotification(true), 2000)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo size="small" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, Sarah Johnson</span>
            <Bell className="text-gray-600" size={20} />
          </div>
        </div>
      </div>

      {/* Notification Demo */}
      {showNotification && (
        <div className="fixed top-20 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm animate-pulse">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-red-600">⚠️ Schedule Change</p>
              <p className="text-sm mt-1">Tomorrow's training moved to 4 PM</p>
            </div>
            <button onClick={() => setShowNotification(false)}>
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Dashboard Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Player Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚽</span>
              </div>
              <div>
                <h3 className="font-semibold">Tommy Johnson</h3>
                <p className="text-sm text-gray-600">U12 Team</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">This Week:</span>
                <span className="font-semibold">3/3 Sessions ✅</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Next Training:</span>
                <span className="font-semibold">Tomorrow 4PM</span>
              </div>
            </div>
          </div>

          {/* Recent Update */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Latest Update</h3>
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm font-semibold text-green-800">Great Progress! 🌟</p>
              <p className="text-sm text-green-700 mt-1">
                Tommy scored 2 goals in today's practice match
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100">
                📅 Book Extra Training
              </button>
              <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100">
                💬 Message Coach
              </button>
              <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100">
                📊 View Full Progress
              </button>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h3 className="font-semibold mb-4">This Week's Schedule</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="font-semibold">Monday - Technical Skills</p>
                <p className="text-sm text-gray-600">4:00 PM - 5:30 PM</p>
              </div>
              <span className="text-green-600">✅ Attended</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="font-semibold">Wednesday - Match Practice</p>
                <p className="text-sm text-gray-600">4:00 PM - 5:30 PM</p>
              </div>
              <span className="text-green-600">✅ Attended</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded border border-blue-200">
              <div>
                <p className="font-semibold">Friday - Tactical Training</p>
                <p className="text-sm text-gray-600">4:00 PM - 5:30 PM ⚠️ Time Changed</p>
              </div>
              <span className="text-blue-600">Upcoming</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}