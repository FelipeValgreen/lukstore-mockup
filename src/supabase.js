
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValidUrl = (url) => typeof url === 'string' && url.trim().length > 0 && url.startsWith('http');

export const supabase = (isValidUrl(supabaseUrl) && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({ select: () => ({ data: [], error: null }) }),
        auth: {
            getSession: () => Promise.resolve({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }),
            signUp: () => Promise.resolve({ error: { message: "Supabase not configured" } }),
            signInWithPassword: () => Promise.resolve({ error: { message: "Supabase not configured" } }),
            signOut: () => Promise.resolve({ error: null }),
        }
    };

if (!supabaseUrl) console.warn('Supabase URL missing. Using mock client.');
