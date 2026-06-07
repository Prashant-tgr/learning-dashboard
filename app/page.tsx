import { getCourses } from "@/lib/supabase/queries";
import Dashboard from "@/components/Dashboard";

export default async function DashboardPage() {
  const courses = await getCourses();

  return(
    <Dashboard courses={courses} />
  )
  
}
