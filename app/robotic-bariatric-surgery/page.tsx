import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RoboticBariatricSurgery() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Robotic Bariatric Surgery
          </h1>

          <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6">
              Robotic Bariatric Surgery with da Vinci System
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Robotic bariatric surgery represents the latest advancement in minimally invasive weight loss procedures. Using the da Vinci Surgical System, Dr. Calin performs bariatric surgeries with enhanced precision, smaller incisions, and improved patient outcomes.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Dr. Calin is one of the early adopters of robotic technology and has been using the da Vinci Robotic system extensively for bariatric procedures. He has numerous publications in this field and has been designated as a proctor for robotic surgery, sharing his experience with other surgeons.
            </p>
            <div className="mt-8">
              <a
                href="https://www.davincisurgery.com/procedures/general-surgery/bariatric-surgery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Learn More About da Vinci Bariatric Surgery
              </a>
            </div>
          </section>

          <section className="mb-12 bg-gray-lighter dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6">
              Benefits of Robotic Bariatric Surgery
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li>Enhanced precision and control during surgery</li>
              <li>Smaller incisions and reduced scarring</li>
              <li>Faster recovery times</li>
              <li>Reduced blood loss</li>
              <li>Lower risk of complications</li>
              <li>3D high-definition visualization for better surgical accuracy</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}









