import "@/styles/globals.css";

export default function Campaigns({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="pl-[21rem] pr-4 max-xl:pl-[19rem] max-lg:pl-4 pt-4">
            {children}
        </main>
    );
}