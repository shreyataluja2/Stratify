
import Link from 'next/link';

export function DealerMobileNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 h-20 flex items-start justify-around px-2 pt-3 z-50 md:hidden">
            <Link href="/dealer/dashboard" className="flex flex-col items-center text-brand-red">
                <span className="material-symbols-outlined text-2xl">dashboard</span>
                <span className="text-[10px] font-bold mt-1">Home</span>
            </Link>
            <Link href="/dealer/products" className="flex flex-col items-center text-slate-400">
                <span className="material-symbols-outlined text-2xl">inventory_2</span>
                <span className="text-[10px] font-medium mt-1">Products</span>
            </Link>
            <Link href="/dealer/orders" className="flex flex-col items-center text-slate-400">
                <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                <span className="text-[10px] font-medium mt-1">Orders</span>
            </Link>
            <Link href="/dealer/offers" className="flex flex-col items-center text-slate-400">
                <span className="material-symbols-outlined text-2xl">local_offer</span>
                <span className="text-[10px] font-medium mt-1">Offers</span>
            </Link>
        </nav>
    );
}
