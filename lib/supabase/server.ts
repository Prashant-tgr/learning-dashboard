import { createClient as createSupabaseClient, SupabaseClient } from '@supabase/supabase-js';

export function createClient(): SupabaseClient {
	const url = process.env.SUPABASE_URL;
	const key = process.env.SUPABASE_ANON_KEY;

	if (!url || !key) {
		throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables');
	}

	return createSupabaseClient(url, key, {
		auth: { persistSession: false },
	});
}
