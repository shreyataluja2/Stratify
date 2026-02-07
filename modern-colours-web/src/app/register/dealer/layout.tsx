import React from 'react';

interface DealerRegisterLayoutProps {
    children: React.ReactNode;
}

export default function DealerRegisterLayout({ children }: DealerRegisterLayoutProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            {/* Sidebar: Brand & Benefits */}
            <aside className="hidden lg:flex flex-col w-[400px] bg-gradient-to-br from-primary via-[#b90d1b] to-[#221012] p-12 text-white relative">
                <div className="flex items-center gap-3 mb-16">
                    <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="material-symbols-outlined text-white text-2xl">format_paint</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">Modern Colours</h2>
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-black leading-tight mb-6">Partner with India&apos;s Premier Paint Network</h1>
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
            <main className="flex-1 flex flex-col h-full bg-white dark:bg-[#1a0c0e]">
                {children}
            </main>
        </div>
    );
}
