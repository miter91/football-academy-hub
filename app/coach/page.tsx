'use client'

import { useState } from 'react'
import { Check, X, Clock } from 'lucide-react'

export default function CoachPage() {
  const [attendance, setAttendance] = useState<Record<string, string>>({})

  const players = [
    { id: 1, name: 'Tommy Johnson', age: 'U12' },
    { id: 2, name: 'Lucas Chen', age: 'U12' },
    { id: 3, name: 'Max Mueller', age: 'U12' },
    { id: 4, name: 'Aria Putri', age: 'U12' },
    { id: 5, name: 'Oliver Smith', age: 'U12' },
  ]

  const markAttendance = (playerId: number, status: string) => {
    setAttendance({ ...attendance, [playerId]: status })
  }

  const presentCount = Object.values(attendance).filter(s => s === 'present').length

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-bold text-lg">Coach Dashboard</h1>
          <span className="text-sm text-gray-600">Today: Friday, March 15</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">U12 Training - Attendance</h2>
            <p className="text-gray-600 mt-1">Quick tap to mark attendance</p>
          </div>

          <div className="p-6">
            <div className="mb-4 text-center">
              <span className="text-3xl font-bold text-blue-600">{presentCount}</span>
              <span className="text-gray-600">/{players.length} Present</span>
            </div>

            <div className="space-y-3">
              {players.map(player => (
                <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold">{player.name}</p>
                    <p className="text-sm text-gray-600">{player.age}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => markAttendance(player.id, 'present')}
                      className={`p-2 rounded ${
                        attendance[player.id] === 'present' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      <Check size={20} />
                    </button>
                    <button
                      onClick={() => markAttendance(player.id, 'absent')}
                      className={`p-2 rounded ${
                        attendance[player.id] === 'absent' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      <X size={20} />
                    </button>
                    <button
                      onClick={() => markAttendance(player.id, 'late')}
                      className={`p-2 rounded ${
                        attendance[player.id] === 'late' 
                          ? 'bg-yellow-500 text-white' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      <Clock size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Save Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}