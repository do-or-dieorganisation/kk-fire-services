'use client';
import { Award, Shield, FileCheck, CheckCircle } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'ISO 9001:2015 Certified',
    description: 'Quality Management System Certification',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: FileCheck,
    title: 'NBC Compliant',
    description: 'National Building Code Standards',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Award,
    title: 'NFPA Standards',
    description: 'National Fire Protection Association',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: CheckCircle,
    title: 'Approved Vendor',
    description: 'Government & Private Sector Projects',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

const credentials = [
  'Licensed Fire Safety Consultants',
  'Trained & Certified Technicians',
  'Insurance & Legal Compliance',
  'Authorized System Integrators',
  '9+ Years Industry Experience',
  'Pan-India Service Network',
];

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600">
            Certified professionals ensuring compliance and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={idx}
                className={`${cert.bgColor} p-6 rounded-xl text-center hover:shadow-lg transition`}
              >
                <div className={`${cert.color} flex justify-center mb-4`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Professional Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}