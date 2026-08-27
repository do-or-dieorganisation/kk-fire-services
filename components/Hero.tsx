'use client';

import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[720px] items-center gap-12 py-24 lg:grid-cols-2 lg:py-28">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            {/* Trust Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              <span>ISO 9001:2015 Certified</span>
              <span className="text-white/30">•</span>
              <span>Established 2015</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Complete Fire
              <span className="block text-orange-500">
                Protection Solutions
              </span>
              <span className="block text-white/90">
                for Safer Buildings
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              End-to-end fire protection solutions — from design and
              consultancy to supply, installation, testing and maintenance.
            </p>

            {/* Process */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              {[
                'Design & Consultancy',
                'Supply & Installation',
                'Testing & Commissioning',
                'AMC & Maintenance',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500" />
                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/30"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-orange-400/50 hover:bg-white/10"
              >
                Explore Our Services
              </a>
            </div>

            {/* Bottom credibility */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-sm text-slate-400">Solutions</p>
                <p className="mt-1 font-semibold">Turnkey Fire Protection</p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-sm text-slate-400">Service</p>
                <p className="mt-1 font-semibold">Installation & AMC</p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-sm text-slate-400">Coverage</p>
                <p className="mt-1 font-semibold">Pune & Beyond</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:block">

            {/* Main visual card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">

              {/* Fire protection visual */}
              <div className="relative flex h-[540px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 via-orange-500 to-slate-900">

                {/* Decorative circles */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20" />
                <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

                {/* Center content */}
                <div className="relative z-10 px-10 text-center">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-md">
                    <ShieldCheck className="h-12 w-12 text-white" />
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                    Fire Safety
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-white">
                    Protecting
                    <br />
                    What Matters
                  </h2>

                  <p className="mx-auto mt-5 max-w-sm text-white/75">
                    Professional fire protection systems designed,
                    installed and maintained for safer buildings.
                  </p>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-black/20 px-5 py-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/50">
                        KK Fire Services
                      </p>
                      <p className="mt-1 font-semibold">
                        From Concept to Commissioning
                      </p>
                    </div>

                    <ArrowRight className="h-5 w-5 text-orange-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-8 rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15">
                  <ShieldCheck className="h-6 w-6 text-orange-500" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Complete Solution
                  </p>
                  <p className="font-semibold text-white">
                    Design • Install • Maintain
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}