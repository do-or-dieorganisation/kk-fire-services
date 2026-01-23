'use client';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact' },
];

export default function Breadcrumb() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="fixed top-20 left-4 z-40 hidden xl:block">
      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-orange-200">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">You are here:</span>
          <span className="text-orange-600 font-semibold">
            {currentSection?.label}
          </span>
        </div>
      </div>
    </div>
  );
}