'use client'

import { useState } from 'react'
import { Bell, Calendar, Users, Home, Trophy, MessageCircle, Video } from 'lucide-react'
import { WhatsAppNotification } from '@/components/WhatsAppNotification'

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* WhatsApp Notification */}
      <WhatsAppNotification 
        message="Training tomorrow moved to 4 PM due to weather. Tap to confirm."
        delay={2000}
      />

      {/* Top Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">⚽</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">Parent Portal</h1>
              <p className="text-xs text-orange-500">Football Academy Code Hub</p>
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
                <button className="w-full text-left p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors flex items-center gap-2">
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
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Training Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Monday - Technical Skills</p>
                  <p className="text-sm text-gray-600">4:00 PM - 5:30 PM • Main Field</p>
                </div>
                <span className="text-green-600 font-semibold">✅ Attended</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div>
                  <p className="font-semibold">Wednesday - Match Practice</p>
                  <p className="text-sm text-gray-600">4:00 PM - 5:30 PM • Field B</p>
                  <p className="text-xs text-orange-600 mt-1">⚠️ Time changed from 3:30 PM</p>
                </div>
                <span className="text-orange-600 font-semibold">Tomorrow</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}