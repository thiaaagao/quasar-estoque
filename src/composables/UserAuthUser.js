import { ref } from 'vue'
import useSupabase from 'boot/supabase'

const user = ref(null)
export default function useAuthUser () {
  const { supabase } = useSupabase()

  const login = async ({ email, password }) => {}

  const loginWithSocialProvider = async (provider) => {} // login with social

  const logout = async () => {} // logout

  const isLoggedIn = () => { // check login
    return !!user.value
  }

  const register = async ({ email, password, ...meta }) => {} // register

  const update = async (data) => {}

  const sendPasswordRestEmail = async () => {}

  return {
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail

  }
}
