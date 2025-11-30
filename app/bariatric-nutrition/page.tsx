import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BariatricNutrition() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Bariatric nutrition
          </h1>

          {/* What should be my IDEAL body weight */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What should be my IDEAL body weight ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              STEP 1 - click here to calculate what should your IDEAL body weight be for your age. Have your height in inches available.
            </p>
            <a
              href="https://www.calculator.net/ideal-weight-calculator.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Calculate Ideal Body Weight
            </a>
          </section>

          {/* How much should I weigh for my height - BMI */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              How much should I weigh for my height ? I want to calculate my BMI (Body mass index)
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              STEP 2 - click here to calculate your BMI (Body Mass Index)
            </p>
            <a
              href="https://www.calculator.net/bmi-calculator.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Calculate BMI
            </a>
          </section>

          {/* Calories required - BMR */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Calories required to keep your body function while you are not doing any physical activities ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              STEP 3 - click here to calculate your BMI (Basic Metabolic Rate)
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>BMR Definition:</strong> Your Basal Metabolic Rate (BMR) is the number of calories you burn as your body performs basic (basal) life-sustaining functions. Commonly also termed Resting Metabolic Rate (RMR), which is the calories burned if you stayed in bed all day. In other words, by consuming the number of calories equivalent to your BMR you won't lose neither, you will gain any weight.
            </p>
            <a
              href="https://www.calculator.net/bmr-calculator.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Calculate BMR
            </a>
          </section>

          {/* Calorie deficit */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Calorie deficit and time needed to reach to the desired weight. Eating fewer calories than we burn.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              STEP 4 - click here to calculate the calorie deficit you need to lose weight.
            </p>
            <a
              href="https://www.inchcalculator.com/weight-loss-calculator/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors mb-4"
            >
              Calculate Calorie Deficit
            </a>
          </section>

          {/* Weight Loss Calculator */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Weight Loss Calculator – Calculate a Calorie Deficit to Lose Weight
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              STEP 4 - click here to calculate the calorie deficit you need to lose weight.
            </p>
            <a
              href="https://www.inchcalculator.com/weight-loss-calculator/?age=45&sex=m&height=67&height_unit=inch&weight=230&weight_unit=pound&bmr_formula=msj&activity=b&goal_weight=180&goal_weight_unit=pound&goal_time=3&goal_time_unit=month"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Weight Loss Calculator
            </a>
          </section>

          {/* NUTRITION AND BARIATRIC SURGERY */}
          <section className="mb-12 bg-gray-lighter rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              NUTRITION AND BARIATRIC SURGERY
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Click here to learn about the diet after sleeve gastrectomy procedure
            </p>
            <Link
              href="/diet-after-bariatric-surgery"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Diet after Bariatric Surgery
            </Link>
          </section>

          {/* Diet after SADI-S, modified DS, SIPS procedure */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Diet after SADI-S, modified DS, SIPS procedure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Click here to learn about the diet after SADI-S, modified DS, SIPS procedure
            </p>
            <div className="aspect-video w-full mt-6">
              <iframe
                src="https://www.youtube.com/embed/s_q3ZqYonxA"
                title="Diet after SADI-S, modified DS, SIPS procedure"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

