'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What services does KK Fire Services provide?',
    answer:
      'We provide comprehensive fire safety solutions including Fire Hydrant & Sprinkler Systems, Fire Alarm & Detection, Fire Suppression Systems, CCTV Surveillance, Access Control, and Annual Maintenance Contracts (AMC). We also offer design consultancy and project management services.',
  },
  {
    question: 'Are you ISO certified?',
    answer:
      'Yes, KK Fire Services is ISO 9001:2015 certified, ensuring quality management systems and adherence to international standards in all our services.',
  },
  {
    question: 'What is the typical response time for AMC services?',
    answer:
      'We guarantee a response time of 24 hours for all AMC service calls. Our dedicated team of 11 service personnel ensures prompt attention to any issues.',
  },
  {
    question: 'Do you provide services outside Pune?',
    answer:
      'Yes, we provide pan-India services. While our headquarters is in Pune, we have successfully completed projects across Maharashtra and other parts of India.',
  },
  {
    question: 'What is the difference between Comprehensive and Non-Comprehensive AMC?',
    answer:
      'Comprehensive AMC includes periodic preventive maintenance and replacement of spare parts against manufacturing defects (except consumables). Non-Comprehensive AMC includes periodic maintenance, but spare parts and consumables are charged separately at prevailing prices.',
  },
  {
    question: 'Are your systems compliant with NBC and NFPA standards?',
    answer:
      'Yes, all our fire safety systems are designed and installed in compliance with National Building Code (NBC) and National Fire Protection Association (NFPA) norms.',
  },
  {
    question: 'How long does a typical installation take?',
    answer:
      'Installation time varies based on project scope and complexity. We provide detailed timelines during the consultation phase and ensure timely completion without compromising quality.',
  },
  {
    question: 'Do you provide training for fire safety equipment?',
    answer:
      'Yes, we provide comprehensive training for your staff on the operation and maintenance of all installed fire safety systems and equipment.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-orange-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our team is here to help you with any inquiries
          </p>
          <a
            href="#contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}