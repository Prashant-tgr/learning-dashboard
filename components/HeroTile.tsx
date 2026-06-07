import AnimatedTile from "./AnimatedTile";

export default function HeroTile() {
  return (
    <AnimatedTile className=" relative lg:col-span-2 rounded-3xl p-6 min-h-[220px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_#ffffff_0%,_transparent_30%)]" />

      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm opacity-80">NexGen STUDENT</p>
          <h1 className="text-4xl font-bold mt-2">Welcome back, John.</h1>
          <p className="mt-2 text-zinc-100/90">You're doing great! You've maintained your focus for 14 days straight.</p>
        </div>

        <div className="text-right">
          <div className="text-4xl md:text-6xl font-extrabold">14</div>
          <div className="text-sm opacity-80">DAY STREAK</div>
        </div>
      </div>
    </AnimatedTile>
  );
}