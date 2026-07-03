# Tick Tock — Santosh K Kammar's Portfolio

A personal developer portfolio built with **Next.js 15**, **React 19**, and **Tailwind v4**, featuring a custom 3D pendulum clock hero scene and a hidden, Supabase-backed admin panel for managing projects — no public sign-up, one admin account only.

Design identity: dark, cinematic, monochrome — Playfair Display + Inter typography, with a recurring hairline-rule motif throughout the UI.

---

## Features

- **3D pendulum clock hero** — built with `react-three-fiber`, rendered client-side
- **Hidden admin panel** — triple-click the footer copyright to reveal a login modal; add projects straight to Supabase, no public registration surface
- **Server-rendered project list** — projects section re-fetches from Supabase on each request, so new entries appear immediately
- **Fully responsive** — includes mobile navigation support
- **Type-safe throughout** — TypeScript across the app, components, and data layer

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15, React 19 |
| Styling | Tailwind CSS v4 |
| 3D | react-three-fiber |
| Backend / Auth | Supabase (Postgres + Row Level Security) |
| Language | TypeScript |

---

## Folder Structure

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

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/SKKammar/My-Portfolio.git
cd My-Portfolio
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in the four Supabase values (see setup below), then:

```bash
npm run dev
```

Visit `http://localhost:3000`.

---

## Supabase Setup (one-time)

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

2. **Authentication → Users → Add user** — create your one admin account (real email + password). There's no public registration page in this app.

3. **Settings → API** — copy these four values into `.env.local`:

   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` — server-only, never exposed to the browser
   - `ADMIN_EMAIL` — must exactly match the user created in step 2

---

## Using the Admin Panel

Triple-click the copyright text in the footer within 2 seconds → login modal appears → sign in with your admin credentials → add-project form appears.

Projects save straight to Supabase and appear in the Projects section on the next page load (or immediately, since it's a server component re-fetching on each request).

---

## Deploying to Vercel

1. Push the repo to GitHub (already done if you're reading this on GitHub).
2. Import the repo into [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Add the same four environment variables from `.env.local` under **Settings → Environment Variables** (Production + Preview).
5. Deploy.

No other config needed — `next.config.ts` and `postcss.config.mjs` are already set up for the build.

---

## Roadmap

- [ ] Wire Supabase Storage for drag-and-drop cover image upload (currently `coverImage` is a plain text path — drop files manually into `public/images/projects/`)
- [ ] Add an edit UI for existing projects (`DELETE` is already wired in the API route, just needs a button in `AdminForm.tsx`)
- [ ] Swap the placeholder contact email for a real one before sharing this live

---

## License

This project is open for reference and learning. If you're reusing significant chunks of it, a credit back to this repo is appreciated.
