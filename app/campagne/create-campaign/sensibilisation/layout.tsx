import TabNavigation from '@/components/dashboard/campaign/NavigationSensibilisation/NavigationSensibilisation.tsx';
interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className=" mx-auto pt-10 px-4 sm:px-6 lg:px-8">
            <TabNavigation />
            {children}
        </main>

    );
}