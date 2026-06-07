import DashboardSkeleton from "@/components/DashboardSkeleton";
import { createClient } from "@/lib/supabase/server";
export default function Loading() {
  return <DashboardSkeleton />;
}

