'use client'

import { useState, useEffect } from 'react'

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  time: number
  relative_time_description?: string
}

interface GoogleReviewsProps {
  placeId?: string
  maxReviews?: number
}

export default function GoogleReviews({ 
  placeId, 
  maxReviews = 3 
}: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // If place ID is provided, fetch from our API route (which proxies to Google Places API)
    if (placeId) {
      fetchGoogleReviews(placeId)
    } else {
      // Don't show the widget if no place ID is provided
      setLoading(false)
    }
  }, [placeId])

  const fetchGoogleReviews = async (placeId: string) => {
    try {
      // Call our Next.js API route instead of Google directly (avoids CORS issues)
      const response = await fetch(
        `/api/google-reviews?place_id=${encodeURIComponent(placeId)}`
      )
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        console.error('API error response:', errorData)
        throw new Error(errorData.error || errorData.details?.error_message || 'Failed to fetch reviews')
      }

      const data = await response.json()
      
      if (data.status === 'OK' && data.reviews) {
        setReviews(data.reviews.slice(0, maxReviews))
      } else {
        console.error('Unexpected response:', data)
        throw new Error(data.error || data.details?.error_message || 'Failed to load reviews')
      }
    } catch (err) {
      console.error('Error fetching Google reviews:', err)
      setError(err instanceof Error ? err.message : 'Failed to load reviews')
    } finally {
      setLoading(false)
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 dark:text-gray-600'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  if (loading && !reviews.length) {
    return null // Don't show anything while loading if no reviews
  }

  if (error && !reviews.length) {
    return null // Don't show error state, just don't display widget
  }

  // If no reviews, don't render the widget
  if (!reviews.length) {
    return null
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Google Reviews
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            See what our patients are saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {review.author_name}
                  </h3>
                  {review.relative_time_description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {review.relative_time_description}
                    </p>
                  )}
                </div>
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={placeId ? `https://www.google.com/maps/place/?q=place_id:${placeId}` : 'https://www.google.com/maps/place/Dr.+Marius+Calin'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312a4.5 4.5 0 01-2.717-2.717A7.028 7.028 0 015 12c0-3.584 2.916-6.5 6.5-6.5S18.5 8.416 18.5 12 15.584 18.5 12 18.5z"/>
              <path d="M12 14.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm0-3.5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/>
            </svg>
            Leave a Review on Google
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

