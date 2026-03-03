import AppHeader from "@/components/reusables/app-header";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <AppHeader />
            <main className="px-[8rem] flex flex-col gap-4 pb-[4rem]">
                {children}
            </main>
        </div>
    );
}
