
import { BuyerHeader } from "./BuyerHeader";
import { BuyerBottomNav } from "./BuyerBottomNav";

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#181111] dark:text-white transition-colors duration-300 min-h-screen pb-20" data-theme="buyer">
            <BuyerHeader />
            <main>
                {children}
            </main>
            <BuyerBottomNav />
        </div>
    );
}
