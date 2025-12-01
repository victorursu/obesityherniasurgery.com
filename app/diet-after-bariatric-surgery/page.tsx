import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function DietAfterBariatricSurgery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Diet after Bariatric Surgery
          </h1>

          {/* FIRST HOURS AFTER THE SURGERY */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              FIRST HOURS AFTER THE SURGERY
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Congratulations - you just had your bariatric surgery, and you are ready to start your new journey. Once you are completely awake and able to drink, you will be allowed to take small sips of clear liquids. After your sleeve gastrectomy surgery, it's crucial to stay hydrated. While you're still in the hospital, you will receive fluids through an IV (intravenous line) to ensure you get enough hydration. These fluids will supplement the liquids you drink, helping you to stay properly hydrated as your body recovers from the surgery.
            </p>
          </section>

          {/* STAGE 1 BARIATRIC DIET - CLEAR LIQUID DIET */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              STAGE 1 BARIATRIC DIET - CLEAR LIQUID DIET
            </h2>

            <div className="mb-6">
              <Image
                src="/images/diet/NIGHT_1.gif"
                alt="Night schedule"
                width={800}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>

            <div className="space-y-4 text-lg text-gray-700">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">SLEEP FROM 10 PM TO 6 AM - IN TOTAL, YOU SHOULD ACHIEVE 8 HOURS OF SLEEP.</h3>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">YOU WILL NEED TO STAY AWAKE FOR 16 HOURS, SO YOU HAVE PLENTY OF TIME TO DRINK AND ACHIEVE YOUR GOAL.</h3>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">REMEMBER THAT RIGHT AFTER THE SURGERY, IT WILL BE HARD FOR YOU TO DRINK.</h3>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">IN THE DAYS IMMEDIATELY AFTER THE SURGERY, YOU SHOULD NOT DRINK MORE THAN 4 OUNCES IN ONE HOUR, OR ONE OUNCE EVERY 15 MINUTES.</h3>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">TAKE SMALL SIPS INSTEAD OF GULPING THE LIQUIDS</h3>
              </div>
            </div>

            <div className="my-6">
              <Image
                src="/images/diet/hidrometer.gif"
                alt="Hydration 4 cups 64 ounces"
                width={800}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>

            <div className="space-y-4 text-lg text-gray-700">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">YOUR GOAL FOR THE DAY IS TO CONSUME 48-64 OUNCES.</h3>
              </div>
              <div>
                <p className="mb-2">DRINKING 48 OUNCES IN A DAY IS THE MINIMUM. YOU CAN'T AFFORD TO DRINK LESS THAN THAT. IF YOU ARE NOT ABLE TO DRINK 48 OUNCES IN A DAY, YOU WILL NEED TO GO TO THE EMERGENCY ROOM AND HAVE IV FLUIDS ADMINISTERED. OTHERWISE, YOU WILL BECOME DEHYDRATED.</p>
              </div>
              <div>
                <p className="mb-2">THE CLOSER YOU GET TO 64 OUNCES, THE MORE YOU WILL ENSURE THAT YOU WON'T BECOME DEHYDRATED.</p>
              </div>
              <div>
                <p className="mb-2">DURING THE HOSPITAL STAY YOU WILL ONLY GET CLEAR LIQUIDS</p>
              </div>
              <div>
                <p className="mb-2">AT HOME YOU WILL START REPLACING ONE CUP WITH PROTEIN SHAKE EVERY HOUR</p>
              </div>
            </div>

            <div className="my-6">
              <Image
                src="/images/diet/ANIMATE-HOURLY-64-OUNCES.gif"
                alt="Hourly 64 ounces animation"
                width={800}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>

            <div className="text-lg text-gray-700">
              <p className="mb-4">
                ONCE YOU TOLERATE DRINKING 4 OUNCES IN ONE HOUR OR ONE OUNCE EVERY 15 MINUTES, YOU CAN ADVANCE TO 5-6 OUNCES PER HOUR (ONE OUNCE EVERY 10 MINUTES). DO NOT PUSH YOUR LIMIT AND DO NOT OVERDO IT. IF YOU EXPERIENCE ANY PAIN, NAUSEA, OR VOMITING, GO BACK TO 4 OUNCES PER HOUR. THIS WAY YOU WILL FINISH 64 OUNCES IN 11 HOURS INSTEAD OF 16 HOURS. ONCE YOU TOLERATE 6 OUNCES IN ONE HOUR, YOU CAN DRINK AS MUCH AS YOU NEED BUT DO NOT GULP. CONTINUE TO SIP, AND IF YOU FEEL YOU NEED TO DRINK MORE THAN 64 OUNCES IN A DAY, GO AHEAD.
              </p>
            </div>
          </section>

          {/* FLUID TRACKING IN THE HOSPITAL */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              FLUID TRACKING IN THE HOSPITAL
            </h2>
            <div className="mb-6">
              <Image
                src="/images/diet/gif-fluid-tracker_1.jpg"
                alt="Fluid tracker"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
            <div className="mb-6">
              <Image
                src="/images/diet/EXPLANATION-FLUID-TRACKER_2.gif"
                alt="Explanation fluid tracker"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          </section>

          {/* AT HOME FROM DISCHARGE */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              AT HOME FROM DISCHARGE FROM THE HOSPITAL TILL FIRST OFFICE VISIT (FIRST 5-7 DAYS AFTER SURGERY)
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              EN CASA DESDE EL ALTA DEL HOSPITAL HASTA LA PRIMERA VISITA AL CONSULTORIO (PRIMEROS 5-7 DÍAS DESPUÉS DE LA CIRUGÍA)
            </h3>

            <div className="space-y-4 text-lg">
              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">8 AM - 9 AM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">9 AM - 10 AM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF PROTEIN SHAKE (6 ONZAS DE BATIDO DE PROTEÍNAS)</div>
                <div className="text-sm text-gray-600 mb-2">3 PROTEIN SHAKES PER DAY</div>
                <Image
                  src="/images/diet/ANIMATION-MAKING-PROTEIN-EN-SPA_0.gif"
                  alt="Making protein shake"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">10 AM - 11 AM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">11 AM - 12 AM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">12 PM - 1 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">1 PM - 2 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF PROTEIN SHAKE (6 ONZAS DE BATIDO DE PROTEÍNAS)</div>
                <div className="text-sm text-gray-600 mb-2">3 PROTEIN SHAKES PER DAY</div>
                <Image
                  src="/images/diet/ANIMATION-MAKING-PROTEIN-EN-SPA_0.gif"
                  alt="Making protein shake"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">2 PM - 3 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">3 PM - 4 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">4 PM - 5 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">5 PM - 6 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF PROTEIN SHAKE (6 ONZAS DE BATIDO DE PROTEÍNAS)</div>
                <div className="text-sm text-gray-600 mb-2">3 PROTEIN SHAKES PER DAY</div>
                <Image
                  src="/images/diet/ANIMATION-MAKING-PROTEIN-EN-SPA_0.gif"
                  alt="Making protein shake"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">6 PM - 7 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">7 PM - 8 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">8 PM - 9 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>

              <div className="bg-white p-4 rounded-lg">
                <div className="font-bold text-gray-900 mb-2">9 PM - 10 PM</div>
                <div className="text-gray-700 mb-2">6 OUNCES OF CLEAR LIQUID (6 ONZAS DE LÍQUIDO TRANSPARENTE)</div>
                <Image
                  src="/images/diet/ANIMATION-CLEAR-LIQUID.gif"
                  alt="Clear liquids"
                  width={300}
                  height={200}
                  className="w-full max-w-xs h-auto rounded-lg"
                  unoptimized
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HOME FLUID TRACKING</h3>
              <Image
                src="/images/diet/gif-fluid-tracker_1.jpg"
                alt="Home fluid tracking"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          </section>

          {/* STAGE 2 BARIATRIC DIET - FULL LIQUID DIET */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              STAGE 2 BARIATRIC DIET - FULL LIQUID DIET
            </h2>
            {/* Content will be added when available */}
          </section>

          {/* STAGE 3 BARIATRIC DIET - SOFT FOOD (TRANSITION) DIET */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              STAGE 3 BARIATRIC DIET - SOFT FOOD (TRANSITION) DIET
            </h2>
            {/* Content will be added when available */}
          </section>

          {/* STAGE 4 BARIATRIC DIET - REGULAR FOOD DIET */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              STAGE 4 BARIATRIC DIET - REGULAR FOOD DIET
            </h2>
            {/* Content will be added when available */}
          </section>

          {/* STAGE 5 BARIATRIC DIET - AFTER 2 MONTHS FROM SURGERY */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              STAGE 5 BARIATRIC DIET - AFTER 2 MONTHS FROM SURGERY
            </h2>
            {/* Content will be added when available */}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

