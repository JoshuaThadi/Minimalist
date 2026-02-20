import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="space-y-4 col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-gray-900 dark:text-white">United</span>
                <span className="text-xs text-gray-600 dark:text-dark-400 font-medium">Foundation</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-dark-300 text-sm leading-relaxed">
              Transforming lives through compassionate giving and sustainable community development across 50+ countries.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, url: '#' },
                { icon: Twitter, url: '#' },
                { icon: Instagram, url: '#' },
                { icon: Linkedin, url: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-10 h-10 bg-gray-100 dark:bg-dark-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-dark-300 hover:bg-primary-500 dark:hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Organization
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Our Mission', 'Board Members', 'Careers'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Programs</h3>
            <ul className="space-y-3">
              {['Education', 'Healthcare', 'Community Dev', 'Emergency Relief'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Impact Reports', 'Blog', 'News', 'Media Kit'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-dark-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-dark-300">contact@united.org</span>
              </li>
              <li className="flex gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-dark-300">New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 py-12 border-t border-gray-200 dark:border-dark-700">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Compliance & Certifications</h4>
            <div className="flex flex-wrap gap-3">
              {['ISO 9001', 'Charity Certified', '501(c)(3)', 'GiveWell Rated'].map((cert, i) => (
                <span key={i} className="text-xs font-medium text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h4>
            <div className="flex flex-wrap gap-3">
              <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                Download Annual Report
              </button>
              <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                Sustainability Report
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-dark-400">
              © 2024 United Charity Foundation. All rights reserved. Tax ID: 12-3456789
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-gray-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
