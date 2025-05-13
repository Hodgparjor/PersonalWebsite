import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img
                src="/assets/images/PersonalWebsiteLogoTransparent.png"
                alt="AB Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-text-light dark:text-text-dark hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/journey" className="text-text-light dark:text-text-dark hover:text-accent transition-colors">
              Journey
            </Link>
            <Link to="/portfolio" className="text-text-light dark:text-text-dark hover:text-accent transition-colors">
              Portfolio
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 text-text-light dark:text-text-dark hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}