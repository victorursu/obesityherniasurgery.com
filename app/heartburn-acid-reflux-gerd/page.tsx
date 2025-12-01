import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HeartburnAcidRefluxGERD() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
            Heartburn, Acid Reflux, GERD
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Understanding Heartburn, Acid Reflux, and GERD
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Heartburn (burning sensation behind the breastbone), acid reflux (presence of the gastric acid content in the esophagus) and GERD - gastroesophageal reflux disease are different terms that describe a condition in which the gastric acidic content leaves the stomach and travels back into esophagus causing discomfort. Find more about the mechanism of reflux <a href="https://www.youtube.com/watch?v=TdK0jRFpWPQ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              It is not uncommon that patients who suffer from obesity to also complain about GERD symptoms. GERD it's considered to be one of the complications of obesity. However, the normal weight population can also be affected by GERD. While for both categories of patients the medical treatment of GERD is basically the same (dietary modification, antacid medication, endoscopic surveillance), reducing the body weight in the normal range for the obese patients is essential for their symptom resolution. Therefore, the weight loss surgery is recommended for obese patients with GERD while antireflux surgical procedures without weight loss component are suitable for normal weight patients who suffer from intractable GERD. Regardless of the medical or surgical approach, all these patients should have regular endoscopic surveillance done by an experienced endoscopist in order to assess the progression of the pathologic changes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Some patients may suffer from reflux symptoms after sleeve gastrectomy. Normally these symptoms should subside with the weight loss after the surgery. Avoiding smoking, late night eating, fatty or fried food, alcohol, coffee, continuing to exercise to maintain weight loss combined with antacid medication could successfully control the reflux in these patients. However, in a small proportion of patients GERD could become a chronic problem and lead to esophagitis and Barrett's esophagus. It is important to diagnose this condition early and proceed with adequate treatment. Antireflux procedures, repair of hiatal hernia and gastric bypass are some of the procedures used to treat these conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Barrett's esophagus is an abnormal condition that often results as a complication of reflux disease. In Barrett's esophagus, the normal tissue lining the junction between the esophagus and stomach changes to tissue that resembles the lining of the intestine. This is a potentially harmful condition if not diagnosed in time and left untreated, as it may progress to cancer of the esophagus. <a href="https://www.medtronic.com/us-en/patients/conditions/reflux-disease/what-is-gerd.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Click here</a> to watch a short video describing this problem.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hiatal hernia is usually associated with acid reflux. Hiatal hernia is a condition in which more or less of the upper part of the stomach is displaced in the chest instead of being contained in the abdomen below the diaphragm. The diaphragm is a thin muscle that separates the thoracic cavity from the abdominal cavity. A special type of hiatal hernia may occur in patients that had sleeve gastrectomy when the upper part of the sleeve slides in the chest. It is important to see your doctor in order to diagnose and fix any of these conditions as they can be the cause of unpleasant symptoms and they could progress to more severe conditions. Endoscopy, pH Bravo study, manometry and x-ray imaging are some of the diagnostic methods that are useful to diagnose hiatal hernia.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Diagnostic Methods
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Endoscopic surveillance</li>
              <li>Bravo capsule pH study</li>
              <li>Esophageal manometry</li>
            </ul>
            <div className="mt-6 space-y-4">
              <div>
                <a href="https://obesityherniasurgery.com/sites/default/files/2021-05/ilovepdf_merged.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold block mb-2">
                  Download here your pdf document with instructions for preparation for pH Bravo capsule study.
                </a>
                <a href="https://obesityherniasurgery.com/sites/default/files/2021-05/ilovepdf_merged.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold block">
                  Descargue aquí su documento pdf con instrucciones de preparación para el estudio de la cápsula pH Bravo.
                </a>
              </div>
              <div>
                <a href="https://obesityherniasurgery.com/sites/default/files/2021-04/bravo-p-h-patient-diary-english%20spanish%20%281%29.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold block mb-2">
                  DOWNLOAD YOUR PDF VERSION OF THE REFLUX RECORDER PATIENT DIARY
                </a>
                <a href="https://obesityherniasurgery.com/sites/default/files/2021-04/bravo-p-h-patient-diary-english%20spanish%20%281%29.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold block">
                  DESCARGUE SU VERSIÓN EN PDF DEL PACIENTE DEL REGISTRADOR DE REFLUJO
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

