'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User, GraduationCap, Users } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'parent' | 'coach' | 'player'>('parent')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Route based on role
    switch(role) {
      case 'parent':
        router.push('/parent-dashboard')
        break
      case 'coach':
        router.push('/coach-dashboard')
        break
      case 'player':
        router.push('/player-dashboard')
        break
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-3xl">⚽</span>
          </div>
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-gray-600">Football Academy Code Hub</p>
        </div>

        {/* Role Selection */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-3">I am a:</p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setRole('parent')}
              className={`p-3 rounded-lg border-2 transition-all ${
                role === 'parent' 
                  ? 'border-orange-500 bg-orange-50 text-orange-700' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <User size={24} className="mx-auto mb-1" />
              <span className="text-sm">Parent</span>
            </button>
            <button
              onClick={() => setRole('coach')}
              className={`p-3 rounded-lg border-2 transition-all ${
                role === 'coach' 
                  ? 'border-orange-500 bg-orange-50 text-orange-700' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <GraduationCap size={24} className="mx-auto mb-1" />
              <span className="text-sm">Coach</span>
            </button>
            <button
              onClick={() => setRole('player')}
              className={`p-3 rounded-lg border-2 transition-all ${
                role === 'player' 
                  ? 'border-orange-500 bg-orange-50 text-orange-700' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Users size={24} className="mx-auto mb-1" />
              <span className="text-sm">Player</span>
            </button>
          </div>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder={`${role}@demo.com`}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-2">Demo Accounts:</p>
          <div className="text-xs text-gray-600 space-y-1">
            <p>Parent: parent@demo.com / demo123</p>
            <p>Coach: coach@demo.com / demo123</p>
            <p>Player: player@demo.com / demo123</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-orange-600 hover:underline text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}