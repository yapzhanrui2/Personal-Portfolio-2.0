'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const featuredProjects = [
  {
    title: 'Project Name 1',
    description: 'A detailed description of your project. Explain what it does, what problem it solves, and any notable features or achievements.',
    image: '/projects/project1.webp',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    external: 'https://project1-demo.com',
  },
  {
    title: 'Project Name 2',
    description: 'Another detailed project description. Make it compelling and highlight the key aspects that make this project special.',
    image: '/projects/project2.webp',
    tech: ['Next.js', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    external: 'https://project2-demo.com',
  },
  // Add more featured projects as needed
];

const otherProjects = [
  {
    title: 'Project Name 3',
    description: 'A brief description of the project that explains its main features and technologies used.',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/project3',
    external: 'https://project3-demo.com',
  },
  {
    title: 'Project Name 4',
    description: 'Another interesting project description highlighting key features and implementation details.',
    tech: ['Vue.js', 'Express', 'MongoDB'],
    github: 'https://github.com/yourusername/project4',
    external: 'https://project4-demo.com',
  },
  {
    title: 'Project Name 5',
    description: 'A concise description of what makes this project special and what problems it solves.',
    tech: ['Next.js', 'GraphQL', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project5',
    external: 'https://project5-demo.com',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <h2 className="heading-2">Featured Projects</h2>
          <p className="body-large text-neutral-600 max-w-2xl mx-auto">
            Here are some of my notable projects. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="mt-16 space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/9] group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1280}
                    height={720}
                    className="rounded-sm object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : ''}`}>
                <div className="space-y-6">
                  <h3 className="heading-3 text-neutral-300">{project.title}</h3>
                  <p className="body text-neutral-600">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm text-accent border border-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-accent transition-all duration-300 ease-out hover:-translate-y-1"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-accent transition-all duration-300 ease-out hover:-translate-y-1"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-32 space-y-4 text-center"
        >
          <h2 className="heading-2">Other Notable Projects</h2>
          <p className="body-large text-neutral-600 max-w-2xl mx-auto">
            A collection of other interesting projects I&apos;ve worked on.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-neutral-900 p-6 rounded-sm hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col h-full space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-accent">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-accent transition-all duration-300 ease-out hover:-translate-y-1"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                          />
                        </svg>
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-accent transition-all duration-300 ease-out hover:-translate-y-1"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="heading-4 text-neutral-300 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 