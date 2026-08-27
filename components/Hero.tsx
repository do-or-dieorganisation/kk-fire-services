'use client';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-br from-orange-600 to-orange-400 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              ISO 9001:2015 Certified • Established 2015
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
Complete Fire Protection Solutions            <br />
            for safer buildings
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Single window fire fighting service provider. Design & Consultancy
            to Turnkey Solutions - Concept to Commissioning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition inline-flex items-center justify-center"
            >
              Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}