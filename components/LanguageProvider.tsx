'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [translations, setTranslations] = useState<any>(null)

  useEffect(() => {
    // Load language from localStorage (client-side only)
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language
      const initialLanguage = (savedLanguage === 'en' || savedLanguage === 'es') ? savedLanguage : 'en'
      setLanguageState(initialLanguage)
      
      // Load translations immediately
      fetch('/translations.json')
        .then(res => res.json())
        .then(data => {
          setTranslations(data[initialLanguage])
        })
        .catch(err => console.error('Error loading translations:', err))
    } else {
      // Server-side: default to English
      fetch('/translations.json')
        .then(res => res.json())
        .then(data => {
          setTranslations(data['en'])
        })
        .catch(err => console.error('Error loading translations:', err))
    }
  }, [])

  useEffect(() => {
    // Reload translations when language changes
    if (language) {
      fetch('/translations.json')
        .then(res => res.json())
        .then(data => {
          setTranslations(data[language])
        })
        .catch(err => console.error('Error loading translations:', err))
    }
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
    // Reload translations
    fetch('/translations.json')
      .then(res => res.json())
      .then(data => {
        setTranslations(data[lang])
      })
      .catch(err => console.error('Error loading translations:', err))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

