'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';

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
    ],
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

      const sections = navLinks.map((link) =>
        link.href.replace('#', '')
      );

      const current = sections.find((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          return rect.top <= 100 && rect.bottom >= 100;
        }

        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;

      const elementPosition =
        element.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-1.5 sm:py-2'
          : 'bg-white/95 backdrop-blur-sm shadow-md py-2 sm:py-3'
      }`}
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* ===================================================== */}
          {/* LOGO */}
          {/* ===================================================== */}

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
              className="h-12 w-28 object-contain transition group-hover:scale-105 sm:h-16 sm:w-32"
            />

            <div className="hidden sm:block">
              <span className="block text-xl font-bold leading-tight text-gray-900 md:text-2xl">
                KK Fire Services
              </span>

              <span className="text-xs font-semibold text-orange-600">
                ISO 9001:2015 Certified
              </span>
            </div>
          </a>

          {/* ===================================================== */}
          {/* DESKTOP NAVIGATION */}
          {/* ===================================================== */}

          <div className="hidden items-center space-x-1 lg:flex">

            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
              >

                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setDropdownOpen(!dropdownOpen)
                      }
                      className={`flex items-center gap-1 rounded-lg px-4 py-2 font-medium transition ${
                        activeSection ===
                          link.href.replace('#', '') ||
                        activeSection === 'consultancy' ||
                        activeSection === 'amc'
                          ? 'bg-orange-50 text-orange-600'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                    >
                      {link.label}

                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="invisible absolute left-0 top-full mt-1 w-48 rounded-lg bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

                      {link.subItems?.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={(e) =>
                            handleNavClick(
                              e,
                              subItem.href
                            )
                          }
                          className="block px-4 py-3 text-gray-700 transition first:rounded-t-lg last:rounded-b-lg hover:bg-orange-50 hover:text-orange-600"
                        >
                          {subItem.label}
                        </a>
                      ))}

                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href)
                    }
                    className={`rounded-lg px-4 py-2 font-medium transition ${
                      activeSection ===
                      link.href.replace('#', '')
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {link.label}
                  </a>
                )}

              </div>
            ))}

          </div>

          {/* ===================================================== */}
          {/* DESKTOP CTA */}
          {/* ===================================================== */}

          <div className="hidden items-center gap-3 lg:flex">

            <a
              href="tel:+919922851263"
              className="flex items-center gap-2 font-semibold text-orange-600 hover:text-orange-700"
            >
              <Phone className="h-5 w-5" />
              <span>+91 9922851263</span>
            </a>

            <a
              href="#contact"
              onClick={(e) =>
                handleNavClick(e, '#contact')
              }
              className="rounded-lg bg-orange-600 px-6 py-2.5 font-semibold text-white shadow-md transition hover:bg-orange-700 hover:shadow-lg"
            >
              Get Quote
            </a>

          </div>

          {/* ===================================================== */}
          {/* MOBILE MENU BUTTON */}
          {/* ===================================================== */}

          <button
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-7 w-7 text-gray-700" />
            ) : (
              <Menu className="h-7 w-7 text-gray-700" />
            )}
          </button>

        </div>

      </div>

      {/* ========================================================= */}
      {/* MOBILE NAVIGATION */}
      {/* ========================================================= */}

      {menuOpen && (
        <div className="border-t bg-white shadow-lg lg:hidden">

          <div className="max-h-[calc(100vh-80px)] space-y-1 overflow-y-auto px-4 py-3">

            {navLinks.map((link) => (
              <div key={link.href}>

                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setDropdownOpen(!dropdownOpen)
                      }
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
                    >
                      {link.label}

                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          dropdownOpen
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>

                    {dropdownOpen && (
                      <div className="ml-4 mt-1 space-y-1">

                        {link.subItems?.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            onClick={(e) =>
                              handleNavClick(
                                e,
                                subItem.href
                              )
                            }
                            className="block rounded-lg px-4 py-2 text-sm text-gray-600 transition hover:bg-orange-50 hover:text-orange-600"
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
                    onClick={(e) =>
                      handleNavClick(e, link.href)
                    }
                    className={`block rounded-lg px-4 py-3 font-medium transition ${
                      activeSection ===
                      link.href.replace('#', '')
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {link.label}
                  </a>
                )}

              </div>
            ))}

            {/* Mobile Contact Buttons */}
            <div className="space-y-2 border-t pt-3">

              <a
                href="tel:+919922851263"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-orange-600 px-4 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                <Phone className="h-5 w-5" />
                Call: +91 9922851263
              </a>

              <a
                href="#contact"
                onClick={(e) =>
                  handleNavClick(e, '#contact')
                }
                className="block rounded-lg bg-orange-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
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