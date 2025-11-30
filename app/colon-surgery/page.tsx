import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ColonSurgery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Colon Surgery
          </h1>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Colon surgery, also known as colectomy, involves the removal of part or all of the colon (large intestine). This procedure may be necessary to treat various conditions affecting the colon, including cancer, inflammatory bowel disease, diverticulitis, or other serious conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Modern colon surgery is often performed using minimally invasive techniques (laparoscopic or robotic), which offer benefits such as smaller incisions, less pain, faster recovery, and reduced risk of complications compared to traditional open surgery.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Conditions Treated
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Colon surgery may be performed to treat:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
              <li>Colon cancer</li>
              <li>Rectal cancer</li>
              <li>Inflammatory bowel disease (Crohn's disease or ulcerative colitis)</li>
              <li>Diverticulitis (inflammation or infection of small pouches in the colon)</li>
              <li>Bowel obstruction</li>
              <li>Precancerous polyps that cannot be removed during colonoscopy</li>
              <li>Bleeding or perforation of the colon</li>
            </ul>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Types of Colon Surgery
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Partial Colectomy:</strong> Removal of a portion of the colon, with the remaining healthy sections reconnected.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Total Colectomy:</strong> Removal of the entire colon, with the small intestine connected directly to the rectum.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Proctocolectomy:</strong> Removal of both the colon and rectum, which may require creation of an ileostomy (opening in the abdomen for waste elimination).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Colostomy or Ileostomy:</strong> Creation of an opening (stoma) in the abdominal wall to allow waste to exit the body into a collection bag. This may be temporary or permanent, depending on the condition.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Surgical Approaches
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Laparoscopic Surgery:</strong> Minimally invasive approach using small incisions and a camera. Benefits include less pain, shorter hospital stay, and faster recovery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Robotic Surgery:</strong> Advanced minimally invasive technique using robotic assistance for enhanced precision and control.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Open Surgery:</strong> Traditional approach with a larger incision, which may be necessary for complex cases or when minimally invasive techniques aren't suitable.
            </p>
          </section>

          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Preparation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Before colon surgery, you'll need to prepare your colon by following a special diet and taking bowel preparation medications to empty your colon. This reduces the risk of infection during surgery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Your doctor will provide detailed instructions about when to start the preparation, what to eat, and when to stop eating and drinking before surgery. You may also need to adjust certain medications.
            </p>
          </section>

          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Recovery
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Recovery time varies depending on the type of surgery and your overall health. Most patients can expect to stay in the hospital for 3-7 days after surgery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You'll gradually resume eating, starting with clear liquids and advancing to solid foods as tolerated. Your doctor will provide specific dietary guidelines and activity restrictions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Full recovery typically takes 4-6 weeks, though you may be able to return to light activities sooner. Follow-up appointments will be scheduled to monitor your recovery and discuss any ongoing care needs.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

