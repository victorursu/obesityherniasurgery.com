import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ERCP() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            ERCP endoscopic retrograde cholangiopancreatography
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is ERCP?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ERCP (Endoscopic Retrograde Cholangiopancreatography) is a specialized technique used to diagnose and treat problems in the liver, gallbladder, bile ducts, and pancreas. It combines the use of X-rays and an endoscope, which is a long, flexible, lighted tube.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              During ERCP, your doctor passes an endoscope through your mouth, esophagus, and stomach into the duodenum (the first part of the small intestine). The endoscope allows your doctor to see the opening where the bile and pancreatic ducts empty into the duodenum. A small tube is then passed through the endoscope and into these ducts, and contrast dye is injected to make them visible on X-rays.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why is ERCP Performed?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ERCP may be performed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Remove gallstones that are stuck in the common bile duct</li>
              <li>Open narrowed or blocked bile or pancreatic ducts</li>
              <li>Diagnose problems in the bile ducts or pancreas, such as tumors, strictures, or inflammation</li>
              <li>Place stents to keep ducts open</li>
              <li>Take tissue samples (biopsies) for analysis</li>
              <li>Treat complications after gallbladder surgery</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preparation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Before ERCP, you'll need to fast for several hours (typically 6-8 hours) to ensure your stomach and duodenum are empty. Your doctor will provide specific instructions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Inform your doctor about all medications you're taking, especially blood thinners, as you may need to adjust or temporarily stop them. Also inform your doctor about any allergies, especially to contrast dye or medications.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              During the Procedure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ERCP is performed under sedation, so you'll be comfortable and relaxed during the procedure. The procedure typically takes 30-90 minutes, depending on what needs to be done.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Your doctor will guide the endoscope through your digestive tract and use X-ray imaging to visualize the bile and pancreatic ducts. If treatment is needed, specialized instruments can be passed through the endoscope to perform procedures such as removing stones or placing stents.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Risks and Complications
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              While ERCP is generally safe, potential risks include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Pancreatitis (inflammation of the pancreas) - the most common complication</li>
              <li>Infection</li>
              <li>Bleeding</li>
              <li>Perforation (tear) of the digestive tract</li>
              <li>Reactions to sedation</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your doctor will discuss these risks with you before the procedure and take steps to minimize them.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              After the Procedure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After ERCP, you'll be monitored until the sedation wears off. You may experience some bloating or gas, which is normal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You'll need someone to drive you home. Your doctor will provide specific instructions about when you can resume eating and taking medications. Contact your doctor immediately if you experience severe abdominal pain, fever, difficulty swallowing, or vomiting after the procedure.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}


