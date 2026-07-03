import { Mail } from 'lucide-react';
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
      color: 'hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
    },
    {
      name: 'GitHub',
      value: 'github.com/SKKammar',
      href: 'https://github.com/SKKammar',
      icon: GithubIcon,
      color: 'hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    },
    {
      name: 'LinkedIn',
      value: 'Santosh K Kammar',
      href: 'https://www.linkedin.com/in/santosh-k-kammar-skk162005',
      icon: LinkedinIcon,
      color: 'hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]',
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
                <a
                  key={method.name}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md transition-all duration-500 ${method.color}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
                    <method.icon size={24} className="text-neutral-300 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium text-white">{method.name}</h3>
                    <p className="mt-2 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </FadeIn>
      </section>
  );
}