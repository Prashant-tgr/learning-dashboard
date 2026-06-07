"use client";

import AnimatedTile from "./AnimatedTile";

const activityData = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 6 },
  { day: "Thu", hours: 3 },
  { day: "Fri", hours: 8 },
  { day: "Sat", hours: 5 },
  { day: "Sun", hours: 9 },
];

export default function ActivityTile() {
  return (
    <AnimatedTile
      className="
        lg:col-span-2
        rounded-3xl
        bg-zinc-950/30
        border
        border-zinc-800
        p-6
      "
    >
      <h2 className="font-semibold mb-6 text-white">
        Weekly Activity
      </h2>

      <div className="flex items-end gap-3 h-44">
        {activityData.map((item) => (
          <div
            key={item.day}
            className="
              group
              relative
              flex-1
              h-full
              flex
              items-end
            "
          >
           
            <div
              className="
                absolute
                -top-10
                left-1/2
                -translate-x-1/2
                opacity-0
                group-hover:opacity-100
                transition-opacity
                rounded-lg
                bg-zinc-900
                border
                border-zinc-700
                px-2
                py-1
                text-xs
                whitespace-nowrap
                pointer-events-none
              "
            >
              {item.hours}h
            </div>

            {/* Bar */}
            <div
              style={{
                height: `${item.hours * 10}%`,
              }}
              className="
                w-full
                rounded-lg
                bg-gradient-to-b
                from-purple-500
                to-purple-700
                transition-all
                duration-300
                group-hover:from-pink-500
                group-hover:to-purple-500
              "
            />

            {/* Day Label */}
            <span
              className="
                absolute
                -bottom-6
                left-1/2
                -translate-x-1/2
                text-xs
                text-zinc-500
                group-hover:text-purple-300
                transition-colors
              "
            >
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </AnimatedTile>
  );
}