'use client'

import { useState } from 'react'
import { X, Download, Share2 } from 'lucide-react'

const mediaItems = [
  { id: 1, type: 'photo', url: '/api/placeholder/400/300', caption: 'Goal celebration vs Tigers FC', date: '2 days ago', players: ['Tommy Johnson'] },
  { id: 2, type: 'photo', url: '/api/placeholder/400/300', caption: 'Team huddle before match', date: '3 days ago', players: ['All'] },
  { id: 3, type: 'video', url: '#', caption: 'Amazing save by keeper!', date: '1 week ago', players: ['Lucas Chen'] },
  { id: 4, type: 'photo', url: '/api/placeholder/400/300', caption: 'Skills training session', date: '1 week ago', players: ['Tommy Johnson', 'Max Mueller'] },
  { id: 5, type: 'photo', url: '/api/placeholder/400/300', caption: 'U12 team photo', date: '2 weeks ago', players: ['All'] },
  { id: 6, type: 'photo', url: '/api/placeholder/400/300', caption: 'Trophy presentation', date: '3 weeks ago', players: ['All'] },
]

export function MediaGallery({ playerFilter }: { playerFilter?: string }) {
  const [selectedMedia, setSelectedMedia] = useState<any>(null)

  const filteredMedia = playerFilter 
    ? mediaItems.filter(item => item.players.includes(playerFilter) || item.players.includes('All'))
    : mediaItems

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredMedia.map(item => (
          <div 
            key={item.id} 
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            onClick={() => setSelectedMedia(item)}
          >
            <div className="aspect-video bg-gray-200 relative">
              {item.type === 'photo' ? (
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white text-4xl">📸</span>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <span className="text-white text-4xl">🎥</span>
                </div>
              )}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                    <span className="text-red-600">▶</span>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <p className="text-sm font-semibold">{item.caption}</p>
                <p className="text-xs opacity-80">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="font-semibold">{selectedMedia.caption}</h3>
                <p className="text-sm text-gray-600">{selectedMedia.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Download size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Share2 size={20} />
                </button>
                <button 
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              {selectedMedia.type === 'photo' ? (
                <div className="text-6xl">📸</div>
              ) : (
                <div className="text-6xl">🎥</div>
              )}
            </div>
            <div className="p-4 border-t">
              <p className="text-sm text-gray-600">
                Tagged: {selectedMedia.players.join(', ')}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}