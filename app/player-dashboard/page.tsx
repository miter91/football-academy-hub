'use client'

import { Trophy, Target, TrendingUp, Users, Calendar } from 'lucide-react'
import { Logo } from '@/components/Logo'

export default function PlayerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Logo size="small" showText={false} />
          <h1 className="text-2xl font-bold mb-2 mt-4">Hey Tommy! ⚽</h1>
          <p>Ready to become a champion?</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <Trophy className="text-orange-500 mx-auto mb-2" size={32} />
            <p className="text-2xl font-bold">5</p>
            <p className="text-sm text-gray-600">Goals This Month</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <Target className="text-blue-500 mx-auto mb-2" size={32} />
            <p className="text-2xl font-bold">92%</p>
            <p className="text-sm text-gray-600">Attendance</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <TrendingUp className="text-green-500 mx-auto mb-2" size={32} />
            <p className="text-2xl font-bold">Level 3</p>
            <p className="text-sm text-gray-600">Skill Level</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <Users className="text-purple-500 mx-auto mb-2" size={32} />
            <p className="text-2xl font-bold">#10</p>
            <p className="text-sm text-gray-600">Jersey Number</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="font-bold text-lg mb-4">My Achievements 🏆</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-3xl">⚡</span>
              </div>
              <p className="text-sm font-semibold">Speed Star</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-3xl">🎯</span>
              </div>
              <p className="text-sm font-semibold">Goal Scorer</p>
            </div>
            <div className="text-center opacity-50">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-3xl">🔒</span>
              </div>
              <p className="text-sm font-semibold">Team Captain</p>
            </div>
          </div>
        </div>

        {/* Next Training */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">Next Training</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">Tomorrow, 4:00 PM</p>
              <p>Tactical Training - Don't forget your water bottle!</p>
            </div>
            <Calendar size={48} className="opacity-20" />
          </div>
        </div>
      </div>
    </div>
  )
}