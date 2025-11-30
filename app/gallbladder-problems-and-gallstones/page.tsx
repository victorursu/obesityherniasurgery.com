import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function GallbladderProblems() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Gallbladder problems and gallstones
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Understanding the Gallbladder
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The gallbladder is a small, pear-shaped organ located beneath the liver. Its main function is to store and concentrate bile, a digestive fluid produced by the liver that helps break down fats in the small intestine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you eat, especially fatty foods, the gallbladder contracts and releases bile into the small intestine to aid in digestion.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Gallstones
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Gallstones are hardened deposits that form in the gallbladder. They can be as small as a grain of sand or as large as a golf ball. Most people with gallstones don't experience symptoms, but when stones block the bile ducts, they can cause severe pain and complications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              There are two main types of gallstones:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li><strong>Cholesterol stones:</strong> The most common type, usually yellow-green in color, made primarily of hardened cholesterol</li>
              <li><strong>Pigment stones:</strong> Smaller and darker, made of bilirubin, a substance produced when red blood cells break down</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Symptoms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Symptoms of gallbladder problems may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Sudden and intensifying pain in the upper right portion of your abdomen</li>
              <li>Pain in your right shoulder or between your shoulder blades</li>
              <li>Nausea or vomiting</li>
              <li>Fever or chills</li>
              <li>Jaundice (yellowing of the skin and eyes)</li>
              <li>Dark urine or light-colored stools</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              These symptoms often occur after eating a fatty meal and may last from a few minutes to several hours.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Risk Factors
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Factors that may increase your risk of developing gallstones include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Being female</li>
              <li>Age 40 or older</li>
              <li>Being overweight or obese</li>
              <li>Rapid weight loss (common after bariatric surgery)</li>
              <li>Pregnancy</li>
              <li>Family history of gallstones</li>
              <li>Diabetes</li>
              <li>Certain medications, including hormone replacement therapy</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Treatment Options
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Watchful Waiting:</strong> If gallstones don't cause symptoms, treatment may not be necessary.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Medications:</strong> Oral medications can sometimes dissolve cholesterol stones, but this treatment can take months or years and stones may recur.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Surgery (Cholecystectomy):</strong> The most common treatment for symptomatic gallstones is surgical removal of the gallbladder. This is typically done laparoscopically (minimally invasive) and is one of the most common surgical procedures performed. The body can function normally without the gallbladder, as bile will flow directly from the liver to the small intestine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>ERCP:</strong> For stones stuck in the bile ducts, ERCP (Endoscopic Retrograde Cholangiopancreatography) may be used to remove them without removing the gallbladder.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              After Gallbladder Removal
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Most people can live normally without a gallbladder. After surgery, you may need to make some dietary adjustments, especially initially, as your body adapts to the continuous flow of bile instead of the stored release.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Some people may experience diarrhea or loose stools after eating fatty foods, but this usually improves over time. Your doctor will provide specific dietary recommendations based on your individual needs.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

