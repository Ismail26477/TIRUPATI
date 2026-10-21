import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL || 'https://nhgdblcfqyzwqifgeykd.supabase.co';
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || 'preview-placeholder-anon-key';

export const supabase = createClient(url, key);
