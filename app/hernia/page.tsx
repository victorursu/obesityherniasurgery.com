import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Hernia() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Hernia - patient information
          </h1>

          {/* Inguinal Hernia */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Inguinal Hernia Patient Information
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              An inguinal hernia occurs when tissue, such as part of the intestine, protrudes through a weak spot in the abdominal muscles. The resulting bulge can be painful, especially when you cough, bend over, or lift a heavy object. Inguinal hernias are more common in men than women and can occur on one or both sides of the groin.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Symptoms may include a bulge in the groin area, pain or discomfort, especially when bending over, coughing, or lifting, a feeling of heaviness or pressure in the groin, and sometimes a burning or aching sensation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Treatment typically involves surgical repair, which can be done through open surgery or minimally invasive laparoscopic/robotic techniques. The hernia is repaired by pushing the protruding tissue back into place and reinforcing the weakened area with mesh.
            </p>
            <a
              href="https://www.facs.org/~/media/files/education/patient%20ed/groin_hernia.ashx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Learn More About Inguinal Hernia (FACS)
            </a>
          </section>

          {/* Umbilical Hernia */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Umbilical Hernia Patient Information
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              An umbilical hernia occurs when part of the intestine or fatty tissue pushes through a weak spot in the abdominal wall near the belly button (umbilicus). This type of hernia is common in infants but can also occur in adults, especially those who are overweight, pregnant, or have had multiple pregnancies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Symptoms include a bulge near the belly button that becomes more prominent when coughing, straining, or standing, mild pain or discomfort, and in some cases, the bulge may be reducible (can be pushed back in).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              While many umbilical hernias in infants close on their own, adult hernias typically require surgical repair to prevent complications such as incarceration or strangulation, where the hernia becomes trapped and blood supply is cut off.
            </p>
            <a
              href="https://www.facs.org/~/media/files/education/patient%20ed/adultumbilical.ashx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Learn More About Umbilical Hernia (FACS)
            </a>
          </section>

          {/* Ventral Incisional Hernia */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ventral Incisional Hernia Patient Information
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A ventral incisional hernia occurs when tissue protrudes through a previous surgical incision in the abdominal wall. This type of hernia can develop months or years after abdominal surgery and is more common in patients who have had multiple surgeries, are overweight, or have conditions that affect wound healing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Symptoms may include a bulge at the site of a previous surgical incision, pain or discomfort, especially when lifting or straining, and in some cases, nausea or vomiting if the hernia becomes incarcerated.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Repair of ventral incisional hernias often requires mesh reinforcement to provide additional strength to the abdominal wall and reduce the risk of recurrence. The surgery can be performed using open, laparoscopic, or robotic techniques depending on the size and complexity of the hernia.
            </p>
            <a
              href="https://www.facs.org/~/media/files/education/patient%20ed/ventral_hernia.ashx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Learn More About Ventral Incisional Hernia (FACS)
            </a>
          </section>

          {/* Robotic Ventral Inguinal Hernia Repair */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Robotic Ventral Inguinal Hernia Repair
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Robotic hernia repair is a minimally invasive surgical technique that uses advanced robotic technology to perform hernia repairs with enhanced precision and control. This approach offers several advantages over traditional open surgery, including smaller incisions, reduced pain, faster recovery, and lower risk of complications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              During robotic ventral inguinal hernia repair, the surgeon uses a robotic system to access the hernia through small incisions. The robotic arms provide greater dexterity and precision, allowing for more accurate placement of mesh and better visualization of the surgical site.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Benefits of robotic hernia repair include less postoperative pain, shorter hospital stay, quicker return to normal activities, reduced risk of infection, and improved cosmetic results with smaller scars.
            </p>
            <a
              href="https://www.davincisurgery.com/procedures/general-surgery/ventral-hernia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Learn More About Robotic Ventral Hernia Repair (da Vinci)
            </a>
          </section>

          {/* Robotic Inguinal Hernia Repair */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Robotic Inguinal Hernia Repair
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Robotic inguinal hernia repair utilizes state-of-the-art robotic surgical systems to repair hernias in the groin area with minimal invasiveness. This technique is particularly beneficial for complex or recurrent inguinal hernias, as the robotic system provides superior visualization and precision.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The robotic approach allows surgeons to perform the repair through small incisions, resulting in less tissue trauma, reduced postoperative pain, and faster recovery compared to traditional open surgery. The enhanced 3D visualization and wristed instruments provide greater accuracy in mesh placement and tissue handling.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Patients who undergo robotic inguinal hernia repair typically experience less pain, minimal scarring, reduced risk of chronic groin pain, and a quicker return to work and daily activities. The procedure is performed under general anesthesia, and most patients can go home the same day.
            </p>
            <a
              href="https://www.davincisurgery.com/procedures/general-surgery/inguinal-hernia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Learn More About Robotic Inguinal Hernia Repair (da Vinci)
            </a>
          </section>

          {/* Mesh for Hernia Repair */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Mesh for Hernia Repair
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Surgical mesh is a medical device used to reinforce weakened or damaged tissue during hernia repair. Mesh has become the standard of care for most hernia repairs because it significantly reduces the risk of hernia recurrence compared to suture-only repairs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There are several types of mesh available, including synthetic mesh (made from polypropylene, polyester, or other materials) and biologic mesh (made from animal or human tissue). The choice of mesh depends on various factors including the type and size of the hernia, patient factors, and surgeon preference.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mesh can be placed in different positions during hernia repair: onlay (on top of the abdominal wall), sublay (behind the abdominal wall muscles), or intraperitoneal (inside the abdominal cavity). The placement technique depends on the hernia characteristics and surgical approach.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              While mesh use has significantly improved hernia repair outcomes, it's important to discuss the benefits and potential risks with your surgeon. Modern mesh materials are designed to integrate with your body's tissues and provide long-term reinforcement.
            </p>
            <a
              href="https://www.fda.gov/medical-devices/hernia-surgical-mesh-implants/hernia-surgical-mesh-implants-information-patients"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Learn More About Mesh for Hernia Repair (FDA)
            </a>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

