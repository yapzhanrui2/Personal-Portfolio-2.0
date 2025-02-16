'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Freelance AI Trainer',
    company: 'Outlier',
    companyUrl: 'https://www.outlier.ai',
    location: 'Remote',
    period: 'Sep 2024 - Present',
    description: [
      'Assessed and ranked AI-generated code across multiple programming languages, providing critical feedback to improve model accuracy and performance.',
      'Developed and answered complex computer science questions to enhance the training of AI models, ensuring comprehensive coverage of key topics.',
      'Authored detailed reports on AI model performance, highlighting areas for improvement and recommending actionable solutions.',
    ],
    technologies: ['Javascript', 'Python', 'Java', 'C++'],
  },
  {
    title: 'Software Developer Intern',
    company: 'InflaMed',
    companyUrl: 'https://inflamed.com.au',
    location: 'Melbourne',
    period: 'May 2022 - Aug 2022',
    description: [
      'Developed and maintained production code for InflaMed\'s website using Next.js, Tailwind CSS, and TypeScript with RESTful APIs.',
      'Automated Infrastructure as Code (IAC) using Terraform and deployed to Google Cloud Platform.',
      'Collaborated effectively in a cross-disciplinary team following Agile teamwork principles.',
    ],
    technologies: ['Next.js', 'Typescript', 'CSS', 'Terraform', 'Google Cloud Platform'],
  },
  // Add more experiences as needed
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <h2 className="heading-2">Experience</h2>
          <p className="body-large text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My professional journey in software development, where I&apos;ve interned at a health tech startup and done some freelance work.
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          <div className="relative group/list">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group/item"
              >
                <div className="group relative rounded-2xl p-6 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300
                              group-hover/list:opacity-50 hover:!opacity-100 hover:scale-[1.02]">
                  <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-6 lg:gap-12">
                    {/* Time period */}
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 lg:text-right lg:pt-2">
                      {experience.period}
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="heading-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                          {experience.title}
                        </h3>
                        <div className="text-neutral-600 dark:text-neutral-400">
                          <a 
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent-light transition-colors relative z-10 hover-underline"
                          >
                            {experience.company}
                          </a>
                          {' • '}
                          {experience.location}
                        </div>
                      </div>

                      <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-4 mt-2 text-accent">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm text-accent border border-accent rounded-full relative z-10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-neutral-200 dark:border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 