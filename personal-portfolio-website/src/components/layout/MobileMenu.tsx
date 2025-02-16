'use client';

import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navigation: Array<{ name: string; href: string }>;
}

export default function MobileMenu({ isOpen, setIsOpen, navigation }: MobileMenuProps) {
  // Proper body scroll lock with scrollbar compensation
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - html.clientWidth;
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
      body.style.paddingRight = '0';
      html.style.overflow = 'auto';
    }
    
    return () => {
      body.style.overflow = 'auto';
      body.style.paddingRight = '0';
      html.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for menu animation to complete before scrolling
    setTimeout(() => {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        // Calculate offset for header height
        const offset = 96; // Match your header height (h-16 sm:h-20 = 64px/80px)
        const bodyTop = document.body.getBoundingClientRect().top;
        const elementTop = element.getBoundingClientRect().top;
        const offsetPosition = elementTop - bodyTop - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Matches the menu close transition duration
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-950/20 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-full flex items-start justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-4"
            >
              <Dialog.Panel className="relative w-full mt-16 bg-white dark:bg-neutral-950 shadow-xl">
                <nav className="p-6">
                  <ul className="flex flex-col gap-6">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-light"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center"
                    >
                      Resume
                    </a>
                  </div>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 