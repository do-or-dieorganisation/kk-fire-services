'use client';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Shield, CheckCircle, ArrowRight, Flame, Camera, Lock, Radio, Droplet, Zap, AlertTriangle, Users, Award, Building2, FileCheck, Wrench } from 'lucide-react';
import { ChangeEvent, FormEvent } from 'react';

export default function KKFiresWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    { icon: <Flame className="w-8 h-8" />, title: "Fire Hydrant & Sprinkler Systems", desc: "Complete design, installation & commissioning" },
    { icon: <Shield className="w-8 h-8" />, title: "Fire Alarm & Detection System", desc: "Smoke Detection, Heat Detection & Advanced Alarms" },
    { icon: <Zap className="w-8 h-8" />, title: "Fire Suppression System", desc: "NOVEC/FM200 systems for server rooms & critical areas" },
    { icon: <Camera className="w-8 h-8" />, title: "CCTV Surveillance", desc: "Complete security and monitoring solutions" },
    { icon: <Lock className="w-8 h-8" />, title: "Access Control & Time Attendance", desc: "Entry management and attendance tracking" },
    { icon: <Radio className="w-8 h-8" />, title: "Public Address System", desc: "Emergency communication and PA systems" },
    { icon: <Droplet className="w-8 h-8" />, title: "Water Leak Detection", desc: "Advanced leak detection systems" },
    { icon: <AlertTriangle className="w-8 h-8" />, title: "Rodent Repellent System", desc: "Specialized protection systems" },
    { icon: <Wrench className="w-8 h-8" />, title: "Fire Extinguisher", desc: "Supply, installation & refilling services" }
  ];

  const consultancyServices = [
    "Fire Fighting System Design (Hydrant, Sprinkler, Hose Reel, Wet/Dry Risers)",
    "Fire Alarm & Detection System Design",
    "Smoke Detection, Heat Detection & Gas Suppression",
    "Fire Pump House & Water Storage Tank Sizing",
    "Integrated Fire & Life Safety Systems (NBC/NFPA Norms)",
    "Project Management & Approvals",
    "Testing & Certification",
    "NDT & Material Testing"
  ];

  const achievements = [
    { icon: <Award className="w-8 h-8" />, text: "Phenomenal growth over the years" },
    { icon: <CheckCircle className="w-8 h-8" />, text: "90% business from repeated customers" },
    { icon: <Building2 className="w-8 h-8" />, text: "Many successful projects delivered" },
    { icon: <Users className="w-8 h-8" />, text: "Team of 4 Engineers & 11 service personnel" }
  ];

  const clients = [
    "Venkatesh Graffiti, Pune",
    "Force Motors, Akurdi, Pune",
    "GST Office, Yerawada, Pune",
    "Sahyadri Hospital, Pune",
    "Phoenix Mall, Viman Nagar, Pune",
    "Tata Motors, Pimpri Chinchwad",
    "Amanora Mall, Pune",
    "Dorabjee Mall, Undri, Pune"
  ];

  const handleInputChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Flame className="w-8 h-8 text-orange-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">KK Fire Services</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition">Services</a>
              <a href="#consultancy" className="text-gray-700 hover:text-orange-600 transition">Consultancy</a>
              <a href="#clients" className="text-gray-700 hover:text-orange-600 transition">Clients</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">Contact</a>
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
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">Services</a>
              <a href="#consultancy" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">Consultancy</a>
              <a href="#clients" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">Clients</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-orange-50 rounded">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-orange-600 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                ISO 9001:2015 Certified • Established 2015
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leading Fire & Safety<br />System Integrators in Pune
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Single window fire fighting service provider. Design & Consultancy to Turnkey Solutions - Concept to Commissioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition inline-flex items-center justify-center">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">9+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <p className="text-gray-600">Repeat Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24hrs</div>
              <p className="text-gray-600">Response Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">Pan-India</div>
              <p className="text-gray-600">Service Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About KK Fire Services</h2>
              <p className="text-lg text-gray-600 mb-4">
                Established in 2015 at Pune, Maharashtra, we are <strong>ISO 9001:2015 Certified</strong> system integrators in the field of Life Safety, Electronic Surveillance & Security, and Asset Protection.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We offer complete turnkey solutions from concept to commissioning, with outstanding product range in all segments and great service & support.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our success is based on offering complete customer satisfaction with our "Total Package Solution under one roof" approach, saving your valuable time.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Our Core Values</h3>
                <p className="text-gray-700">Integrity • Passion • Commitment • Dedication • Excellence • Client Satisfaction</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">4 Qualified Engineers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">11 Service Personnel</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">NBC/NFPA Compliance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">24hr Service Response</span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-orange-600 p-12 rounded-2xl text-white mb-6">
                <Shield className="w-20 h-20 mb-6" />
                <h3 className="text-3xl font-bold mb-4">ISO 9001:2015 Certified</h3>
                <p className="text-lg text-white/90">
                  Quality management system certification ensuring the highest standards in fire safety and security solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-orange-600 flex justify-center mb-3">
                      {achievement.icon}
                    </div>
                    <p className="text-sm text-gray-700">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision ourselves as a pioneering force in integrated engineering consultancy, recognized as the most trusted and sought-after partner for project management, structural design, MEP services, firefighting solutions, surveys, testing, and infrastructure planning both nationally and internationally. Our mission is to build a strong brand identity by being a reliable, technology-driven, and client-focused consultancy, delivering excellence across every service we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive fire safety, security & protection solutions for Industrial, Residential & Commercial segments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-orange-300">
                <div className="text-orange-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section id="consultancy" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design & Consultancy Services</h2>
            <p className="text-xl text-gray-600">Expert design, project management & certification services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {consultancyServices.map((service, idx) => (
              <div key={idx} className="flex items-start bg-white p-6 rounded-lg shadow">
                <FileCheck className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Annual Maintenance Contracts (AMC)</h2>
            <p className="text-xl text-gray-600">Prompt service at cost-effective rates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-xl border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive AMC</h3>
              <p className="text-gray-700 mb-4">
                Periodic PMS (Preventive Maintenance Services) ensuring safe functioning of all installed systems.
              </p>
              <p className="text-gray-700">
                <strong>Includes:</strong> Replacement of spare parts against manufacturing defects (except consumables)
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Comprehensive AMC</h3>
              <p className="text-gray-700 mb-4">
                Periodic PMS (Preventive Maintenance Services) ensuring safe functioning of all installed systems.
              </p>
              <p className="text-gray-700">
                <strong>Note:</strong> Spare parts and consumables charged at prevailing prices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Prestigious Clients</h2>
            <p className="text-xl text-gray-600">Trusted by leading organizations across Pune</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <Building2 className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
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
                  <MapPin className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">264/4 Omkar Colony, Lane No 4,<br />Near Mai Mangeshkar Hospital,<br />Warje, Pune 411058</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 9922851263</p>
                    <p className="text-gray-600">+91 8983861237</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-orange-600 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">kkfireservices@gmail.com</p>
                    <p className="text-gray-600">info@kkfireservices.in</p>
                    <p className="text-gray-600">karankale8080@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <p className="text-gray-800 font-semibold mb-2">Service Response Time</p>
                <p className="text-gray-700">Any call or problem will be attended within <strong>24 hours</strong></p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Flame className="w-8 h-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold">KK Fire Services</span>
              </div>
              <p className="text-gray-400 mb-4">
                ISO 9001:2015 Certified<br />
                System Integrators in Life Safety & Fire Protection
              </p>
              <p className="text-sm text-gray-400">Established 2015 • Pune, Maharashtra</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#consultancy" className="hover:text-white transition">Consultancy</a></li>
                <li><a href="#clients" className="hover:text-white transition">Clients</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fire Hydrant & Sprinkler</li>
                <li>Fire Alarm & Detection</li>
                <li>Fire Suppression Systems</li>
                <li>CCTV & Surveillance</li>
                <li>Access Control</li>
                <li>PA Systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 9922851263</li>
                <li>+91 8983861237</li>
                <li className="text-sm">kkfireservices@gmail.com</li>
                <li className="text-sm">Warje, Pune 411058</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KK Fire Services. All rights reserved. | Unity is Strength - When there is teamwork and collaboration, wonderful things can be achieved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}