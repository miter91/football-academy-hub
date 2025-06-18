import Link from 'next/link'
import { Calendar, Bell, Users, ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Simple Nav */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">Code Football Academy</h1>
          <Link 
            href="/login" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Parent Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Football Academy
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            With real-time updates for international families
          </p>
          <Link 
            href="/demo" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center gap-2"
          >
            See Demo <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Bell className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="font-semibold mb-2">Instant Updates</h3>
              <p className="text-gray-600">Never miss a schedule change</p>
            </div>
            <div className="text-center">
              <Users className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">See your child develop</p>
            </div>
            <div className="text-center">
              <Calendar className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">Book sessions instantly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}