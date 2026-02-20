import { useState } from 'react';
import { Menu, X, ChevronDown, Moon, Sun, Heart, Globe, Award, BookOpen } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-cream-100 dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700 transition-all duration-300 backdrop-blur supports-[backdrop-filter]:bg-cream-100/75 dark:supports-[backdrop-filter]:bg-dark-900/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-gray-900 dark:text-white">United</span>
              <span className="text-xs text-gray-600 dark:text-dark-400 font-medium">Foundation</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 group-hover:bg-gray-100 dark:group-hover:bg-dark-800">
                <Globe className="w-4 h-4" />
                <span>Programs</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'programs' && (
                <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-dark-800 rounded-lg shadow-xl border border-gray-200 dark:border-dark-700 py-2">
                  <a href="#education" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700">
                    Education Programs
                  </a>
                  <a href="#healthcare" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700">
                    Healthcare
                  </a>
                  <a href="#community" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700">
                    Community Development
                  </a>
                </div>
              )}
            </div>

            <a href="#about" className="px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800">
              About
            </a>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 group-hover:bg-gray-100 dark:group-hover:bg-dark-800">
                <BookOpen className="w-4 h-4" />
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-dark-800 rounded-lg shadow-xl border border-gray-200 dark:border-dark-700 py-2">
                  <a href="#blog" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700">
                    Blog
                  </a>
                  <a href="#reports" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700">
                    Impact Reports
                  </a>
                  <a href="#news" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700">
                    News
                  </a>
                </div>
              )}
            </div>

            <a href="#impact" className="px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800">
              Impact
            </a>

            <a href="#contact" className="px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-dark-400" />
              )}
            </button>

            <button className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium text-sm">
              <Award className="w-4 h-4" />
              Donate Now
            </button>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800">
            <a href="#programs" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700">
              Programs
            </a>
            <a href="#about" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700">
              About
            </a>
            <a href="#resources" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700">
              Resources
            </a>
            <a href="#impact" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700">
              Impact
            </a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700">
              Contact
            </a>
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
              <Award className="w-4 h-4" />
              Donate Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
