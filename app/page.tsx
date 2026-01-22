'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Shield, CheckCircle, ArrowRight, Flame, Camera, Lock, Radio, Droplet, Zap } from 'lucide-react';

export default function KKFiresWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    { icon: <Flame className="w-8 h-8" />, title: "Fire Protection Systems", desc: "Hydrant, Sprinkler & Suppression Systems" },
    { icon: <Shield className="w-8 h-8" />, title: "Fire Alarm & Detection", desc: "Advanced Detection & Warning Systems" },
    { icon: <Camera className="w-8 h-8" />, title: "CCTV & Surveillance", desc: "Complete Security Solutions" },
    { icon: <Lock className="w-8 h-8" />, title: "Access Control", desc: "Time Attendance & Entry Management" },
    { icon: <Radio className="w-8 h-8" />, title: "Public Address Systems", desc: "Emergency Communication Systems" },
    { icon: <Droplet className="w-8 h-8" />, title: "Water Leak Detection", desc: "Specialized Protection Systems" }
  ];

  const features = [
    { title: "Turnkey Solutions", desc: "From concept to commissioning under one roof" },
    { title: "ISO Certified", desc: "Quality assurance and international standards" },
    { title: "Pan-India Service", desc: "Comprehensive coverage across India" },
    { title: "Expert Team", desc: "Experienced professionals in life safety" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Flame className="w-8 h-8 text-red-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">KK Fire Services</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-red-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-red-50 rounded">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-red-50 rounded">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-red-50 rounded">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-red-50 rounded">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-red-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                ISO 9001:2015 Certified
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System Integrators in<br />Life Safety & Fire Protection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Complete turnkey solutions from concept to commissioning. Your trusted partner in fire safety and security systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gray-50 py-12 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <CheckCircle className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive fire safety and security solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-red-200">
                <div className="text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About KK Fire Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading system integrator specializing in life safety and fire protection solutions. With ISO 9001:2015 certification, we deliver complete turnkey solutions from concept to commissioning.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our expertise spans across fire protection systems, security solutions, and specialized safety equipment. We pride ourselves on providing everything under one roof with exceptional after-sales support.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Complete system design and integration</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Pan-India service coverage</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Outstanding product range and quality</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated customer satisfaction team</span>
                </div>
              </div>
            </div>
            <div className="bg-red-600 p-12 rounded-2xl text-white">
              <Shield className="w-20 h-20 mb-6" />
              <h3 className="text-3xl font-bold mb-4">ISO 9001:2015 Certified</h3>
              <p className="text-lg text-white/90">
                Quality management system certification ensuring the highest standards in fire safety and security solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to secure your facility? Contact us today</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@kkfireservices.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-gray-600">Pan-India Coverage</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Flame className="w-8 h-8 text-red-600" />
                <span className="ml-2 text-xl font-bold">KK Fire Services</span>
              </div>
              <p className="text-gray-400">
                System integrators in life safety and fire protection. ISO 9001:2015 certified.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fire Protection Systems</li>
                <li>Fire Alarm & Detection</li>
                <li>CCTV & Surveillance</li>
                <li>Access Control Systems</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KK Fire Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}