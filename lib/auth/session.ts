import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function getServerSession() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
        console.error('Error getting session:', error);
        return null;
    }

    return session;
}
