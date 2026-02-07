'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
    const router = useRouter();
    const [isOrdering, setIsOrdering] = useState(false);
    const [quantities, setQuantities] = useState({ item1: 1, item2: 2 });

    const handleQuantityChange = (item: 'item1' | 'item2', delta: number) => {
        setQuantities(prev => ({
            ...prev,
            [item]: Math.max(1, prev[item] + delta)
        }));
    };

    const handlePlaceOrder = () => {
        setIsOrdering(true);
        setTimeout(() => {
            router.push('/orders/track');
        }, 1500);
    };

    return (
        <div className="max-w-[1280px] mx-auto px-6 py-8 pb-32">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center justify-center p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">My Cart</h1>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Step 2 of 3</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-8">
                    {/* Cart Items */}
                    <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Items in your cart</h3>
                            <span className="px-3 py-1 bg-brand-red/5 text-brand-red rounded-full text-sm font-semibold">2 items</span>
                        </div>
                        <div className="divide-y divide-slate-50 dark:divide-slate-800">
                            {/* Item 1 */}
                            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group">
                                <div className="flex items-center gap-6">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-24 shadow-md flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEO8qTN8ukFfsXJ9yu31GqjocSzh0hqFJbC4B4PZMBW4_3900jBzq2K4mvzTE81ziQV6rypdyrBZ53eTSz5nOrAFBRozAdCSRS3N-6K1yHA8Vvl2gk-FFTNCMdwe6B8zfoeC58HiLAY-kNBT25nsxMFRh9hS8mdBW7_-fcN3ELzJ_JV9tGsKL6rxh5DPFvvtZW58zhWypRjJB-TN4u5qcHXpWEV15-U4R5OlM9C7t1b1jJ2lhQ6HRtUfK7T5fQ-1pkpr4RHTUXPLz6")' }}></div>
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Midnight Sky - Matte</h4>
                                        <p className="text-slate-500 dark:text-slate-400">Premium Interior Finish • 5L Container</p>
                                        <p className="mt-2 text-brand-red font-bold text-lg">$85.00</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <button onClick={() => handleQuantityChange('item1', -1)} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:text-brand-red transition-all">-</button>
                                    <span className="text-lg font-bold w-6 text-center text-slate-900 dark:text-white">{quantities.item1}</span>
                                    <button onClick={() => handleQuantityChange('item1', 1)} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:text-brand-red transition-all">+</button>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group">
                                <div className="flex items-center gap-6">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-24 shadow-md flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5y3sDXC2ydKNeN2B-84e_jdlL_czIFhISSNiHLuUhVq6zxKQWbvfm8O5XFHRQD-ZsuAagP_cl_OiuhzcnIf6HNsMSXtWU8n2exTCuzOue991DColDuAICvNpu1j4AOkoWauqXBX2uOdytb-Wb37Vgy0dsWGXYD_FfeR3BjWUzq6EWYq9foA7gi7lsKQ8FyfrJk8VvfEO9FD2odFvwvkKh3dRV0zUntmAagviQSG6q1APYdjf6Ire04RxgcxsSytub9ppTY_F-l6CA")' }}></div>
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Cotton Cloud - Satin</h4>
                                        <p className="text-slate-500 dark:text-slate-400">High-Durability Finish • 1L Container</p>
                                        <p className="mt-2 text-brand-red font-bold text-lg">$32.00</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <button onClick={() => handleQuantityChange('item2', -1)} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:text-brand-red transition-all">-</button>
                                    <span className="text-lg font-bold w-6 text-center text-slate-900 dark:text-white">{quantities.item2}</span>
                                    <button onClick={() => handleQuantityChange('item2', 1)} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:text-brand-red transition-all">+</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Dealer Selection */}
                    <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Select a Dealer</h3>
                            <p className="text-slate-500 text-sm">Only verified dealers with all items currently in stock are listed below.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="relative flex items-center justify-between p-5 rounded-xl border-2 border-brand-red bg-brand-red/5 cursor-pointer transition-all">
                                <input defaultChecked className="hidden" name="dealer" type="radio" />
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-brand-red text-2xl">check_circle</span>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-lg leading-tight">Metro Paints & Decor</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">1.2 miles away • Downtown Hub</p>
                                        <div className="mt-3 inline-flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                                            <span className="material-symbols-outlined text-[14px]">verified</span> IN STOCK
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-sm font-bold text-brand-red">Earliest Delivery</p>
                                    <p className="text-sm font-bold text-brand-red">TODAY</p>
                                </div>
                            </label>
                            <label className="relative flex items-center justify-between p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 cursor-pointer hover:border-slate-300 transition-all">
                                <input className="hidden" name="dealer" type="radio" />
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-2xl">radio_button_unchecked</span>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white text-lg leading-tight">Harbor Heights Supplies</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">3.5 miles away • Waterfront</p>
                                        <div className="mt-3 inline-flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                                            <span className="material-symbols-outlined text-[14px]">verified</span> IN STOCK
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-sm font-bold text-slate-400">Earliest Delivery</p>
                                    <p className="text-sm font-bold text-slate-400">TOMORROW</p>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Fulfillment Method */}
                    <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                        <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Fulfillment Method</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button className="group flex items-center gap-5 p-5 rounded-xl border-2 border-brand-red bg-brand-red/5 text-left transition-all">
                                <div className="bg-brand-red text-white p-3 rounded-xl shadow-lg shadow-brand-red/20">
                                    <span className="material-symbols-outlined text-2xl">local_shipping</span>
                                </div>
                                <div>
                                    <span className="block text-lg font-bold text-slate-900 dark:text-white leading-tight">Home Delivery</span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Est. 2-4 hours • Priority Service</span>
                                </div>
                            </button>
                            <button className="group flex items-center gap-5 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-left hover:border-slate-300 transition-all">
                                <div className="bg-slate-100 dark:bg-slate-700 text-slate-400 p-3 rounded-xl">
                                    <span className="material-symbols-outlined text-2xl">store</span>
                                </div>
                                <div>
                                    <span className="block text-lg font-bold text-slate-400 leading-tight">Store Pick Up</span>
                                    <span className="text-sm text-slate-400">Free of charge • Ready in 1h</span>
                                </div>
                            </button>
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-4">
                    <div className="sticky top-24 space-y-6">
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
                            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Order Summary</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Subtotal</span>
                                    <span>$149.00</span>
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Delivery Fee</span>
                                    <span className="text-green-600 font-medium">FREE</span>
                                </div>
                                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                    <span>Sales Tax</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Total Amount</p>
                                        <p className="text-3xl font-black text-slate-900 dark:text-white">$149.00</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-brand-red font-bold">Free Shipping Applied</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handlePlaceOrder} disabled={isOrdering} className={`w-full py-5 rounded-xl text-white font-bold text-lg shadow-xl shadow-brand-red/30 hover:shadow-brand-red/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3 bg-gradient-to-br from-brand-red to-purple-600 ${isOrdering ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                {isOrdering ? (
                                    <><span className="material-symbols-outlined animate-spin">progress_activity</span><span>Placing Order...</span></>
                                ) : (
                                    <><span>Place Order</span><span className="material-symbols-outlined">arrow_forward</span></>
                                )}
                            </button>
                            <div className="mt-6 flex items-center justify-center gap-4 opacity-50 text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                <span className="text-xs font-medium uppercase tracking-widest">Secure Checkout</span>
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center gap-6 grayscale opacity-60">
                            <div className="flex items-center gap-1.5 ">
                                <span className="material-symbols-outlined text-base">verified_user</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Verified Merchant</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-base">local_shipping</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Eco-Friendly Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
