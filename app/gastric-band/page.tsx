import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function GastricBand() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Gastric Band
          </h1>

          {/* Adjustable Gastric Band (AGB) */}
          <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6">
              Adjustable Gastric Band (AGB)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The adjustable gastric band, also known as the LAP-BAND, is a surgical weight loss procedure that involves placing an inflatable silicone band around the upper portion of the stomach. This creates a small pouch that limits food intake and helps you feel full faster. The band can be adjusted over time by adding or removing saline solution through a port placed under the skin.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              This procedure is less invasive than other bariatric surgeries and is reversible. However, it requires regular follow-up visits for band adjustments and dietary counseling to achieve optimal results.
            </p>
          </section>

          {/* LAP-BAND Video */}
          <section className="mb-12 bg-gray-lighter dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6">
              LAP-BAND
            </h2>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/8OhDZOaObss"
                title="LAP-BAND procedure"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}











