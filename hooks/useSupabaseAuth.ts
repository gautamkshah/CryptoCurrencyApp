import { useUserStore } from '@/store/useUserStore'
import { supabase } from '../lib/supabase'


// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.


export default function useSupabaseAuth() {
    const { session, setSession, setUser } = useUserStore()

    async function signInWithEmail(email: string, password: string) {
        const { error, data } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        return {
            error,
            data,
        }
    }

    async function signUpWithEmail(email: string, password: string) {
        const { error, data } = await supabase.auth.signUp({
            email,
            password
        })
        return {
            error,
            data,
        }
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            setUser(null)
            setSession(null)
        }
        return {
            error
        }
    }

    async function getUserprofile() {
        if (!session?.user) throw new Error('No user in the session')
        const { data, error } = await supabase
            .from('profiles')
            .select('username, full_name, avatar_url, website')
            .eq('id', session?.user.id)
            .single()

        return {
            data,
            error,
        }

    }

    async function updateUserprofile(
        username: string,
        fullname: string,
        avatar_url: string,
        website: string
    ){
        if(!session?.user) throw new Error('No user in the session')
        const updates={
            id:session.user.id,
            username,
            full_name:fullname,
            website: website,
            avatar_url: avatar_url,
            updated_at: new Date() ,
        }
        const {error} = await supabase.from('profiles').upsert(updates);
        return {
            error,
        }
    }

    return {
        signInWithEmail,
        signUpWithEmail,
        signOut,
        getUserprofile,
        updateUserprofile,
    }
    
}
