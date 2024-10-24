// utils/supabaseconfig.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vzbrsyvdvcjdazkcwysz.supabase.co'; // Wrap the URL in quotes
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6YnJzeXZkdmNqZGF6a2N3eXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MTc2NDksImV4cCI6MjA0NTI5MzY0OX0.RMWd0dDQhCEk32GS8U-GZuI5vagwDSSRwX6OpJ4vi1k';

if (!supabaseUrl) {
    throw new Error('supabaseUrl is required.');
}
if (!supabaseAnonKey) {
    throw new Error('supabaseAnonKey is required.'); // Fixed the error message for consistency
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
