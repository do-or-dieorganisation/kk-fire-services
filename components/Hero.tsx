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
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="absolute inset-0">
        {/* Orange glow - top right */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-600/15 blur-3xl" />

        {/* Orange glow - bottom left */}
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 py-10 sm:gap-10 sm:py-14 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-20">

          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <div className="max-w-2xl">

            {/* Trust Badge */}
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-xs font-medium text-orange-200 sm:mb-7 sm:px-4 sm:text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-orange-400" />

              <span>ISO 9001:2015 Certified</span>

              <span className="text-white/30">•</span>

              <span>Established 2015</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[2.65rem] font-bold leading-[0.98] tracking-tight sm:text-5xl sm:leading-[1.02] lg:text-[4.5rem]">
              Complete Fire

              <span className="block text-orange-500">
                Protection
              </span>

              <span className="block text-white">
                Solutions
              </span>

              <span className="mt-2 block text-white/70">
                for Safer Buildings
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              End-to-end fire protection systems engineered for
              residential, commercial and industrial buildings —
              from design and consultancy to installation,
              commissioning and maintenance.
            </p>

            {/* ===================================================== */}
            {/* SERVICES */}
            {/* ===================================================== */}

            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">

              <div className="flex items-center gap-2 text-[15px] text-slate-300 sm:text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                Design & Consultancy
              </div>

              <div className="flex items-center gap-2 text-[15px] text-slate-300 sm:text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                Supply & Installation
              </div>

              <div className="flex items-center gap-2 text-[15px] text-slate-300 sm:text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                Testing & Commissioning
              </div>

              <div className="flex items-center gap-2 text-[15px] text-slate-300 sm:text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                AMC & Maintenance
              </div>

            </div>

            {/* ===================================================== */}
            {/* CTA BUTTONS */}
            {/* ===================================================== */}

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">

              {/* Primary CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/30 sm:px-7 sm:py-4"
              >
                Get a Free Consultation

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:border-orange-500/50 hover:bg-white/10 sm:px-7 sm:py-4"
              >
                Explore Services
              </a>

            </div>

            {/* ===================================================== */}
            {/* TRUST STATS */}
            {/* ===================================================== */}

            <div className="mt-8 grid grid-cols-3 border-t border-white/10 pt-5 sm:mt-10 sm:pt-7">

              {/* Established */}
              <div className="pr-3 sm:pr-4">
                <p className="text-lg font-bold text-white sm:text-xl">
                  2015
                </p>

                <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                  Established
                </p>
              </div>

              {/* Service */}
              <div className="border-l border-white/10 px-3 sm:px-4">
                <p className="text-lg font-bold text-white sm:text-xl">
                  24hr
                </p>

                <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                  Service Response
                </p>
              </div>

              {/* Coverage */}
              <div className="border-l border-white/10 pl-3 sm:pl-4">
                <p className="text-lg font-bold text-white sm:text-xl">
                  Pune
                </p>

                <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                  & Beyond
                </p>
              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* RIGHT — PROJECT IMAGE */}
          {/* ===================================================== */}

          <div className="relative">

            {/* Decorative rings */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-orange-500/20" />

            <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full border border-orange-500/20" />

            {/* =================================================== */}
            {/* IMAGE CARD */}
            {/* =================================================== */}

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-2xl sm:p-2">

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-[5/4]">

                {/* Yerawada Tech Park Image */}
                <Image
                  src="/images/YerwadaTech.jpeg"
                  alt="Yerawada Tech Park commercial project"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* ================================================= */}
                {/* IMAGE LABEL */}
                {/* ================================================= */}

                <div className="absolute left-3 top-3 sm:left-5 sm:top-5">

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">

                    <Building2 className="h-4 w-4 text-orange-400" />

                    Commercial Project

                  </div>

                </div>

                {/* ================================================= */}
                {/* IMAGE CONTENT */}
                {/* ================================================= */}

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-xs">
                    Project Showcase
                  </p>

                  <h2 className="mt-1 text-xl font-bold sm:mt-2 sm:text-3xl">
                    Yerawada Tech Park
                  </h2>

                  <p className="mt-1 max-w-lg text-xs leading-5 text-white/75 sm:mt-2 sm:text-sm sm:leading-6">
                    A commercial project environment where
                    reliable fire protection and safety systems
                    play a critical role.
                  </p>

                </div>

              </div>

            </div>

            {/* ===================================================== */}
            {/* FLOATING CREDIBILITY CARD */}
            {/* ===================================================== */}

            <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:block">

              <div className="flex items-center gap-3">

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500/15">
                  <ShieldCheck className="h-6 w-6 text-orange-500" />
                </div>

                {/* Text */}
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