import  { useState, useEffect } from 'react';
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
      <footer className={`bg-gradient-to-b from-green-900 to-green-950 ${isScrolledOrNotHome ? 'text-white' : 'text-black'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-green-700 to-green-800 rounded-full">
                  <Leaf className={`h-6 w-6 ${iconColorClass}`} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Tropical Food Store
              </span>
              </div>
              <p className={`leading-relaxed ${textColorClass}`}>
                Your trusted destination for authentic South Asian groceries, spices, and specialty foods.
                Quality, freshness, and authentic flavors in every product.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, index) => (
                    <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-110"
                    >
                      <Icon className={`h-5 w-5 ${iconColorClass}`} />
                    </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h3>
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
                          className={`hover:text-green-400 transition-colors duration-300 hover:translate-x-1 inline-block ${textColorClass}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Popular Products</h3>
              <ul className="space-y-3">
                {[
                  'Shan Biryani Masala',
                  'Basmati Rice',
                  'Red Kidney Beans',
                  'Turmeric Powder',
                  'Aachi Sambar Powder',
                  'MDH Garam Masala'
                ].map((product) => (
                    <li key={product}>
                  <span className={`hover:text-green-400 transition-colors duration-300 cursor-pointer ${textColorClass}`}>
                    {product}
                  </span>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className={`h-5 w-5 mt-1 flex-shrink-0 ${iconColorClass}`} />
                  <span className={textColorClass}>
                  123 Heritage Street<br />
                  London, UK SW1A 1AA
                </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className={`h-5 w-5 ${iconColorClass}`} />
                  <span className={textColorClass}>+44 20 7123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className={`h-5 w-5 ${iconColorClass}`} />
                  <span className={textColorClass}>info@asianfoodstore.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-800 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
            <p className={`flex items-center flex-wrap gap-1 ${textColorClass}`}>
              © 2025 Tropical Food Store. Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for authentic food lovers.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className={`hover:text-green-400 transition-colors duration-300 ${textColorClass}`}>
                Privacy Policy
              </Link>
              <Link to="#" className={`hover:text-green-400 transition-colors duration-300 ${textColorClass}`}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;