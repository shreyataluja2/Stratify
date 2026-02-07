'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BuyerHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

    const navItems = [
        { href: '/home', icon: 'home', label: 'Home' },
        { href: '/products', icon: 'grid_view', label: 'Products' },
        { href: '/orders/track', icon: 'local_shipping', label: 'Orders' },
        { href: '/offers', icon: 'local_offer', label: 'Offers' },
        { href: '/support', icon: 'support_agent', label: 'Support' },
    ];

    return (
        <>
            {/* Header Bar */}
            <nav className="sticky top-0 z-50 flex items-center bg-white px-4 py-3 justify-between border-b border-gray-100">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="text-gray-700 p-2 -ml-2"
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <Link href="/home" className="flex-1 text-center">
                    <h2 className="text-[#181111] text-lg font-extrabold tracking-tight">Modern Colours</h2>
                </Link>
                <Link href="/cart" className="p-2 -mr-2 relative">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                    <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold rounded-full size-4 flex items-center justify-center">2</span>
                </Link>
            </nav>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100]"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white z-[101] transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="p-6">
                    {/* Brand */}
                    <div className="mb-8">
                        <h1 className="text-primary font-extrabold text-xl tracking-tight">MODERN</h1>
                        <h1 className="text-primary font-extrabold text-xl tracking-tight">COLOURS</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <span
                                        className="material-symbols-outlined text-xl"
                                        style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
                                    >
                                        {item.icon}
                                    </span>
                                    <span className={`text-sm ${active ? 'font-bold' : 'font-medium'}`}>
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* User Profile at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="material-symbols-outlined text-gray-500">person</span>
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-[#181111]">Alex Johnson</p>
                            <p className="text-xs text-gray-500">Premium Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
