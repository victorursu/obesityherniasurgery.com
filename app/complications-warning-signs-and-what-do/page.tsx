import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ComplicationsWarningSigns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Complications Warning signs and what to do ?
          </h1>

          {/* ABDOMINAL PAIN */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              ABDOMINAL PAIN
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When we feel pain in our abdomen, it's a sign that our body is trying to tell us something is wrong with the organs in that area. We should never disregard or treat abdominal pain superficially; it is essential to seek medical advice for such concerns.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Any pain lasting more than 20-30 minutes or recurring could be an early indication of a serious condition that, if left unaddressed, could significantly endanger your health and potentially be life-threatening. Treating the pain with medication that temporarily relieves it might create a false sense of reassurance, misleading you into thinking everything is fine and increasing the risk of neglecting the underlying issue.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Patients who have undergone bariatric surgery may experience abdominal pain either shortly after the procedure (within days or weeks) or much later (after months or even years).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The complications indicated by abdominal pain occurring early after bariatric surgery are largely similar across all types of procedures (sleeve gastrectomy, gastric bypass, gastric banding, duodenal switch), with some specific nuances for each type. These complications include but are not limited to bleeding, peritonitis, leaks at the staple line, clots in the veins of abdominal organs, and hernias. Additionally, the pain could also be minor, associated with the incision sites.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The causes of pain that occur late (months or years) after bariatric surgery include, but are not limited to: ulcers of the sleeve stomach or bypass, narrowing of the sleeve, herniation of the sleeve with slippage into the chest, clots in the portal vein, gallstones, hernias of the abdominal wall, internal hernias (twisted intestine), and intestinal blockage.
            </p>

            {/* SLEEVE LEAK */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">SLEEVE LEAK</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This complication, though rare, occurs when the staple line (the sealed line where the stomach was divided) breaks apart, allowing stomach contents to leak outside the sleeved stomach. This can happen if the patient does not follow the prescribed liquid diet during the first two weeks after surgery and eats solid food before the staple line has healed. Occasionally, part of the staple line can come undone without an obvious reason, leading to a leak.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The outcomes of this complication are relatively good if it is addressed promptly. If not treated quickly, the leak can lead to infection, peritonitis (infection spreading throughout the abdomen), and ultimately sepsis and death. However, with immediate treatment and rapid intervention by a doctor, the course can be shifted to more favorable outcomes.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">HOW DOES IT PRESENT, AND WHAT SHOULD YOU DO?</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If you develop a leak after sleeve surgery, you will most likely experience pain. This pain may be felt in the upper abdomen, back, and sometimes on the left side of the chest. Although pain is the primary sign of a leak, other revealing symptoms may include fever, chills, pain when drinking liquids or with eating, hiccups, and sometimes shortness of breath.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                It is of utmost importance that you notify your doctor immediately and/or go to the nearest emergency room if you experience these symptoms. As mentioned before, the clock starts ticking with the first signs, and any delay can be devastating. Upon arriving at the emergency room, your doctor will order lab work and a CT scan to identify the leak and initiate treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The treatment depends on the severity of the leak and may range from keeping the patient completely NPO (nothing by mouth) and administering antibiotics to more invasive procedures such as endoscopy with stenting or reparative surgery. During the healing period, you will not be able to eat food through your mouth and will receive nutrition intravenously.
              </p>
            </div>

            {/* BYPASS LEAK */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">BYPASS LEAK</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This complication, though rare, occurs when the staple line or the suture of one or both of the connections stomach-small bowel or small bowel-small bowel become loose or break apart, allowing stomach or small bowel contents to leak outside in the abdominal cavity. This can happen if the patient does not follow the prescribed liquid diet during the first two weeks after surgery and eats solid food before the newly created connection has healed. Occasionally, part of the connection line can come undone without an obvious reason, leading to a leak.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The outcomes of this complication are relatively good if it is addressed promptly. If not treated quickly, the leak can lead to infection, peritonitis (infection spreading throughout the abdomen), and ultimately sepsis and death. However, with immediate treatment and rapid intervention by a doctor, the course can be shifted to more favorable outcomes.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">HOW DOES IT PRESENT, AND WHAT SHOULD YOU DO?</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Same as with sleeve leak, if you develop a leak after bypass surgery, you will most likely experience pain. This pain may be felt in the upper abdomen, back, and sometimes on the left side of the chest. Sometimes pain may be felt around your belly button or in the lower belly. Sometimes pain may be felt all over your entire belly. Although pain is the primary sign of a leak, other revealing symptoms may include fever, chills, pain when drinking liquids or with eating, hiccups, and sometimes shortness of breath.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                It is of utmost importance that you notify your doctor immediately and/or go to the nearest emergency room if you experience these symptoms. As mentioned before, the clock starts ticking with the first signs, and any delay can be devastating. Upon arriving at the emergency room, your doctor will order lab work and a CT scan to identify the leak and initiate treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The treatment depends on the severity of the leak and may range from keeping the patient completely NPO (nothing by mouth) and administering antibiotics to more invasive procedures such as endoscopy with stenting or reparative surgery. During the healing period, you will not be able to eat food through your mouth and will receive nutrition intravenously.
              </p>
            </div>

            {/* DUODENAL SWITCH OR SADI LEAK */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">DUODENAL SWITCH OR SADI LEAK</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                This complication, though rare, occurs when the staple line or the suture of one or both of the connections stomach-small bowel or small bowel-small bowel become loose or break apart, allowing stomach or small bowel contents to leak outside in the abdominal cavity. This can happen if the patient does not follow the prescribed liquid diet during the first two weeks after surgery and eats solid food before the newly created connection has healed. Occasionally, part of the connection line can come undone without an obvious reason, leading to a leak.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The outcomes of this complication are relatively good if it is addressed promptly. If not treated quickly, the leak can lead to infection, peritonitis (infection spreading throughout the abdomen), and ultimately sepsis and death. However, with immediate treatment and rapid intervention by a doctor, the course can be shifted to more favorable outcomes.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">HOW DOES IT PRESENT, AND WHAT SHOULD YOU DO?</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Same as with sleeve and bypass leaks, if you develop a leak after duodenal switch or SADI surgery, you will most likely experience pain. This pain may be felt in the upper abdomen, back, and sometimes on the left side of the chest. Sometimes pain may be felt around your belly button or in the lower belly. Sometimes pain may be felt all over your entire belly. Although pain is the primary sign of a leak, other revealing symptoms may include fever, chills, pain when drinking liquids or with eating, hiccups, and sometimes shortness of breath.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                It is of utmost importance that you notify your doctor immediately and/or go to the nearest emergency room if you experience these symptoms. As mentioned before, the clock starts ticking with the first signs, and any delay can be devastating. Upon arriving at the emergency room, your doctor will order lab work and a CT scan to identify the leak and initiate treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The treatment depends on the severity of the leak and may range from keeping the patient completely NPO (nothing by mouth) and administering antibiotics to more invasive procedures such as endoscopy with stenting or reparative surgery. During the healing period, you will not be able to eat food through your mouth and will receive nutrition intravenously.
              </p>
            </div>

            {/* PAIN AT THE SURGICAL INCISION SITES */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN AT THE SURGICAL INCISION SITES</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                After surgery, you will have small incisions on your abdomen. It is normal to feel some pain at these sites, especially when you move. This pain is usually mild and can be managed with pain medications prescribed by your doctor. However, if the pain is severe, persistent, or getting worse, it could indicate a problem such as an infection or a hernia at the incision site.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If you experience any abdominal pain after surgery, you should inform your doctor right away. If you have any doubts, seek help from the nearest emergency department. Pain at the surgical incision site is usually mild and relieved quickly by pain medications. It typically occurs with movement and is standalone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sometimes, you may notice a bruise over the incision, suggesting that some bleeding may have occurred, or some redness or rash, suggesting an infection or allergy. Depending on the scenario, your doctor will prescribe antibiotics or allergy medication. Once you discuss this with your doctor, they will give you further guidance. But, as mentioned before, if you have any doubts, you should go to the nearest emergency room.
              </p>
            </div>

            {/* PAIN CAUSED BY A NARROWING OR OBSTRUCTION OF THE SLEEVE */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY A NARROWING OR OBSTRUCTION OF THE SLEEVE</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                When a sleeve is created, the stomach is divided and transformed into a narrow tube. This will increase resistance to liquids and food that are ingested and may become painful. If there is excessive narrowing, the pain may be more severe.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO ?</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Informing your doctor or reporting to an emergency department is important, especially if this pain prevents you from consuming the recommended amount of fluids or food and reaching your daily nutrition goals. Sometimes, this may be associated with vomiting and heartburn, excessive spitting or inability to swallow saliva. Intravenous fluids and antacid medication may be necessary.
              </p>
            </div>

            {/* PAIN CAUSED BY A NARROWING OR OBSTRUCTION OF THE CONNECTIONS */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY A NARROWING OR OBSTRUCTION OF THE CONNECTIONS BETWEEN THE INTESTINES FOR GASTRIC BYPASS OR DUODENAL SWITCH OPERATIONS</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                When we do weight loss surgeries like bypass or duodenal switch, we need to cut and reattach the stomach and intestines once or twice, depending on the type of surgery. These reattachments can sometimes become narrow and cause a blockage. If this happens, symptoms will show up either soon after the surgery or later on, depending on when the narrowing occurs.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                If this happens, you might feel pain in your stomach, nausea, vomit, or have trouble eating and drinking enough. Some patients feel pain when they eat or drink. You might be able to tolerate liquids but not soft or solid foods. If you have these symptoms, tell your surgeon right away. If not treated early, you could become dehydrated and malnourished. If you can't follow the recommended diet for your recovery stage, seek immediate help. Your surgeon and the emergency department are the best places to get treated for this issue.
              </p>
            </div>

            {/* PAIN CAUSED BY CLOTS THAT FORM IN THE VEIN THAT BRINGS BLOOD TO THE LIVER */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY CLOTS THAT FORM IN THE VEIN THAT BRINGS BLOOD TO THE LIVER (PORTAL VEIN CLOTS OR THROMBOSIS)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Sometimes after bariatric surgery, some patients can develop blood clots in the veins that bring blood to the liver. This is called 'portal vein thrombosis.' Blood thinners can be used to treat and prevent this condition, and your surgeon will decide if they are appropriate for you. Blood thinners are not perfectly safe and can cause bleeding, so the surgeon will carefully weigh the risks and benefits before making a decision.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you develop clots in the portal vein, you will likely feel stomach pain. However, this can also happen without causing pain. Not drinking enough fluids can contribute to this problem. If you have a history of blood clots, tell your doctor so they can decide if you need blood thinners. Watch out for stomach pain that doesn't go away and gets worse, blood in your stool or black stools, and nausea. These signs mean you should go to the nearest emergency room or contact your doctor immediately, as they could indicate a clot in your vein. If not treated in time, this can lead to severe damage, potentially requiring surgery, a bowel transplant, or even causing death. This issue must be addressed right away with a CT scan in the emergency room and immediate treatment with blood thinners, possibly followed by surgery.
              </p>
            </div>

            {/* PAIN CAUSED BY HIATAL HERNIA */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY HIATAL HERNIA (WHEN STOMACH SLIPPAGE IN THE CHEST OCCURS)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bariatric surgery involves making the stomach smaller, like a tube for a sleeve or the size of a golf ball for a bypass. To do this, the stomach has to be separated from the structures that keep it in place, which normally prevent it from slipping into the chest. Once these anchor points are released, the stomach can potentially move into the chest after sleeve or bypass surgery. This problem is called a hiatal hernia because the opening through which the stomach moves into the chest is called the hiatus.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                You could develop a hiatal hernia right after surgery or later on. If you have a hiatal hernia, you might feel pain in your upper stomach, back, or left chest. You may also experience hiccups, nausea, vomiting, heartburn, and difficulty swallowing. If you have severe vomiting or retching after bariatric surgery, inform your doctor or go to the emergency room immediately. If left untreated, your stomach could move into your chest. X-rays and CT scans can diagnose this condition, and surgery may be needed if your doctor decides it is necessary.
              </p>
            </div>

            {/* PAIN CAUSED BY INTERNAL HERNIA */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY INTERNAL HERNIA (IT COULD HAPPEN MAINLY AFTER GASTRIC BYPASS AND DUODENAL SWITCH)</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Some weight loss surgeries, like bypass or duodenal switch, involve disconnecting and reconnecting parts of the small intestine. This can sometimes cause the intestines to twist around themselves, affecting blood supply and flow. This condition, called an internal hernia, can be very serious and even fatal if not treated in time. In the worst case, it could lead to the loss of the entire bowel, requiring an intestinal transplant or resulting in death.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                An internal hernia will cause stomach pain that gets progressively worse and spreads throughout your abdomen. You might also experience nausea or vomiting. If you have any abdominal pain that doesn't go away quickly, persists, or gets worse, contact your doctor or go to the emergency room immediately. Do not wait with abdominal pain without being seen by your surgeon or emergency department. To treat an internal hernia, it must first be diagnosed with a CT scan and will most likely require surgery. It's important to have surgery as soon as possible after the pain starts to get the best results. Delaying treatment increases the risk of severe outcomes, including the need for a bowel transplant or death.
              </p>
            </div>

            {/* PAIN CAUSED BY HERNIA AT THE SURGICAL INCISION SITES */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY HERNIA AT THE SURGICAL INCISION SITES</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To perform any surgery, the surgeon must make small cuts in your abdominal wall to insert the instruments. In rare cases, the surgery might need to be done with a long incision down the middle of your stomach. Hernias (when abdominal contents protrude through these incisions) can occur either early in the recovery process or later on. If you had open surgery, you are more likely to develop a hernia compared to keyhole surgery (small incisions).
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you notice any pain around your incisions, notify your doctor immediately, or go to the nearest emergency department if you're unsure. Although rare, hernias can occur at the incision sites and may need to be fixed right away or later, depending on whether they are complicated. This decision should be made by the surgeon. Sometimes you might feel a bulge in the area of the incision, which could indicate a developing hernia. If you experience vomiting, it could be a sign that bowel has become trapped in the hernia, which is a surgical emergency.
              </p>
            </div>

            {/* PAIN CAUSED BY GALLSTONES */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY GALLSTONES</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                After bariatric surgery, especially rapid weight loss, patients can develop gallstones. These can cause pain in the upper right abdomen, often after eating fatty foods. The pain may radiate to the back or right shoulder.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you experience severe abdominal pain, especially in the upper right area, contact your doctor or go to the emergency room. Gallstones may require treatment with medication or surgery to remove the gallbladder.
              </p>
            </div>

            {/* PAIN CAUSED BY ULCER OR GASTRITIS */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY ULCER OR GASTRITIS</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                After bariatric surgery, some patients may develop ulcers or gastritis in the stomach or small intestine. This can cause burning pain, especially when eating or drinking.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you experience persistent burning pain in your stomach, especially after eating, contact your doctor. Treatment may include medications to reduce stomach acid and protect the stomach lining.
              </p>
            </div>

            {/* PAIN CAUSED BY INFLAMMATION OF THE ESOPHAGUS AND HEARTBURN */}
            <div className="mt-8 mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">PAIN CAUSED BY INFLAMMATION OF THE ESOPHAGUS AND HEARTBURN</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                After bariatric surgery, some patients may experience heartburn or inflammation of the esophagus (esophagitis). This can cause pain or burning sensation in the chest or upper abdomen.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">WHAT TO DO</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you experience persistent heartburn or chest pain, contact your doctor. Treatment may include medications to reduce acid production and lifestyle modifications.
              </p>
            </div>
          </section>

          {/* NAUSEA */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              NAUSEA
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nausea after bariatric surgery can occur for various reasons, including eating too quickly, consuming foods that don't agree with your new stomach, or as a sign of a more serious complication. If nausea is persistent, severe, or accompanied by other symptoms like pain or vomiting, contact your doctor immediately.
            </p>
          </section>

          {/* INABILITY TO MEET THE GOAL FOR CLEAR LIQUID DIET */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              INABILITY TO MEET THE GOAL FOR CLEAR LIQUID DIET AFTER SURGERY
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              After surgery, it's crucial to meet your daily fluid goals (48-64 ounces). If you're unable to drink enough fluids, you risk dehydration, which can lead to serious complications. Contact your doctor or go to the emergency room if you cannot meet your fluid goals, as you may need IV hydration.
            </p>
          </section>

          {/* INABILITY TO MEET THE GOAL FOR CALORIES */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              INABILITY TO MEET THE GOAL FOR CALORIES AFTER SURGERY RESULTING IN EXCESSIVE WEIGHT LOSS
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              While weight loss is expected after bariatric surgery, excessive or rapid weight loss can be a concern. If you're losing weight too quickly or unable to meet your nutritional goals, contact your bariatric team. You may need nutritional counseling or adjustments to your diet plan.
            </p>
          </section>

          {/* VOMITING */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              VOMITING
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Occasional vomiting can occur after bariatric surgery, especially if you eat too quickly or too much. However, persistent or severe vomiting, especially if accompanied by pain, fever, or inability to keep fluids down, requires immediate medical attention. Contact your doctor or go to the emergency room.
            </p>
          </section>

          {/* BLEEDING */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              BLEEDING
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bleeding after bariatric surgery can occur internally or externally. Signs of internal bleeding include dark or tarry stools, vomiting blood, severe abdominal pain, dizziness, or fainting. Any signs of bleeding require immediate medical attention. Go to the emergency room immediately.
            </p>
          </section>

          {/* CONSTIPATION */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              CONSTIPATION
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Constipation is common after bariatric surgery due to reduced food intake and changes in diet. However, if constipation is severe, persistent, or accompanied by abdominal pain, contact your doctor. Treatment may include increased fluid intake, fiber supplements, or medications.
            </p>
          </section>

          {/* DIARRHEA */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              DIARRHEA
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Diarrhea can occur after bariatric surgery, especially with certain foods or if you're not tolerating your diet well. If diarrhea is severe, persistent, or accompanied by dehydration, fever, or blood, contact your doctor immediately.
            </p>
          </section>

          {/* HEARTBURN */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              HEARTBURN
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Heartburn or acid reflux can occur after bariatric surgery. If it's persistent or severe, contact your doctor. Treatment may include medications to reduce acid production or further evaluation to rule out complications.
            </p>
          </section>

          {/* DUMPING SYNDROME */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              DUMPING SYNDROME
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dumping syndrome occurs when food moves too quickly from the stomach to the small intestine, causing symptoms like nausea, vomiting, diarrhea, dizziness, and rapid heart rate. This is more common after gastric bypass. If you experience these symptoms, especially after eating sugary or high-fat foods, contact your doctor for dietary guidance.
            </p>
          </section>

          {/* FEVER, CHILLS */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              FEVER, CHILLS
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fever and chills after bariatric surgery can indicate an infection, which requires immediate medical attention. If you have a fever (temperature above 100.4°F or 38°C), especially if accompanied by pain, redness at incision sites, or other symptoms, contact your doctor immediately or go to the emergency room.
            </p>
          </section>

          {/* CHEST PAIN */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              CHEST PAIN
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chest pain after bariatric surgery can have various causes, including heartburn, hiatal hernia, or more serious conditions like a leak or blood clot. Any chest pain requires immediate medical evaluation. If you experience chest pain, especially if it's severe or accompanied by shortness of breath, go to the emergency room immediately.
            </p>
          </section>

          {/* SHORTNESS OF BREATH */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              SHORTNESS OF BREATH
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Shortness of breath after bariatric surgery can indicate serious complications such as a leak, blood clot in the lung (pulmonary embolism), or infection. This is a medical emergency. If you experience sudden or severe shortness of breath, go to the emergency room immediately or call 911.
            </p>
          </section>

          {/* HICCUPS */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              HICCUPS
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Persistent hiccups after bariatric surgery can sometimes indicate irritation of the diaphragm or stomach, which may be related to a leak or other complication. If hiccups are persistent, severe, or accompanied by other symptoms like pain or difficulty swallowing, contact your doctor.
            </p>
          </section>

          {/* PAIN AND LEG SWELLING - CLOTS IN THE LEG */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              PAIN AND LEG SWELLING - CLOTS IN THE LEG
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Deep vein thrombosis (DVT) is a blood clot in the leg that can occur after surgery. Symptoms include pain, swelling, warmth, or redness in one leg. This is a serious condition that requires immediate medical attention, as the clot can travel to the lungs. If you experience these symptoms, go to the emergency room immediately.
            </p>
          </section>

          {/* PULMONARY EMBOLISM - CLOTS IN THE LUNG */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              PULMONARY EMBOLISM - CLOTS IN THE LUNG
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A pulmonary embolism occurs when a blood clot travels to the lungs. Symptoms include sudden shortness of breath, chest pain, rapid heart rate, coughing up blood, or fainting. This is a life-threatening emergency. If you experience these symptoms, call 911 or go to the emergency room immediately.
            </p>
          </section>

          {/* PALPITATIONS */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              PALPITATIONS
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Heart palpitations (feeling like your heart is racing or skipping beats) can occur after bariatric surgery. While sometimes related to dehydration or electrolyte imbalances, they can also indicate more serious conditions. If palpitations are persistent, severe, or accompanied by chest pain or shortness of breath, contact your doctor.
            </p>
          </section>

          {/* FATIGUE, TIREDNESS */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              FATIGUE, TIREDNESS
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fatigue is common after bariatric surgery as your body recovers and adjusts to reduced calorie intake. However, excessive fatigue can indicate dehydration, nutritional deficiencies, or other complications. If fatigue is severe or persistent, contact your doctor for evaluation.
            </p>
          </section>

          {/* BLOOD WITH VOMITING OR POOPING */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              BLOOD WITH VOMITING OR POOPING
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Blood in vomit or stool is a serious sign that requires immediate medical attention. This can indicate bleeding from the stomach, intestines, or other complications. If you see blood in your vomit (bright red or coffee-ground appearance) or stool (bright red or dark/tarry), go to the emergency room immediately.
            </p>
          </section>

          {/* EXCESSIVE SPITTING OR NOT ABLE TO SWALLOW SALIVA */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              EXCESSIVE SPITTING OR NOT ABLE TO SWALLOW SALIVA
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you're unable to swallow saliva or are spitting excessively, this can indicate a narrowing or obstruction of the stomach or connections. This requires immediate medical attention. Contact your doctor or go to the emergency room, as you may need IV hydration and further evaluation.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

