import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const hospitals = [
  { 
    name: 'Hudson Regional Hospital', 
    location: 'Secaucus, NJ',
    href: 'https://www.hudsonregionalhospital.com/',
    description: 'A leading healthcare facility providing comprehensive medical services.'
  },
  { 
    name: 'Hackensack Meridian Health Pascack Valley Medical Center', 
    location: 'Westwood, NJ',
    href: 'https://pascackmedicalcenter.com/',
    description: 'Part of the Hackensack Meridian Health network, offering advanced medical care.'
  },
  { 
    name: 'Hackensack Meridian Health Mountainside Medical Center', 
    location: 'Montclair, NJ',
    href: 'https://mountainsidehosp.com/services',
    description: 'A trusted medical center providing quality healthcare services.'
  },
  { 
    name: 'Atlantic Health System - Chilton Medical Center', 
    location: 'Pompton Plains, NJ',
    href: 'https://www.atlantichealth.org/locations/chilton-medical-center',
    description: 'Part of Atlantic Health System, delivering exceptional patient care.'
  },
  { 
    name: 'Hackensack Bayshore Medical Center', 
    location: 'Holmdel, NJ',
    href: 'https://www.hackensackmeridianhealth.org/en/Locations/Bayshore-Medical-Center',
    description: 'A comprehensive medical center serving the Holmdel community.'
  },
  { 
    name: 'Hackensack Raritan Bay Medical Center', 
    location: 'Perth Amboy, NJ',
    href: 'https://www.hackensackmeridianhealth.org/en/Locations/Raritan-Bay-Medical-Center?q=/locations/perth-amboy/',
    description: 'Providing quality healthcare services to the Perth Amboy area.'
  },
  { 
    name: 'Hackensack Southern Ocean Medical Center', 
    location: 'Manahawkin, NJ',
    href: 'https://www.hackensackmeridianhealth.org/en/Locations/Southern-Ocean-Medical-Center',
    description: 'A trusted medical facility serving the Manahawkin community.'
  },
  { 
    name: 'St. Mary\'s General Hospital', 
    location: 'Passaic, NJ',
    href: 'https://smh-nj.com/',
    description: 'A community hospital dedicated to providing compassionate care.'
  },
]

export default function Hospitals() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
            Hospitals & Medical Centers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
            Dr. Marius Calin practices at the following hospitals and medical centers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {hospital.name}
                </h2>
                <p className="text-lg text-primary dark:text-primary-light mb-3 font-semibold">
                  {hospital.location}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {hospital.description}
                </p>
                <a
                  href={hospital.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Visit Website
                  <svg 
                    className="ml-2 w-5 h-5" 
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
            ))}
          </div>

          <div className="mt-12 bg-primary/10 dark:bg-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Need to Schedule an Appointment?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Contact Dr. Marius Calin to schedule your appointment at one of these locations.
            </p>
            <a
              href="/appointment-scheduling"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}










