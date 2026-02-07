import React from 'react';
import Link from 'next/link';

export default function AdminOrdersPage() {
    return (
        <div className="max-w-6xl mx-auto p-8 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Orders</h1>
                    <p className="text-slate-500">Manage and track all orders</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors">
                        Export
                    </button>
                    <button className="px-4 py-2 bg-brand-red hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-red-500/20">
                        + New Order
                    </button>
                </div>
            </div>

            {/* Order Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Orders</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">1,284</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">Pending</p>
                    <p className="text-2xl font-bold text-amber-500">42</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">In Transit</p>
                    <p className="text-2xl font-bold text-blue-500">128</p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-1">Delivered</p>
                    <p className="text-2xl font-bold text-emerald-500">1,114</p>
                </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 dark:bg-slate-700/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">#ORD-5021</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Rajesh Traders</td>
                                <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">₹24,500</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md text-xs font-bold">Delivered</span></td>
                                <td className="px-6 py-4 text-sm text-slate-500">Feb 7, 2026</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">#ORD-5020</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Metro Paints</td>
                                <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">₹18,200</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold">In Transit</span></td>
                                <td className="px-6 py-4 text-sm text-slate-500">Feb 7, 2026</td>
                            </tr>
                            <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">#ORD-5019</td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Color World</td>
                                <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">₹32,800</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-amber-50 text-amber-600 rounded-md text-xs font-bold">Pending</span></td>
                                <td className="px-6 py-4 text-sm text-slate-500">Feb 6, 2026</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <Link href="/admin/dashboard" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors">
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
}
