
import React from 'react';

export default function DealerOrdersPage() {
    return (
        <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-red transition-colors">search</span>
                        <input className="w-full h-12 pl-12 pr-12 rounded-xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:ring-brand-red focus:border-brand-red text-base shadow-sm outline-none border" placeholder="Search Order ID or Product..." type="text" />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                            <span className="material-symbols-outlined">tune</span>
                        </button>
                    </div>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                    <button className="px-6 py-3 rounded-xl bg-brand-red text-white font-bold shadow-lg shadow-brand-red/20 shrink-0">All</button>
                    <button className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0">Pending</button>
                    <button className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0">In Transit</button>
                    <button className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0">Delivered</button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 space-y-6">
                    {/* Active Order Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                        <div className="p-8 border-b border-slate-100 dark:border-slate-800">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-[10px] font-black uppercase tracking-widest rounded-lg">Active Shipment</span>
                                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-3">Order #MC-8821</h3>
                                </div>
                                <span className="px-4 py-1.5 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-xs font-black uppercase tracking-wider">In Transit</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                <span className="flex items-center gap-1.5 font-medium">
                                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                                    Placed on 24 Oct 2023
                                </span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span className="flex items-center gap-1.5 font-medium">
                                    <span className="material-symbols-outlined text-lg">inventory_2</span>
                                    12 Items
                                </span>
                            </div>
                        </div>
                        {/* Timeline */}
                        <div className="p-8 lg:p-10 bg-slate-50/30 dark:bg-slate-800/20">
                            <div className="flex flex-col gap-1">
                                {/* Step 1: Placed */}
                                <div className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="text-green-500 bg-green-50 dark:bg-green-900/20 rounded-full">
                                            <span className="material-symbols-outlined aspect-square text-3xl filled">check_circle</span>
                                        </div>
                                        <div className="w-0.5 bg-green-500 h-12"></div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="text-slate-900 dark:text-white text-lg font-bold">Order Placed</p>
                                        <p className="text-slate-500 dark:text-slate-400">24 Oct 2023, 09:00 AM</p>
                                    </div>
                                </div>
                                {/* Step 2: Confirmed */}
                                <div className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="text-green-500 bg-green-50 dark:bg-green-900/20 rounded-full">
                                            <span className="material-symbols-outlined aspect-square text-3xl filled">check_circle</span>
                                        </div>
                                        <div className="w-0.5 bg-green-500 h-12"></div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="text-slate-900 dark:text-white text-lg font-bold">Confirmed</p>
                                        <p className="text-slate-500 dark:text-slate-400">24 Oct 2023, 02:30 PM</p>
                                    </div>
                                </div>
                                {/* Step 3: Shipped (Active) */}
                                <div className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-center size-8 bg-purple-600 rounded-full text-white ring-8 ring-purple-100 dark:ring-purple-900/30">
                                            <span className="material-symbols-outlined text-xl">local_shipping</span>
                                        </div>
                                        <div className="w-0.5 bg-slate-200 dark:bg-slate-700 h-16"></div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="text-purple-600 dark:text-purple-400 text-lg font-black">Shipped</p>
                                        <p className="text-slate-700 dark:text-slate-300 font-semibold mt-0.5">In Transit via Delhivery - Tracking ID: 772183</p>
                                        <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">25 Oct 2023, 10:30 AM</p>
                                    </div>
                                </div>
                                {/* Step 4: Out for Delivery */}
                                <div className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-center size-8 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-400">
                                            <span className="material-symbols-outlined text-xl">inventory_2</span>
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <p className="text-slate-400 dark:text-slate-500 text-lg font-bold">Out for Delivery</p>
                                        <p className="text-slate-400 dark:text-slate-500 italic">Expected arrival 26 Oct 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 flex items-center justify-center gap-2 h-14 rounded-2xl bg-brand-red text-white font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand-red/20">
                                <span className="material-symbols-outlined">location_on</span>
                                Track Shipment
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 h-14 rounded-2xl border-2 border-brand-red text-brand-red font-black text-lg transition-all hover:bg-brand-red/5 active:scale-95">
                                <span className="material-symbols-outlined">download</span>
                                Download Invoice
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Order History */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-bold flex items-center justify-between text-slate-900 dark:text-white">
                        Order History
                        <a className="text-sm font-bold text-brand-red hover:underline" href="#">View All</a>
                    </h4>

                    {/* History Item 1 */}
                    <div className="group bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                        <div className="flex gap-4">
                            <div className="size-20 rounded-2xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                                <img alt="Order Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARoMoMnkixTBzt_Zzo6_KY41QjZ95nTC0zt0NSBNsM53aKja0gFkqLR20jS7bZaY_173794zhuAqdryLfTFRco7i_UFgS7MD1VgZp55TeFB41h_sJxGxtCGlFyIjL7q4W6TI7C_V-X5xa7KGn2rMCHZEiEhYhJyIUmmUGZMYMrVirPjKU7BZQKSXXtGMqP5cHhbRjt4_s2fLOb7-BcRqejWzKxoHd7oVFDyEtkw5CEXjwcO2DKtzDGv5a0aC4u5BgXpus6Md89wtZd" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold text-slate-900 dark:text-white">Order #MC-9104</p>
                                    <span className="px-2 py-0.5 bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400 rounded-lg text-[10px] font-black uppercase">Pending</span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">Total: ₹24,500 • 22 Oct 2023</p>
                                <button className="flex items-center gap-1 text-xs font-black text-brand-red hover:gap-2 transition-all">
                                    VIEW DETAILS
                                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* History Item 2 */}
                    <div className="group bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                        <div className="flex gap-4">
                            <div className="size-20 rounded-2xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform opacity-80">
                                <img alt="Order Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD90ijQfn3201_Be99IhsqWU3SSq7FnzrcUcMf62q_Kwe1-NOfYEyaj0RvYdfxuEV0AjS4Qz-XrkaaUPhfOsQcKEHqAjAUzPjl6AZNuHO04ISEij87_xMcsby9yrPT-lMi1ZDlKtjR0uB5SwgQj7sylHNH7mLWkGIKReypKAZ_HIlk6G2hra-sTFRMak7G_58ramJZxIuMfRzD3Ak753JncN8a95pp6iNh226_nPc9OcTmOcCbu-6XDMLA1IvWIIa02-M8Dj0SaVUy7" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold text-slate-900 dark:text-white">Order #MC-8711</p>
                                    <span className="px-2 py-0.5 bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 rounded-lg text-[10px] font-black uppercase">Delivered</span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">Total: ₹12,800 • 15 Oct 2023</p>
                                <button className="flex items-center gap-1 text-xs font-black text-brand-red hover:gap-2 transition-all">
                                    RE-ORDER ITEMS
                                    <span className="material-symbols-outlined text-base">history</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Help Card */}
                    <div className="mt-auto p-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-950 rounded-3xl text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h5 className="font-bold text-lg mb-2">Need Help?</h5>
                            <p className="text-sm text-slate-300 mb-4">Contact your relationship manager for express delivery or volume discounts.</p>
                            <button className="bg-white text-slate-900 px-6 py-2 rounded-xl text-sm font-bold hover:bg-slate-100 transition-colors">Call Support</button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/10 text-9xl">support_agent</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
