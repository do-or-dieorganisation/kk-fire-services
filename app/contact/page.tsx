import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/ui/WhatsAppbutton';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Fire Safety Services in Pune | KK Fire Services',
  description:
    'Get in touch with KK Fire Services for fire safety solutions in Pune. Call +91 9922851263 or email kkfireservices@gmail.com. 24-hour response time guaranteed.',
  keywords:
    'contact fire safety pune, kk fire services contact, fire safety quote, emergency fire services',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-orange-600 to-orange-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch With Us
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                We're here to help you with all your fire safety needs. Reach
                out to our team of experts today.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-sm text-gray-600">
                  264/4 Omkar Colony, Lane No 4
                  <br />
                  Warje, Pune 411058
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Phone className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                <a
                  href="tel:+919922851263"
                  className="text-sm text-orange-600 hover:underline block"
                >
                  +91 9922851263
                </a>
                <a
                  href="tel:+918983861237"
                  className="text-sm text-orange-600 hover:underline block"
                >
                  +91 8983861237
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Mail className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                <a
                  href="mailto:kkfireservices@gmail.com"
                  className="text-sm text-orange-600 hover:underline block"
                >
                  kkfireservices@gmail.com
                </a>
                <a
                  href="mailto:info@kkfireservices.in"
                  className="text-sm text-orange-600 hover:underline block"
                >
                  info@kkfireservices.in
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
                <p className="text-sm text-gray-600">
                  We respond to all inquiries
                  <br />
                  <strong>within 24 hours</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <Contact />

        {/* Map Section (Placeholder) */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Location
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2156089567305!2d73.80676931490076!3d18.477999087414444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2957a3b8c8c8d%3A0x3b8c8c8d3b8c8c8d!2sWarje%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KK Fire Services Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose KK Fire Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're committed to providing the best fire safety solutions in
                Pune
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">9+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Years of Experience
                </h3>
                <p className="text-gray-600">
                  Serving Pune and Pan-India since 2015
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">
                    ISO
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Certified Quality
                </h3>
                <p className="text-gray-600">
                  ISO 9001:2015 certified with NBC/NFPA compliance
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">
                    90%
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Customer Retention
                </h3>
                <p className="text-gray-600">
                  90% of our business comes from repeat customers
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}