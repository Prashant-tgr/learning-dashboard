export default function DashboardSkeleton() {
  return (
    <main className="p-6">
      <section
        aria-label="Dashboard overview loading"
        className="grid gap-4 lg:grid-cols-4 md:grid-cols-2"
      >
        {/* Hero Skeleton */}
        <article
          aria-hidden="true"
          className="lg:col-span-3 h-72 rounded-3xl bg-zinc-900 animate-pulse"
        />

        {/* Activity Skeleton */}
        <article
          aria-hidden="true"
          className="lg:col-span-1 h-72 rounded-3xl bg-zinc-900 animate-pulse"
        />
      </section>

      {/* Courses Row */}
      <section
        aria-label="Courses loading"
        className="grid gap-4 mt-4 lg:grid-cols-4 md:grid-cols-2"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <article
            key={i}
            aria-hidden="true"
            className="h-40 rounded-3xl bg-zinc-900 animate-pulse"
          />
        ))}
      </section>
    </main>
  );
}