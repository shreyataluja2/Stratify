'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function AdminSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname.startsWith(path);

    // Helper to determine classes
    const getLinkClasses = (path: string) => {
        const active = isActive(path);
        const base = "flex items-center gap-3 px-3 py-3 rounded-r-xl border-l-[3px] transition-all duration-200 group";
        const activeClasses = "border-brand-red bg-red-50 text-brand-red";
        const inactiveClasses = "border-transparent hover:border-brand-purple hover:bg-slate-100 text-sidebar-text hover:text-slate-900";
        return `${base} ${active ? activeClasses : inactiveClasses}`;
    };

    const getIconClasses = (path: string, color: string = "text-slate-500") => {
        const active = isActive(path);
        return active ? `material-symbols-outlined text-brand-red` : `material-symbols-outlined group-hover:text-${color} transition-colors text-slate-500`;
    };

    // Fallback for icon color since dynamic tailwind classes might not work if not safe-listed, 
    // but here we use specific classes knowing the mapping. 
    // Actually, 'group-hover:text-brand-purple' etc works.

    return (
        <div className="hidden md:flex flex-col w-72 h-full border-r border-sidebar-border bg-sidebar-bg flex-shrink-0 z-20 shadow-xl">
            <div className="flex flex-col h-full p-4 justify-between">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 px-2 pt-2 pb-2">
                        <div className="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-brand-red via-brand-purple to-brand-yellow shadow-lg shadow-purple-900/20 ring-1 ring-black/5">
                            <span className="material-symbols-outlined text-white" style={{ fontSize: 24 }}>palette</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sidebar-text text-base font-bold leading-tight tracking-tight">Modern Colours</h1>
                            <p className="text-slate-500 text-xs font-medium">Executive Suite</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-1.5">
                        <Link href="/admin/dashboard" className={getLinkClasses('/admin/dashboard')}>
                            <span className="material-symbols-outlined">home</span>
                            <p className="text-sm font-bold">Dashboard</p>
                        </Link>
                        <Link href="/admin/inventory" className={getLinkClasses('/admin/inventory')}>
                            <span className="material-symbols-outlined">inventory_2</span>
                            <p className="text-sm font-medium">Inventory</p>
                        </Link>
                        <Link href="/admin/warehouses" className={getLinkClasses('/admin/warehouses')}>
                            <span className="material-symbols-outlined">warehouse</span>
                            <p className="text-sm font-medium">Warehouses</p>
                        </Link>
                        <Link href="/admin/orders" className={getLinkClasses('/admin/orders')}>
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <p className="text-sm font-medium">Orders</p>
                        </Link>
                        <Link href="/admin/dealers" className={getLinkClasses('/admin/dealers')}>
                            <span className="material-symbols-outlined">group</span>
                            <p className="text-sm font-medium">Dealers</p>
                        </Link>
                        <Link href="/admin/analytics" className={getLinkClasses('/admin/analytics')}>
                            <span className="material-symbols-outlined">trending_up</span>
                            <p className="text-sm font-medium">Analytics</p>
                        </Link>
                        <Link href="/admin/forecasting" className={getLinkClasses('/admin/forecasting')}>
                            <span className="material-symbols-outlined">psychology</span>
                            <p className="text-sm font-medium">Forecasting</p>
                        </Link>
                        <Link href="/admin/returns" className={getLinkClasses('/admin/returns')}>
                            <span className="material-symbols-outlined">assignment_return</span>
                            <p className="text-sm font-medium">Returns</p>
                        </Link>
                        <Link href="/admin/products" className={getLinkClasses('/admin/products')}>
                            <span className="material-symbols-outlined">inventory</span>
                            <p className="text-sm font-medium">Products</p>
                        </Link>
                        <div className="flex items-center gap-3 px-3 py-3 rounded-r-xl border-l-[3px] border-transparent hover:border-brand-purple hover:bg-slate-100 text-sidebar-text hover:text-slate-900 transition-all duration-200 group justify-between cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <span className="material-symbols-outlined group-hover:text-brand-purple transition-colors text-slate-500">notifications</span>
                                    <span className="absolute top-0.5 right-0.5 flex h-2 w-2">
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red border border-white"></span>
                                    </span>
                                </div>
                                <p className="text-sm font-medium">Alerts</p>
                            </div>
                            <span className="px-2 py-0.5 rounded-md bg-red-100 text-brand-red border border-red-200 text-[10px] font-bold">3</span>
                        </div>
                    </nav>
                </div>
                <div className="flex flex-col gap-3 border-t border-slate-200 pt-4">
                    <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-3 rounded-r-xl border-l-[3px] border-transparent hover:border-slate-400 hover:bg-slate-100 text-sidebar-text hover:text-slate-900 transition-all duration-200 group">
                        <span className="material-symbols-outlined group-hover:text-slate-600 transition-colors text-slate-500">settings</span>
                        <p className="text-sm font-medium">Settings</p>
                    </Link>
                    <div className="flex items-center gap-3 px-3 py-3 mt-1 rounded-xl bg-white border border-slate-200 shadow-sm group cursor-pointer hover:bg-slate-50 transition-colors hover:shadow-md">
                        <div className="bg-cover bg-center rounded-full size-9 border border-slate-200 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLBo_IZUOxQp4vj-K3rYobQNQmBOIC9FUoqTpfD7gE011lTM2IbiMAgLZNaJsxEileVsAd-pbTwDvwzl_qYycxz4A0jnJQVUN4Y47G3X1mWQ3PixOjSZYp9InfqX6SneQGb-8YLdTMXQ0PGhXpTerlHCEJEryh16xi2LYjGFqsHrEEeYMlmgwc8iFjOsh1gHmb6_maVbk6hKRay8M7pd58wzyf2sJFTrbOmx3cHk7qG6jspsx1S35nZCfO9kJfEF6-aJI6qbjD2bo")' }}></div>
                        <div className="flex flex-col overflow-hidden">
                            <p className="text-slate-800 text-sm font-bold truncate group-hover:text-brand-red transition-colors">Alex Morgan</p>
                            <p className="text-slate-500 text-[10px] truncate">Supply Chain Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
