'use client';

import React from 'react';
import Link from 'next/link';

export default function BuyerHomePage() {
    return (
        <div className="bg-[#f8f6f6] min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full h-[380px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 0%, rgba(248,246,246,1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAf7V2ob4oav20J6UduxERJQTia4I21k_Dk3FW-CmxrEAhXskv6Mpw8MNwniXwOjtxtlIDKBQhhNdVLJvKx_xyXDlTd6mDOowaBFUAX5hHQCW4iDHM7uzr7DcQgwrVED5QXSDwAXPMrKtVzmxSj2zwZ86H8sIcnpDHrM4zx7Z0ssWgwDtYXo_sitM9dIsxtXjR4Zu1ZCrRQI2-5plD7er4pAqtLUFR8TNTLX6OwuAYPykpln1hUjyukqGzvsNMWqZ3J9aB03NKye91L")'
                    }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                    <h1 className="text-[#181111] text-[28px] font-extrabold leading-tight mb-3">
                        Find Your Perfect<br />Paint & Nearest<br />Dealer
                    </h1>
                    <p className="text-[#181111]/60 text-sm mb-6 max-w-[260px]">
                        Discover curated palettes and local availability in one place.
                    </p>

                    {/* Search Card */}
                    <div className="w-full max-w-[320px] bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                        <div className="mb-3">
                            <span className="text-[10px] uppercase font-bold text-primary tracking-wider">Color</span>
                            <input
                                className="w-full bg-transparent border-none p-0 mt-1 text-[#181111] placeholder:text-gray-400 text-sm outline-none"
                                placeholder="What color? (e.g. Sage Green)"
                                type="text"
                            />
                        </div>
                        <div className="border-t border-gray-100 pt-3 flex items-center gap-3">
                            <div className="flex-1">
                                <span className="text-[10px] uppercase font-bold text-primary tracking-wider">Location</span>
                                <input
                                    className="w-full bg-transparent border-none p-0 mt-1 text-[#181111] placeholder:text-gray-400 text-sm outline-none"
                                    placeholder="Your city or zip"
                                    type="text"
                                />
                            </div>
                            <Link
                                href="/products"
                                className="bg-primary text-white rounded-xl h-11 w-11 flex items-center justify-center shadow-md"
                            >
                                <span className="material-symbols-outlined text-xl">search</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Pills */}
            <div className="px-4 py-4">
                <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                    <Link
                        href="/products?category=interior"
                        className="flex h-9 shrink-0 items-center gap-2 rounded-full bg-primary px-4"
                    >
                        <span className="material-symbols-outlined text-white text-base">home</span>
                        <span className="text-white text-xs font-semibold">Interior</span>
                    </Link>
                    <Link
                        href="/products?category=exterior"
                        className="flex h-9 shrink-0 items-center gap-2 rounded-full bg-white px-4 border border-gray-200"
                    >
                        <span className="material-symbols-outlined text-primary text-base">park</span>
                        <span className="text-[#181111] text-xs font-medium">Exterior</span>
                    </Link>
                    <Link
                        href="/products?category=textures"
                        className="flex h-9 shrink-0 items-center gap-2 rounded-full bg-white px-4 border border-gray-200"
                    >
                        <span className="material-symbols-outlined text-primary text-base">layers</span>
                        <span className="text-[#181111] text-xs font-medium">Textures</span>
                    </Link>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="px-4 pt-2 pb-6">
                <h2 className="text-[#181111] text-lg font-bold mb-0.5">How It Works</h2>
                <p className="text-gray-500 text-xs mb-6">Get your paint projects done in 4 simple steps.</p>

                {/* Vertical Cards */}
                <div className="space-y-4">
                    {/* Step 1 - Choose Paint */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                                <span className="absolute -top-2 -left-2 size-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shadow-sm">1</span>
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center shadow-md">
                                    <span className="material-symbols-outlined text-white text-2xl">palette</span>
                                </div>
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-[#181111] font-bold text-sm mb-1">Choose Paint</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Browse thousands of colors and curated palettes designed by experts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 - Find Dealer */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                                <span className="absolute -top-2 -left-2 size-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shadow-sm">2</span>
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-md">
                                    <span className="material-symbols-outlined text-white text-2xl">storefront</span>
                                </div>
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-[#181111] font-bold text-sm mb-1">Find Dealer</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Locate the nearest authorized Modern Colours dealer in your neighborhood.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 - Place Order */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                                <span className="absolute -top-2 -left-2 size-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shadow-sm">3</span>
                                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-md">
                                    <span className="material-symbols-outlined text-white text-2xl">shopping_cart</span>
                                </div>
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-[#181111] font-bold text-sm mb-1">Place Order</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Order directly from the app and select your preferred pickup or delivery option.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 - Track Delivery */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="relative">
                                <span className="absolute -top-2 -left-2 size-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shadow-sm">4</span>
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center shadow-md">
                                    <span className="material-symbols-outlined text-white text-2xl">local_shipping</span>
                                </div>
                            </div>
                            <div className="flex-1 pt-1">
                                <h3 className="text-[#181111] font-bold text-sm mb-1">Track Delivery</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    Stay updated with real-time tracking until the paint arrives at your doorstep.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom padding for nav */}
            <div className="h-20"></div>
        </div>
    );
}
