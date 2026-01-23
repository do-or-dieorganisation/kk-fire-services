'use client';
import { CheckCircle, Shield, Award, Users, Building2 } from 'lucide-react';

const achievements = [
  { icon: Award, text: 'Phenomenal growth over the years' },
  { icon: CheckCircle, text: '90% business from repeated customers' },
  { icon: Building2, text: 'Many successful projects delivered' },
  { icon: Users, text: 'Team of 4 Engineers & 11 service personnel' },
];

const highlights = [
  '4 Qualified Engineers',
  '11 Service Personnel',
  'NBC/NFPA Compliance',
  '24hr Service Response',
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About KK Fire Services
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Established in 2015 at Pune, Maharashtra, we are{' '}
              <strong>ISO 9001:2015 Certified</strong> system integrators in
              the field of Life Safety, Electronic Surveillance & Security, and
              Asset Protection.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We offer complete turnkey solutions from concept to commissioning,
              with outstanding product range in all segments and great service &
              support.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our success is based on offering complete customer satisfaction
              with our &quot;Total Package Solution under one roof&quot;
              approach, saving your valuable time.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Our Core Values
              </h3>
              <p className="text-gray-700">
                Integrity • Passion • Commitment • Dedication • Excellence •
                Client Satisfaction
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-orange-600 p-12 rounded-2xl text-white mb-6">
              <Shield className="w-20 h-20 mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                ISO 9001:2015 Certified
              </h3>
              <p className="text-lg text-white/90">
                Quality management system certification ensuring the highest
                standards in fire safety and security solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gray-50 p-6 rounded-lg text-center"
                  >
                    <div className="text-orange-600 flex justify-center mb-3">
                      <Icon className="w-8 h-8" />
                    </div>
                    <p className="text-sm text-gray-700">{achievement.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}