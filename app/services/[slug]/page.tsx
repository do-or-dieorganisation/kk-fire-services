import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Award,
} from 'lucide-react';

// Service data
const servicesData = {
  'fire-hydrant-sprinkler': {
    title: 'Fire Hydrant & Sprinkler Systems',
    description:
      'Professional fire hydrant and sprinkler system design, installation, and commissioning services compliant with NBC and NFPA standards.',
    fullDescription:
      'Our fire hydrant and sprinkler systems provide comprehensive fire protection for commercial, industrial, and residential buildings. We handle complete turnkey solutions from hydraulic calculations to final commissioning, ensuring your facility meets all safety regulations.',
    features: [
      'Complete hydraulic calculations and system design',
      'Fire pump selection, installation and testing',
      'Underground and overhead pipeline installation',
      'Sprinkler head selection and placement',
      'Control valve installation and configuration',
      'Pressure testing and commissioning',
      'NBC and NFPA compliant installations',
      'Annual maintenance contracts available',
    ],
    benefits: [
      'Automatic fire detection and suppression',
      'Minimal water damage compared to manual firefighting',
      'Insurance premium reduction',
      'Compliance with building codes',
      '24/7 fire protection',
      'Proven reliability and effectiveness',
    ],
    applications: [
      'Commercial Buildings & Offices',
      'Manufacturing Facilities',
      'Warehouses & Storage',
      'Shopping Malls & Retail',
      'Hospitals & Healthcare',
      'Hotels & Hospitality',
      'Educational Institutions',
      'Residential Complexes',
    ],
  },
  'fire-alarm-detection': {
    title: 'Fire Alarm & Detection System',
    description:
      'Advanced addressable fire alarm systems with smoke detection, heat detection, and multi-zone control for early fire detection and warning.',
    fullDescription:
      'Our fire alarm and detection systems provide early warning of fire incidents, allowing quick evacuation and fire suppression response. We install state-of-the-art addressable systems that pinpoint the exact location of fire incidents.',
    features: [
      'Addressable fire alarm control panels',
      'Optical smoke detectors',
      'Heat detectors (fixed and rate-of-rise)',
      'Manual call points',
      'Audio-visual alarm devices',
      'Beam detectors for large areas',
      'Fire telephone systems',
      'Integration with building management systems',
    ],
    benefits: [
      'Early fire detection saves lives',
      'Pinpoint accuracy with addressable systems',
      'Reduced false alarms',
      'Automatic notification to fire department',
      'Integration with other safety systems',
      'Compliance with fire safety regulations',
    ],
    applications: [
      'Corporate Offices',
      'IT Parks & Data Centers',
      'Hospitals & Clinics',
      'Hotels & Restaurants',
      'Shopping Centers',
      'Industrial Plants',
      'Educational Campuses',
      'High-rise Buildings',
    ],
  },
  'fire-suppression': {
    title: 'Fire Suppression System',
    description:
      'NOVEC 1230 and FM200 clean agent fire suppression systems for server rooms, data centers, and critical equipment protection.',
    fullDescription:
      'Our gaseous fire suppression systems use clean agents like NOVEC 1230 and FM200 that extinguish fires without water damage, making them ideal for protecting sensitive electronic equipment and valuable assets.',
    features: [
      'NOVEC 1230 clean agent systems',
      'FM200 suppression systems',
      'CO2 fire suppression',
      'Kitchen hood suppression',
      'Automatic detection and release',
      'Manual override capability',
      'Pre-discharge alarms',
      'Zero residue after discharge',
    ],
    benefits: [
      'No water damage to equipment',
      'Electrically non-conductive',
      'Safe for occupied spaces',
      'Fast fire suppression (< 10 seconds)',
      'Environmentally friendly agents',
      'Minimal cleanup after discharge',
    ],
    applications: [
      'Server Rooms & Data Centers',
      'Telecom Facilities',
      'Control Rooms',
      'Museums & Archives',
      'Electrical Rooms',
      'Commercial Kitchens',
      'Medical Equipment Rooms',
      'Generator Rooms',
    ],
  },
  'cctv-surveillance': {
    title: 'CCTV Surveillance Systems',
    description:
      'Complete security surveillance solutions with HD IP cameras, NVR systems, and remote monitoring capabilities.',
    fullDescription:
      'Our CCTV surveillance systems provide 24/7 security monitoring with high-definition cameras, intelligent analytics, and cloud storage options. We design custom solutions based on your security requirements.',
    features: [
      'HD IP cameras (2MP to 8MP)',
      'PTZ (Pan-Tilt-Zoom) cameras',
      'Night vision capabilities',
      'Network video recorders (NVR)',
      'Cloud storage integration',
      'Mobile app monitoring',
      'Motion detection alerts',
      'Video analytics (face detection, counting)',
    ],
    benefits: [
      'Crime deterrence and prevention',
      'Real-time monitoring from anywhere',
      'Evidence collection',
      'Employee safety and productivity',
      'Insurance claim support',
      'Scalable and expandable',
    ],
    applications: [
      'Commercial Buildings',
      'Retail Stores',
      'Manufacturing Units',
      'Residential Complexes',
      'Parking Areas',
      'Warehouses',
      'Schools & Colleges',
      'Hospitals',
    ],
  },
  'access-control': {
    title: 'Access Control & Time Attendance',
    description:
      'Biometric and RFID-based access control systems with integrated time attendance tracking.',
    fullDescription:
      'Our access control solutions secure your premises by managing who can access specific areas and when. Integrated time attendance tracking helps manage employee productivity and payroll.',
    features: [
      'Fingerprint biometric readers',
      'Face recognition systems',
      'RFID card access',
      'PIN-based access',
      'Electronic door locks',
      'Turnstiles and barriers',
      'Time attendance software',
      'Payroll system integration',
    ],
    benefits: [
      'Enhanced security and access control',
      'Eliminate buddy punching',
      'Automated attendance tracking',
      'Detailed access logs and reports',
      'Remote door management',
      'Integration with HR systems',
    ],
    applications: [
      'Corporate Offices',
      'Manufacturing Plants',
      'IT Companies',
      'Educational Institutions',
      'Hospitals',
      'Government Buildings',
      'Data Centers',
      'Restricted Areas',
    ],
  },
  'public-address': {
    title: 'Public Address System',
    description:
      'Emergency communication and PA systems for buildings, campuses, and industrial facilities.',
    fullDescription:
      'Our public address systems provide clear audio communication for emergencies, announcements, and background music. Integrated with fire alarm systems for emergency notifications.',
    features: [
      'Zone-based audio distribution',
      'Emergency announcement capability',
      'Integration with fire alarm',
      'Background music system',
      'Microphone stations',
      'IP-based PA systems',
      'Voice evacuation systems',
      'Audio recording and playback',
    ],
    benefits: [
      'Emergency communication',
      'Multi-zone announcements',
      'Scheduled announcements',
      'Enhanced employee communication',
      'Compliance with safety norms',
      'Scalable and flexible',
    ],
    applications: [
      'Corporate Campuses',
      'Manufacturing Facilities',
      'Shopping Malls',
      'Airports & Railway Stations',
      'Schools & Universities',
      'Hospitals',
      'Sports Stadiums',
      'Industrial Plants',
    ],
  },
  'water-leak-detection': {
    title: 'Water Leak Detection System',
    description:
      'Advanced leak detection systems to prevent water damage in critical areas like server rooms and basements.',
    fullDescription:
      'Our water leak detection systems provide early warning of water leaks, preventing costly damage to equipment and infrastructure. Ideal for areas where water intrusion could cause significant damage.',
    features: [
      'Leak detection sensors',
      'Rope sensors for large areas',
      'Automatic SMS/email alerts',
      'Control panel with alarm',
      'Integration with BMS',
      'Valve control for automatic shut-off',
      'Real-time monitoring',
      'Battery backup',
    ],
    benefits: [
      'Prevent water damage',
      'Early leak detection',
      'Reduce repair costs',
      'Protect sensitive equipment',
      'Insurance claim prevention',
      'Peace of mind',
    ],
    applications: [
      'Server Rooms',
      'Data Centers',
      'Basements',
      'HVAC Rooms',
      'Clean Rooms',
      'Museums',
      'Pharmaceutical Plants',
      'Food Processing Units',
    ],
  },
  'rodent-repellent': {
    title: 'Rodent Repellent System',
    description:
      'Electronic ultrasonic rodent repellent systems for electrical panels and sensitive areas.',
    fullDescription:
      'Our rodent repellent systems use ultrasonic technology to keep rodents away from electrical panels, cable trays, and sensitive equipment without using harmful chemicals.',
    features: [
      'Ultrasonic frequency emission',
      'Chemical-free solution',
      'Safe for humans and pets',
      'Low power consumption',
      'Easy installation',
      'Maintenance-free operation',
      'Wide coverage area',
      'Suitable for indoor/outdoor use',
    ],
    benefits: [
      'Prevent electrical short circuits',
      'Avoid equipment damage',
      'Chemical-free and eco-friendly',
      'Long-term protection',
      'Cost-effective solution',
      'No harm to humans or pets',
    ],
    applications: [
      'Electrical Panels',
      'Cable Trays',
      'Control Rooms',
      'Server Rooms',
      'Warehouses',
      'Food Storage Areas',
      'Manufacturing Plants',
      'Residential Buildings',
    ],
  },
  'fire-extinguisher': {
    title: 'Fire Extinguisher Services',
    description:
      'Supply, installation, refilling, and AMC services for all types of fire extinguishers.',
    fullDescription:
      'We provide complete fire extinguisher solutions including supply of ISI-certified extinguishers, installation, annual maintenance, refilling, and hydrostatic testing.',
    features: [
      'ABC type fire extinguishers',
      'CO2 fire extinguishers',
      'Foam type extinguishers',
      'Water type extinguishers',
      'Clean agent extinguishers',
      'ISI certified products',
      'Refilling services',
      'Hydrostatic testing',
    ],
    benefits: [
      'ISI certified quality',
      'Regular maintenance ensures readiness',
      'Compliance with fire safety norms',
      'Quick response in emergencies',
      'Cost-effective fire protection',
      'Expert installation and training',
    ],
    applications: [
      'Offices & Commercial Buildings',
      'Manufacturing Units',
      'Residential Buildings',
      'Hotels & Restaurants',
      'Educational Institutions',
      'Hospitals',
      'Vehicles',
      'All Types of Buildings',
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return {
      title: 'Service Not Found | KK Fire Services',
    };
  }

  return {
    title: `${service.title} in Pune | KK Fire Services`,
    description: service.description,
    keywords: `${service.title}, fire safety pune, ${slug}, NBC NFPA compliance`,
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-orange-600 to-orange-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link
                href="/services"
                className="inline-flex items-center text-white/80 hover:text-white mb-4"
              >
                ← Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919922851263"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 9922851263
                </a>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Overview
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Benefits
                </h3>
                <div className="bg-orange-50 p-8 rounded-xl mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-800">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Applications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {service.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 px-4 py-3 rounded-lg text-center text-gray-700 text-sm"
                    >
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-xl sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Get a Free Quote
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Call Us</p>
                        <a
                          href="tel:+919922851263"
                          className="font-semibold hover:text-orange-600"
                        >
                          +91 9922851263
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <Mail className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Email Us</p>
                        <a
                          href="mailto:kkfireservices@gmail.com"
                          className="font-semibold hover:text-orange-600 text-sm"
                        >
                          kkfireservices@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Response Time</p>
                        <p className="font-semibold">Within 24 Hours</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <Award className="w-5 h-5 text-orange-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Certification</p>
                        <p className="font-semibold">ISO 9001:2015</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-center"
                  >
                    Request Quote <ArrowRight className="inline ml-2 w-4 h-4" />
                  </Link>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Other Services
                    </h4>
                    <Link
                      href="/services"
                      className="text-orange-600 hover:text-orange-700 text-sm flex items-center"
                    >
                      View All Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a free consultation and quote
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