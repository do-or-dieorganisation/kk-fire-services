'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { 
    href: '#services', 
    label: 'Services',
    hasDropdown: true,
    subItems: [
      { href: '#services', label: 'All Services' },
      { href: '#consultancy', label: 'Consultancy' },
      { href: '#amc', label: 'AMC Plans' },
    ]
  },
  { href: '#gallery', label: 'Gallery' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm shadow-md py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/UPdated-logo.jpeg"
              alt="KK Fire Services Logo"
              width={100}
              height={100}
              className="object-contain group-hover:scale-110 transition"
            />
            <div className="hidden sm:block">
              <span className="text-xl md:text-2xl font-bold text-gray-900 block leading-tight">
                KK Fire Services
              </span>
              <span className="text-xs text-orange-600 font-semibold">
                ISO 9001:2015 Certified
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-1 ${
                        activeSection === link.href.replace('#', '') ||
                        activeSection === 'consultancy' ||
                        activeSection === 'amc'
                          ? 'text-orange-600 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.subItems?.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 first:rounded-t-lg last:rounded-b-lg transition"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919922851263"
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>+91 9922851263</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition shadow-md hover:shadow-lg"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition font-medium"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="ml-4 space-y-1 mt-1">
                        {link.subItems?.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, subItem.href)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-lg transition font-medium ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-3 space-y-2 border-t">
              <a
                href="tel:+919922851263"
                className="flex items-center justify-center gap-2 px-4 py-3 text-orange-600 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call: +91 9922851263
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition text-center font-semibold"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}