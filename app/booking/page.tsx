'use client'

import { useState, useEffect, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'

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
  address?: string
  phone: string
  appointmentType: string
  details?: string
  reasonForAppointment?: string
  dateOfBirth?: string
  healthInsuranceId?: string
  healthInsuranceCarrier?: string
  authorizationConsent?: boolean
}

interface MonthInfo {
  year: number
  month: number
  label: string
}

export default function BookingPage() {
  const { language, translations } = useLanguage()
  const [availability, setAvailability] = useState<DayAvailability[]>([])
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [bookings, setBookings] = useState<Map<string, Booking>>(new Map())
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<MonthInfo | null>(null)
  const [timeFormat, setTimeFormat] = useState<'24h' | '12h'>('24h')
  const [showSecondStep, setShowSecondStep] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    appointmentType: '',
    details: '',
    reasonForAppointment: '',
    dateOfBirth: '',
    healthInsuranceId: '',
    healthInsuranceCarrier: '',
    authorizationConsent: false
  })

  const appointmentTypes = [
    { value: 'appointment_with_dr_calin', key: 'appointment_with_dr_calin' },
    { value: 'weight_loss_surgery_options', key: 'weight_loss_surgery_options' },
    { value: 'weight_loss_medication', key: 'weight_loss_medication' },
    { value: 'hernia', key: 'hernia' },
    { value: 'gallbladder', key: 'gallbladder' },
    { value: 'colonoscopy', key: 'colonoscopy' },
    { value: 'other_surgical_problems', key: 'other_surgical_problems' },
    { value: 'follow_up_with_dr_calin_after_surgery', key: 'follow_up_with_dr_calin_after_surgery' }
  ]

  const reasonForAppointmentOptions = [
    { value: 'weight_loss', key: 'weight_loss' },
    { value: 'hernia', key: 'hernia' },
    { value: 'gallbladder', key: 'gallbladder' },
    { value: 'follow_up_after_surgery', key: 'follow_up_after_surgery' },
    { value: 'other', key: 'other' }
  ]

  // Generate 6 months from current date
  const months = useMemo(() => {
    const today = new Date()
    const monthsList: MonthInfo[] = []
    const monthNames = translations?.months ? [
      translations.months.january,
      translations.months.february,
      translations.months.march,
      translations.months.april,
      translations.months.may,
      translations.months.june,
      translations.months.july,
      translations.months.august,
      translations.months.september,
      translations.months.october,
      translations.months.november,
      translations.months.december
    ] : []
    
    for (let i = 0; i < 6; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() + i, 1)
      const monthName = monthNames[date.getMonth()] || date.toLocaleDateString('en-US', { month: 'long' })
      monthsList.push({
        year: date.getFullYear(),
        month: date.getMonth(),
        label: `${monthName} ${date.getFullYear()}`
      })
    }
    
    return monthsList
  }, [translations])

  // Set initial selected month to current month
  useEffect(() => {
    if (months.length > 0 && !selectedMonth) {
      setSelectedMonth(months[0])
    }
  }, [months, selectedMonth])

  useEffect(() => {
    // Load availability from external URL (configurable via env variable)
    const availabilityUrl = process.env.NEXT_PUBLIC_BOOKING_AVAILABILITY_URL || 'https://emr.obesityherniasurgery.com/booking-availability.json'
    
    fetch(availabilityUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch availability: ${res.status}`)
        }
        return res.json()
      })
      .then((data: AvailabilityData) => {
        setAvailability(data.availability)
      })
      .catch(err => {
        console.error('Error loading availability:', err)
        // Fallback to local file if external URL fails
        fetch('/booking/availability.json')
          .then(res => res.json())
          .then((data: AvailabilityData) => {
            setAvailability(data.availability)
          })
          .catch(fallbackErr => console.error('Error loading fallback availability:', fallbackErr))
      })
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
    const weekdayIndex = date.getDay() // 0 = Sunday, 1 = Monday, etc.
    const weekdays = translations?.weekdays ? [
      translations.weekdays.sunday,    // 0
      translations.weekdays.monday,    // 1
      translations.weekdays.tuesday,   // 2
      translations.weekdays.wednesday, // 3
      translations.weekdays.thursday,  // 4
      translations.weekdays.friday,     // 5
      translations.weekdays.saturday   // 6
    ] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const weekdayName = weekdays[weekdayIndex] || date.toLocaleDateString('en-US', { weekday: 'short' })
    return `${weekdayName} ${day}`
  }

  // Format month label with current translations
  const formatMonthLabel = (monthInfo: MonthInfo | null) => {
    if (!monthInfo || !translations?.months) {
      return monthInfo?.label || ''
    }
    const monthNames = [
      translations.months.january,
      translations.months.february,
      translations.months.march,
      translations.months.april,
      translations.months.may,
      translations.months.june,
      translations.months.july,
      translations.months.august,
      translations.months.september,
      translations.months.october,
      translations.months.november,
      translations.months.december
    ]
    const monthName = monthNames[monthInfo.month] || monthInfo.label.split(' ')[0]
    return `${monthName} ${monthInfo.year}`
  }

  // Format time slot based on selected format
  const formatTimeSlot = (time: string): { time: string; period: string } | string => {
    if (timeFormat === '24h') {
      return time
    }
    // Convert 24h to 12h format
    const [hours, minutes] = time.split(':').map(Number)
    const period = hours >= 12 ? 'PM' : 'AM'
    const hours12 = hours % 12 || 12
    return { time: `${hours12}:${minutes.toString().padStart(2, '0')}`, period }
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
    setShowSecondStep(false)
    setFormData({ 
      name: '', 
      email: '', 
      address: '',
      phone: '', 
      appointmentType: '', 
      details: '',
      reasonForAppointment: '',
      dateOfBirth: '',
      healthInsuranceId: '',
      healthInsuranceCarrier: '',
      authorizationConsent: false
    })
  }

  const handleContinueBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate first step fields
    if (!formData.name || !formData.email || !formData.phone || !formData.appointmentType) {
      return
    }
    // Show second step
    setShowSecondStep(true)
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime) return

    // Validate second step fields
    if (!formData.reasonForAppointment || !formData.dateOfBirth || !formData.healthInsuranceId || !formData.healthInsuranceCarrier || !formData.authorizationConsent) {
      return
    }

    const slotKey = `${selectedDate}-${selectedTime}`
    const booking: Booking = {
      date: selectedDate,
      time: selectedTime,
      ...formData
    }

    // Store booking in memory (POC - not persisted)
    setBookings(prev => new Map(prev).set(slotKey, booking))

    setShowBookingForm(false)
    setShowSecondStep(false)
    setShowConfirmation(true)
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const isSlotBooked = (date: string, time: string) => {
    return bookings.has(`${date}-${time}`)
  }

  const allDays = getAllDays()
  const allTimeSlots = generateAllTimeSlots()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow pt-0 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Sticky Controls Bar */}
        <div className="sticky top-20 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Time Format Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{translations?.timeFormat || 'Time Format'}:</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">24h</span>
                <button
                  onClick={() => setTimeFormat(timeFormat === '24h' ? '12h' : '24h')}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    timeFormat === '12h' ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label="Toggle time format"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      timeFormat === '12h' ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
                <span className="text-xs text-gray-600 dark:text-gray-400">12h</span>
              </div>

              {/* Color Coding Legend */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">{translations?.legend || 'Legend'}:</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary"></div>
                  <span className="text-gray-600 dark:text-gray-400">{translations?.available || 'Available'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
                  <span className="text-gray-600 dark:text-gray-400">{translations?.unavailable || 'Unavailable'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-red-200 dark:bg-red-900"></div>
                  <span className="text-gray-600 dark:text-gray-400">{translations?.booked || 'Booked'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-pink-50 dark:bg-pink-700/30"></div>
                  <span className="text-gray-600 dark:text-gray-400">{translations?.sunday || 'Sunday'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            {translations?.bookAnAppointment || 'Book an Appointment'}
          </h1>

          {showConfirmation && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-lg relative">
              <button
                onClick={() => setShowConfirmation(false)}
                className="absolute top-2 right-2 text-green-700 dark:text-green-200 hover:text-green-900 dark:hover:text-green-100 transition-colors"
                aria-label="Dismiss"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p className="font-semibold pr-6">Booking confirmed!</p>
              <p className="pr-6">Your appointment has been scheduled. (Note: the appt. is not finalized until you receive a confirmation message.)</p>
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
                  setShowSecondStep(false)
                  setSelectedDate(null)
                  setSelectedTime(null)
                }}
              />
              
              {/* Modal */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex transition-transform duration-300 ease-in-out" style={{ width: '200%', transform: showSecondStep ? 'translateX(-50%)' : 'translateX(0)' }}>
                    {/* First Step */}
                    <div className="w-1/2 p-6 overflow-y-auto max-h-[90vh]">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {translations?.bookAppointment || 'Book Appointment'}
                      </h2>
                      <button
                        onClick={() => {
                          setShowBookingForm(false)
                          setShowSecondStep(false)
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
                      {formatDate(selectedDate)} at{' '}
                      {timeFormat === '24h' ? (
                        selectedTime
                      ) : (
                        (() => {
                          const formatted = formatTimeSlot(selectedTime)
                          if (typeof formatted === 'string') {
                            return selectedTime
                          }
                          return (
                            <>
                              {formatted.time}
                              <sup className="text-[10px] leading-none">{formatted.period}</sup>
                            </>
                          )
                        })()
                      )}
                    </p>
                    
                    <form onSubmit={handleContinueBooking} className="space-y-4">
                      <div>
                        <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {translations?.appointmentType || 'Appointment Type'} *
                        </label>
                        <select
                          id="appointmentType"
                          required
                          value={formData.appointmentType}
                          onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        >
                          <option value="">{translations?.selectAppointmentType || 'Select appointment type'}</option>
                          {appointmentTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {translations?.appointmentTypes?.[type.key] || type.value}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {translations?.name || 'Name'} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder={translations?.enterYourFullName || 'Enter your full name'}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {translations?.phone || 'Phone'} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder={translations?.enterYourPhoneNumber || 'Enter your phone number'}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {translations?.emailAddress || 'Email Address'} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder={translations?.enterYourEmailAddress || 'Enter your email address'}
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {translations?.address || 'Address'}
                        </label>
                        <input
                          type="text"
                          id="address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder={translations?.enterYourAddress || 'Enter your address (optional)'}
                        />
                      </div>

                      <div>
                        <label htmlFor="details" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {translations?.detailsAboutVisit || 'Details about your visit'}
                        </label>
                        <textarea
                          id="details"
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder={translations?.detailsAboutVisitPlaceholder || 'Please provide any additional details about your visit (optional)'}
                        />
                      </div>

                      <div className="flex gap-4 pt-2">
                        <button
                          type="submit"
                          className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                        >
                          {translations?.continueBooking || 'Continue booking'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowBookingForm(false)
                            setShowSecondStep(false)
                            setSelectedDate(null)
                            setSelectedTime(null)
                          }}
                          className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                          {translations?.cancel || 'Cancel'}
                        </button>
                      </div>
                    </form>
                    </div>

                    {/* Second Step */}
                    <div className="w-1/2 p-6 overflow-y-auto max-h-[90vh]">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {translations?.additionalInformation || 'Additional Information'}
                        </h2>
                        <button
                          onClick={() => setShowSecondStep(false)}
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                          aria-label={translations?.back || 'Back'}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                      </div>

                      <form onSubmit={handleBookingSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="reasonForAppointment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {translations?.reasonForAppointment || 'REASON FOR THE APPOINTMENT'} *
                          </label>
                          <select
                            id="reasonForAppointment"
                            required
                            value={formData.reasonForAppointment}
                            onChange={(e) => setFormData({ ...formData, reasonForAppointment: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          >
                            <option value="">--select an option--</option>
                            {reasonForAppointmentOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {translations?.reasonForAppointmentOptions?.[option.key] || option.value}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {translations?.dateOfBirth || 'DATE OF BIRTH'} *
                          </label>
                          <input
                            type="text"
                            id="dateOfBirth"
                            required
                            value={formData.dateOfBirth}
                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder="MM/DD/YYYY"
                          />
                        </div>

                        <div>
                          <label htmlFor="healthInsuranceId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {translations?.healthInsuranceIdNumber || 'Health Insurance ID Number'} *
                          </label>
                          <input
                            type="text"
                            id="healthInsuranceId"
                            required
                            value={formData.healthInsuranceId}
                            onChange={(e) => setFormData({ ...formData, healthInsuranceId: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder={translations?.enterHealthInsuranceId || 'Enter your health insurance ID number'}
                          />
                        </div>

                        <div>
                          <label htmlFor="healthInsuranceCarrier" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {translations?.healthInsuranceCarrier || 'Health Insurance Carrier'} *
                          </label>
                          <input
                            type="text"
                            id="healthInsuranceCarrier"
                            required
                            value={formData.healthInsuranceCarrier}
                            onChange={(e) => setFormData({ ...formData, healthInsuranceCarrier: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            placeholder={translations?.enterHealthInsuranceCarrier || 'Enter your health insurance carrier'}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {translations?.authorizationConsent || 'Authorization Consent'} *
                          </label>
                          <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700/50 max-h-40 overflow-y-auto mb-3">
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                              {translations?.authorizationConsentStatement || 'I hereby authorize Dr. Marius Calin and his staff to collect, use, and store my personal and medical information, including but not limited to my name, date of birth, contact details, medical history, diagnostic results, treatment plans, insurance and billing data, for purposes including medical diagnosis and treatment, insurance claims, appointment reminders, care coordination, and administrative operations. I understand this information will only be shared with authorized entities involved in my care or required operations, and will not be sold or disclosed to unauthorized parties. I acknowledge my right to revoke this consent in writing at any time, understanding that such revocation will not apply to information already used or disclosed. My signature confirms I have read and agree to this statement.'}
                            </p>
                          </div>
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              id="authorizationConsent"
                              required
                              checked={formData.authorizationConsent}
                              onChange={(e) => setFormData({ ...formData, authorizationConsent: e.target.checked })}
                              className="mt-1 mr-2 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label htmlFor="authorizationConsent" className="text-sm text-gray-700 dark:text-gray-300">
                              {translations?.authorizationConsentText || 'I have read and agree to the authorization statement above'} *
                            </label>
                          </div>
                        </div>

                        <div className="flex gap-4 pt-2">
                          <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                          >
                            {translations?.confirmBooking || 'Confirm Booking'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowSecondStep(false)}
                            className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                          >
                            {translations?.back || 'Back'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Days Grid */}
          {selectedMonth && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
                {formatMonthLabel(selectedMonth)}
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
                    const isSunday = day.getDay() === 0
                    
                    return (
                      <div
                        key={dateString}
                        className={`rounded-lg shadow-lg p-6 ${
                          isSunday 
                            ? 'bg-pink-50 dark:bg-pink-700/30' 
                            : 'bg-white dark:bg-gray-800'
                        }`}
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
                                {timeFormat === '24h' ? (
                                  slot
                                ) : (() => {
                                  const formatted = formatTimeSlot(slot)
                                  if (typeof formatted === 'string') {
                                    return formatted
                                  }
                                  return (
                                    <>
                                      {formatted.time}
                                      <sup className="text-[10px] leading-none">{formatted.period}</sup>
                                    </>
                                  )
                                })()}
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
