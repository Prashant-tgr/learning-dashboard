# Learning Dashboard

A responsive learning dashboard built with Next.js App Router, TypeScript, Tailwind CSS, Supabase, and Framer Motion.

## Architecture

The application follows a component-driven architecture:

* **App Router** for routing and server-side data fetching.
* **Supabase** as the backend data source.
* **Reusable UI components** for Hero, Activity, Course Cards, Sidebar, and Skeleton states.
* **Framer Motion** for page transitions, staggered animations, hover effects, and navigation micro-interactions.

### Project Structure

```text
app/
├── page.tsx
├── loading.tsx
├── error.tsx

components/
├── Dashboard.tsx
├── Sidebar.tsx
├── HeroTile.tsx
├── ActivityTile.tsx
├── CourseCard.tsx
├── DashboardSkeleton.tsx
└── AnimatedTile.tsx

lib/
├── supabase/
│   ├── server.ts
│   └── queries.ts
```

## Server / Client Component Split

The application follows Next.js App Router best practices:

### Server Components

* Data fetching from Supabase is performed on the server.
* The page component remains server-rendered to reduce client-side JavaScript and improve performance.
* Database queries are isolated inside `lib/supabase/queries.ts`.

### Client Components

Client components are used only where interactivity is required:

* `Sidebar` → navigation state and layout animations.
* `AnimatedTile` → hover animations and staggered entry effects.
* `CourseCard` → animated progress bars.
* Activity chart interactions and tooltips.

This approach keeps the client bundle small while preserving a rich interactive experience.

## Animations & Interactions

Implemented with Framer Motion:

* Staggered Bento tile entrance animations.
* Hover elevation using spring physics.
* Subtle glow and border transitions on hover.
* Animated sidebar navigation highlight using `layoutId`.
* Responsive mobile bottom navigation.
* Animated course progress indicators.

## Loading & Error Handling

### Loading States

* Implemented route-level loading UI using `loading.tsx`.
* Skeleton components prevent layout shifts while data is loading.

### Error Handling

* Route-level error boundaries implemented using `error.tsx`.
* Database query failures surface meaningful error states.
* Empty-state handling for missing course data.

## Challenges Faced

* Balancing Server and Client Components while preserving animation capabilities.
* Preventing layout shifts between loading and loaded states.
* Implementing responsive navigation that works as a collapsible sidebar on desktop and a bottom navigation bar on mobile.
* Coordinating Framer Motion staggered animations across independently rendered dashboard sections.

## Running Locally

```bash
npm install
npm run dev
```

Create a `.env.local` file:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

Then open:

```text
http://localhost:3000
```
