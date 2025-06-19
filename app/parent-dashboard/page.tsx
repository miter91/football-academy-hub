'use client'

import { useState, useEffect } from 'react'
import { Bell, Calendar, Users, Home, Trophy, MessageCircle, Video } from 'lucide-react'
import WhatsAppNotification from '@/components/WhatsAppNotification'
import { MediaGallery } from '@/components/MediaGallery'
import { LiveScheduleUpdate } from '@/components/LiveScheduleUpdate'

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showScheduleWhatsApp, setShowScheduleWhatsApp] = useState(false)
  const [showInitialWhatsApp, setShowInitialWhatsApp] = useState(false)

  // Show initial WhatsApp notification after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialWhatsApp(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Show schedule change WhatsApp when on schedule tab
  useEffect(() => {
    if (activeTab === 'schedule') {
      // Reset the state when switching to schedule tab
      setShowScheduleWhatsApp(false)
      // Show WhatsApp notification after 5 seconds (matching LiveScheduleUpdate timing)
      const timer = setTimeout(() => {
        setShowScheduleWhatsApp(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [activeTab])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Initial WhatsApp Notification */}
      {showInitialWhatsApp && (
        <WhatsAppNotification 
          message="Training tomorrow moved to 4 PM due to weather. Tap to confirm."
          type="schedule_change"
          phoneNumber="++447802773950" // Replace with your test number
          autoSend={false}
        />
      )}

      {/* Schedule Change WhatsApp Notification */}
      {activeTab === 'schedule' && showScheduleWhatsApp && (
        <WhatsAppNotification 
          message="⚽ Schedule Update: Today's training moved to 5:00 PM - 6:30 PM at Indoor Court"
          type="schedule_change"
          phoneNumber="+6281234567890" // Replace with your test number
          autoSend={false} // Set to true for auto-send
        />
      )}

      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">⚽</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">Parent Portal</h1>
              <p className="text-xs text-orange-500">Football Code Academy</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, Sarah Johnson</span>
            <div className="relative">
              <Bell className="text-gray-600" size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            {['overview', 'schedule', 'progress', 'media', 'messages'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-4 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Player Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👦</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Tommy Johnson</h3>
                  <p className="text-sm text-gray-600">U12 Team • #10</p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Active</span>
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Midfielder</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="font-bold text-lg">12/15 Sessions</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="font-bold text-lg text-green-600">92%</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Trophy className="text-orange-500" size={20} />
                Recent Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-sm">Goal Scorer!</p>
                    <p className="text-xs text-gray-600">2 goals in practice match</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-semibold text-sm">Player of the Week</p>
                    <p className="text-xs text-gray-600">Outstanding performance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button 
                  className="w-full text-left p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors flex items-center gap-2"
                  onClick={() => {
                    // Demo: Send WhatsApp for booking
                    const notification = document.createElement('div')
                    notification.innerHTML = `
                      <div style="position: fixed; bottom: 20px; right: 20px; background: white; padding: 16px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 9999;">
                        <p style="margin: 0;">Booking request sent! Coach will confirm via WhatsApp.</p>
                      </div>
                    `
                    document.body.appendChild(notification)
                    setTimeout(() => notification.remove(), 3000)
                  }}
                >
                  <Calendar size={18} />
                  Book 1-on-1 Training
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <MessageCircle size={18} />
                  Message Coach
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <Video size={18} />
                  View Highlights
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <LiveScheduleUpdate />
        )}

        {activeTab === 'progress' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Player Development</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Skill Assessment</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Technical Skills</span>
                      <span className="font-semibold">4/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tactical Awareness</span>
                      <span className="font-semibold">3/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Physical Fitness</span>
                      <span className="font-semibold">4/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Team Play</span>
                      <span className="font-semibold">5/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Coach's Notes</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    "Tommy continues to show excellent progress. His passing accuracy has improved significantly, 
                    and he's becoming more confident in 1v1 situations. Focus for next month: improving weak foot skills."
                  </p>
                  <p className="text-xs text-gray-500 mt-2">- Coach Martinez, 2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'media' && (
          <div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Photos & Videos</h3>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Media</option>
                  <option>Tommy's Media</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
              </div>
              <MediaGallery playerFilter="Tommy Johnson" />
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Messages</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Coach Martinez</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Great performance today! Tommy's positioning during the match was excellent.
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
              </div>
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Academy Admin</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Reminder: Team photo session this Saturday at 10 AM. Please wear the home kit.
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
              </div>
            </div>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              New Message
            </button>
          </div>
        )}
      </div>
    </div>
  )
}