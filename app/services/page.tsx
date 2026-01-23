import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import {
  Flame,
  Shield,
  Zap,
  Camera,
  Lock,
  Radio,
  Droplet,
  AlertTriangle,
  Wrench,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fire Safety Services in Pune | KK Fire Services',
  description:
    'Comprehensive fire safety solutions including Fire Hydrant, Sprinkler Systems, Fire Alarms, CCTV, Access Control & more. ISO 9001:2015 certified. Serving Pune & Pan-India.',
  keywords:
    'fire safety services pune, fire hydrant installation, fire alarm system, sprinkler system, fire protection, NBC NFPA compliance',
};

const services = [
  {
    icon: Flame,
    title: 'Fire Hydrant & Sprinkler Systems',
    desc: 'Complete design, installation & commissioning of fire hydrant and sprinkler systems as per NBC/NFPA standards.',
    slug: 'fire-hydrant-sprinkler',
    features: [
      'Hydraulic calculations',
      'Pump selection & installation',
      'Underground & overhead piping',
      'Testing & commissioning',
    ],
  },
  {
    icon: Shield,
    title: 'Fire Alarm & Detection System',
    desc: 'Advanced fire alarm systems with smoke detection, heat detection, and multi-zone control panels.',
    slug: 'fire-alarm-detection',
    features: [
      'Addressable fire alarm panels',
      'Smoke & heat detectors',
      'Manual call points',
      'Audio-visual alarms',
    ],
  },
  {
    icon: Zap,
    title: 'Fire Suppression System',
    desc: 'NOVEC 1230/FM200 gas suppression systems for server rooms and critical areas.',
    slug: 'fire-suppression',
    features: [
      'Clean agent systems',
      'Server room protection',
      'Data center solutions',
      'Zero residue',
    ],
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    desc: 'Complete security and monitoring solutions with HD cameras and cloud storage.',
    slug: 'cctv-surveillance',
    features: [
      'IP & analog cameras',
      'NVR/DVR systems',
      'Remote monitoring',
      'Mobile app access',
    ],
  },
  {
    icon: Lock,
    title: 'Access Control & Time Attendance',
    desc: 'Biometric and card-based access control systems with attendance tracking.',
    slug: 'access-control',
    features: [
      'Biometric systems',
      'RFID card access',
      'Time attendance',
      'Integration with payroll',
    ],
  },
  {
    icon: Radio,
    title: 'Public Address System',
    desc: 'Emergency communication and PA systems for buildings and campuses.',
    slug: 'public-address',
    features: [
      'Emergency announcements',
      'Zone-based paging',
      'Background music',
      'Integration with fire alarm',
    ],
  },
  {
    icon: Droplet,
    title: 'Water Leak Detection',
    desc: 'Advanced leak detection systems to prevent water damage in critical areas.',
    slug: 'water-leak-detection',
    features: [
      'Early leak detection',
      'Automatic alerts',
      'Sensor networks',
      'Prevent water damage',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Rodent Repellent System',
    desc: 'Specialized electronic rodent repellent systems for electrical panels and sensitive areas.',
    slug: 'rodent-repellent',
    features: [
      'Ultrasonic technology',
      'Chemical-free solution',
      'Safe for humans',
      'Long-term protection',
    ],
  },
  {
    icon: Wrench,
    title: 'Fire Extinguisher',
    desc: 'Supply, installation, refilling and AMC services for all types of fire extinguishers.',
    slug: 'fire-extinguisher',
    features: [
      'ABC, CO2, Foam types',
      'Refilling services',
      'Annual maintenance',
      'ISI certified',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-orange-600 to-orange-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Fire Safety & Security Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                Comprehensive solutions for Industrial, Residential & Commercial
                segments. ISO 9001:2015 certified with NBC/NFPA compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition inline-flex items-center justify-center"
                >
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+919922851263"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center"
                >
                  Call: +91 9922851263
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Explore Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Click on any service to learn more about our solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.slug}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-orange-300 group"
                  >
                    <div className="text-orange-600 mb-4 group-hover:scale-110 transition">
                      <Icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose KK Fire Services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  9+
                </div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  ISO
                </div>
                <p className="text-gray-600">9001:2015 Certified</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  24hrs
                </div>
                <p className="text-gray-600">Response Time</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  90%
                </div>
                <p className="text-gray-600">Repeat Customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Facility?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free consultation and quote from our certified experts
            </p>
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center"
            >
              Contact Us Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}