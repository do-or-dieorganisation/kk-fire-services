'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ArrowRight, Maximize2 } from 'lucide-react';

type Category =
  | 'All'
  | 'Fire Fighting'
  | 'Fire Alarm'
  | 'Sprinkler'
  | 'Safety Equipment'
  | 'Site Work';

const galleryImages: {
  src: string;
  alt: string;
  title: string;
  category: Category;
  description: string;
}[] = [
  {
src: '/images/YerwadaTech.jpeg',
    alt: 'Yerawada Tech Park commercial project',
    title: 'Yerawada Tech Park',
    category: 'Site Work',
    description:
      'Commercial fire protection project at Yerawada Tech Park.',
  },
  {
    src: '/images/YerawadaTechpark.jpeg',
    alt: 'Yerawada Tech Park building and project site',
    title: 'Commercial Project',
    category: 'Site Work',
    description:
      'Fire protection work carried out for a large-scale commercial environment.',
  },
  {
    src: '/images/fire_pump_room.jpeg',
    alt: 'Fire pump room installation',
    title: 'Fire Pump Room',
    category: 'Fire Fighting',
    description:
      'Fire pump room piping and firefighting infrastructure installation.',
  },
  {
src: '/images/FireHoseReelAndHydrantPipe.jpeg',
    alt: 'Fire hose reel and hydrant piping',
    title: 'Hydrant & Hose Reel',
    category: 'Fire Fighting',
    description:
      'Fire hydrant and hose reel installation for building fire protection.',
  },
  {
    src: '/images/HoseReel.jpeg',
    alt: 'Fire hose reel installation',
    title: 'Fire Hose Reel',
    category: 'Fire Fighting',
    description:
      'Fire hose reel installation and fire protection equipment.',
  },
  {
    src: '/images/ji_pipe.jpeg',
    alt: 'Fire protection pipe installation',
    title: 'Fire Fighting Piping',
    category: 'Fire Fighting',
    description:
      'Fire fighting pipeline installation and site work.',
  },
  {
    src: '/images/SprinklerPipingUnderCeiling.jpeg',
    alt: 'Fire sprinkler piping installed under ceiling',
    title: 'Sprinkler Piping',
    category: 'Sprinkler',
    description:
      'Automatic sprinkler piping installation for building protection.',
  },
  {
    src: '/images/fireAlarn.jpeg',
    alt: 'Fire alarm installation',
    title: 'Fire Alarm System',
    category: 'Fire Alarm',
    description:
      'Fire alarm equipment installation and testing work.',
  },
  {
    src: '/images/detector.jpeg',
    alt: 'Fire detection equipment',
    title: 'Fire Detection',
    category: 'Fire Alarm',
    description:
      'Fire detection equipment installed for early warning and protection.',
  },
  {
    src: '/images/extinguisher.jpeg',
    alt: 'Fire extinguishers',
    title: 'Fire Extinguishers',
    category: 'Safety Equipment',
    description:
      'Supply, installation and servicing of fire extinguishers.',
  },
  {
    src: '/images/FireTruck.jpeg',
    alt: 'Firefighting operation at commercial site',
    title: 'Firefighting Operations',
    category: 'Site Work',
    description:
      'Fire safety activity at a commercial project site.',
  },
];

const categories: Category[] = [
  'All',
  'Fire Fighting',
  'Fire Alarm',
  'Sprinkler',
  'Safety Equipment',
  'Site Work',
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('All');

  const [selectedImage, setSelectedImage] =
    useState<number | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-sm font-semibold text-orange-600">
            Our Work
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Projects That Put
            <span className="block text-orange-500">
              Safety Into Practice.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore selected fire protection installations,
            firefighting infrastructure and safety work carried
            out by KK Fire Services.
          </p>

        </div>

        {/* ===================================================== */}
        {/* FILTERS */}
        {/* ===================================================== */}

        <div className="mt-10 flex flex-wrap justify-center gap-2">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600'
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ===================================================== */}
        {/* GALLERY GRID */}
        {/* ===================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredImages.map((image, index) => (

            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80" />

                {/* Category */}
                <div className="absolute left-4 top-4">

                  <span className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {image.category}
                  </span>

                </div>

                {/* Expand */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </div>

                {/* Bottom information */}
                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                    KK Fire Services
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    {image.title}
                  </h3>

                </div>

              </div>

              {/* Card information */}
              <div className="p-5">

                <p className="text-sm leading-6 text-slate-600">
                  {image.description}
                </p>

                <div className="mt-4 inline-flex items-center text-sm font-semibold text-orange-600">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

              </div>

            </button>

          ))}

        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500">
              No projects available in this category.
            </p>
          </div>
        )}

      </div>

      {/* ===================================================== */}
      {/* LIGHTBOX */}
      {/* ===================================================== */}

      {selectedImage !== null && filteredImages[selectedImage] && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >

          {/* Close */}
          <button
            type="button"
            aria-label="Close image"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image container */}
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              priority
              className="object-contain"
              sizes="100vw"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 rounded-xl bg-black/60 p-5 backdrop-blur-md">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                {filteredImages[selectedImage].category}
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {filteredImages[selectedImage].title}
              </h3>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}