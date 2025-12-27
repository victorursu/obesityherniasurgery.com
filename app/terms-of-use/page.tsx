import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Terms of Use
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Please read this disclaimer carefully before using the
                www.obesityherniasurgery.com website. All information posted is merely for
                educational and informational purposes. It is not intended as a substitute for
                professional advice. Should you decide to act upon any information on this
                website, you do so at your own risk. Anyone visiting this website should avoid
                interpreting the information as the standard of care or as final medical advice.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Patients who are interested to proceed with various procedures described here
                should always consult their own surgeon and doctor for all specific medical
                questions and decisions. Please use the information on the site only as a source of
                future questions for your doctor. While the information on this website has been
                verified to the best of our abilities, we cannot guarantee that there are no
                mistakes or errors.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right to change this policy at any given time, of
                which you will be promptly updated. If you want to ensure that you are up to date
                with the latest changes, we advise you to visit this page frequently.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

