import SocialLinks from './SocialLinks'

// Social media links from the original site
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100090427875076&mibextid=LQQJ4d',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/obesity_hernia_surgery/',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCRCpT22ezuMFo9T-GioctIA',
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Marius Calin</h3>
            <p className="text-gray-400 dark:text-gray-500">
              Expert bariatric and hernia surgery services
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex gap-4 text-gray-400 dark:text-gray-500">
              <a href="/testimonials" className="hover:text-white dark:hover:text-gray-300 transition-colors">Testimonials</a>
              <a href="/contact" className="hover:text-white dark:hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Connect with us
            </h4>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 dark:text-gray-500">
          <div className="flex justify-center gap-4 mb-4">
            <a href="/terms-of-use" className="hover:text-white dark:hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="/patient-bill-of-rights" className="hover:text-white dark:hover:text-gray-300 transition-colors">Patient Bill of Rights</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Dr. Marius Calin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}












