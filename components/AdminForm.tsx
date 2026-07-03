'use client';
import { useState } from 'react';
import type { Project } from '@/data/projects';

// `Project` models the DB shape, where optional fields come back as
// `null`. This form always works with real strings/numbers while
// editing, and only needs to match `Project` when it's submitted.
type ProjectFormState = Omit<Project, 'id' | 'subtitle' | 'description' | 'coverImage' | 'liveUrl' | 'githubUrl' | 'year' | 'category'> & {
  subtitle: string;
  description: string;
  coverImage: string;
  liveUrl: string;
  githubUrl: string;
  year: number;
  category: string;
};

const emptyProject: ProjectFormState = {
  title: '',
  subtitle: '',
  description: '',
  coverImage: '',
  technologies: [],
  liveUrl: '',
  githubUrl: '',
  year: new Date().getFullYear(),
  featured: false,
  category: 'Web',
};

export function AdminForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState(emptyProject);
  const [techInput, setTechInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: keyof typeof form, value: string | number | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setStatus('saving');
    setErrorMsg('');

    const body = {
      ...form,
      id: form.title.toLowerCase().trim().replace(/\s+/g, '-'),
      technologies: techInput.split(',').map((t) => t.trim()).filter(Boolean),
    };

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
        return;
      }

      setStatus('success');
      setForm(emptyProject);
      setTechInput('');
    } catch {
      setStatus('error');
      setErrorMsg('Network error');
    }
  };

  return (
    <div className="fixed inset-0 bg-ink/90 flex items-center justify-center z-50 p-4">
      <div className="bg-ink-card border border-ink-border p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="font-display text-lg text-paper mb-4">Add Project</h2>

        <div className="flex flex-col gap-2">
          <input
            value={form.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Title"
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          />
          <input
            value={form.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            placeholder="Subtitle"
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          />
          <textarea
            value={form.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Description"
            rows={3}
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          />
          <input
            value={form.coverImage}
            onChange={(e) => handleChange('coverImage', e.target.value)}
            placeholder="Cover image path (e.g. /images/projects/foo.png)"
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          />
          <input
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="Technologies, comma separated"
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          />
          <input
            value={form.liveUrl}
            onChange={(e) => handleChange('liveUrl', e.target.value)}
            placeholder="Live URL (optional)"
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          />
          <input
            value={form.githubUrl}
            onChange={(e) => handleChange('githubUrl', e.target.value)}
            placeholder="Github URL (optional)"
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          />
          <input
            type="number"
            value={form.year}
            onChange={(e) => handleChange('year', Number(e.target.value))}
            placeholder="Year"
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          />
          <select
            value={form.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="p-2 bg-ink border border-ink-border text-paper font-sans text-sm"
          >
            <option value="3D">3D</option>
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
            <option value="Branding">Branding</option>
            <option value="Other">Other</option>
          </select>

          <label className="flex items-center gap-2 font-sans text-xs text-paper mt-1">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => handleChange('featured', e.target.checked)}
            />
            Featured?
          </label>
        </div>

        {status === 'error' && <p className="text-fog text-xs mt-2">{errorMsg}</p>}
        {status === 'success' && <p className="text-paper text-xs mt-2">Project added.</p>}

        <div className="flex gap-2 mt-4">
          <button
            onClick={handleSubmit}
            disabled={status === 'saving'}
            className="flex-1 border border-ink-border py-2 font-sans text-xs disabled:opacity-50"
          >
            {status === 'saving' ? 'Saving...' : 'Save Project'}
          </button>
          <button onClick={onClose} className="flex-1 border border-ink-border py-2 font-sans text-xs">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
