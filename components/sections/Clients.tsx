'use client';
import { Building2 } from 'lucide-react';

const clients = [
  'Venkatesh Graffiti, Pune',
  'Force Motors, Akurdi, Pune',
  'GST Office, Yerawada, Pune',
  'Sahyadri Hospital, Pune',
  'Phoenix Mall, Viman Nagar, Pune',
  'Tata Motors, Pimpri Chinchwad',
  'Amanora Mall, Pune',
  'Dorabjee Mall, Undri, Pune',
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Prestigious Clients
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by leading organizations across Pune
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <Building2 className="w-10 h-10 text-orange-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}