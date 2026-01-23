'use client';
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
} from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Fire Hydrant & Sprinkler Systems',
    desc: 'Complete design, installation & commissioning',
  },
  {
    icon: Shield,
    title: 'Fire Alarm & Detection System',
    desc: 'Smoke Detection, Heat Detection & Advanced Alarms',
  },
  {
    icon: Zap,
    title: 'Fire Suppression System',
    desc: 'NOVEC/FM200 systems for server rooms & critical areas',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    desc: 'Complete security and monitoring solutions',
  },
  {
    icon: Lock,
    title: 'Access Control & Time Attendance',
    desc: 'Entry management and attendance tracking',
  },
  {
    icon: Radio,
    title: 'Public Address System',
    desc: 'Emergency communication and PA systems',
  },
  {
    icon: Droplet,
    title: 'Water Leak Detection',
    desc: 'Advanced leak detection systems',
  },
  {
    icon: AlertTriangle,
    title: 'Rodent Repellent System',
    desc: 'Specialized protection systems',
  },
  {
    icon: Wrench,
    title: 'Fire Extinguisher',
    desc: 'Supply, installation & refilling services',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive fire safety, security & protection solutions for
            Industrial, Residential & Commercial segments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100 hover:border-orange-300"
              >
                <div className="text-orange-600 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}