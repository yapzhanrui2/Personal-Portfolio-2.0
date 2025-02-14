'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="heading-2">Get In Touch</h2>
          <p className="body-large text-neutral-600">
            I&apos;m currently looking for new opportunities. Feel free to shoot me a message!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium 
                       bg-transparent text-accent hover:text-accent-light border-2 border-accent
                       hover:border-accent-light rounded-sm transition-all duration-300
                       hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(100,255,218,1.0)]"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 