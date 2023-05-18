import { ref } from 'vue'
import useSupabase from 'boot/supabase'

const user = ref(null)

export default function useAuthUser () {
  const { supabase } = useSupabase()

  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return user
  }

  const loginWithSocialProvider = async (provider) => {
    const { user, error } = await supabase.auth.signIn({ provider })
    if (error) throw error
    return user
  } // login with social provider

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } // logout

  const isLoggedIn = () => { // check login
    return !!user.value
  }

  const register = async ({ email, password, ...meta }) => { // register
    const { user, error } = await supabase.auth.signUp(
      { email, password, options: { data: meta, emailRedirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation` } }
    )
    if (error) throw error
    return user
  }

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data)
    if (error) throw error
    return user
  }

  const sendPasswordResetEmail = async (email) => {
    const { user, error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
    return user
  }

  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordResetEmail

  }
}
