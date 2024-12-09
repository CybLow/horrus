// app/(app)/layout.tsx (Server Component)
import { getServerSession } from '@/lib/auth/session';
import { redirect } from 'next/navigation';
import React from 'react';
import ClientLayout from './ClientLayout';

export const metadata = {
    title: 'Dashboard',
};

export default async function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerSession();
    if (!session) {
        redirect('/login');
    }

    // Just render ClientLayout here. No function props are passed.
    return (
        <div className="bg-[#F5F7FA] min-h-screen flex">
            <ClientLayout>{children}</ClientLayout>
        </div>
    );
}
