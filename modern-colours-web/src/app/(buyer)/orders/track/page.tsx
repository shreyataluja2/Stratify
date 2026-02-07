'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function OrderTrackingPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const orderSteps = [
        {
            id: 1,
            title: 'Order Placed',
            description: 'Your order has been confirmed',
            time: '10:30 AM',
            completed: true,
            icon: 'check'
        },
        {
            id: 2,
            title: 'Processing',
            description: 'Dealer is preparing your order',
            time: '11:15 AM',
            completed: true,
            icon: 'check'
        },
        {
            id: 3,
            title: 'Out for Delivery',
            description: 'Your package is on its way',
            time: '1:45 PM',
            completed: true,
            icon: 'check'
        },
        {
            id: 4,
            title: 'Arriving Soon',
            description: 'Driver is nearby',
            time: 'Est. 2:30 PM',
            completed: false,
            current: true,
            icon: 'local_shipping'
        },
    ];

    const navItems = [
        { href: '/home', icon: 'home', label: 'Home' },
        { href: '/products', icon: 'grid_view', label: 'Products' },
        { href: '/orders/track', icon: 'local_shipping', label: 'Orders', active: true },
        { href: '/offers', icon: 'local_offer', label: 'Offers' },
        { href: '/support', icon: 'support_agent', label: 'Support' },
    ];

    return (
        <div className="bg-[#f8f6f6] min-h-screen">
            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100]"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white z-[101] transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="p-6">
                    {/* Brand */}
                    <div className="mb-8">
                        <h1 className="text-primary font-extrabold text-xl tracking-tight">MODERN</h1>
                        <h1 className="text-primary font-extrabold text-xl tracking-tight">COLOURS</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <span
                                    className="material-symbols-outlined text-xl"
                                    style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}
                                >
                                    {item.icon}
                                </span>
                                <span className={`text-sm ${item.active ? 'font-bold' : 'font-medium'}`}>
                                    {item.label}
                                </span>
                            </Link>
                        ))}
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

            {/* Header */}
            <header className="sticky top-0 z-40 bg-white px-4 py-3 flex items-center border-b border-gray-100">
                <button onClick={() => setSidebarOpen(true)} className="p-1 -ml-1">
                    <span className="material-symbols-outlined text-gray-700">menu</span>
                </button>
                <h1 className="flex-1 text-center text-base font-bold text-[#181111]">Track Order</h1>
                <div className="w-8"></div>
            </header>

            {/* Order Info Card */}
            <div className="p-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Order Details</p>
                            <h2 className="text-xl font-bold text-[#181111] mt-1">#MC-78432</h2>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">In Transit</span>
                    </div>
                </div>
            </div>

            {/* Delivery Timeline */}
            <div className="px-4">
                <h3 className="text-sm font-bold text-[#181111] mb-4">Delivery Progress</h3>

                <div className="relative pl-8">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-gray-200"></div>
                    <div className="absolute left-[15px] top-3 w-0.5 bg-primary" style={{ height: 'calc(75% - 12px)' }}></div>

                    {orderSteps.map((step, index) => (
                        <div key={step.id} className="relative mb-8 last:mb-0">
                            {/* Step Icon */}
                            <div className={`absolute -left-8 top-0 size-8 rounded-full flex items-center justify-center z-10 ${step.completed
                                    ? 'bg-primary text-white'
                                    : step.current
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 text-gray-400'
                                }`}>
                                <span className="material-symbols-outlined text-lg">
                                    {step.icon}
                                </span>
                            </div>

                            {/* Step Content */}
                            <div className={`${step.current ? 'bg-white rounded-xl p-3 shadow-sm -ml-2' : ''}`}>
                                <div className="flex items-center gap-2">
                                    <h4 className={`font-semibold text-sm ${step.completed || step.current ? 'text-[#181111]' : 'text-gray-400'}`}>
                                        {step.title}
                                    </h4>
                                    {step.current && (
                                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                    )}
                                </div>
                                <p className={`text-xs mt-0.5 ${step.completed || step.current ? 'text-gray-500' : 'text-gray-400'}`}>
                                    {step.description}
                                </p>
                                <p className={`text-xs mt-1 ${step.current ? 'text-primary font-semibold' : 'text-gray-400'}`}>
                                    {step.time}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Final Delivery Icon */}
                    <div className="relative">
                        <div className="absolute -left-8 top-0 size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 z-10">
                            <span className="material-symbols-outlined text-lg">home</span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm text-gray-400">Delivered</h4>
                            <p className="text-xs text-gray-400 mt-0.5">Package at your doorstep</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call Dealer Button */}
            <div className="p-4 mt-8">
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">call</span>
                    Call Dealer
                </button>
            </div>

            {/* Need Help */}
            <div className="px-4 pb-8 text-center">
                <p className="text-sm text-gray-500">
                    Need more details?{' '}
                    <Link href="/support" className="text-primary font-semibold">Contact Support</Link>
                </p>
            </div>
        </div>
    );
}
