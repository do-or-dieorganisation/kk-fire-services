'use client';

import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Building2,
  Clock3,
  ArrowRight,
} from 'lucide-react';

const highlights = [
  {
    icon: Users,
    value: '4',
    label: 'Qualified Engineers',
  },
  {
    icon: Users,
    value: '11',
    label: 'Service Personnel',
  },
  {
    icon: Building2,
    value: '2015',
    label: 'Established',
  },
  {
    icon: Clock3,
    value: '24hr',
    label: 'Service Response',
  },
];

const commitments = [
  'Design & Consultancy',
  'Supply & Installation',
  'Testing & Commissioning',
  'AMC & Maintenance',
  'NBC / NFPA Compliance',
  'Customer-Focused Service',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-10 sm:py-16 lg:py-24"
    >

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-7 max-w-3xl sm:mb-12 lg:mb-16">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700 sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
            <ShieldCheck className="h-4 w-4" />
            About KK Fire Services
          </div>

          <h2 className="text-[2rem] font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl">

            Built Around Safety.

            <span className="block text-orange-600">
              Driven by Reliability.
            </span>

          </h2>

          <p className="mt-4 max-w-2xl text-[15px] leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Since 2015, KK Fire Services has been providing integrated
            fire protection, life safety and security solutions for
            residential, commercial and industrial environments.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* LEFT */}
          <div>

            <p className="text-[15px] leading-6 text-slate-600 sm:text-lg sm:leading-8">
              Established in Pune, Maharashtra, KK Fire Services is an
              <strong className="text-slate-900">
                {' '}ISO 9001:2015 Certified
              </strong>{' '}
              system integrator working across Life Safety, Electronic
              Surveillance & Security, and Asset Protection.
            </p>

            <p className="mt-4 text-[15px] leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              We provide complete turnkey solutions from concept and
              consultancy through supply, installation, testing,
              commissioning and maintenance.
            </p>

            <p className="mt-4 text-[15px] leading-6 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Our approach is simple: bring the required expertise,
              products, installation and service support together under
              one roof while keeping customer satisfaction at the centre
              of every project.
            </p>

            {/* VALUES */}
            <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 sm:mt-8 sm:p-7">

              <div className="flex items-start gap-3 sm:gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white shadow-lg shadow-orange-600/20 sm:h-12 sm:w-12">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <div>

                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Our Core Values
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    Integrity • Passion • Commitment • Dedication •
                    Excellence • Client Satisfaction
                  </p>

                </div>

              </div>

            </div>

            {/* COMMITMENTS */}
            <div className="mt-6 sm:mt-8">

              <h3 className="mb-4 text-lg font-bold text-slate-900 sm:mb-5 sm:text-xl">
                What We Deliver
              </h3>

              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">

                {commitments.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 sm:px-4 sm:py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-600" />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            {/* ISO */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-5 text-white shadow-2xl sm:p-10">

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative">

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 sm:mb-6 sm:h-14 sm:w-14">
                  <ShieldCheck className="h-6 w-6 text-orange-500 sm:h-8 sm:w-8" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                  Quality & Reliability
                </p>

                <h3 className="mt-2 text-2xl font-bold sm:mt-3 sm:text-3xl">
                  ISO 9001:2015

                  <span className="block text-white/70">
                    Certified
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
                  Our ISO 9001:2015 certification reflects our focus on
                  maintaining a structured quality management approach
                  across our services and operations.
                </p>

              </div>

            </div>

            {/* STATS */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md sm:p-5"
                  >

                    <Icon className="h-5 w-5 text-orange-600 sm:h-6 sm:w-6" />

                    <p className="mt-2 text-xl font-bold text-slate-950 sm:mt-4 sm:text-2xl">
                      {item.value}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      {item.label}
                    </p>

                  </div>
                );
              })}

            </div>

            {/* CUSTOMER TRUST */}
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:mt-6 sm:p-6">

              <div className="flex items-start gap-3 sm:gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 sm:h-11 sm:w-11">
                  <Building2 className="h-5 w-5 text-orange-600" />
                </div>

                <div>

                  <p className="text-xl font-bold text-slate-950 sm:text-2xl">
                    90%
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    Business from repeated customers, reflecting our
                    focus on long-term service relationships.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl bg-orange-600 p-5 text-white sm:mt-16 sm:p-8 lg:flex-row lg:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-100 sm:text-sm">
              Complete Protection Solutions
            </p>

            <h3 className="mt-2 text-xl font-bold sm:text-3xl">
              Planning a fire safety project?
            </h3>

            <p className="mt-2 text-sm text-orange-50 sm:text-base">
              Talk to our team about your building, facility or
              maintenance requirements.
            </p>

          </div>

          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-orange-700 shadow-lg transition-all duration-300 hover:bg-orange-50 sm:w-auto sm:py-3.5"
          >
            Talk to Us

            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>

      </div>
    </section>
  );
}