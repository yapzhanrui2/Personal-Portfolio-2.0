'use client';

import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll effect and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Update header background
      setIsScrolled(window.scrollY > 0);

      // Update active section
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="container flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Name */}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-lg font-display font-bold hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            Ray Yap
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm hover:text-accent dark:hover:text-accent-light transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent dark:text-accent-light font-medium'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download
              className="btn-primary"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-light"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        navigation={navigation}
      />
    </>
  );
} 