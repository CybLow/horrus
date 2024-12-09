import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/', '/campagne', '/users', '/groups', '/payment', '/help'];
const authRoutes = ['/login', '/register'];

export async function handleAuth(request: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req: request, res });

    try {
        const { data: { user } } = await supabase.auth.getUser();

        const isProtectedRoute = protectedRoutes.some(route =>
            request.nextUrl.pathname === route || request.nextUrl.pathname.startsWith(`${route}/`)
        );

        const isAuthRoute = authRoutes.some(route =>
            request.nextUrl.pathname === route
        );

        // Unauthenticated user trying to access protected route
        if (!user && isProtectedRoute) {
            const redirectUrl = new URL('/login', request.url);
            redirectUrl.searchParams.set('redirect', request.nextUrl.pathname);
            return NextResponse.redirect(redirectUrl);
        }

        // Authenticated user trying to access login/register
        if (user && isAuthRoute) {
            return NextResponse.redirect(new URL('/', request.url));
        }

        return res;
    } catch (error) {
        console.error('Auth middleware error:', error);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}
