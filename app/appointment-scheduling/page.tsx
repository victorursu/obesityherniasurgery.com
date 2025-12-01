import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AppointmentScheduling() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            APPOINTMENT SCHEDULING
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="space-y-4">
              <a
                href="https://outlook.office.com/owa/calendar/APPOINTMENTWITHDRCALIN1@hudsonregionalhospital.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-xl font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center"
                style={{ background: 'linear-gradient(160deg, #00d5b1 0%, #0d7ab8 78.66%)' }}
              >
                BOOK AN APPOINTMENT WITH DR CALIN
              </a>

              <a
                href="https://outlook.office.com/owa/calendar/APPOINTMENTWITHDRCALIN1@hudsonregionalhospital.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all transform hover:scale-105 text-center"
              >
                WEIGHT LOSS SURGERY OPTIONS
              </a>

              <a
                href="https://outlook.office.com/owa/calendar/APPOINTMENTWITHDRCALIN1@hudsonregionalhospital.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all transform hover:scale-105 text-center"
              >
                WEIGHT LOSS MEDICATION
              </a>

              <a
                href="https://outlook.office.com/owa/calendar/APPOINTMENTWITHDRCALIN1@hudsonregionalhospital.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all transform hover:scale-105 text-center"
              >
                HERNIA
              </a>

              <a
                href="https://outlook.office.com/owa/calendar/APPOINTMENTWITHDRCALIN1@hudsonregionalhospital.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all transform hover:scale-105 text-center"
              >
                GALLBLADDER
              </a>

              <a
                href="https://outlook.office.com/owa/calendar/APPOINTMENTWITHDRCALIN1@hudsonregionalhospital.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all transform hover:scale-105 text-center"
              >
                COLONOSCOPY
              </a>

              <a
                href="https://outlook.office.com/owa/calendar/APPOINTMENTWITHDRCALIN1@hudsonregionalhospital.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all transform hover:scale-105 text-center"
              >
                OTHER SURGICAL PROBLEMS
              </a>

              <a
                href="https://outlook.office.com/owa/calendar/APPOINTMENTWITHDRCALIN1@hudsonregionalhospital.com/bookings/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all transform hover:scale-105 text-center"
              >
                FOLLOW UP WITH DR CALIN AFTER SURGERY
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                DR MARIUS CALIN MD FACS FASMBS FPD-MBS DABOM
              </h2>
              <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
                <p className="font-semibold">HUDSON REGIONAL HOSPITAL</p>
                <p>3RD FLOOR OFFICES</p>
                <p>55 Meadowlands Pkwy, Secaucus, NJ 07094</p>
              </div>
              <div className="pt-4">
                <a 
                  href="tel:9178532781" 
                  className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  (917)-853-2781
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}



