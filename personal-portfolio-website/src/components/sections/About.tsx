'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <section id="about" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 lg:order-2"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-5"
                >
                  <p className="font-mono text-sm text-accent">
                    <TypeAnimation
                      sequence={[
                        'Hello World!',
                        2000,
                        '',
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      cursor={false}
                    />
                  </p>
                </motion.div>
                <h1 className="heading-1">
                  <TypeAnimation
                    sequence={[
                      '',
                      800, // Wait for Hello World to finish
                      'My name is Ray.'
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    className="[&>span]:inline [&>span]:text-accent [&>span]:dark:text-accent-light"
                  />
                </h1>
              </div>
              <h2 className="heading-2 text-neutral-600 dark:text-neutral-400">
                Full Stack Developer
              </h2>
            </div>

            <p className="body-large text-neutral-600 dark:text-neutral-400">
              Hello! My name is <span className="text-accent">Ray</span>. I am a full-stack developer with a passion for building beautiful, functional, and user-friendly applications. 
              Being a recent graduate with a background in <span className="text-accent">Computer Science</span> and <span className="text-accent">Information Technology</span>, I am always looking for new and innovative ways to improve my skills and knowledge.
            </p>

            <div className="flex gap-5">
              {/* GitHub */}
              <a
                href="https://github.com/yapzhanrui2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent transition-all duration-300 ease-out hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/zryy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-accent transition-all duration-300 ease-out hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:rayyap.dev@gmail.com"
                className="text-neutral-600 hover:text-accent transition-all duration-300 ease-out hover:-translate-y-1"
                aria-label="Email Me"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent/10 dark:bg-accent-light/10 rounded-3xl -rotate-6 transform" />
              <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 rounded-3xl rotate-3 transform" />
              <div className="relative rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <Image
                  src="/profile.webp"
                  alt="Ray's profile picture"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 