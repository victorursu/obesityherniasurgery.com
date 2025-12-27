'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'
import ReactCountryFlag from 'react-country-flag'

export default function ContactPage() {
  const { language, setLanguage, translations } = useLanguage()
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    reasonForContact: '',
    otherReason: '',
    message: ''
  })
  const [showOtherReason, setShowOtherReason] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const reasonOptions = [
    { value: 'established_patient_followup', key: 'establishedPatientFollowup' },
    { value: 'weight_loss_medication', key: 'weightLossMedication' },
    { value: 'heartburn', key: 'heartburn' },
    { value: 'other', key: 'other' }
  ]

  const handleReasonChange = (value: string) => {
    setFormData({ ...formData, reasonForContact: value, otherReason: '' })
    setShowOtherReason(value === 'other')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.lastName || !formData.firstName || !formData.dateOfBirth || 
        !formData.email || !formData.phone || !formData.reasonForContact || 
        !formData.message || (formData.reasonForContact === 'other' && !formData.otherReason)) {
      alert(translations?.fillAllRequiredFields || 'Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    // Map language code to full language name
    const languageName = language === 'es' ? 'Spanish' : 'English'

    // Prepare request body
    const requestBody = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      dob: formData.dateOfBirth,
      email: formData.email,
      phone: formData.phone,
      language: languageName,
      reason: formData.reasonForContact,
      other_reason: formData.reasonForContact === 'other' ? formData.otherReason : '',
      message: formData.message
    }

    try {
      // POST to local API route (which proxies to external API)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        console.error('Contact API error:', errorData)
        throw new Error(errorData.error || errorData.details || `Contact form submission failed: ${response.status}`)
      }

      const responseData = await response.json().catch(() => ({}))
      console.log('Contact form submission successful:', responseData)
      
      setSubmitSuccess(true)
      setFormData({
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        reasonForContact: '',
        otherReason: '',
        message: ''
      })
      setShowOtherReason(false)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title with inline language switcher */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              {translations?.contactDrMariusCalin || 'Contact Dr. Marius Calin'}
            </h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`p-2 rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-label="Switch to English"
                title="English"
              >
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
                />
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`p-2 rounded-md transition-colors ${
                  language === 'es'
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                aria-label="Switch to Spanish"
                title="Español"
              >
                <ReactCountryFlag
                  countryCode="ES"
                  svg
                  style={{
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
                />
              </button>
            </div>
          </div>

          {/* Intro text */}
          <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              {translations?.contactIntro || 'Please fill out the following information and Dr Calin will reach out to you as soon as possible. For any emergent issue, please call 911 or go to the nearest emergency department.'}
            </p>
          </div>

          {/* Success message */}
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-lg">
              <p className="font-semibold">
                {language === 'es' 
                  ? '¡Gracias por su mensaje! El Dr. Calin se pondrá en contacto con usted lo antes posible.'
                  : 'Thank you for your message! Dr. Calin will reach out to you as soon as possible.'
                }
              </p>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            {/* Last Name, First Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'es' ? 'Apellido' : 'Last name'} *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder={language === 'es' ? 'Apellido' : 'Last name'}
                />
              </div>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === 'es' ? 'Nombre' : 'First Name'} *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder={language === 'es' ? 'Nombre' : 'First Name'}
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {translations?.dateOfBirth || 'Date of Birth'} *
              </label>
              <input
                type="date"
                id="dateOfBirth"
                required
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {translations?.yourEmail || 'Your Email'} *
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

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {translations?.yourContactPhoneNumber || 'Your contact phone number'} *
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

            {/* Reason for Contact */}
            <div>
              <label htmlFor="reasonForContact" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {translations?.reasonForContact || 'Reason for contact'} *
              </label>
              <select
                id="reasonForContact"
                required
                value={formData.reasonForContact}
                onChange={(e) => handleReasonChange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="">{translations?.selectReason || 'Select reason'}</option>
                {reasonOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {translations?.reasonForContactOptions?.[option.key] || option.key}
                  </option>
                ))}
              </select>
            </div>

            {/* Other Reason (conditional) */}
            {showOtherReason && (
              <div>
                <label htmlFor="otherReason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {translations?.otherReason || 'Please specify other reason'} *
                </label>
                <input
                  type="text"
                  id="otherReason"
                  required={showOtherReason}
                  value={formData.otherReason}
                  onChange={(e) => setFormData({ ...formData, otherReason: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder={translations?.otherReason || 'Please specify other reason'}
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {translations?.message || 'Message'} *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                placeholder={translations?.enterMessage || 'Enter your message'}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting 
                  ? (translations?.submitting || 'Submitting...') 
                  : (translations?.submit || 'Submit')
                }
              </button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

