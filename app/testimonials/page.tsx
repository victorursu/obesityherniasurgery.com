'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

interface Testimonial {
  id: number
  date: string
  title: string
  beforeWeight: string
  afterWeight: string
  timeframe: string
  beforeImage: string
  afterImage: string
  testimonial: string
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [modalLabel, setModalLabel] = useState<string>('')

  useEffect(() => {
    fetch('/testimonials/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading testimonials:', err)
        setLoading(false)
      })
  }, [])

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const openModal = (image: string, label: string) => {
    setModalImage(image)
    setModalLabel(label)
  }

  const closeModal = () => {
    setModalImage(null)
    setModalLabel('')
  }

  useEffect(() => {
    if (!modalImage) return
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [modalImage])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Testimonials
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-12 text-center">
            Before & After Weight Loss Pics
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading testimonials...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {testimonial.title}
                      </h3>
                      {testimonial.date && (
                        <p className="text-sm text-gray-500 mb-4">
                          {formatDate(testimonial.date)}
                        </p>
                      )}
                    </div>

                    {/* Before and After Images */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="relative">
                        <div 
                          className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openModal(
                            testimonial.beforeImage, 
                            `BEFORE - ${testimonial.beforeWeight || 'Before'}`
                          )}
                        >
                          <Image
                            src={testimonial.beforeImage}
                            alt="Before"
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/testimonials/placeholder.jpg'
                            }}
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <p className="text-xs font-semibold text-gray-700">BEFORE</p>
                          {testimonial.beforeWeight && (
                            <p className="text-xs text-gray-600">{testimonial.beforeWeight}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div 
                          className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openModal(
                            testimonial.afterImage, 
                            `AFTER - ${testimonial.afterWeight || testimonial.timeframe || 'After'}`
                          )}
                        >
                          <Image
                            src={testimonial.afterImage}
                            alt="After"
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = '/testimonials/placeholder.jpg'
                            }}
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <p className="text-xs font-semibold text-primary">AFTER</p>
                          {testimonial.afterWeight && (
                            <p className="text-xs text-gray-600">{testimonial.afterWeight}</p>
                          )}
                          {testimonial.timeframe && (
                            <p className="text-xs text-gray-500">{testimonial.timeframe}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    {testimonial.testimonial && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-700 italic leading-relaxed">
                          "{testimonial.testimonial}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Title and Close Button */}
            <div className="flex items-center justify-between mb-4">
              {modalLabel && (
                <h3 className="text-white text-2xl font-bold">{modalLabel}</h3>
              )}
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-300 transition-colors ml-auto"
                aria-label="Close modal"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            {/* Image Container */}
            <div className="relative w-full flex-1 min-h-0 flex items-center justify-center">
              <div className="relative w-full" style={{ maxHeight: 'calc(90vh - 100px)' }}>
                <img
                  src={modalImage}
                  alt={modalLabel}
                  className="w-full h-auto object-contain mx-auto"
                  style={{ maxHeight: 'calc(90vh - 100px)' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}

