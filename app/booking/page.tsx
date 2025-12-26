'use client'

import { useState, useEffect, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface DayAvailability {
  date: string
  slots: string[]
}

interface AvailabilityData {
  availability: DayAvailability[]
}

interface Booking {
  date: string
  time: string
  name: string
  email: string
  phone: string
  details?: string
}

interface MonthInfo {
  year: number
  month: number
  label: string
}

export default function BookingPage() {
  const [availability, setAvailability] = useState<DayAvailability[]>([])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookings, setBookings] = useState<Map<string, Booking>>(new Map())
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<MonthInfo | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  })

  // Generate 6 months from current date
  const months = useMemo(() => {
    const today = new Date()
    const monthsList: MonthInfo[] = []
    
    for (let i = 0; i < 6; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1)
      monthsList.push({
        year: date.getFullYear(),
        month: date.getMonth(),
        label: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      })
    }
    
    return monthsList
  }, [])

  // Set initial selected month to current month
  useEffect(() => {
    if (months.length > 0 && !selectedMonth) {
      setSelectedMonth(months[0])
    }
  }, [months, selectedMonth])

  useEffect(() => {
    // Load availability from JSON file
    fetch('/booking/availability.json')
      .then(res => res.json())
      .then((data: AvailabilityData) => {
        setAvailability(data.availability)
      })
      .catch(err => console.error('Error loading availability:', err))
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showBookingForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showBookingForm])

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showBookingForm) {
        setShowBookingForm(false)
        setSelectedDate(null)
        setSelectedTime(null)
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [showBookingForm])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  // Format date as YYYY-MM-DD without timezone issues
  const formatDateString = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const formatDay = (dateString: string) => {
    // Parse date string directly to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      day: 'numeric'
    })
  }

  // Get all days in a month (starting from the 1st)
  const getDaysInMonth = (year: number, month: number) => {
    const days: Date[] = []
    const lastDay = new Date(year, month + 1, 0)
    
    // Add all days of the current month starting from the 1st
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day))
    }
    
    return days
  }

  // Generate all time slots between 9:00 and 16:30 (30 min intervals)
  const generateAllTimeSlots = () => {
    const slots: string[] = []
    for (let hour = 9; hour < 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`)
      if (hour < 16) {
        slots.push(`${hour.toString().padStart(2, '0')}:30`)
      }
    }
    return slots
  }

  // Get all days for selected month (including days without availability)
  const getAllDays = () => {
    if (!selectedMonth) return []
    
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayString = formatDateString(today)
    
    const daysInMonth = getDaysInMonth(selectedMonth.year, selectedMonth.month)
    
    // For current month, filter out past days
    return daysInMonth.filter(day => {
      if (selectedMonth.year === today.getFullYear() && 
          selectedMonth.month === today.getMonth()) {
        const dayString = formatDateString(day)
        return dayString >= todayString
      }
      return true
    })
  }

  // Check if a slot is available for a specific date
  const isSlotAvailable = (dateString: string, slot: string) => {
    const dayData = availability.find(d => d.date === dateString)
    if (!dayData) return false
    
    return dayData.slots.includes(slot)
  }

  const handleSlotClick = (date: string, time: string) => {
    const slotKey = `${date}-${time}`
    // Check if already booked
    if (bookings.has(slotKey)) {
      alert('This slot is already booked. Please select another time.')
      return
    }

    // Check if slot is available
    if (!isSlotAvailable(date, time)) {
      alert('This slot is not available. Please select another time.')
      return
    }

    setSelectedDate(date)
    setSelectedTime(time)
    setShowBookingForm(true)
    setFormData({ name: '', email: '', phone: '', details: '' })
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime) return

    const slotKey = `${selectedDate}-${selectedTime}`
    const booking: Booking = {
      date: selectedDate,
      time: selectedTime,
      ...formData
    }

    // Store booking in memory (POC - not persisted)
    setBookings(prev => new Map(prev).set(slotKey, booking))

    setShowBookingForm(false)
    setShowConfirmation(true)
    setSelectedDate(null)
    setSelectedTime(null)
    
    // Hide confirmation after 5 seconds
    setTimeout(() => {
      setShowConfirmation(false)
    }, 5000)
  }

  const isSlotBooked = (date: string, time: string) => {
    return bookings.has(`${date}-${time}`)
  }

  const allDays = getAllDays()
  const allTimeSlots = generateAllTimeSlots()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Book an Appointment
          </h1>

          {showConfirmation && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-lg">
              <p className="font-semibold">Booking confirmed!</p>
              <p>Your appointment has been scheduled. (Note: This is a POC - booking is not saved to database)</p>
            </div>
          )}

          {/* Month Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {months.map((month, index) => (
              <button
                key={`${month.year}-${month.month}`}
                onClick={() => setSelectedMonth(month)}
                className={`
                  px-4 py-2 rounded-lg font-semibold transition-colors
                  ${selectedMonth?.year === month.year && selectedMonth?.month === month.month
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }
                `}
              >
                {month.label}
              </button>
            ))}
          </div>

          {/* Booking Modal */}
          {showBookingForm && selectedDate && selectedTime && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => {
                  setShowBookingForm(false)
                  setSelectedDate(null)
                  setSelectedTime(null)
                }}
              />
              
              {/* Modal */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Book Appointment
                      </h2>
                      <button
                        onClick={() => {
                          setShowBookingForm(false)
                          setSelectedDate(null)
                          setSelectedTime(null)
                        }}
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        aria-label="Close modal"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {formatDate(selectedDate)} at {selectedTime}
                    </p>
                    
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="details" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Details about your visit
                        </label>
                        <textarea
                          id="details"
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="Please provide any additional details about your visit (optional)"
                        />
                      </div>

                      <div className="flex gap-4 pt-2">
                        <button
                          type="submit"
                          className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                        >
                          Confirm Booking
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowBookingForm(false)
                            setSelectedDate(null)
                            setSelectedTime(null)
                          }}
                          className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Days Grid */}
          {selectedMonth && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                {selectedMonth.label}
              </h2>
              
              {allDays.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">
                    No days available for this month.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allDays.map((day) => {
                    const dateString = formatDateString(day)
                    
                    return (
                      <div
                        key={dateString}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                      >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                          {formatDay(dateString)}
                        </h3>
                        
                        <div className="grid grid-cols-4 gap-2">
                          {allTimeSlots.map((slot) => {
                            const isBooked = isSlotBooked(dateString, slot)
                            const isAvailable = isSlotAvailable(dateString, slot) && !isBooked
                            
                            return (
                              <button
                                key={slot}
                                onClick={() => handleSlotClick(dateString, slot)}
                                disabled={!isAvailable}
                                className={`
                                  px-3 py-2 text-sm font-medium rounded-lg transition-all
                                  ${isAvailable
                                    ? 'bg-primary text-white hover:bg-primary-dark cursor-pointer transform hover:scale-105'
                                    : isBooked
                                    ? 'bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-200 cursor-not-allowed'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                                  }
                                `}
                              >
                                {slot}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {availability.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">Loading availability...</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
