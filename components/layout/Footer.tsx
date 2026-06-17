'use client';
import Image from 'next/image';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#consultancy', label: 'Consultancy' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

const servicesList = [
  'Fire Hydrant & Sprinkler',
  'Fire Alarm & Detection',
  'Fire Suppression Systems',
  'CCTV & Surveillance',
  'Access Control',
  'PA Systems',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/kk-fire-logo.jpeg"
                alt="KK Fire Services Logo"
                width={60}
                height={50}
                className="object-contain"
              />
              <span className="text-xl font-bold">KK Fire Services</span>
            </div>
            <p className="text-gray-400 mb-4">
              ISO 9001:2015 Certified
              <br />
              System Integrators in Life Safety & Fire Protection
            </p>
            <p className="text-sm text-gray-400">
              Established 2015 • Pune, Maharashtra
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              {servicesList.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
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

        {/* Unified footer block */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} KK Fire Services. All rights reserved.
          </p>
          <p className="mt-2">
            Unity is Strength – When there is teamwork and collaboration, wonderful things can be achieved
          </p>
          <p className="mt-2">
            UDYAM Registration No: UDYAM-MH-26-0205628
          </p>
        </div>
      </div>
    </footer>
  );
}
