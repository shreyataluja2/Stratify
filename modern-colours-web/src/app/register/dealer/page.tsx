
import React from 'react';

export default function DealerRegistrationPage() {
    return (
        <div className="flex min-h-screen overflow-hidden bg-white dark:bg-[#1a0c0e]">
            {/* Sidebar: Brand & Benefits */}
            <aside className="hidden lg:flex flex-col w-[400px] bg-gradient-to-br from-brand-red via-[#b90d1b] to-[#221012] p-12 text-white relative shrink-0">
                <div className="flex items-center gap-3 mb-16">
                    <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="material-symbols-outlined text-white text-2xl">format_paint</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Modern Colours</h2>
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-black leading-tight mb-6">Partner with India's Premier Paint Network</h1>
                    <p className="text-white/80 text-lg mb-10 font-light">Join over 5,000+ dealers nationwide and transform your business with our cutting-edge logistics and supply chain tech.</p>
                    <div className="space-y-8">
                        <div className="flex gap-4 items-start">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <span className="material-symbols-outlined text-white/80">palette</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Premium Palette Access</h3>
                                <p className="text-sm text-white/70">Exclusive access to over 2,000+ luxury paint shades and textures.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <span className="material-symbols-outlined text-white/80">inventory_2</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Real-time Inventory</h3>
                                <p className="text-sm text-white/70">Cloud-based tracking for instant stock updates and easy replenishment.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <span className="material-symbols-outlined text-white/80">percent</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Exclusive Discounts</h3>
                                <p className="text-sm text-white/70">Competitive margins and seasonal bonuses for high-performing dealers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10">
                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Trusted by industry leaders since 1994</p>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Top Nav / Progress Bar */}
                <nav className="px-10 py-6 border-b border-slate-100 dark:border-white/5 flex flex-col gap-6 shrink-0 bg-white dark:bg-[#1a0c0e]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Step 1 of 6</span>
                            <span className="text-slate-400">/</span>
                            <span className="text-sm font-medium text-slate-500">Basic Information</span>
                        </div>
                        <div className="flex gap-4">
                            <button className="text-sm font-medium text-slate-500 hover:text-brand-red transition-colors">Help Center</button>
                            <button className="text-sm font-medium text-slate-500 hover:text-brand-red transition-colors">Contact Support</button>
                        </div>
                    </div>
                    {/* Multi-step progress bar */}
                    <div className="grid grid-cols-6 gap-2 w-full">
                        <div className="h-1.5 rounded-full bg-brand-red"></div>
                        <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10"></div>
                        <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10"></div>
                        <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10"></div>
                        <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10"></div>
                        <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/10"></div>
                    </div>
                </nav>

                {/* Scrollable Form Container */}
                <div className="flex-1 overflow-y-auto px-10 py-12 lg:px-24 scroll-smooth">
                    <div className="max-w-2xl mx-auto">
                        <header className="mb-10">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Basic Information</h2>
                            <p className="text-slate-500 dark:text-slate-400">Provide the essential details to start your dealership application. Ensure all details match your legal documentation.</p>
                        </header>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Business Name */}
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Business Name</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-red transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">store</span>
                                        </div>
                                        <input className="w-full pl-11 pr-4 py-4 rounded-lg border-slate-200 dark:border-white/10 dark:bg-white/5 focus:ring-brand-red focus:border-brand-red transition-all placeholder:text-slate-400 dark:text-white outline-none border" placeholder="Enter your registered business name" type="text" />
                                    </div>
                                </div>
                                {/* Owner Name */}
                                <div className="col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Owner / Proprietor Name</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-red transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">person</span>
                                        </div>
                                        <input className="w-full pl-11 pr-4 py-4 rounded-lg border-slate-200 dark:border-white/10 dark:bg-white/5 focus:ring-brand-red focus:border-brand-red transition-all placeholder:text-slate-400 dark:text-white outline-none border" placeholder="Full name as per PAN card" type="text" />
                                    </div>
                                </div>
                                {/* Email Address */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-red transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">mail</span>
                                        </div>
                                        <input className="w-full pl-11 pr-4 py-4 rounded-lg border-slate-200 dark:border-white/10 dark:bg-white/5 focus:ring-brand-red focus:border-brand-red transition-all placeholder:text-slate-400 dark:text-white outline-none border" placeholder="name@business.com" type="email" />
                                    </div>
                                </div>
                                {/* Contact Number */}
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Contact Number</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-red transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">call</span>
                                        </div>
                                        <input className="w-full pl-11 pr-4 py-4 rounded-lg border-slate-200 dark:border-white/10 dark:bg-white/5 focus:ring-brand-red focus:border-brand-red transition-all placeholder:text-slate-400 dark:text-white outline-none border" placeholder="+91 00000 00000" type="tel" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 rounded-lg bg-brand-red/5 border border-brand-red/10 flex gap-3 mt-8">
                                <span className="material-symbols-outlined text-brand-red">info</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    <strong>Note:</strong> We will send a verification OTP to the provided mobile number and email address in the next step.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Sticky Footer Actions */}
                <footer className="px-10 py-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between bg-white/80 dark:bg-[#1a0c0e]/80 backdrop-blur-md shrink-0">
                    <button className="px-8 py-3 rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                        Cancel Application
                    </button>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-10 py-3 rounded-lg bg-brand-red text-white font-bold shadow-lg shadow-brand-red/20 hover:bg-red-700 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm">
                            Continue to Step 2
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </footer>
            </main>
        </div>
    );
}
