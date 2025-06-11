import React, { useEffect } from 'react';
import { 
  Users, 
  Award, 
  Globe, 
  Heart,
  Leaf,
  Target,
  Eye,
  Star
} from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every fruit is carefully selected and inspected to ensure the highest quality standards.'
    },
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'We partner with farmers worldwide to bring you authentic tropical flavors from their origin.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Committed to environmentally responsible sourcing and packaging methods.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority, with personalized service and support.'
    }
  ];

  const team = [
    {
      name: 'Maria Santos',
      role: 'Founder & CEO',
      bio: 'With 15 years in tropical agriculture, Maria founded TropicalFresh to share her passion for exotic fruits.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'James Rodriguez',
      role: 'Head of Operations',
      bio: 'James ensures our supply chain delivers the freshest fruits with his logistics expertise.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Anna Chen',
      role: 'Quality Director',
      bio: 'Anna maintains our quality standards with her background in food science and nutrition.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const milestones = [
    { year: '2020', event: 'TropicalFresh Founded', description: 'Started with a dream to bring tropical fruits to everyone' },
    { year: '2021', event: 'First Farm Partnership', description: 'Established relationships with premium tropical fruit farms' },
    { year: '2022', event: '10,000 Customers', description: 'Reached our first major customer milestone' },
    { year: '2023', event: 'National Expansion', description: 'Extended delivery to all 50 states' },
    { year: '2024', event: 'Sustainability Award', description: 'Recognized for our eco-friendly practices' },
    { year: '2025', event: 'Global Reach', description: 'Expanding to serve customers worldwide' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Our Story of
                <span className="block text-yellow-300">Tropical Passion</span>
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
                From a small family dream to a nationwide mission of bringing the world's 
                finest tropical fruits to your table with love, care, and uncompromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-emerald-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To make premium tropical fruits accessible to everyone while supporting 
                sustainable farming practices and building lasting relationships with our 
                farming partners around the world.
              </p>
              
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-emerald-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the world's most trusted source for tropical fruits, creating 
                a global community that celebrates the diversity and richness of tropical 
                flavors while promoting healthy living.
              </p>
            </div>
            
            <div className="fade-in relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <Award className="h-16 w-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Quality Promise</h3>
                  <p className="text-lg">
                    Every fruit meets our strict quality standards or we'll make it right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at TropicalFresh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="fade-in bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind TropicalFresh, dedicated to bringing you the best tropical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="fade-in text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our tropical fruit adventure.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`fade-in relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-4xl font-bold mb-6">Join Our Tropical Family</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Become part of our growing community of tropical fruit enthusiasts 
              and taste the difference quality makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Get in Touch
              </a>
              <a
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;