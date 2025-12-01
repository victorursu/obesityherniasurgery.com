import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LaparoscopicSurgery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Laparoscopic Surgery
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is Laparoscopic Surgery?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Laparoscopic surgery, also known as minimally invasive surgery or "keyhole" surgery, is a surgical technique that uses small incisions (typically 0.5-1 cm) instead of large traditional incisions. A thin, lighted tube with a camera (laparoscope) is inserted through one of the small incisions, allowing the surgeon to see inside your body on a video monitor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Specialized surgical instruments are inserted through the other small incisions, and the surgeon performs the procedure while watching the video screen. This approach offers many advantages over traditional open surgery.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Benefits of Laparoscopic Surgery
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li><strong>Smaller Incisions:</strong> Multiple small incisions instead of one large incision result in less tissue trauma</li>
              <li><strong>Less Pain:</strong> Smaller incisions typically mean less postoperative pain and reduced need for pain medication</li>
              <li><strong>Faster Recovery:</strong> Patients often experience quicker recovery times and can return to normal activities sooner</li>
              <li><strong>Shorter Hospital Stay:</strong> Many laparoscopic procedures can be performed as outpatient surgery or require only a brief hospital stay</li>
              <li><strong>Reduced Blood Loss:</strong> Less invasive approach typically results in minimal blood loss</li>
              <li><strong>Minimal Scarring:</strong> Small incisions heal with minimal, barely visible scars</li>
              <li><strong>Lower Risk of Infection:</strong> Smaller wounds reduce the risk of surgical site infections</li>
              <li><strong>Better Cosmetic Results:</strong> Small incisions result in better cosmetic outcomes</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Common Laparoscopic Procedures
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Laparoscopic surgery can be used for many different procedures, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Bariatric surgery (gastric sleeve, gastric bypass, gastric band)</li>
              <li>Gallbladder removal (laparoscopic cholecystectomy)</li>
              <li>Hernia repair (inguinal, umbilical, ventral)</li>
              <li>Appendectomy (appendix removal)</li>
              <li>Colon and rectal surgery</li>
              <li>Diagnostic procedures</li>
              <li>Adhesiolysis (removal of scar tissue)</li>
            </ul>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How Laparoscopic Surgery Works
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              During laparoscopic surgery:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Small incisions (usually 3-5, each about 0.5-1 cm) are made in the abdomen</li>
              <li>Carbon dioxide gas is used to inflate the abdomen, creating space for the surgeon to work</li>
              <li>A laparoscope (camera) is inserted through one incision to provide visualization</li>
              <li>Surgical instruments are inserted through the other incisions</li>
              <li>The surgeon performs the procedure while watching the video monitor</li>
              <li>After the procedure, the gas is released, and the small incisions are closed with sutures or surgical tape</li>
            </ol>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preparation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Preparation for laparoscopic surgery is similar to traditional surgery and may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Fasting for a specified period before surgery</li>
              <li>Adjusting or stopping certain medications (especially blood thinners)</li>
              <li>Preoperative testing (blood work, EKG, etc.)</li>
              <li>Bowel preparation for certain procedures</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your surgeon will provide specific instructions based on your procedure.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Recovery
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Recovery from laparoscopic surgery is generally faster than traditional open surgery. Most patients can expect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Shorter hospital stay (often same-day or 1-2 days)</li>
              <li>Less pain requiring minimal pain medication</li>
              <li>Quicker return to normal activities (often within 1-2 weeks)</li>
              <li>Minimal scarring</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              You may experience some shoulder pain from the carbon dioxide gas used during surgery, but this typically resolves within 24-48 hours. Your surgeon will provide specific recovery instructions based on your procedure.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              When Open Surgery May Be Necessary
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              While laparoscopic surgery offers many benefits, there are situations where traditional open surgery may be more appropriate, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Extensive scar tissue from previous surgeries</li>
              <li>Very large tumors or masses</li>
              <li>Emergency situations requiring immediate access</li>
              <li>Certain complex conditions</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your surgeon will discuss the best approach for your specific situation.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}


