
import Link from 'next/link';

export function DealerSidebar() {
    return (
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200/60 dark:border-slate-800 flex flex-col shrink-0 h-screen hidden md:flex">
            <div className="p-6 flex items-center gap-3">
                <div className="size-10 bg-brand-red rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-red/25">
                    <span className="material-symbols-outlined text-2xl">palette</span>
                </div>
                <div>
                    <h1 className="text-base font-extrabold leading-none tracking-tight">Modern Colours</h1>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mt-0.5">Dealer Portal</p>
                </div>
            </div>
            <nav className="flex-1 px-4 mt-4 space-y-1">
                <Link href="/dealer/dashboard" className="flex items-center gap-3 px-4 py-3 bg-brand-red/10 text-brand-red rounded-xl font-bold transition-all">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span>Home</span>
                </Link>
                <Link href="/dealer/products" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-semibold transition-all group">
                    <span className="material-symbols-outlined group-hover:text-brand-red">inventory_2</span>
                    <span>Products</span>
                </Link>
                <Link href="/dealer/orders" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-semibold transition-all group">
                    <span className="material-symbols-outlined group-hover:text-brand-red">shopping_cart</span>
                    <span>Orders</span>
                </Link>
            </nav>
            <div className="p-4 border-t border-slate-200/60 dark:border-slate-800">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">My Credit</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-extrabold text-slate-900 dark:text-white">₹2.5L</span>
                        <span className="text-[10px] text-emerald-600 font-bold">Available</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
