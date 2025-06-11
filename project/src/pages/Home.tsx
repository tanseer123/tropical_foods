import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Truck, 
  Shield, 
  Clock, 
  Users,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Fresh tropical fruits delivered to your doorstep within 24 hours'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Premium quality fruits sourced directly from tropical farms'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock customer support for all your needs'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Health Enthusiast',
      content: 'The freshest tropical fruits I\'ve ever tasted! TropicalFresh has become my go-to for healthy snacking.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Restaurant Owner',
      content: 'Outstanding quality and reliability. My customers love the tropical fruit dishes we create with their produce.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Nutritionist',
      content: 'I recommend TropicalFresh to all my clients. The nutritional value and taste are unmatched.',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Fresh
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Tropical
              </span>
              Delights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the vibrant flavors of paradise with our premium selection of 
              tropical fruits and foods, delivered fresh to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="group inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce delay-75"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce delay-150"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce delay-300"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose TropicalFresh?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to bringing you the finest tropical fruits with unmatched quality and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="fade-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '50+', label: 'Tropical Varieties' },
              { number: '24/7', label: 'Customer Support' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="fade-in text-white"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-emerald-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="fade-in bg-gray-50 p-8 rounded-2xl relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="h-8 w-8 text-emerald-500 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Taste Paradise?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of customers who trust TropicalFresh for their exotic fruit needs.
            </p>
            <Link
              to="/products"
              className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;