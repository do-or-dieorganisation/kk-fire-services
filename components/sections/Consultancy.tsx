'use client';
import { FileCheck } from 'lucide-react';

const consultancyServices = [
  'Fire Fighting System Design (Hydrant, Sprinkler, Hose Reel, Wet/Dry Risers)',
  'Fire Alarm & Detection System Design',
  'Smoke Detection, Heat Detection & Gas Suppression',
  'Fire Pump House & Water Storage Tank Sizing',
  'Integrated Fire & Life Safety Systems (NBC/NFPA Norms)',
  'Project Management & Approvals',
  'Testing & Certification',
  'NDT & Material Testing',
];

export default function Consultancy() {
  return (
    <section id="consultancy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Design & Consultancy Services
          </h2>
          <p className="text-xl text-gray-600">
            Expert design, project management & certification services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {consultancyServices.map((service, idx) => (
            <div
              key={idx}
              className="flex items-start bg-white p-6 rounded-lg shadow"
            >
              <FileCheck className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}