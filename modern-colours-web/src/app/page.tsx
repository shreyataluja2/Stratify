'use client';

import Link from 'next/link';

export default function PortalSelector() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
                {/* Logo */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center size-20 rounded-2xl bg-gradient-to-br from-brand-red via-brand-purple to-brand-yellow shadow-2xl mb-6">
                        <span className="material-symbols-outlined text-white text-4xl">palette</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">Modern Colours</h1>
                    <p className="text-slate-400">Select your portal to continue</p>
                </div>

                {/* Portal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Buyer Portal */}
                    <Link href="/home" className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative">
                            <div className="size-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                                <span className="material-symbols-outlined text-white text-3xl">person</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Buyer</h2>
                            <p className="text-slate-400 text-sm mb-6">Browse paints, explore colors, and place orders</p>
                            <div className="flex items-center text-green-400 font-semibold">
                                <span>Enter Portal</span>
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </Link>

                    {/* Dealer Portal */}
                    <Link href="/dealer/dashboard" className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative">
                            <div className="size-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                                <span className="material-symbols-outlined text-white text-3xl">storefront</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Dealer</h2>
                            <p className="text-slate-400 text-sm mb-6">Manage inventory, orders, and customer relations</p>
                            <div className="flex items-center text-blue-400 font-semibold">
                                <span>Enter Portal</span>
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </Link>

                    {/* Admin Portal */}
                    <Link href="/admin/dashboard" className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative">
                            <div className="size-16 rounded-xl bg-gradient-to-br from-brand-red to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-brand-red/30">
                                <span className="material-symbols-outlined text-white text-3xl">admin_panel_settings</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Admin</h2>
                            <p className="text-slate-400 text-sm mb-6">Full system control, analytics, and management</p>
                            <div className="flex items-center text-brand-red font-semibold">
                                <span>Enter Portal</span>
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Footer */}
                <p className="text-center text-slate-500 text-sm mt-12">
                    © 2024 Modern Colours. All rights reserved.
                </p>
            </div>
        </div>
    );
}
