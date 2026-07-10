'use client';

import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'santoshkkammar16@gmail.com',
      href: 'mailto:santoshkkammar16@gmail.com',
      icon: Mail,
      color: 'hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
      iconBg: 'group-hover:bg-blue-500/20',
      iconColor: 'group-hover:text-blue-400',
    },
    {
      name: 'GitHub',
      value: '@SKKammar',
      href: 'https://github.com/SKKammar',
      icon: GithubIcon,
      color: 'hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]',
      iconBg: 'group-hover:bg-white/20',
      iconColor: 'group-hover:text-white',
    },
    {
      name: 'LinkedIn',
      value: 'Santosh K Kammar',
      href: 'https://www.linkedin.com/in/santosh-k-kammar-skk162005',
      icon: LinkedinIcon,
      color: 'hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]',
      iconBg: 'group-hover:bg-blue-400/20',
      iconColor: 'group-hover:text-blue-400',
    }
  ];

  return (
      <section
          id="contact"
          className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-12"
      >
        <FadeIn>
          <SectionHeading>Contact</SectionHeading>

          <div className="mt-10 max-w-4xl">

            <h2 className="font-display tracking-tight text-4xl leading-tight text-white md:text-6xl">
              Let&apos;s build something meaningful together.
            </h2>

            <div className="mt-8 flex flex-col md:flex-row gap-6 items-start md:items-center text-base leading-relaxed text-neutral-400">
                <p className="max-w-xl">
                  I&apos;m currently looking for software engineering opportunities,
                  internships, and exciting projects where I can contribute while
                  continuing to grow as an engineer.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`group relative flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6 backdrop-blur-md transition-colors duration-100 ease-out ${method.color}`}
                >
                  <motion.div 
                    className={`flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/5 transition-colors duration-100 ease-out ${method.iconBg}`}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <method.icon size={24} className={`text-neutral-400 transition-colors duration-100 ease-out ${method.iconColor}`} />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="font-medium text-base sm:text-lg text-white">{method.name}</h3>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-400">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

          </div>
        </FadeIn>
      </section>
  );
}