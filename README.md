# Santosh K Kammar — Portfolio

Next.js 15 + React 19 + Tailwind v4 portfolio with a hidden Supabase-backed
admin panel for adding projects (no public sign-up — one admin account only).

## Folder structure

```
my-portfolio/
├── app/
│   ├── api/projects/route.ts   # protected POST/DELETE + public GET
│   ├── globals.css             # design tokens (Tailwind v4 @theme)
│   ├── layout.tsx              # fonts + metadata
│   └── page.tsx                # assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx        # server component, reads Supabase
│   │   ├── ProjectCard.tsx
│   │   ├── Skills.tsx
│   │   ├── GitHub.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Rule.tsx             # the hairline motif
│   │   ├── Tag.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── PendulumScene.tsx        # 3D pendulum, client-only
│   ├── AdminTrigger.tsx         # triple-click footer copyright
│   ├── LoginModal.tsx
│   └── AdminForm.tsx
├── data/projects.ts             # Project type + placeholder fallback data
├── lib/supabase/
│   ├── client.ts                # browser client (anon key)
│   └── server.ts                # server client (service role key)
├── public/images/projects/      # drop project cover images here
├── .env.local.example
└── package.json
```

## Local setup

```bash
npm install
cp .env.local.example .env.local   # then fill in the four Supabase values
npm run dev
```

## Supabase setup (one-time)

1. **SQL Editor → New query** — create the table and lock it down:

```sql
create table projects (
  id text primary key,
  title text not null,
  subtitle text,
  description text,
  cover_image text,
  technologies text[],
  live_url text,
  github_url text,
  year int,
  featured boolean default false,
  category text,
  created_at timestamp default now()
);

alter table projects enable row level security;
create policy "Public read access" on projects for select using (true);
-- No public insert/update/delete policy — only the server-side API route,
-- using the service role key, can write.
```

2. **Authentication → Users → Add user** — create your one admin account
   (real email + password). No public registration page exists in this app.

3. **Settings → API** — copy the four values into `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only, never exposed to the browser)
   - `ADMIN_EMAIL` (must exactly match the user you created in step 2)

## Using the admin panel

Triple-click the copyright text in the footer within 2 seconds → login modal
appears → sign in with your admin credentials → add-project form appears.
Projects save straight to Supabase and show up in the Projects section on
next page load (or immediately, since it's a server component re-fetching
on each request).

## Deploying to Vercel

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/SKKammar/<your-repo-name>.git
git push -u origin main
```

Then in Vercel:
1. Import the GitHub repo.
2. Framework preset: Next.js (auto-detected).
3. Add the same four environment variables from `.env.local` under
   **Settings → Environment Variables** (Production + Preview).
4. Deploy.

No other config needed — `next.config.ts` and `postcss.config.mjs` are
already set up for the build.

## Known gaps / next steps

- `coverImage` is a plain text path — drop files into
  `public/images/projects/` manually. Wiring Supabase Storage for
  drag-and-drop upload is a natural next addition.
- No edit UI yet for existing projects — `DELETE` is wired in the API route,
  but there's no button for it in `AdminForm.tsx` yet.
- Contact section is `mailto:`-based; swap `hello@example.com` for your real
  email before deploying.
