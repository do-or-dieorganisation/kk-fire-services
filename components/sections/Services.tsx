'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRight,
  Flame,
  Shield,
  Zap,
  Camera,
  Lock,
  Radio,
  Droplet,
  AlertTriangle,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Fire Hydrant & Sprinkler Systems',
    description:
      'Complete fire hydrant and sprinkler solutions including design, supply, installation, testing and commissioning.',
    image: '/images/fire_pump_room.jpeg',
    tag: 'Fire Fighting',
  },
  {
    icon: Shield,
    title: 'Fire Alarm & Detection',
    description:
      'Fire alarm and detection systems with smoke, heat and other detection solutions for early warning and protection.',
    image: '/images/fireAlarn.jpeg',
    tag: 'Life Safety',
  },
  {
    icon: Zap,
    title: 'Fire Suppression Systems',
    description:
      'Specialized fire suppression solutions for server rooms, electrical areas and other critical environments.',
    image: '/images/SprinklerPipingUnderCeiling.jpeg',
    tag: 'Suppression',
  },
  {
    icon: Wrench,
    title: 'Fire Extinguishers',
    description:
      'Supply, installation, inspection, servicing and refilling of fire extinguishers for different applications.',
    image: '/images/extinguisher.jpeg',
    tag: 'Equipment',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description:
      'Security camera and surveillance solutions designed for monitoring residential, commercial and industrial premises.',
    tag: 'Security',
  },
  {
    icon: Lock,
    title: 'Access Control & Time Attendance',
    description:
      'Access management and attendance solutions for controlled entry and improved facility security.',
    tag: 'Security',
  },
  {
    icon: Radio,
    title: 'Public Address System',
    description:
      'Public address and emergency communication systems for clear announcements during normal and emergency situations.',
    tag: 'Communication',
  },
  {
    icon: Droplet,
    title: 'Water Leak Detection',
    description:
      'Water leak detection solutions designed to identify leaks and help prevent damage to critical areas.',
    tag: 'Detection',
  },
  {
    icon: AlertTriangle,
    title: 'Rodent Repellent System',
    description:
      'Specialized rodent protection solutions for commercial, industrial and other sensitive environments.',
    tag: 'Protection',
  },
];

const process = [
  'Site Survey & Requirement Analysis',
  'Design & Engineering',
  'Supply & Installation',
  'Testing & Commissioning',
  'Maintenance & AMC',
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-10 sm:py-16 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700 sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
            <Flame className="h-4 w-4" />
            Our Services
          </div>

          <h2 className="text-[1.7rem] font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Complete Fire Protection

            <span className="block text-orange-600">
              & Security Solutions
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            From fire fighting infrastructure to electronic security,
            we provide integrated solutions for residential, commercial
            and industrial environments.
          </p>

        </div>

        {/* FEATURED SERVICE */}
        <div className="mt-7 overflow-hidden rounded-2xl bg-slate-950 shadow-2xl sm:mt-12 sm:rounded-3xl lg:mt-16">

          <div className="grid lg:grid-cols-2">

            {/* IMAGE */}
            <div className="relative h-48 sm:min-h-[320px] lg:min-h-[470px]">

              <Image
                src="/images/fire_pump_room.jpeg"
                alt="Fire fighting pump room installation by KK Fire Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/10 to-slate-950/60" />

              <div className="absolute left-3 top-3 sm:left-6 sm:top-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">
                  <Shield className="h-4 w-4 text-orange-400" />
                  Complete Fire Fighting System
                </span>
              </div>

            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-5 sm:p-10 lg:p-14">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Core Expertise
              </p>

              <h3 className="mt-3 text-xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Fire Hydrant & Sprinkler Systems
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
                Engineered fire fighting infrastructure for buildings
                requiring reliable water-based fire protection, from
                pump rooms and hydrant networks to sprinkler systems.
              </p>

              <div className="mt-5 space-y-2.5 sm:mt-7 sm:space-y-3">
                {[
                  'Fire Hydrant Systems',
                  'Automatic Sprinkler Systems',
                  'Fire Pump Room Installation',
                  'Testing & Commissioning',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="group mt-6 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600 sm:mt-8 sm:w-fit sm:px-6 sm:py-3.5"
              >
                View Service Details
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

            </div>

          </div>
        </div>

        {/* SERVICE GRID */}
        <div className="mt-7 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href="/services"
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              >

                {/* IMAGE */}
                {service.image ? (
                  <div className="relative h-32 overflow-hidden sm:h-48">

                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <span className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:text-xs">
                        {service.tag}
                      </span>
                    </div>

                  </div>
                ) : (
                  <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 to-slate-800 sm:h-48">

                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-orange-500/20" />

                    <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full border border-orange-500/10" />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 sm:h-20 sm:w-20">
                      <Icon className="h-7 w-7 text-orange-500 sm:h-10 sm:w-10" />
                    </div>

                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <span className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:text-xs">
                        {service.tag}
                      </span>
                    </div>

                  </div>
                )}

                {/* CONTENT */}
                <div className="p-4 sm:p-6">

                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white sm:mb-4 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-[17px] font-bold leading-tight text-slate-950 sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-4 inline-flex items-center text-sm font-semibold text-orange-600 sm:mt-5">
                    Learn More
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* HOW WE WORK */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-16 sm:rounded-3xl sm:p-10">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600 sm:text-sm">
              How We Work
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-950 sm:text-3xl">
              From Requirement to Protection
            </h3>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base">
              A structured approach helps us deliver reliable fire
              protection and security systems from initial assessment
              through ongoing maintenance.
            </p>

          </div>

          <div className="mt-6 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">

            {process.map((item, index) => (
              <div
                key={item}
                className="relative rounded-xl bg-slate-50 p-3 text-center sm:p-5"
              >

                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white sm:h-10 sm:w-10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <p className="mt-2 text-sm font-semibold leading-5 text-slate-800 sm:mt-4">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-orange-600 px-5 py-5 text-center sm:mt-16 sm:flex-row sm:px-8 sm:py-8 sm:text-left">

          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Need a fire protection solution?
            </h3>

            <p className="mt-1 text-sm text-orange-100 sm:text-base">
              Tell us about your building, project or maintenance requirement.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 shadow-lg transition hover:bg-orange-50 sm:w-auto sm:py-3.5"
          >
            Get a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

        </div>

      </div>
    </section>
  );
}