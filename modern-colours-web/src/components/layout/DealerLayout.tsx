
import { DealerSidebar } from "./DealerSidebar";
import { DealerHeader } from "./DealerHeader";
import { DealerMobileNav } from "./DealerMobileNav";

export default function DealerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100 flex overflow-hidden">
            <DealerSidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <DealerHeader />
                <main className="flex-1 overflow-y-auto p-8 bg-slate-50/50 dark:bg-background-dark pb-24 md:pb-8">
                    {children}
                </main>
            </div>
            <DealerMobileNav />
        </div>
    );
}
