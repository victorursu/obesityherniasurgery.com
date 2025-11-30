import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Slideshow from '@/components/Slideshow'
import Link from 'next/link'

// Combined slideshow images from the original site
const slides = [
  {
    image: '/images/slide1-1.png',
  },
  {
    image: '/images/slide1-2.png',
  },
  {
    image: '/images/slide1-3.png',
  },
  {
    image: '/images/slide2-1.png',
  },
  {
    image: '/images/slide2-2.jpg',
  },
  {
    image: '/images/slide2-3.jpg',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Appointment Button */}
        <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto text-center">
            <Link
              href="/appointment-scheduling"
              className="inline-block w-full sm:w-auto px-8 py-4 text-lg font-bold text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              style={{ background: 'linear-gradient(160deg, #00d5b1 0%, #0d7ab8 78.66%)' }}
            >
              BOOK AN APPOINTMENT WITH DR CALIN NOW
            </Link>
          </div>
        </div>
        
        {/* Slideshow Section */}
        <Slideshow slides={slides} />
        
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet the Doctor
              </h1>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Marius Calin is a general and bariatric surgeon. His expertise includes complex general and bariatric (weight loss) procedures, hernia, colon surgery, heartburn, acid reflux, gallbladder diseases, and other conditions. He practices surgery through a minimally invasive approach, laparoscopic and robotic surgery.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                He is one of the early adopters of robotic technology, and he had been using the da Vinci Robotic system for a long time, early after its implementation. Furthermore, he has numerous publications in this field, and he was designated to be a proctor for robotic surgery, sharing his experience with other surgeons who are willing to learn this technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                He is a fellow of the American Society of Metabolic and Bariatric Surgery and has extensive expertise in bariatric surgery. He was the first surgeon to perform the single anastomosis duodenal switch procedure (a relatively new and very efficient weight loss procedure) at Mountainside Hospital, one of the hospitals where he currently performs bariatric surgery.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                He also performs sleeve gastrectomy, gastric bypass surgery, and revision bariatric procedures. Patients who already had bariatric surgery, but struggle with weight regain, reflux, heartburn, or other conditions are welcome to his office to discuss their options.
              </p>
            </div>
          </div>
        </section>

        {/* BIO Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#C8F0F5' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              BIO Marius Calin MD FACS FASMBS FPD MBS DABOM
            </h2>
            <div className="max-w-4xl mx-auto text-gray-900">
              <p className="text-lg leading-relaxed mb-6">
                Dr. Calin is a general and bariatric surgeon. His expertise includes complex general and bariatric (weight loss) procedures, hernia, colon surgery, heartburn, acid reflux, gallbladder diseases, and other conditions. He practices surgery through a minimally invasive approach, laparoscopic and robotic surgery. He is one of the early adopters of robotic technology, and he had been using the da Vinci Robotic system for a long time, early after its implementation. Furthermore, he has numerous publications in this field, and he was designated to be a proctor for robotic surgery, sharing his experience with other surgeons who are willing to learn this technology. He is a fellow of the American Society of Metabolic and Bariatric Surgery and has extensive expertise in bariatric surgery. He was the first surgeon to perform the single anastomosis duodenal switch procedure (a relatively new and very efficient weight loss procedure) at Mountainside Hospital, one of the hospitals where he currently performs bariatric surgery. He also performs sleeve gastrectomy, gastric bypass surgery, and revision bariatric procedures. Patients who already had bariatric surgery, but struggle with weight regain, reflux, heartburn, or other conditions are welcome to his office to discuss their options.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                If you only have a small simple umbilical or groin hernia, multiple complex hernias of the abdominal wall, or if you are a patient who had failed multiple hernia surgeries, doctor Calin welcomes you to discuss your options, and he is ready to offer his extensive expertise that covers this pathology. Using laparoscopic or robotic or open technology combined with the latest reinforcement materials on the market, he offers a state-of-the-art hernia repair to his patients. He is also one of the early adopters of the minimally invasive extraperitoneal repair (ETEP procedure), being the first surgeon to perform this procedure in several of the hospitals where he had appointments. This is a relatively new procedure that offers selected patients the advantages of a minimally invasive (keyhole surgery) approach combined with a durable reinforcement of the abdominal wall in order to prevent hernia recurrence.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                By taking advantage of the laparoscopic and robotic platform combined with his extensive experience, he manages to treat and operate with minimal incisions on different acute surgical conditions that bring the patient to the emergency room. Thanks to this revolutionary technology, he is happy to offer to more and more patients that require colon surgery, the benefit of having surgery without colostomy (the bag) and recovery much earlier than before.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With his training and expertise in advanced gastrointestinal surgery and endoscopy, he offers his patients colonoscopy and endoscopy for cancer screening, or other conditions as well as endoscopic balloon dilatation and stenting.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                His patients highly rate him, and he did his training both overseas (Europe and Canada) and at prestigious hospitals in the United States (New York, Indianapolis, Cleveland Clinic). Dr. Calin is certified by the American Board of Surgery, and he is a Fellow of the American Society of Metabolic and Bariatric Surgery. Dr. Calin was also nominated multiple times for NJ Top Docs. He is also appointed as an assistant professor of surgery at Hackensack Meridian School of Medicine at Seton Hall University.
              </p>
              <p className="text-lg leading-relaxed">
                His endeavor for perfection and precision is also reflected in his hobbies. He is an experienced pilot and currently holds a commercial pilot and certified flight instructor certificates issued by the Federal Aviation Administration. But foremost, he is a compassionate doctor, and he is dedicated to his patients. He welcomes any patient who is in need of an expert surgeon ready to treat their conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-lighter">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Surgical Weight Loss
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive bariatric procedures including gastric bypass, sleeve gastrectomy, and duodenal switch to help achieve significant and sustainable weight loss.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Non Surgical Weight Loss
                </h3>
                <p className="text-sm text-gray-600">
                  Non-invasive weight management options including gastric balloon procedures and comprehensive nutritional counseling programs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Reflux and Heartburn
                </h3>
                <p className="text-sm text-gray-600">
                  Expert diagnosis and treatment of GERD, acid reflux, and heartburn using both medical management and surgical interventions when needed.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Endoscopy
                </h3>
                <p className="text-sm text-gray-600">
                  Upper gastrointestinal endoscopy for diagnosis and treatment of conditions affecting the esophagus, stomach, and upper digestive tract.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  ERCP
                </h3>
                <p className="text-sm text-gray-600">
                  Endoscopic retrograde cholangiopancreatography for diagnosing and treating conditions of the bile ducts and pancreatic ducts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Hernia Surgery
                </h3>
                <p className="text-sm text-gray-600">
                  Minimally invasive repair of inguinal, umbilical, incisional, and other types of hernias using advanced laparoscopic and robotic techniques.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Gallbladder Surgery
                </h3>
                <p className="text-sm text-gray-600">
                  Laparoscopic cholecystectomy for treatment of gallstones, gallbladder disease, and related conditions with minimal scarring and faster recovery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Surgery for Appendicitis
                </h3>
                <p className="text-sm text-gray-600">
                  Emergency and scheduled appendectomy procedures using minimally invasive laparoscopic techniques for rapid recovery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Colon Surgery
                </h3>
                <p className="text-sm text-gray-600">
                  Surgical treatment for colorectal conditions including cancer, diverticulitis, inflammatory bowel disease, and other colon disorders.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Colonoscopy
                </h3>
                <p className="text-sm text-gray-600">
                  Screening and diagnostic colonoscopy for early detection of colon cancer, polyps, and other colorectal conditions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Robotic Surgery
                </h3>
                <p className="text-sm text-gray-600">
                  Advanced da Vinci robotic surgery for enhanced precision, smaller incisions, and improved outcomes across various surgical procedures.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Laparoscopic Surgery
                </h3>
                <p className="text-sm text-gray-600">
                  Minimally invasive keyhole surgery techniques for reduced pain, shorter hospital stays, and faster return to daily activities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Lipoma Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Surgical removal of benign fatty tumors (lipomas) that may cause discomfort or cosmetic concerns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Sebaceous Cyst Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Safe and effective removal of sebaceous cysts to prevent infection, reduce discomfort, and improve appearance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Pilonidal Cyst Surgery
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive treatment for pilonidal disease including excision and advanced closure techniques to prevent recurrence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Excess Skin Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Body contouring procedures to remove excess skin after significant weight loss, improving both function and appearance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-white" style={{ background: 'linear-gradient(160deg, #00d5b1 0%, #0d7ab8 78.66%)' }}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and learn more about 
              how we can help you on your journey to better health.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

