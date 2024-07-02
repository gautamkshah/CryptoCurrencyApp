import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ekrzjjnmmowctexxwyma.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrcnpqam5tbW93Y3RleHh3eW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4MTAzMDcsImV4cCI6MjAzNTM4NjMwN30.e-BJwpUa9dZ5Acz4wNhmcCGND2u-ekF42UalHIHCH5M"
export const supabase = createClient(supabaseUrl, supabaseAnonKey,{
    auth:{
        storage:AsyncStorage,
        autoRefreshToken:true,
        persistSession:true,
        detectSessionInUrl:false
    },
});