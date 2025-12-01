import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BMICalculator from '@/components/BMICalculator'

export default function SleeveGastrectomy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Sleeve gastrectomy
          </h1>

          {/* What is sleeve gastrectomy */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is sleeve gastrectomy and how does it work ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sleeve gastrectomy is a surgical procedure that reduces the size of your stomach, transforming it into a small tube like a "banana" or "sleeve" aiming to limit the amount of food that you can eat. The part of the stomach that is being removed produces a hormone called ghrelin that is responsible for the hunger sensation. Once the stomach is removed, the hunger feelings are reduced and this along with limited food intake will help you obtain the weight loss.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sleeve gastrectomy - before and after</h3>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/8OhDZOaObss"
                  title="Sleeve gastrectomy - before and after"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Who should get a sleeve gastrectomy */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Who should get a sleeve gastrectomy?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Like any other bariatric surgery sleeve gastrectomy is indicated for patients who suffer of obesity. The main indications are: obese patients with BMI at or above 35 with comorbidities like: diabetes, gastro esophageal reflux, high cholesterol levels, hypertension, obstructive sleep apnea, osteoarthritis. A BMI at or above 45 is an indication for surgery regardless of the comorbidities.
            </p>
          </section>

          {/* What exactly happens during sleeve surgery */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What exactly happens during sleeve surgery?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Using a cutting device called a stapler, the stomach is being cut along a rubber tube is such a way that 80% of the stomach will be removed. The surgery can be performed laparoscopic or with the robot. This "keyhole" surgery technique will leave you with 4 or 5 small incisions, less than 1 cm in your abdomen.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How efficient is the sleeve gastrectomy?</h3>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/dNWoS905d1U"
                  title="How efficient is the sleeve gastrectomy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* What is a Re-Sleeve procedure */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is a Re-Sleeve procedure ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you already had a sleeve gastrectomy in the past, and you are able to consume again large meals, your sleeve may have been stretched out. If you are regaining the weight and if you meet certain criteria, a surgical procedure may be performed to reduce again the volume of the stomach.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Re sleeve procedure</h3>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/0LzVRn4G5B0"
                  title="Re sleeve procedure"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* What is "keyhole" surgery */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is "keyhole" surgery ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I use the "keyhole" surgery approach in order to access the stomach without having to make large incisions in the skin. For sleeve gastrectomy I use most of the time four small incisions that are each less than one centimeter length and allow me to insert the working instruments. They leave a minimal scar and the cosmetic result is great.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key hole surgery</h3>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/nKro-4FIxC0"
                  title="Key hole surgery"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* How is the stomach divided */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How is the stomach divided in sleeve gastrectomy procedure?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cutting tissues during the surgery is done by the surgeon with the stapler. The tissue stapler is an extremely advanced piece of equipment that is designed to transect and join together the tissue at the same time, allowing the surgeon to create various types of surgical procedures. Please click on the movie below to learn how exactly the stapler works and if you have any questions feel free to contact me to discuss. It's critical that your surgeon uses high-quality equipment to avoid bleeding and staple line leakage, which can lead to complications.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">stapler technology</h3>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/7TvNjkwO0Y0"
                  title="stapler technology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* How efficient is the sleeve gastrectomy */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How efficient is the sleeve gastrectomy? How much weight will I loose after sleeve surgery?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In terms of weight loss, the sleeve gastrectomy procedure should help you to loose about 50-70% of your excess body weight over 6-15 months if you combine the surgery with the recommended diet and exercise regularly. Bringing your weight back to normal Its beneficial for your health and may result in resolution of comorbidities like diabetes, gastroesophageal reflux, high cholesterol levels, hypertension, obstructive sleep apnea, osteoarthritis.
            </p>
          </section>

          {/* How do i prepare for a gastric sleeve procedure */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How do i prepare for a gastric sleeve procedure?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              First, you should calculate your BMI. You can use the following BMI calculator. If your BMI is 35 or above, you might qualify for a bariatric surgery procedure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The next step is to contact my office and schedule an appointment, at 973-429-7600. I am happy to answer any of your questions or schedule an appointment through email at [email protected] or my messenger chat.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  FIRST OFFICE VISIT WITH ME (THE BARIATRIC SURGEON)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At the initial visit to the office, I will examine you, and we will sit down and talk about the medical problems that you have aside from weight problems. You should have a list of the medications that you are currently taking and a list of all your medical issues or surgeries that you have had so far. After reviewing your medical history, your diet, and exercise habits, we will decide if bariatric surgery is an appropriate choice for you. We will go over the surgical procedures available for weight loss including indications, risks, benefits, and alternatives for each. I will definitely encourage you to adopt a healthy lifestyle with an appropriate diet and exercise, regardless if you will or will not proceed with the surgery. It may take between two and three months between the date of f the first consultation and the date of surgery.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  ADDITIONAL CONSULTS
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>DIETARY CONSULT</li>
                  <li>PSYCHOLOGY EVALUATION</li>
                  <li>UPPER GASTROINTESTINAL ENDOSCOPY</li>
                  <li>PULMONARY EVALUATION AND SLEEP STUDY</li>
                  <li>CARDIOLOGY EVALUATION</li>
                  <li>EVALUATION BY YOUR PRIMARY CARE DOCTOR</li>
                  <li>OTHER CONSULTATIONS, DEPENDING ON THE MEDICAL PROBLEMS THAT YOU MAY HAVE</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  If the surgery is considered, you will have to see a dietician, a psychologist, and a medical doctor and I will schedule you for an endoscopy. Depending on each case, a pulmonary, cardiology, or other specialty consultation may be necessary as well. Our bariatric dietician will be in touch with you all this time, and they will encourage and instruct you on how to eat healthily. The bariatric coordinator will also contact you regularly and will update you about the process. You will be encouraged to attend our seminars and explore our websites, and you will be provided with plenty of information in order to familiarize yourself with the surgery.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  SECOND OFFICE VISIT WITH ME (THE BARIATRIC SURGEON)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  One week before the surgery, we will meet again in the office and I will make sure that you understand everything before proceeding with the weight loss surgery. You will have the opportunity to ask me any questions, and I encourage you to do so. The more a patient understands the bariatric surgery process, the better the outcomes will be. After that, if you consider moving forward, you will be asked to sign the informed consent, and you will be given instructions for the date of surgery.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  THE DAY OF SURGERY
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After all the above workup is done, about two to three months from the initial consultation, you will show up for the surgery. Prior to that, you will be asked to follow a special low-calorie, high-protein diet for two weeks. You will see me before surgery, and you will have again the opportunity to ask me any questions that you might have. You will also meet the anesthesiology team and the nurses will prepare you for the surgery.
                </p>
              </div>
            </div>
          </section>

          {/* What are the complications */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What are the complications of a gastric sleeve procedure?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Sleeve gastrectomy complications may include, but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
              <li>General anesthesia-related complications</li>
              <li>Leakage of the staple line</li>
              <li>Narrowing or stricture of the stomach</li>
              <li>Injury of the spleen or other intra-abdominal organs</li>
              <li>Blood clots in the lung, legs, and liver</li>
              <li>Depression</li>
              <li>Hernia</li>
              <li>Intra-abdominal infection</li>
              <li>Surgical wound infection</li>
              <li>Gallstones</li>
              <li>Constipation</li>
              <li>Dumping syndrome</li>
              <li>Acid reflux or heartburn</li>
              <li>Hair loss</li>
              <li>Vitamin deficiencies</li>
              <li>Malnutrition</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              All these complications can be effectively treated as long as are discovered early, and their treatment has the best outcomes when started promptly. Hence, the importance of close follow up with the surgeon in the postoperative period. Mortality after bariatric surgery is very low, and the chance of dying from bariatric surgery is far lower than the risk of dying from obesity related complications. Patients who underwent successful weight loss surgery have a reduction in their risk of death by 40%.
            </p>
          </section>

          {/* What is a hiatal hernia */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is a hiatal hernia and how does it affect a sleeve gastrectomy procedure ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sometimes, in some people, the upper portion of the stomach can slide into the chest, causing severe heartburn and reflux. If this condition is detected during the surgery, I may have to fix it and replace the stomach in the abdomen before performing the sleeve surgery. This will be done at the same time as the sleeve procedure.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What is a hiatal hernia</h3>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/vYP1mHLEGEw"
                  title="What is a hiatal hernia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* What will happen after gastric sleeve operation */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What will happen after gastric sleeve operation?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After the surgical procedure is done, you will spend a couple of hours in the post-anesthesia care unit PACU. Here you will be closely watched by a specialized nurse and anesthesia staff until you completely wake up and are ready to be transferred to the floor. During this time you will be receiving pain and nausea medication if needed, and you will be allowed to have clear liquids if you would like. Then you will be transferred to a surgical floor, where you will spend between one and three days until you will be ready to be discharged home. During the hospital stay, specialized bariatric nurses and dieticians will continue to monitor you and get you ready for discharge. They will encourage you to ambulate and help you return to your baseline activity. Instructions for home medications and diet will be provided as well. Depending on the case and your comorbidities, you may be seen by medical, pulmonary, or cardiology specialists. They will monitor you and will adjust your medications accordingly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In the first weeks after the surgery, you will have to follow a liquid diet. The bariatric dietician will call you regularly at home and will give you recommendations about how to advance your diet and what vitamins to take. You will have to see me in the office after one week, one month, three months, six months, and twelve months, and then yearly after the surgery. Each visit has its own specific and lab work will be performed at various intervals. You will also be provided with our office number, and you will be instructed to call that number for any concerns. That number is available 24/7 and one of our bariatric surgeons will answer the call. If necessary, in case of an emergency, you should call 911.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              During the office visits, we will discuss the physical exercise that you are allowed to perform. Most patients are ready to return to their baseline activity within 6-8 weeks after the procedure, however, every case should be reviewed individually. We will also discuss the time off required from work, based on individual needs, comorbidities, and the type of work involved. Once you are completely recovered from the surgery, you will be encouraged to exercise regularly and comply with the diet. Your eating habits after the surgery will change. You will not be able to eat the same amount of food with each meal as before the surgery. Staying in touch with the dietician and your doctor will help you to navigate through this process smoothly.
            </p>
          </section>

          {/* How does the sleeve gastrectomy change my organs */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How does the sleeve gastrectomy change my organs versus other weight loss procedures?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The major change of the gastric sleeve procedure is the reduction of the stomach volume from 30 - 40 ounces down to 6 to 8 ounces. In contrast with other weight loss surgery procedures, there are some modifications in the anatomy of the digestive system that sleeve gastrectomy procedures do not do. It does not change the way that the digestive juices and food travel through the intestine and does not exclude the pylorus from the food passage route. The absence of these modifications minimize the malabsorption effect of the sleeve gastrectomy. Hence the sleeve gastrectomy is considered to be mainly a restrictive procedure.
            </p>
            <div className="mt-6">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/L6HHN-4fRzs"
                  title="Sleeve versus Bypass"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </section>

          {/* For how long should i avoid pregnancy */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              For how long should i avoid pregnancy after bariatric surgery ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              After bariatric surgery, a woman should wait 12 to 24 months before conceiving so that the fetus is not affected by rapid maternal weight loss and so that the patient can achieve her weight-loss goals. If pregnancy occurs before this recommended time frame, closer surveillance of maternal weight and nutritional status may be beneficial, and serial ultrasound monitoring of fetal growth should be considered.
            </p>
          </section>

          {/* Da Vinci Robotic Surgery */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Da Vinci Robotic Surgery and Sleeve Gastrectomy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I perform this procedure by laparoscopic or robotic approach. Click on the video below to learn about robotic surgery platform.
            </p>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Robotic bariatric surgery</h3>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/H4WzUSq9OeY"
                    title="Robotic bariatric surgery"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Robotic surgery - What to expect ?</h3>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/9G2sZkzrrdg"
                    title="Robotic surgery - What to expect"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* How can i prevent complications */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How can i prevent complications ?
            </h2>
          </section>

          {/* Advantages and disadvantages */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What advantages and disadvantages do SLEEVE procedure have over other weight loss procedures?
            </h2>
            
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Advantages of gastric sleeve surgery:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>Excellent weight loss result in most of the patients</li>
                <li>Less complex and much faster to perform as compared with other surgical options.</li>
                <li>No implant necessary (as compared with gastric band).</li>
                <li>Safer for high-risk patients than other options</li>
                <li>Less likely to create a long-term nutrient deficiency compared to other types of bariatric surgeries</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Disadvantages of gastric sleeve surgery:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li>Gastric sleeve surgery cannot be reversed. 70-80 percent of your stomach will be completely removed during the surgery.</li>
                <li>Can cause or increase heart burn (acid reflux)</li>
                <li>May not influence as efficiently as other procedures (bypass or duodenal switch) the metabolic pathways that regulate the way the body processes energy from sugar and fat.</li>
              </ul>
            </div>
          </section>

          {/* Sleeve gastrectomy as the first stage */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Sleeve gastrectomy as the first stage for duodenal switch or SADI - S procedure.
            </h2>
          </section>

          {/* Alcohol, smoking and drugs */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Alcohol, smoking and drugs after bariatric surgery. What should i know ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Alcohol consumption after bariatric surgery in general should be discouraged. Any patient who undergoes bariatric surgery should be familiar with the harmful effects that alcohol consumption may incur. After bariatric surgery, alcohol absorption in the bloodstream is markedly accelerated. In other words, all it takes is a single drink to raise the blood alcohol level to the level of intoxication. Low sugar bariatric diet can lead to reduced sugar or glycogen in your body, and alcohol consumption may further contribute to hypoglycemia (low blood sugar). Alcohol can slow weight loss or promote weight gain due to its high-calorie, low-nutrient value. Not at last, alcohol addiction, especially in patients with prior history of addiction behavior, could become a serious problem for bariatric patients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Smoking, is not safe for bariatric surgery patients. In view of a well-established association between smoking and an increased risk of surgical complications and mortality, smoking cessation should be encouraged for all bariatric surgery candidates. Most guidelines recommend a minimum of 6 weeks of abstinence from smoking prior to bariatric surgery, however, some studies suggest that smoking within 1 year prior to bariatric surgery may significantly increase postoperative risks. In other words, the earlier you give up the smoking habit before the surgery, the better. The increased risk of cancer, blood clots, stroke, heart attack, lung disease, poor wound healing, stomach blockage, chronic pain, intractable vomiting, stomach and intestinal ulcers, stomach perforations and bleeding, which could occur with smoking, early or later after the surgery and may raise the need for an emergency operation, underlies the idea that patients who choose to smoke after bariatric surgery are exposing themselves to unnecessary avoidable risk.
            </p>
          </section>

          {/* BMI Calculator */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How much weight will I loose after surgery
            </h2>
            <div className="w-full">
              <BMICalculator />
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

