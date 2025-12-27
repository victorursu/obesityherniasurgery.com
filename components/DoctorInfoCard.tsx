export default function DoctorInfoCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          DR MARIUS CALIN MD FACS FASMBS FPD-MBS DABOM
        </h2>
        <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <p className="font-semibold">HUDSON REGIONAL HOSPITAL</p>
          <p>3RD FLOOR OFFICES</p>
          <p>55 Meadowlands Pkwy, Secaucus, NJ 07094</p>
        </div>
        <div className="pt-4">
          <a 
            href="tel:9178532781" 
            className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
          >
            (917)-853-2781
          </a>
        </div>
      </div>
    </div>
  )
}

