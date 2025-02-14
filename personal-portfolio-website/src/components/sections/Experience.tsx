'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Company Name',
    location: 'Location',
    period: 'Jan 2023 - Present',
    description: [
      'Led the development of feature X resulting in Y% improvement in Z',
      'Collaborated with cross-functional teams to implement new features',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Company Name',
    location: 'Location',
    period: 'May 2022 - Aug 2022',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Implemented responsive designs and improved user experience',
      'Participated in agile development processes',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Git'],
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
            My professional journey in software development, where I&apos;ve worked on various projects and grown my skills.
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
                          {experience.company} • {experience.location}
                        </div>
                      </div>

                      <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mt-2 mr-4 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                                     bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400
                                     group-hover:bg-white dark:group-hover:bg-neutral-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-neutral-200 dark:border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 