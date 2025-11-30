import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function GastricBaloon() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Gastric Baloon
          </h1>

          {/* Obalon balloon system */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Obalon balloon system
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Obalon balloon system for weight loss
            </p>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/66m29_hmt8U"
                title="Obalon balloon system for weight loss"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </section>

          {/* Orbera managed weight loss system */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Orbera managed weight loss system
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Orbera managed weight loss system
            </p>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/qiWxbfcy1NQ"
                title="Orbera managed weight loss system"
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

