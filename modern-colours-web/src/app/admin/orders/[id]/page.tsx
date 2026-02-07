'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function AdminOrderDetailPage() {
    const params = useParams();
    const orderId = params.id as string;

    return (
        <div className="max-w-[1440px] mx-auto animate-fade-in">
            {/* Breadcrumbs & Status Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Link href="/admin/dashboard" className="hover:text-brand-purple">Admin</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <Link href="/admin/orders" className="hover:text-brand-purple">Orders</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-slate-900 dark:text-white font-medium">#{orderId}</span>
                    </nav>
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Order #{orderId}</h1>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-bold rounded-full uppercase tracking-wider border border-brand-purple/20 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">local_shipping</span> Shipped
                        </span>
                    </div>
                    <p className="text-slate-500 dark:text-gray-400 text-sm mt-1 font-medium">Placed on Oct 24, 2023 at 02:30 PM</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-200 dark:border-white/10 rounded-xl font-bold text-sm hover:bg-white dark:hover:bg-white/5 transition-all">
                        <span className="material-symbols-outlined">print</span>
                        Print
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-purple text-white rounded-xl font-bold text-sm hover:brightness-110 shadow-lg shadow-brand-purple/20 transition-all">
                        <span className="material-symbols-outlined">download</span>
                        Download Invoice
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Left Column: Shipment Timeline */}
                <aside className="xl:col-span-3 space-y-6">
                    <div className="bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-brand-purple">route</span>
                            Shipment Journey
                        </h3>
                        <div className="relative space-y-0">
                            {/* Step 1: Placed */}
                            <div className="flex gap-4 min-h-[80px]">
                                <div className="flex flex-col items-center">
                                    <div className="size-9 bg-brand-purple flex items-center justify-center rounded-full text-white z-10">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                    </div>
                                    <div className="w-0.5 h-full bg-brand-purple/30"></div>
                                </div>
                                <div className="pb-8">
                                    <p className="text-slate-900 dark:text-white font-bold leading-none">Order Placed</p>
                                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">Oct 24, 14:30 • New Delhi</p>
                                </div>
                            </div>
                            {/* Step 2: Processing */}
                            <div className="flex gap-4 min-h-[80px]">
                                <div className="flex flex-col items-center">
                                    <div className="size-9 bg-brand-purple flex items-center justify-center rounded-full text-white z-10">
                                        <span className="material-symbols-outlined text-sm">inventory_2</span>
                                    </div>
                                    <div className="w-0.5 h-full bg-brand-purple/30"></div>
                                </div>
                                <div className="pb-8">
                                    <p className="text-slate-900 dark:text-white font-bold leading-none">Processing</p>
                                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">Oct 24, 16:45 • Warehouse A</p>
                                </div>
                            </div>
                            {/* Step 3: Dispatched */}
                            <div className="flex gap-4 min-h-[80px]">
                                <div className="flex flex-col items-center">
                                    <div className="size-9 bg-brand-purple flex items-center justify-center rounded-full text-white z-10">
                                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                                    </div>
                                    <div className="w-0.5 h-full bg-brand-purple/30"></div>
                                </div>
                                <div className="pb-8">
                                    <p className="text-slate-900 dark:text-white font-bold leading-none">Dispatched</p>
                                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">Oct 25, 09:00 • Mumbai Hub</p>
                                </div>
                            </div>
                            {/* Step 4: In Transit */}
                            <div className="flex gap-4 min-h-[80px]">
                                <div className="flex flex-col items-center">
                                    <div className="size-9 bg-brand-purple flex items-center justify-center rounded-full text-white z-10 shadow-lg shadow-brand-purple/20">
                                        <span className="material-symbols-outlined text-sm animate-pulse">location_on</span>
                                    </div>
                                    <div className="w-0.5 h-full border-l-2 border-dashed border-slate-200 dark:border-white/10"></div>
                                </div>
                                <div className="pb-8">
                                    <p className="text-slate-900 dark:text-white font-bold leading-none">In Transit</p>
                                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">Oct 26, 11:20 • Local Courier</p>
                                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-brand-purple/5 text-brand-purple text-[10px] font-bold rounded border border-brand-purple/10">
                                        <span className="size-1.5 bg-brand-purple rounded-full animate-ping"></span> ON THE WAY
                                    </div>
                                </div>
                            </div>
                            {/* Step 5: Delivered */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="size-9 bg-slate-100 dark:bg-white/5 flex items-center justify-center rounded-full text-slate-400 z-10">
                                        <span className="material-symbols-outlined text-sm">package_2</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-slate-400 dark:text-gray-500 font-bold leading-none">Delivered</p>
                                    <p className="text-xs text-slate-400/60 dark:text-gray-500 mt-1 font-medium">Estimated Oct 27, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-purple/5 dark:bg-brand-purple/10 rounded-xl border border-brand-purple/10 p-5">
                        <p className="text-sm font-bold text-brand-purple mb-2 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">contact_support</span> Need Assistance?
                        </p>
                        <p className="text-xs text-slate-500 dark:text-gray-300 leading-relaxed mb-3">
                            Reach out to our logistics partner for specific tracking details.
                        </p>
                        <button className="w-full py-2 bg-white dark:bg-slate-900 border border-brand-purple/20 text-brand-purple text-xs font-bold rounded-lg hover:bg-brand-purple/5 transition-colors">
                            Contact Support
                        </button>
                    </div>
                </aside>

                {/* Center Column: Product Details Table */}
                <section className="xl:col-span-6 space-y-6">
                    <div className="bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-purple">shopping_bag</span>
                                Products in Order
                            </h3>
                            <span className="text-sm font-semibold text-slate-500 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg">3 Items</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/30 dark:bg-white/5 text-left text-xs uppercase tracking-widest text-slate-500 font-bold">
                                        <th className="px-6 py-4">Product Detail</th>
                                        <th className="px-6 py-4">SKU</th>
                                        <th className="px-6 py-4 text-center">Qty</th>
                                        <th className="px-6 py-4 text-right">Price</th>
                                        <th className="px-6 py-4 text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                    <tr className="hover:bg-slate-50/20 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="size-14 rounded-lg bg-gray-100 overflow-hidden border border-slate-200 dark:border-white/10 flex-shrink-0"></div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Velvet Matte - Crimson Sky</p>
                                                    <p className="text-[10px] text-slate-500 font-semibold">Variant: 5 Gallon</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm font-medium text-slate-500">VM-CS-5G</td>
                                        <td className="px-6 py-5 text-center text-sm font-bold">02</td>
                                        <td className="px-6 py-5 text-right text-sm font-medium">₹4,500</td>
                                        <td className="px-6 py-5 text-right text-sm font-bold">₹9,000</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/20 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="size-14 rounded-lg bg-gray-100 overflow-hidden border border-slate-200 dark:border-white/10 flex-shrink-0"></div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Royal Ivory - Pearl White</p>
                                                    <p className="text-[10px] text-slate-500 font-semibold">Variant: 1 Gallon</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm font-medium text-slate-500">RI-PW-1G</td>
                                        <td className="px-6 py-5 text-center text-sm font-bold">04</td>
                                        <td className="px-6 py-5 text-right text-sm font-medium">₹1,200</td>
                                        <td className="px-6 py-5 text-right text-sm font-bold">₹4,800</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-brand-purple">description</span>
                                <h4 className="font-bold">Internal Notes</h4>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed italic">
                                &quot;Customer requested environment-friendly packaging. Include a brand sticker set in the box. Priority handle for fragile contents.&quot;
                            </p>
                        </div>
                        <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-red-500">history</span>
                                <h4 className="font-bold">System Log</h4>
                            </div>
                            <ul className="text-xs space-y-2 text-slate-500">
                                <li className="flex justify-between"><span>Payment Authenticated</span> <span className="font-bold">14:32</span></li>
                                <li className="flex justify-between"><span>Invoice Generated</span> <span className="font-bold">14:35</span></li>
                                <li className="flex justify-between"><span>Warehouse Notified</span> <span className="font-bold">14:38</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Right Column: Sidebar Info Cards */}
                <aside className="xl:col-span-3 space-y-6">
                    {/* Delivery Info */}
                    <div className="bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
                        <div className="p-5 border-b border-slate-200 dark:border-white/10">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-purple">pin_drop</span>
                                Delivery Information
                            </h3>
                        </div>
                        <div className="p-5 space-y-5">
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Customer</p>
                                <p className="text-sm font-bold">Rohan Malhotra</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Shipping Address</p>
                                <p className="text-sm leading-relaxed text-slate-500 dark:text-gray-300">
                                    H-14, Green Park Extension,<br />
                                    Near Metro Gate 2, New Delhi,<br />
                                    India - 110016
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Contact</p>
                                    <p className="text-sm font-medium">+91 98765 43210</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Courier Partner</p>
                                    <p className="text-sm font-medium">BlueDart Express</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Tracking ID</span>
                                    <span className="material-symbols-outlined text-xs text-brand-purple cursor-pointer hover:scale-110 transition-transform">content_copy</span>
                                </div>
                                <p className="text-sm font-mono font-bold text-brand-purple">BD-MC-2023-8849-01</p>
                                <button className="w-full mt-3 py-2.5 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white text-xs font-bold rounded-lg hover:bg-slate-200/80 transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    Track on Website
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-slate-900 text-white rounded-xl overflow-hidden shadow-xl shadow-slate-900/20">
                        <div className="p-5 border-b border-white/10">
                            <h3 className="text-base font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-brand-purple">payments</span>
                                Payment Summary
                            </h3>
                        </div>
                        <div className="p-5 space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Subtotal</span>
                                <span className="font-medium">₹13,800</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Shipping Fee</span>
                                <span className="font-medium">₹250</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Tax (GST 18%)</span>
                                <span className="font-medium">₹2,484</span>
                            </div>
                            <div className="flex justify-between text-sm text-green-400 font-medium">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">sell</span>
                                    Discount (DEALER10)
                                </span>
                                <span>-₹1,380</span>
                            </div>
                            <div className="pt-4 mt-2 border-t border-white/10">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Total Amount</p>
                                        <p className="text-2xl font-black text-white">₹15,154</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-400 mb-1">Paid via</p>
                                        <div className="flex items-center gap-1 text-xs font-bold text-white">
                                            <span className="material-symbols-outlined text-sm">credit_card</span>
                                            HDFC •• 4242
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-purple px-5 py-3 flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Transaction Settled</span>
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-2 shadow-sm flex flex-col gap-1">
                        <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-sm font-bold">
                            <span className="material-symbols-outlined text-slate-500">edit</span>
                            Edit Order Details
                        </button>
                        <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-500 transition-colors text-sm font-bold">
                            <span className="material-symbols-outlined">cancel</span>
                            Cancel Order
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
