import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function UpperGastrointestinalEndoscopy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Upper gastrointestinal endoscopy
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is Upper Gastrointestinal Endoscopy?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Upper gastrointestinal (GI) endoscopy, also known as esophagogastroduodenoscopy (EGD), is a procedure used to visually examine the upper digestive system. During the procedure, a thin, flexible tube with a light and camera (endoscope) is passed through your mouth and down your throat to examine the esophagus, stomach, and the beginning of the small intestine (duodenum).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This procedure allows your doctor to see the lining of these organs and identify any abnormalities, inflammation, ulcers, tumors, or other conditions that may be causing symptoms.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why is it Performed?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Upper GI endoscopy may be performed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Investigate symptoms such as persistent heartburn, nausea, vomiting, pain, difficulty swallowing, or bleeding</li>
              <li>Diagnose conditions such as GERD, ulcers, inflammation, celiac disease, or Barrett's esophagus</li>
              <li>Screen for esophageal or stomach cancer, especially in high-risk patients</li>
              <li>Treat certain conditions by removing polyps, stopping bleeding, dilating narrowed areas, or removing foreign objects</li>
              <li>Monitor treatment effectiveness for conditions like ulcers or Barrett's esophagus</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preparation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Before the procedure, you'll need to fast for a certain period (typically 6-8 hours) to ensure your stomach is empty. Your doctor will provide specific instructions about when to stop eating and drinking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You may also need to adjust or temporarily stop certain medications, especially blood thinners. Be sure to inform your doctor about all medications you're taking, including over-the-counter drugs and supplements.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              During the Procedure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The procedure is typically performed with sedation to help you relax and feel comfortable. The endoscope is gently inserted through your mouth and guided down your throat. You may feel some pressure, but the procedure is generally not painful.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The procedure usually takes 15-30 minutes. During this time, your doctor can take tissue samples (biopsies) if needed, remove polyps, or perform other treatments.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              After the Procedure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After the procedure, you'll be monitored until the sedation wears off. You may experience a mild sore throat, which is normal and should resolve within a day or two.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You'll need someone to drive you home as the sedation can affect your ability to drive. Your doctor will discuss the findings with you and provide recommendations based on what was observed during the procedure.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

