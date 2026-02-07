
import React from 'react';
import Link from 'next/link';

export default function DealerDashboard() {
    return (
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9 space-y-8">
                <section className="bg-gradient-to-br from-brand-purple to-brand-red h-[240px] rounded-3xl p-10 flex items-center relative overflow-hidden">
                    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
                    <div className="z-10">
                        <h2 className="text-white text-[32px] font-extrabold leading-tight tracking-tight">
                            Welcome back,<br />Rajesh Traders!
                        </h2>
                        <p className="text-white/80 mt-2 text-base font-medium leading-relaxed max-w-sm">
                            Ready to refresh your stock? Check out today's exclusive dealer offers and new arrivals.
                        </p>
                        <Link href="/dealer/products" className="mt-8 flex items-center gap-2 bg-white text-brand-red hover:bg-slate-100 px-8 py-3 rounded-xl font-extrabold transition-all shadow-xl active:scale-95 btn-hover">
                            <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                            Place New Order
                        </Link>
                    </div>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <span className="material-symbols-outlined text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 p-2.5 rounded-xl text-xl">shopping_bag</span>
                            <span className="text-xs font-bold text-emerald-500">+12%</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Monthly Orders</p>
                        <p className="text-2xl font-extrabold mt-1">24</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <span className="material-symbols-outlined text-amber-500 bg-amber-50 dark:bg-amber-900/30 p-2.5 rounded-xl text-xl">local_shipping</span>
                            <span className="text-xs font-bold text-slate-400">Stable</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Pending</p>
                        <p className="text-2xl font-extrabold text-amber-500 mt-1">03</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <span className="material-symbols-outlined text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 p-2.5 rounded-xl text-xl">account_balance_wallet</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Credit Limit</p>
                        <p className="text-2xl font-extrabold mt-1">₹3.5L</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-card border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-4">
                            <span className="material-symbols-outlined text-brand-purple bg-brand-purple/5 p-2.5 rounded-xl text-xl">military_tech</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">Loyalty Pts</p>
                        <p className="text-2xl font-extrabold mt-1">1,250</p>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-extrabold tracking-tight">Featured Categories</h3>
                        <Link href="/dealer/products" className="text-brand-red text-xs font-extrabold hover:underline uppercase tracking-wider">Explore All</Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-card hover:border-brand-red/40 transition-all text-center group">
                            <div className="aspect-square rounded-2xl bg-slate-50 dark:bg-slate-700/50 mb-3 overflow-hidden">
                                <img alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAcmjD8VWxPQLoXykvBH6O-4UsTHApR7i6weYJnAu_Bj9XBU_IYTgnqChJ-_3sau-_QGrfaJfeUZaPzqSsspZc0iCSvAszIhOLT5WnpRXvI3D_uTd1_XyS3lF6tHRc2X5nsZRzWtcpt0UOgOcGgKtmrcinDzBWwqNQC_XcqcVumkRu_DjZpxa0YO3wkUCe5Fi8gyDyDFey9G_s_Dve5oKh5Rm6bmrKivd2yJH1OX9f2VYURriUmc5CKTXdYRoBxTGmHy1_r0C1qkmo" />
                            </div>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Interior Paints</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-card hover:border-brand-red/40 transition-all text-center group">
                            <div className="aspect-square rounded-2xl bg-slate-50 dark:bg-slate-700/50 mb-3 overflow-hidden">
                                <img alt="Exterior" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzWS6ocz3fH_Icw2DqLcWhTsWOm2i63mtwOaZTTtU4m2_AOkU-S16_GX7OuuGChw3-cP0i0X7Yo2QU279Q7x1Ldfp80_eArEx_Naa8X9ltN2jIlwr9F2UYd2LYREEhjqKdIW1V2WDL8kqaEheu_kVndvc8HtqtT88a0xh-rONDlZ1ooZuRPS1l9ityxvffiXJ5KQsU6u0FU8CG-SAIyIyJFDWC68ruakiibUmnsKXklLY0SKpcyWgbOecbB3Osk0Q-0ueBXyX9Ya6m" />
                            </div>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Exterior Finishes</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-card hover:border-brand-red/40 transition-all text-center group">
                            <div className="aspect-square rounded-2xl bg-slate-50 dark:bg-slate-700/50 mb-3 overflow-hidden">
                                <img alt="Wall Textures" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3EDwNvn2Hz8cVMp1gI0TtFQ_sFV_Pf2P9TNiRh6mW6b6A1RixAHfOMBvX0J0DCE_LTMB4Ht7TNjI9RIs-Zm4LT0uopavc_wY-ABsnMQ3cLqGxpATQPUs3uJS0CmIUeFkBl19i9-ODoM-USCpI7jEDxTdLY8rXpqWm58tUAf4SEzixmaXcq6-3tkcFcTZd_V_SSN-SMABpOAfksO2SFPYfE7p2ft56lwuyJtja2MNB99ecc8SuV-1HplsWgzN4k1mD-fLs7IK5YvYP" />
                            </div>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Wall Textures</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-card hover:border-brand-red/40 transition-all text-center group">
                            <div className="aspect-square rounded-2xl bg-slate-50 dark:bg-slate-700/50 mb-3 overflow-hidden">
                                <img alt="Wood & Metal" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOpD1ir3ERkV9xsi-zqJR7XULe2IRr53UaYiQRerDBsDmh-FppWXhujYpTbkQxbcyXvXYzSOkiZj7cpQlhBqJdhpL80rhG3QKV3DrAMHolUwZfjwP41WwdHFBcWTzEMqCXZVLzv0glGIrexjI7qzH5RZcEjpcusLQy3m2kIZRBrOAgDUwPY8m6y_zUzIId3_5uTJJZn8eA840GXN-sjDr6qvuzuq0RjbkIgHzdU6SW3TM_z_tf-6-6cKvFDrJFeitaktsFe3p204T_" />
                            </div>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Wood & Metal</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-card hover:border-brand-red/40 transition-all text-center group hidden xl:block">
                            <div className="aspect-square rounded-2xl bg-slate-50 dark:bg-slate-700/50 mb-3 overflow-hidden flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-slate-300">format_paint</span>
                            </div>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Primers & Undercoats</span>
                        </div>
                    </div>
                </section>
            </div>

            <aside className="col-span-12 lg:col-span-3 space-y-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-card">
                    <h3 className="font-extrabold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-brand-red">analytics</span>
                        Credit Utilization
                    </h3>
                    <div className="w-full h-3 bg-slate-100 dark:bg-slate-700 rounded-full mb-4 overflow-hidden">
                        <div className="h-full bg-brand-red rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Used</p>
                            <p className="text-sm font-extrabold">₹1.0L</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Balance</p>
                            <p className="text-sm font-extrabold text-emerald-500">₹2.5L</p>
                        </div>
                    </div>
                    <button className="w-full mt-6 py-3 border border-slate-100 dark:border-slate-700 rounded-xl text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        Request Limit Increase
                    </button>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-card">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-extrabold text-slate-800 dark:text-slate-200">Recent Orders</h3>
                        <button className="text-[10px] font-bold text-brand-red uppercase">History</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-50 dark:border-slate-700">
                            <div>
                                <p className="text-xs font-bold text-slate-900 dark:text-white">#ORD-4921</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">2 Hours ago</p>
                            </div>
                            <span className="text-[10px] px-2 py-1 bg-amber-50 text-amber-600 rounded-md font-bold uppercase">Pending</span>
                        </div>
                        <div className="flex items-center justify-between pb-4 border-b border-slate-50 dark:border-slate-700">
                            <div>
                                <p className="text-xs font-bold text-slate-900 dark:text-white">#ORD-4890</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">Yesterday</p>
                            </div>
                            <span className="text-[10px] px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md font-bold uppercase">Shipped</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
