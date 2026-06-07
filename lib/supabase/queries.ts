
import { createClient } from "./server";

export async function getCourses() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    throw new Error(error.message);

  }

  return data ?? []
}