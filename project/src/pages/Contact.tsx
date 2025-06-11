import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  User,
  Building
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 8AM-8PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@tropicalfresh.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tropical Avenue',
      subtitle: 'Miami, FL 33101'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8AM-8PM',
      subtitle: 'Sat-Sun: 9AM-6PM EST'
    }
  ];

  const officeLocations = [
    {
      city: 'Miami',
      address: '123 Tropical Avenue, Miami, FL 33101',
      phone: '+1 (555) 123-4567',
      isHeadquarters: true
    },
    {
      city: 'Los Angeles',
      address: '456 Pacific Coast Hwy, Los Angeles, CA 90210',
      phone: '+1 (555) 987-6543',
      isHeadquarters: false
    },
    {
      city: 'New York',
      address: '789 Broadway Street, New York, NY 10001',
      phone: '+1 (555) 456-7890',
      isHeadquarters: false
    }
  ];

  const faqs = [
    {
      question: 'What are your delivery areas?',
      answer: 'We deliver nationwide across all 50 states. Same-day delivery is available in select metropolitan areas.'
    },
    {
      question: 'How do you ensure fruit freshness?',
      answer: 'All our fruits are harvested at peak ripeness and transported in temperature-controlled vehicles to maintain optimal freshness.'
    },
    {
      question: 'Do you offer corporate discounts?',
      answer: 'Yes! We offer special pricing for bulk orders and corporate accounts. Contact us for a custom quote.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We guarantee 100% satisfaction. If you\'re not happy with your order, contact us within 24 hours for a full refund or replacement.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get in
              <span className="block text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Have questions about our tropical fruits or services? We're here to help! 
              Reach out to our friendly team anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="fade-in text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg text-gray-700 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-gray-500">
                  {info.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Support</option>
                        <option value="delivery">Delivery Question</option>
                        <option value="corporate">Corporate Sales</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Office Locations */}
            <div className="fade-in space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Locations</h2>
                <div className="space-y-6">
                  {officeLocations.map((location, index) => (
                    <div
                      key={location.city}
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {location.city}
                        </h3>
                        {location.isHeadquarters && (
                          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                            Headquarters
                          </span>
                        )}
                      </div>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-start">
                          <MapPin className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          {location.address}
                        </p>
                        <p className="flex items-center">
                          <Phone className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                          {location.phone}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Miami Headquarters</h3>
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-emerald-500 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive map coming soon</p>
                    <p className="text-sm text-gray-500">123 Tropical Avenue, Miami, FL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="fade-in bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 text-emerald-500 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">
                  {faq.answer}
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
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Our customer service team is standing by to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a
                href="mailto:hello@tropicalfresh.com"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;