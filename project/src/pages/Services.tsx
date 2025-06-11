import React, { useEffect } from 'react';
import { 
  Truck, 
  Clock, 
  Shield, 
  Gift, 
  Users, 
  CheckCircle,
  Star,
  ArrowRight,
  Package,
  Leaf,
  Heart
} from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Truck,
      title: 'Express Delivery',
      description: 'Same-day delivery available in select areas, next-day delivery nationwide',
      features: ['Temperature-controlled transport', 'Real-time tracking', 'Flexible delivery windows'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Gift,
      title: 'Custom Gift Boxes',
      description: 'Beautifully curated tropical fruit gift boxes for any occasion',
      features: ['Personalized messages', 'Premium packaging', 'Seasonal selections'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Users,
      title: 'Corporate Catering',
      description: 'Fresh tropical fruit catering for offices, events, and meetings',
      features: ['Bulk pricing', 'Regular delivery schedules', 'Custom arrangements'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Package,
      title: 'Subscription Boxes',
      description: 'Monthly curated boxes of seasonal tropical fruits delivered to your door',
      features: ['Flexible scheduling', 'Variety guarantee', 'Cancel anytime'],
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const plans = [
    {
      name: 'Fruit Explorer',
      price: 24.99,
      period: 'month',
      description: 'Perfect for trying new tropical fruits',
      features: [
        '3-4 different tropical fruits',
        'Monthly delivery',
        'Nutritional information cards',
        'Recipe suggestions',
        'Free shipping'
      ],
      popular: false
    },
    {
      name: 'Tropical Family',
      price: 39.99,
      period: 'month',
      description: 'Ideal for families who love tropical flavors',
      features: [
        '5-7 different tropical fruits',
        'Larger quantities',
        'Monthly delivery',
        'Nutritional information cards',
        'Recipe suggestions',
        'Priority customer support',
        'Free shipping'
      ],
      popular: true
    },
    {
      name: 'Paradise Premium',
      price: 59.99,
      period: 'month',
      description: 'The ultimate tropical fruit experience',
      features: [
        '8-10 different tropical fruits',
        'Premium exotic varieties',
        'Bi-weekly delivery option',
        'Nutritional information cards',
        'Exclusive recipes',
        'Priority customer support',
        'Free express shipping',
        'Early access to new fruits'
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Choose Your Service',
      description: 'Select from our range of services or subscription plans'
    },
    {
      step: 2,
      title: 'Customize Your Order',
      description: 'Personalize your selection based on preferences and dietary needs'
    },
    {
      step: 3,
      title: 'Schedule Delivery',
      description: 'Pick your preferred delivery time and frequency'
    },
    {
      step: 4,
      title: 'Enjoy Fresh Tropical Fruits',
      description: 'Receive your carefully packed, fresh tropical fruits'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium
              <span className="block text-yellow-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              From express delivery to custom gift boxes, we offer comprehensive services 
              to meet all your tropical fruit needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to bring tropical paradise to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="fade-in bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Subscription Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular deliveries of fresh tropical fruits tailored to your preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`fade-in bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${
                  plan.popular ? 'ring-2 ring-emerald-500' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with our services is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="fade-in text-center relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-emerald-500 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium service offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Guarantee',
                description: 'Every fruit is hand-selected and quality-checked before delivery'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'Delivery times that work with your schedule, including weekends'
              },
              {
                icon: Heart,
                title: 'Customer Care',
                description: 'Dedicated support team available 24/7 for all your needs'
              },
              {
                icon: Leaf,
                title: 'Sustainable Packaging',
                description: 'Eco-friendly packaging materials that keep fruits fresh'
              },
              {
                icon: Star,
                title: 'Premium Selection',
                description: 'Access to rare and exotic tropical fruits from around the world'
              },
              {
                icon: Truck,
                title: 'Reliable Delivery',
                description: 'Temperature-controlled transport ensures perfect freshness'
              }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="fade-in text-center p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Choose the service that fits your needs and start enjoying fresh tropical fruits today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl">
                Start Subscription
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;