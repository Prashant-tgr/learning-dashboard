import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedTile from "./AnimatedTile";

export default function CourseCard({
  course,
}: {
  course: any;
}) {
  return (
    <AnimatedTile>
      <article
        className="
          h-[180px]
          flex
          flex-col
          rounded-2xl
          border
          border-zinc-800/50
          bg-gradient-to-b
          from-zinc-900/60
          to-zinc-950/40
          p-5
          backdrop-blur-sm
          overflow-hidden
          relative
        "
      >
        {/* Header */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div
                className="
                  w-12
                  h-12
                  shrink-0
                  rounded-xl
                  bg-gradient-to-br
                  from-purple-600
                  to-pink-500/80
                  flex
                  items-center
                  justify-center
                "
              >
                <Rocket
                  size={20}
                  className="text-white"
                />
              </div>

              <div>
                <h3
                  className="
                    text-base
                    font-semibold
                    text-white
                    leading-tight
                    min-h-[48px]
                  "
                >
                  {course.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {course.category || "Course"}
                </p>
              </div>
            </div>

            <span className="text-sm text-zinc-400 shrink-0">
              {course.progress}%
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-auto">
          <div
            className="
              h-3
              rounded-full
              bg-white/10
              overflow-hidden
            "
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${course.progress}%`,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-purple-500
                via-fuchsia-500
                to-pink-400
              "
            />
          </div>
        </div>
      </article>
    </AnimatedTile>
  );
}