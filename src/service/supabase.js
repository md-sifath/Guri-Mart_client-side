import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tmkvktjtvavdthfkgyfy.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRta3ZrdGp0dmF2ZHRoZmtneWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzA5NDksImV4cCI6MjA0MzAwNjk0OX0.wcHtQZ5bnWJgq8ZbpdzK6mTN0Dyy3QF3sB_-vOMKDM4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
