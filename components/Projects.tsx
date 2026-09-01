'use client';

import Image from 'next/image';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';

const projects = [
  {
    image: '/images/YerwadaTech.jpeg',
    title: 'Yerawada Tech Park',
    type: 'Commercial Project',
    location: 'Pune',
    description:
      'Fire protection infrastructure delivered for a large-scale commercial environment.',
  },
  {
    image: '/images/fire_pump_room.jpeg',
    title: 'Fire Pump Room',
    type: 'Fire Fighting System',
    location: 'Pune',
    description:
      'Fire pump room infrastructure and firefighting piping installation.',
  },
  {
    image: '/images/SprinklerPipingUnderCeiling.jpeg',
    title: 'Sprinkler Piping Installation',
    type: 'Automatic Sprinkler System',
    location: 'Pune',
    description:
      'Ceiling-level sprinkler piping installed as part of a building fire protection system.',
  },
  {
    image: '/images/FireHoseReelAndHydrantPipe.jpeg',
    title: 'Hydrant & Hose Reel System',
    type: 'Fire Hydrant System',
    location: 'Pune',
    description:
      'Hydrant and hose reel infrastructure for building fire safety.',
  },
  {
    image: '/images/ji_pipe.jpeg',
    title: 'Fire Fighting Piping',
    type: 'Fire Fighting Infrastructure',
    location: 'Pune',
    description:
      'Fire fighting pipeline installation and associated site work.',
  },
  {
    image: '/images/fireAlarn.jpeg',
    title: 'Fire Alarm Installation',
    type: 'Fire Detection System',
    location: 'Pune',
    description:
      'Fire alarm and detection equipment installation for building safety.',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-12 text-white sm:py-16 lg:py-24"
    >
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* HEADER */}
        {/* ========================================================= */}

        <div className="max-w-3xl">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-2 text-xs font-semibold text-orange-300 sm:mb-5 sm:px-4 sm:text-sm">
            <ShieldCheck className="h-4 w-4" />
            Our Experience
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Projects Built Around

            <span className="block text-orange-500">
              Safety & Reliability.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            A selection of fire protection installations and infrastructure
            work carried out by KK Fire Services.
          </p>

        </div>

        {/* ========================================================= */}
        {/* PROJECT GRID */}
        {/* ========================================================= */}

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.06]"
            >

              {/* ================================================= */}
              {/* IMAGE */}
              {/* ================================================= */}

              <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[4/3]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Type */}
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4">

                  <span className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:text-xs">
                    {project.type}
                  </span>

                </div>

              </div>

              {/* ================================================= */}
              {/* CONTENT */}
              {/* ================================================= */}

              <div className="p-5 sm:p-6">

                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {project.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-orange-400">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400 sm:mt-4">
                  {project.description}
                </p>

                <div className="mt-4 flex items-center text-sm font-semibold text-orange-400 sm:mt-5">
                  Project Experience

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

              </div>

            </article>
          ))}

        </div>

        {/* ========================================================= */}
        {/* BOTTOM CTA */}
        {/* ========================================================= */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:mt-14 sm:flex-row sm:p-8">

          <div>
            <p className="text-base font-bold text-white sm:text-lg">
              Planning a new fire protection project?
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Talk to our team about your requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
          >
            Discuss Your Project

            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

        </div>

      </div>
    </section>
  );
}