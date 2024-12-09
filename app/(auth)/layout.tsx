// app/(auth)/layout.tsx
import { getServerSession } from '@/lib/auth/session';
import { redirect } from 'next/navigation';
import React from "react";

export const metadata = {
    title: 'Auth Pages',
};

export default async function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerSession();
    if (session) {
        redirect('/');
    }

    return (
        <section className="flex min-h-screen items-center justify-center bg-white">
            {children}
        </section>
    );
}
