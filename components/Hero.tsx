'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[720px] items-center gap-12 py-24 lg:grid-cols-2 lg:py-28">

          {/* ========================================================= */}
          {/* LEFT CONTENT */}
          {/* ========================================================= */}

          <div className="max-w-3xl">

            {/* Trust Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-orange-400" />

              <span>ISO 9001:2015 Certified</span>

              <span className="text-white/30">•</span>

              <span>Established 2015</span>
            </div>

            {/* Main Heading */}
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

            {/* Services / Process */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-500" />
                Design & Consultancy
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-500" />
                Supply & Installation
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-500" />
                Testing & Commissioning
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-500" />
                AMC & Maintenance
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              {/* Get Quote */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/30"
              >
                Get a Free Consultation

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Services */}
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-orange-400/50 hover:bg-white/10"
              >
                Explore Our Services
              </a>

            </div>

            {/* ========================================================= */}
            {/* CREDIBILITY */}
            {/* ========================================================= */}

            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-7">

              {/* Solutions */}
              <div>
                <p className="text-sm text-slate-400">
                  Solutions
                </p>

                <p className="mt-1 font-semibold">
                  Turnkey Fire Protection
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              {/* Service */}
              <div>
                <p className="text-sm text-slate-400">
                  Service
                </p>

                <p className="mt-1 font-semibold">
                  Installation & AMC
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              {/* Coverage */}
              <div>
                <p className="text-sm text-slate-400">
                  Coverage
                </p>

                <p className="mt-1 font-semibold">
                  Pune & Beyond
                </p>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE — REAL PROJECT IMAGE */}
          {/* ========================================================= */}

          <div className="relative hidden lg:block">

            {/* Decorative circle behind image */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-orange-500/20" />

            <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-orange-500/20" />

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">

              <div className="relative h-[540px] overflow-hidden rounded-2xl">

                {/* Real Fire Pump Room Image */}
                <Image
                  src="/images/fire_pump_room.jpeg"
                  alt="Fire protection pump room installation by KK Fire Services"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />

                {/* Top Label */}
                <div className="absolute left-5 top-5">

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">

                    <ShieldCheck className="h-4 w-4 text-orange-400" />

                    Fire Protection Infrastructure

                  </div>

                </div>

                {/* Image Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                    Our Work
                  </p>

                  <h2 className="mt-2 text-3xl font-bold leading-tight text-white">
                    Engineered for Safety.
                    <br />
                    Built to Protect.
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                    Professional fire-fighting infrastructure designed,
                    installed and maintained for residential, commercial
                    and industrial buildings.
                  </p>

                </div>

              </div>

            </div>

            {/* ========================================================= */}
            {/* FLOATING CARD */}
            {/* ========================================================= */}

            <div className="absolute -bottom-6 -left-8 rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15">

                  <ShieldCheck className="h-6 w-6 text-orange-500" />

                </div>

                {/* Text */}
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