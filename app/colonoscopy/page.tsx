import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Colonoscopy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Colonoscopy
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is Colonoscopy?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Colonoscopy is a procedure that allows your doctor to examine the inside of your colon (large intestine) and rectum. During the procedure, a long, flexible tube with a camera (colonoscope) is inserted through the rectum and guided through the entire colon.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This procedure is the most effective method for detecting colon cancer and precancerous polyps, which can be removed during the procedure to prevent cancer from developing.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why is Colonoscopy Performed?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Colonoscopy may be performed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Screen for colon cancer and precancerous polyps (recommended starting at age 45 for average-risk individuals)</li>
              <li>Investigate symptoms such as rectal bleeding, chronic diarrhea, abdominal pain, or unexplained weight loss</li>
              <li>Monitor patients with a history of polyps or colon cancer</li>
              <li>Evaluate inflammatory bowel disease (Crohn's disease or ulcerative colitis)</li>
              <li>Remove polyps or take tissue samples (biopsies) for analysis</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preparation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Proper preparation is crucial for a successful colonoscopy. You'll need to follow a clear liquid diet for 1-2 days before the procedure and take a bowel preparation (laxative) to completely empty your colon.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Your doctor will provide specific instructions about the preparation, including when to start the liquid diet, when to take the bowel prep, and when to stop eating and drinking. It's important to follow these instructions carefully to ensure your colon is properly cleaned.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You may also need to adjust certain medications, especially blood thinners. Be sure to inform your doctor about all medications you're taking.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              During the Procedure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Colonoscopy is performed under sedation, so you'll be comfortable and may not remember the procedure. The procedure typically takes 30-60 minutes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              During the procedure, your doctor will examine the entire length of your colon. If polyps are found, they can usually be removed immediately. Tissue samples may also be taken for further analysis.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              After the Procedure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After colonoscopy, you'll be monitored until the sedation wears off. You may experience some gas or bloating, which is normal and should resolve quickly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You'll need someone to drive you home. You can usually resume normal activities the next day. Your doctor will discuss the findings with you and provide recommendations, including when you should have your next colonoscopy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact your doctor immediately if you experience severe abdominal pain, heavy rectal bleeding, fever, or persistent nausea after the procedure.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}


