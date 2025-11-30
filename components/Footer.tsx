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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Marius Calin</h3>
            <p className="text-gray-400">
              Expert bariatric and hernia surgery services
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/bariatric" className="hover:text-white">Bariatric</a></li>
              <li><a href="/hernia" className="hover:text-white">Hernia</a></li>
              <li><a href="/other" className="hover:text-white">Other</a></li>
              <li><a href="/hospitals" className="hover:text-white">Hospitals</a></li>
              <li><a href="/testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Obesity & Hernia Surgery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

