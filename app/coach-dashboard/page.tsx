'use client'

import { useState } from 'react'
import { Check, X, Clock, Users, Calendar, TrendingUp, Bell } from 'lucide-react'
import { Logo } from '@/components/Logo'

export default function CoachDashboard() {
  const [attendance, setAttendance] = useState<Record<string, string>>({})
  const [activeGroup, setActiveGroup] = useState('U12')

  const players = [
    { id: 1, name: 'Tommy Johnson', age: 'U12', jersey: 10 },
    { id: 2, name: 'Lucas Chen', age: 'U12', jersey: 7 },
    { id: 3, name: 'Max Mueller', age: 'U12', jersey: 9 },
    { id: 4, name: 'Aria Putri', age: 'U12', jersey: 11 },
    { id: 5, name: 'Oliver Smith', age: 'U12', jersey: 3 },
  ]

  const markAttendance = (playerId: number, status: string) => {
    setAttendance({ ...attendance, [playerId]: status })
  }

  const presentCount = Object.values(attendance).filter(s => s === 'present').length
  const attendanceRate = players.length > 0 ? (presentCount / players.length * 100).toFixed(0) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo size="small" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Coach Martinez</span>
            <div className="relative">
              <Bell className="text-gray-600" size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Sessions</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <Calendar className="text-orange-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Players</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <Users className="text-orange-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Attendance</p>
                <p className="text-2xl font-bold text-green-600">94%</p>
              </div>
              <TrendingUp className="text-green-500" size={24} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Next Session</p>
                <p className="text-lg font-bold text-gray-900">4:00 PM</p>
              </div>
              <Clock className="text-orange-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Attendance Section */}
          <div className="md:col-span-2 bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Quick Attendance</h2>
                  <p className="text-gray-600 mt-1">Tap to mark attendance for today's session</p>
                </div>
                <div className="flex gap-2">
                  {['U10', 'U12', 'U14', 'U16'].map(group => (
                    <button
                      key={group}
                      onClick={() => setActiveGroup(group)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        activeGroup === group
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {group}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-orange-600">{presentCount}</span>
                    <span className="text-gray-600">/{players.length}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Present Today</p>
                    <p className="font-semibold text-green-600">{attendanceRate}% Attendance</p>
                  </div>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Save Attendance
                </button>
              </div>

              <div className="space-y-2">
                {players.map(player => (
                  <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="font-bold text-orange-600">#{player.jersey}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{player.name}</p>
                        <p className="text-sm text-gray-600">{player.age} Team</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => markAttendance(player.id, 'present')}
                        className={`p-2 rounded-lg transition-all ${
                          attendance[player.id] === 'present' 
                            ? 'bg-green-500 text-white shadow-md' 
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                        }`}
                      >
                        <Check size={20} />
                      </button>
                      <button
                        onClick={() => markAttendance(player.id, 'absent')}
                        className={`p-2 rounded-lg transition-all ${
                          attendance[player.id] === 'absent' 
                            ? 'bg-red-500 text-white shadow-md' 
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                        }`}
                      >
                        <X size={20} />
                      </button>
                      <button
                        onClick={() => markAttendance(player.id, 'late')}
                        className={`p-2 rounded-lg transition-all ${
                          attendance[player.id] === 'late' 
                            ? 'bg-yellow-500 text-white shadow-md' 
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                        }`}
                      >
                        <Clock size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                  📢 Send Announcement
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  📋 View Full Roster
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  📊 Performance Reports
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  🏃 Plan Next Session
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6">
              <h3 className="font-bold mb-2">Today's Schedule</h3>
              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur rounded p-3">
                  <p className="font-semibold">9:00 AM - U10 Training</p>
                  <p className="text-sm text-orange-100">Main Field</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded p-3">
                  <p className="font-semibold">2:00 PM - U12 Training</p>
                  <p className="text-sm text-orange-100">Field B</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded p-3 border border-white/40">
                  <p className="font-semibold">4:00 PM - U14 Match</p>
                  <p className="text-sm text-orange-100">Main Field</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}