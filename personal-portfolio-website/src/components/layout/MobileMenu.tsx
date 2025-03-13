'use client';

import { Fragment, useEffect, useState } from 'react';
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

  // Store the target section ID in a React state when a navigation link is clicked
  const [targetSectionId, setTargetSectionId] = useState<string | null>(null);

  // Use an effect to handle scrolling after the menu is closed
  useEffect(() => {
    // Only proceed if the menu is closed AND we have a target section
    if (!isOpen && targetSectionId) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(targetSectionId);
        if (element) {
          // Calculate offset for header height
          const offset = 96; // Match your header height
          
          // For mobile, use a more reliable scrolling approach
          const topPosition = window.scrollY + element.getBoundingClientRect().top - offset;
          
          window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
          });
        }
        
        // Clear the target after scrolling
        setTargetSectionId(null);
      }, 400); // Slightly longer than animation duration for reliability
      
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, targetSectionId]);

  // Modified Nav Click handler to use the state approach
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent any event bubbling
    
    // Store the target section ID and close the menu
    const targetId = href.substring(1);
    setTargetSectionId(targetId);
    setIsOpen(false);
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