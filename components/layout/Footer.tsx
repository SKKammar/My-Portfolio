import { Rule } from '@/components/ui/Rule';
import { AdminTrigger } from '@/components/AdminTrigger';

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8">
      <Rule className="mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <AdminTrigger />
        <div className="flex gap-4 font-sans text-xs text-ash">
          <a href="https://github.com/SKKammar" className="hover:text-paper transition">GitHub</a>
          <a href="mailto:hello@example.com" className="hover:text-paper transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
