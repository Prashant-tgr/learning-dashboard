"use client";
import Sidebar from "./Sidebar";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";
import {motion} from "framer-motion";


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Dashboard({
  courses,
}: {
  courses: any[];
}) {

   if (!courses?.length) {
    return (
      <main className="flex-1 p-8">
        <section className="rounded-3xl border border-zinc-800 p-8">
          <h2 className="text-xl font-semibold">
            No courses found
          </h2>

          <p className="mt-2 text-zinc-400">
            Add your first course to get started.
          </p>
        </section>
      </main>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        <Sidebar />

        <main className="space-y-6 flex-1 p-6 pb-24 md:pb-6">
          <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">

            
            <HeroTile />
            

            <ActivityTile />
          </motion.section>
          
          <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid lg:grid-cols-4 md:grid-cols-2 gap-4"
            >
            
              
              {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
                          
              ))}
              

            

          </motion.section>
        </main>
      </div>
    </div>
  );
}