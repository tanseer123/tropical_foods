import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine if header should be considered scrolled
  const isScrolledOrNotHome = isScrolled || location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Optional background overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div
                className={`${
                  isScrolledOrNotHome
                    ? 'p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full'
                    : 'p-0 bg-transparent'
                } group-hover:scale-110 transition-transform duration-300`}
              >
                <Leaf
                  className={`h-6 w-6 ${
                    isScrolledOrNotHome ? 'text-white' : 'text-emerald-600'
                  }`}
                />
              </div>
              <span
                className={`text-xl font-bold ${
                  isScrolledOrNotHome
                    ? 'text-emerald-600'
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'
                }`}
              >
                Tropical Foods
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? isScrolledOrNotHome
                      ? 'text-emerald-600'
                      : 'text-black'
                    : isScrolledOrNotHome
                    ? 'text-gray-700 hover:text-emerald-600'
                    : 'text-black/90 hover:text-black'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolledOrNotHome
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-emerald-600 hover:bg-emerald-100'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 overflow-hidden animate-in slide-in-from-top-2 duration-200 z-50">
              <nav className="px-4 py-2">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block py-3 px-2 font-medium transition-colors duration-300 ${
                        isActive
                          ? 'text-emerald-600 bg-emerald-50 rounded-lg'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
