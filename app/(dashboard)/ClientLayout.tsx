// app/(app)/ClientLayout.tsx (Client Component)
"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar/Sidebar';
import Header from '@/components/layout/Header/Header';

export default function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // You can dynamically set title based on pathname or keep it static
    const title = "Dashboard";

    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col">
                <Header setSidebarOpen={setSidebarOpen} title={title} />
                <main>{children}</main>
            </div>
        </>
    );
}
