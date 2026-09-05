'use client';

import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-orange-600/15 blur-3xl sm:-right-40 sm:-top-40 sm:h-[500px] sm:w-[500px]" />

        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl sm:-bottom-40 sm:-left-40 sm:h-[450px] sm:w-[450px]" />

        <div
          className="absolute inset-0 opacity-30 sm:opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-8 sm:gap-10 sm:py-14 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">

          {/* LEFT */}
          <div className="max-w-2xl">

            {/* Trust Badge */}
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-medium text-orange-200 sm:mb-7 sm:px-4 sm:py-2 sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-orange-400" />

              <span>ISO 9001:2015 Certified</span>

              <span className="text-white/30">•</span>

              <span>Established 2015</span>
            </div>

            {/* Heading */}
            <h1 className="text-[2rem] font-bold leading-[1.03] tracking-tight sm:text-5xl sm:leading-[1.02] lg:text-[4.5rem]">

              Complete Fire

              <span className="block text-orange-500">
                Protection
              </span>

              <span className="block text-white">
                Solutions
              </span>

              <span className="mt-1 block text-white/70 sm:mt-2">
                for Safer Buildings
              </span>

            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-[15px] leading-6 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              End-to-end fire protection systems engineered for
              residential, commercial and industrial buildings —
              from design and consultancy to installation,
              commissioning and maintenance.
            </p>

            {/* Services */}
            <div className="mt-5 grid grid-cols-1 gap-2 sm:mt-7 sm:grid-cols-2 sm:gap-3">

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                Design & Consultancy
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                Supply & Installation
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                Testing & Commissioning
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                AMC & Maintenance
              </div>

            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">

              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 sm:w-auto sm:px-7 sm:py-4"
              >
                Get a Free Consultation

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-orange-500/50 hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4"
              >
                Explore Services
              </a>

            </div>

            {/* Trust Stats */}
            <div className="mt-7 grid grid-cols-3 border-t border-white/10 pt-4 sm:mt-10 sm:pt-7">

              <div className="min-w-0 pr-2 sm:pr-4">
                <p className="text-base font-bold text-white sm:text-xl">
                  2015
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-xs">
                  Established
                </p>
              </div>

              <div className="min-w-0 border-l border-white/10 px-2 sm:px-4">
                <p className="text-base font-bold text-white sm:text-xl">
                  24hr
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-xs">
                  Service Response
                </p>
              </div>

              <div className="min-w-0 border-l border-white/10 pl-2 sm:pl-4">
                <p className="text-base font-bold text-white sm:text-xl">
                  Pune
                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-xs">
                  & Beyond
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT — PROJECT IMAGE */}
          <div className="relative">

            <div className="absolute -right-8 -top-8 hidden h-32 w-32 rounded-full border border-orange-500/20 sm:block" />

            <div className="absolute -right-3 -top-3 hidden h-20 w-20 rounded-full border border-orange-500/20 sm:block" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-2xl sm:p-2">

              <div className="relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3] lg:aspect-[5/4]">

                <Image
                  src="/images/YerwadaTech.jpeg"
                  alt="Yerawada Tech Park commercial project"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">

                    <Building2 className="h-4 w-4 text-orange-400" />

                    Commercial Project

                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-xs">
                    Project Showcase
                  </p>

                  <h2 className="mt-1 text-xl font-bold sm:mt-2 sm:text-3xl">
                    Yerawada Tech Park
                  </h2>

                  <p className="mt-1 max-w-lg text-xs leading-5 text-white/75 sm:mt-2 sm:text-sm sm:leading-6">
                    A commercial project environment where reliable fire
                    protection and safety systems play a critical role.
                  </p>

                </div>

              </div>

            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:block">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500/15">
                  <ShieldCheck className="h-6 w-6 text-orange-500" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Fire Protection
                  </p>

                  <p className="text-sm font-semibold text-white">
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