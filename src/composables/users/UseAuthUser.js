import { ref } from 'vue'
import useSupabase from 'src/boot/supabase'

const user = ref(null)

export default function useAuthUser() {
    const supabase = useSupabase()

    const login = async ({ email, password }) => {
        const { data, session, error } =  await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) throw error
        return data
    }

    const loginWithSocialProvider = async (provider) => {
        const { data, error } = await supabase.auth.signIn({ provider })
        if (error) throw error
        return data
    }

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    }

    const isLoggedIn = () => {
        return !!user.value
    }

    const register = async ({ email, password, ...meta }) => {

        const { data, error } = await supabase.auth.signUp(
            {
              email,
              password,
              options: {
                data: {
                    meta
                },
                emailRedirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`
              }
            }
          )
        
        if (error) {
            throw error;
        }
        
        return data;
    }

    const updateProfile = async (profileData) => {
        const { data, error } = await supabase.auth.update(profileData)
        if (error) throw error
        return data
    }

    const sendPasswordResetEmail = async (email) => {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email)
        if (error) throw error
        return data
    }

    const resetPassword = async (accessToken, newPassword) => {
        const { data, error } = await supabase.auth.updateUser({
            password: newPassword
          })

        if (error) throw error;
        return data;
    }

    return {
        user,
        login,
        loginWithSocialProvider,
        logout,
        isLoggedIn,
        register,
        updateProfile,
        sendPasswordResetEmail,
        resetPassword
    }
}
