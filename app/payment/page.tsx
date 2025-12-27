import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Payment
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  PLEASE MAKE THE PAYMENT TO DR CALIN USING THIS LINK
                </p>
                
                <a
                  href="https://app.autobooks.co/pay/mc-surgical-expertise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 text-lg font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  style={{ background: 'linear-gradient(160deg, #00d5b1 0%, #0d7ab8 78.66%)' }}
                >
                  DR CALIN PAYMENT LINK AT TD BANK
                </a>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
                  IF YOU PREFER YOU CAN PAY USING THE QR CODE
                </p>
                
                <div className="flex justify-center">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <Image
                      src="/images/qr-code-payment.png"
                      alt="Payment QR Code"
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

