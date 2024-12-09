import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from './providers';
import React from "react";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'My App',
    description: 'Your app description',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}