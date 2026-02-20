import { useState } from 'react';
import { Menu, X, ChevronDown, Moon, Sun, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-cream-100 dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">United</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <span className="text-gray-700 dark:text-gray-300">Mega Menu</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <span className="text-gray-700 dark:text-gray-300">Blog</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#campaign" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Campaign
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact
            </a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <span className="text-gray-700 dark:text-gray-300">Pages</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-bg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>

            <button className="hidden md:block bg-gray-900 dark:bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-primary-700 transition-all duration-300 font-medium">
              Donate Now
            </button>

            <button
              className="md:hidden p-2"
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
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-dark-border">
            <a href="#menu" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Mega Menu
            </a>
            <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              About
            </a>
            <a href="#blog" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Blog
            </a>
            <a href="#campaign" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Campaign
            </a>
            <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Contact
            </a>
            <a href="#pages" className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Pages
            </a>
            <button className="w-full bg-gray-900 dark:bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-primary-700 transition-all">
              Donate Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
