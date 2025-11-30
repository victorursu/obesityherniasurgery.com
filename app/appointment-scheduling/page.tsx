import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AppointmentScheduling() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            APPOINTMENT SCHEDULING
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              BOOK AN APPOINTMENT WITH DR CALIN
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  WEIGHT LOSS SURGERY OPTIONS
                </h3>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  WEIGHT LOSS MEDICATION
                </h3>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  HERNIA
                </h3>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  GALLBLADDER
                </h3>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  COLONOSCOPY
                </h3>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  OTHER SURGICAL PROBLEMS
                </h3>
              </div>

              <div className="pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  FOLLOW UP WITH DR CALIN AFTER SURGERY
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                DR MARIUS CALIN MD FACS FASMBS FPD-MBS DABOM
              </h2>
              <div className="space-y-2 text-lg text-gray-700">
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

