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
      className="relative overflow-hidden bg-white py-24"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ======================================================= */}
        {/* SECTION HEADER */}
        {/* ======================================================= */}

        <div className="mb-16 max-w-3xl">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
            <ShieldCheck className="h-4 w-4" />
            About KK Fire Services
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Built Around Safety.
            <span className="block text-orange-600">
              Driven by Reliability.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Since 2015, KK Fire Services has been providing integrated
            fire protection, life safety and security solutions for
            residential, commercial and industrial environments.
          </p>

        </div>

        {/* ======================================================= */}
        {/* MAIN GRID */}
        {/* ======================================================= */}

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* ===================================================== */}
          {/* LEFT — COMPANY STORY */}
          {/* ===================================================== */}

          <div>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Established in Pune, Maharashtra, KK Fire Services is an
              <strong className="text-slate-900">
                {' '}ISO 9001:2015 Certified
              </strong>{' '}
              system integrator working across Life Safety, Electronic
              Surveillance & Security, and Asset Protection.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              We provide complete turnkey solutions from concept and
              consultancy through supply, installation, testing,
              commissioning and maintenance.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Our approach is simple: bring the required expertise,
              products, installation and service support together under
              one roof while keeping customer satisfaction at the centre
              of every project.
            </p>

            {/* =================================================== */}
            {/* CORE VALUES */}
            {/* =================================================== */}

            <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/70 p-6 sm:p-7">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-white shadow-lg shadow-orange-600/20">
                  <Award className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Our Core Values
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Integrity • Passion • Commitment • Dedication •
                    Excellence • Client Satisfaction
                  </p>
                </div>

              </div>

            </div>

            {/* =================================================== */}
            {/* COMMITMENTS */}
            {/* =================================================== */}

            <div className="mt-8">

              <h3 className="mb-5 text-xl font-bold text-slate-900">
                What We Deliver
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">

                {commitments.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
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

          {/* ===================================================== */}
          {/* RIGHT — CERTIFICATION + STATS */}
          {/* ===================================================== */}

          <div>

            {/* =================================================== */}
            {/* ISO CARD */}
            {/* =================================================== */}

            <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-8 text-white shadow-2xl sm:p-10">

              {/* Decorative glow */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/15">
                  <ShieldCheck className="h-8 w-8 text-orange-500" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Quality & Reliability
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  ISO 9001:2015
                  <span className="block text-white/70">
                    Certified
                  </span>
                </h3>

                <p className="mt-5 leading-7 text-slate-300">
                  Our ISO 9001:2015 certification reflects our focus on
                  maintaining a structured quality management approach
                  across our services and operations.
                </p>

              </div>

            </div>

            {/* =================================================== */}
            {/* STATS */}
            {/* =================================================== */}

            <div className="mt-6 grid grid-cols-2 gap-4">

              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
                  >
                    <Icon className="h-6 w-6 text-orange-600" />

                    <p className="mt-4 text-2xl font-bold text-slate-950">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.label}
                    </p>
                  </div>
                );
              })}

            </div>

            {/* =================================================== */}
            {/* CUSTOMER TRUST */}
            {/* =================================================== */}

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-100">
                  <Building2 className="h-5 w-5 text-orange-600" />
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-950">
                    90%
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Business from repeated customers, reflecting our
                    focus on long-term service relationships.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ======================================================= */}
        {/* BOTTOM CTA */}
        {/* ======================================================= */}

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl bg-orange-600 p-7 text-white sm:p-8 lg:flex-row lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-100">
              Complete Protection Solutions
            </p>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              Planning a fire safety project?
            </h3>

            <p className="mt-2 max-w-2xl text-orange-50">
              Talk to our team about your building, facility or
              maintenance requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center rounded-lg bg-white px-6 py-3.5 font-semibold text-orange-700 shadow-lg transition-all duration-300 hover:bg-orange-50"
          >
            Talk to Us

            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>

      </div>
    </section>
  );
}