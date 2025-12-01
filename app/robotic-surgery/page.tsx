import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RoboticSurgery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Robotic Surgery
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is Robotic Surgery?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Robotic surgery is an advanced form of minimally invasive surgery that uses a computer-controlled robot to assist surgeons in performing complex procedures with enhanced precision, flexibility, and control. The most commonly used robotic system is the da Vinci Surgical System.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              During robotic surgery, the surgeon operates from a console in the operating room, controlling robotic arms that hold surgical instruments and a high-definition 3D camera. The system translates the surgeon's hand movements into smaller, more precise movements of the tiny instruments inside your body.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Benefits of Robotic Surgery
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li><strong>Enhanced Precision:</strong> The robotic system provides greater dexterity and precision than traditional laparoscopic surgery, allowing for more accurate movements</li>
              <li><strong>3D Visualization:</strong> High-definition 3D imaging provides surgeons with a magnified, detailed view of the surgical site</li>
              <li><strong>Smaller Incisions:</strong> Procedures are performed through small incisions, resulting in less trauma to surrounding tissues</li>
              <li><strong>Reduced Pain:</strong> Smaller incisions typically mean less postoperative pain</li>
              <li><strong>Faster Recovery:</strong> Patients often experience quicker recovery times and shorter hospital stays</li>
              <li><strong>Less Blood Loss:</strong> Enhanced precision can result in reduced blood loss during surgery</li>
              <li><strong>Reduced Scarring:</strong> Smaller incisions lead to minimal scarring</li>
              <li><strong>Lower Risk of Infection:</strong> Smaller wounds reduce the risk of surgical site infections</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Procedures Performed with Robotic Surgery
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Robotic surgery can be used for a wide variety of procedures, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Bariatric surgery (weight loss surgery)</li>
              <li>Hernia repair (inguinal, ventral, incisional)</li>
              <li>Colon and rectal surgery</li>
              <li>Gallbladder removal</li>
              <li>Gastric surgery</li>
              <li>Complex abdominal procedures</li>
            </ul>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How Robotic Surgery Works
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              During robotic surgery:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Small incisions (usually 1-2 cm) are made in the abdomen</li>
              <li>Robotic arms with surgical instruments are inserted through these incisions</li>
              <li>A 3D high-definition camera provides a magnified view of the surgical area</li>
              <li>The surgeon controls the robotic arms from a console, with movements translated into precise micro-movements</li>
              <li>The procedure is completed with enhanced precision and control</li>
            </ol>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Is Robotic Surgery Right for You?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Robotic surgery may be an option for many patients, but it's not suitable for everyone. Your surgeon will evaluate your specific condition, medical history, and overall health to determine if robotic surgery is the best approach for you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Factors that may influence the decision include the complexity of your condition, previous surgeries, body habitus, and other medical conditions.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Recovery
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Recovery from robotic surgery is typically faster than traditional open surgery, with most patients experiencing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Shorter hospital stay</li>
              <li>Less postoperative pain</li>
              <li>Quicker return to normal activities</li>
              <li>Minimal scarring</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your surgeon will provide specific recovery instructions based on your procedure and individual needs.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}


