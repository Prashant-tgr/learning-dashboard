"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-xl font-bold">
          Failed to load dashboard
        </h2>

        <button
          onClick={() => reset()}
          className="rounded-xl bg-white px-4 py-2 text-black"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}