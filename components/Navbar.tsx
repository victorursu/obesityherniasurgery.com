'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const { theme, toggleTheme } = useTheme()

  const bariatricSubmenu = [
    { name: 'Sleeve gastrectomy', href: '/sleeve-gastrectomy' },
    { name: 'Gastric band', href: '/gastric-band' },
    { name: 'Gastric Baloon', href: '/gastric-baloon' },
    { name: 'Diet after Bariatric Surgery', href: '/diet-after-bariatric-surgery' },
    { name: 'Complications, warning signs and what to do ?', href: '/complications-warning-signs-and-what-do' },
    { name: 'Robotic Bariatric Surgery', href: '/robotic-bariatric-surgery' },
    { name: 'Bariatric nutrition', href: '/bariatric-nutrition' },
    { name: 'SPANISH BARIATRIC BOOK', href: '/spanish-bariatric-book' },
  ]

  const otherSubmenu = [
    { name: 'Heartburn, Acid Reflux, GERD', href: '/heartburn-acid-reflux-gerd' },
    { name: 'Upper gastrointestinal endoscopy', href: '/upper-gastrointestinal-endoscopy' },
    { name: 'ERCP endoscopic retrograde cholangiopancreatography', href: '/ercp-endoscopic-retrograde-cholangiopancreatography' },
    { name: 'Colonoscopy', href: '/colonoscopy' },
    { name: 'Gallbladder problems and gallstones', href: '/gallbladder-problems-and-gallstones' },
    { name: 'Colon Surgery', href: '/colon-surgery' },
    { name: 'Robotic Surgery', href: '/robotic-surgery' },
    { name: 'Laparoscopic Surgery', href: '/laparoscopic-surgery' },
  ]

  const hospitalsSubmenu = [
    { name: 'Hudson Regional Hospital - Secaucus', href: 'https://www.hudsonregionalhospital.com/', external: true },
    { name: 'Hackensack Meridian Health Pascack Valley Medical Center - Westwood', href: 'https://pascackmedicalcenter.com/', external: true },
    { name: 'Hackensack Meridian Health Mountainside Medical Center - Montclair', href: 'https://mountainsidehosp.com/services', external: true },
    { name: 'Atlantic Health System - Chilton Medical Center - Pompton Plains, NJ', href: 'https://www.atlantichealth.org/locations/chilton-medical-center', external: true },
    { name: 'Hackensack Bayshore Medical Center - Holmdel', href: 'https://www.hackensackmeridianhealth.org/en/Locations/Bayshore-Medical-Center', external: true },
    { name: 'Hackensack Raritan Bay Medical Center - Perth Amboy', href: 'https://www.hackensackmeridianhealth.org/en/Locations/Raritan-Bay-Medical-Center?q=/locations/perth-amboy/', external: true },
    { name: 'Hackensack Southern Ocean Medical Center - Manahawkin', href: 'https://www.hackensackmeridianhealth.org/en/Locations/Southern-Ocean-Medical-Center', external: true },
    { name: 'St. Mary\'s General Hospital - Passaic NJ', href: 'https://smh-nj.com/', external: true },
  ]

  const menuItems = [
    { 
      name: 'Bariatric', 
      href: '/bariatric',
      submenu: bariatricSubmenu
    },
    { name: 'Hernia', href: '/hernia' },
    { 
      name: 'Other', 
      href: '/other',
      submenu: otherSubmenu
    },
    { 
      name: 'Hospitals', 
      href: '/hospitals',
      submenu: hospitalsSubmenu
    },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800/50 dark:border-b dark:border-white/20 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-primary dark:text-primary-light leading-tight">
                Marius Calin M.D. F.A.C.S
              </span>
              <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                Obesity Hernia Surgery of New Jersey
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  {item.name}
                  {item.submenu && (
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.submenu && openDropdown === item.name && (
                  <div 
                    className="absolute left-0 top-full pt-2 w-64 z-50"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 border border-gray-200 dark:border-gray-700">
                    {item.submenu.map((subItem) => {
                      const isExternal = (subItem as any).external === true
                      const LinkComponent = isExternal ? 'a' : Link
                      const linkProps = isExternal
                        ? {
                            href: subItem.href,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          }
                        : { href: subItem.href }
                      
                      return (
                        <LinkComponent
                          key={subItem.name}
                          {...linkProps}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary-light transition-colors"
                        >
                          {subItem.name}
                        </LinkComponent>
                      )
                    })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`h-5 w-5 transition-transform ${openMobileDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openMobileDropdown === item.name && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => {
                          const isExternal = (subItem as any).external === true
                          const LinkComponent = isExternal ? 'a' : Link
                          const linkProps = isExternal
                            ? {
                                href: subItem.href,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              }
                            : { href: subItem.href }
                          
                          return (
                            <LinkComponent
                              key={subItem.name}
                              {...linkProps}
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </LinkComponent>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

