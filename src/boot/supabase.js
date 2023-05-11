import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UserAuthUser'

const supabaseUrl = 'https://sgldwqepgxoefiwkfcvq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnbGR3cWVwZ3hvZWZpd2tmY3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzMjI0OTIsImV4cCI6MTk5Njg5ODQ5Mn0.SjdxQsGYa1fu9keDf5oQazMhPF1XwUlT6zy78jrB6vc'
const supabase = createClient(supabaseUrl, supabaseKey)

// state session
supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})
export default function useSupabase () {
  return { supabase }
}
