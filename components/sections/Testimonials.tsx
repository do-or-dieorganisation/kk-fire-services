'use client';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Force Motors',
    role: 'Facilities Manager',
    content:
      'KK Fire Services provided exceptional fire safety solutions for our manufacturing facility. Their team is highly professional and responsive. The installation was completed on time and within budget.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Sahyadri Hospital',
    role: 'Safety Officer',
    content:
      'We have been using KK Fire Services for our AMC for the past 3 years. Their prompt response and quality maintenance service is commendable. Highly recommended for healthcare facilities.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Phoenix Mall',
    role: 'Operations Head',
    content:
      'The fire alarm and detection system installed by KK Fire Services has been working flawlessly. Their technical expertise and customer support is excellent. Great team to work with!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by leading organizations across Pune
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-10 h-10 text-orange-600 opacity-50" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-orange-600 font-semibold">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}