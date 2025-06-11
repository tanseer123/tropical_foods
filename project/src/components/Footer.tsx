import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Leaf, 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolledOrNotHome = isScrolled || location.pathname !== '/';

  // Conditional classes for text and icon colors based on scroll and path
  const textColorClass = isScrolledOrNotHome ? 'text-white' : 'text-black';
  const iconColorClass = isScrolledOrNotHome ? 'text-white' : 'text-black';

  return (
    <footer className={`bg-gradient-to-b from-gray-900 to-black ${isScrolledOrNotHome ? 'text-white' : 'text-black'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                <Leaf className={`h-6 w-6 ${iconColorClass}`} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Tropical Foods
              </span>
            </div>
            <p className={`leading-relaxed ${textColorClass}`}>
              Bringing you the freshest tropical fruits and foods from around the world. 
              Quality, freshness, and tropical goodness in every bite.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110"
                >
                  <Icon className={`h-5 w-5 ${iconColorClass}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block ${textColorClass}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Our Products</h3>
            <ul className="space-y-3">
              {[
                'Fresh Mangoes',
                'Pineapples',
                'Dragon Fruits',
                'Passion Fruits',
                'Tropical Smoothies',
                'Dried Fruits'
              ].map((product) => (
                <li key={product}>
                  <span className={`hover:text-emerald-400 transition-colors duration-300 cursor-pointer ${textColorClass}`}>
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className={`h-5 w-5 mt-1 flex-shrink-0 ${iconColorClass}`} />
                <span className={textColorClass}>
                  123 Tropical Avenue<br />
                  Miami, FL 33101
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`h-5 w-5 ${iconColorClass}`} />
                <span className={textColorClass}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`h-5 w-5 ${iconColorClass}`} />
                <span className={textColorClass}>hello@tropicalfresh.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
          <p className={`flex items-center flex-wrap gap-1 ${textColorClass}`}>
            © 2025 TropicalFresh. Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for tropical food lovers.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className={`hover:text-emerald-400 transition-colors duration-300 ${textColorClass}`}>
              Privacy Policy
            </Link>
            <Link to="#" className={`hover:text-emerald-400 transition-colors duration-300 ${textColorClass}`}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
