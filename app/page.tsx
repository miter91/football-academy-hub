import Link from 'next/link'
import { Calendar, Bell, Users, ChevronRight, Trophy, Globe, Video, MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Nav */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">⚽</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Football Academy</h1>
              <p className="text-xs text-orange-500 font-semibold">CODE HUB</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-gray-700 hover:text-orange-500">About</Link>
            <Link href="#programs" className="text-gray-700 hover:text-orange-500">Programs</Link>
            <Link href="#gallery" className="text-gray-700 hover:text-orange-500">Gallery</Link>
            <Link 
              href="/login" 
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero with Gradient */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6">
            <Globe size={16} />
            <span className="text-sm font-semibold">Bali's First Digital Football Academy</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Where Technology Meets
            <span className="block text-orange-200">Football Excellence</span>
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Professional coaching with real-time updates, progress tracking, 
            and instant communication for international families
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/demo" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 inline-flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all"
            >
              See Live Demo <ChevronRight size={20} />
            </Link>
            <Link 
              href="#about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Welcome to Football Academy Code Hub
              </h3>
              <p className="text-gray-600 mb-4">
                We're revolutionizing youth football in Bali by combining professional 
                coaching with cutting-edge technology. Our academy serves both local 
                talents and international families who expect excellence.
              </p>
              <p className="text-gray-600 mb-6">
                With our digital platform, parents stay connected to their child's 
                journey, coaches focus on what they do best, and players thrive in 
                a professional environment.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">150+</div>
                  <div className="text-sm text-gray-600">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">5</div>
                  <div className="text-sm text-gray-600">Age Groups</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">98%</div>
                  <div className="text-sm text-gray-600">Parent Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-8">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  To develop young footballers through professional training while 
                  keeping families connected every step of the way.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Why We're Different</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>✓ Real-time schedule updates</li>
                  <li>✓ Individual progress tracking</li>
                  <li>✓ Multi-language support</li>
                  <li>✓ Professional communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Everything You Need in One Platform</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From registration to graduation, we've digitized every aspect of academy life
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Bell className="text-orange-500 mb-4" size={40} />
              <h4 className="font-semibold mb-2">Instant Notifications</h4>
              <p className="text-gray-600 text-sm">
                Schedule changes, announcements, and updates sent instantly via WhatsApp
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-orange-500 mb-4" size={40} />
              <h4 className="font-semibold mb-2">Player Profiles</h4>
              <p className="text-gray-600 text-sm">
                Track attendance, progress, achievements, and development milestones
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Video className="text-orange-500 mb-4" size={40} />
              <h4 className="font-semibold mb-2">Media Gallery</h4>
              <p className="text-gray-600 text-sm">
                Photos and videos from training and matches, tagged by player
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MessageCircle className="text-orange-500 mb-4" size={40} />
              <h4 className="font-semibold mb-2">Direct Communication</h4>
              <p className="text-gray-600 text-sm">
                Message coaches directly, book 1-on-1 sessions, get quick responses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Preview */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Life at Code Academy</h3>
            <p className="text-gray-600">Follow our journey on social media</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-6xl">📸</span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">@codeacademybali</p>
                <p className="font-semibold mt-1">U12 team celebrates victory! 🏆</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-6xl">🎥</span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">@codeacademybali</p>
                <p className="font-semibold mt-1">Skills training highlights ⚡</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-6xl">⚽</span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">@codeacademybali</p>
                <p className="font-semibold mt-1">New season starts Monday!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Future of Football?</h3>
          <p className="text-xl mb-8 text-orange-100">
            Experience how technology transforms youth football development
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 shadow-lg"
            >
              Register Now
            </Link>
            <Link 
              href="/demo" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">⚽</span>
                </div>
                <span className="font-bold">Football Academy Code Hub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Bali's first digital football academy
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/login" className="block hover:text-white">Parent Portal</Link>
                <Link href="/coach" className="block hover:text-white">Coach Dashboard</Link>
                <Link href="#programs" className="block hover:text-white">Our Programs</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <p className="text-sm text-gray-400">
                WhatsApp: +62 123 456 789<br />
                Email: info@codeacademy.com<br />
                Location: Canggu, Bali
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Football Academy Code Hub. Empowering young footballers through technology.
          </div>
        </div>
      </footer>
    </div>
  )
}