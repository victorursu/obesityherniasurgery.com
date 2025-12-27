import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SpanishBariatricBook() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            SPANISH BARIATRIC BOOK
          </h1>

          <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6">
              Libro de Cirugía Bariátrica en Español
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Para nuestros pacientes de habla hispana, ofrecemos información completa sobre cirugía bariátrica en español. Este libro contiene información detallada sobre los procedimientos de pérdida de peso, incluyendo la gastrectomía en manga (sleeve gastrectomy), y todo lo que necesita saber antes y después de la cirugía.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              El libro incluye información sobre la dieta postoperatoria, ejercicios recomendados, signos de advertencia de complicaciones, y consejos para mantener su pérdida de peso a largo plazo.
            </p>
            <div className="mt-8">
              <a
                href="https://www.obesityherniasurgery.com/sites/default/files/2024-09/SPANISH%20Sleeve%20Updated%206.30.2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Descargar Libro en Español (PDF)
              </a>
            </div>
          </section>

          <section className="mb-12 bg-gray-lighter dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-6">
              Información Adicional
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Si tiene preguntas sobre la cirugía bariátrica o necesita más información en español, no dude en contactarnos. Estamos aquí para ayudarle en su viaje hacia una vida más saludable.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Para programar una consulta con el Dr. Calin, visite nuestra página de <a href="/appointment-scheduling" className="text-primary dark:text-primary-light hover:underline">programación de citas</a>.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}












