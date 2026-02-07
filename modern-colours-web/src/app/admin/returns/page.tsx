'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const returns = [
    { id: 'RET-9021', orderId: 'ORD-5521', dealer: 'Elite Paints & Decor', initials: 'EP', color: 'indigo', reason: 'Damaged on Delivery', reasonType: 'critical', amount: 124500 },
    { id: 'RET-9022', orderId: 'ORD-5528', dealer: 'City Home Hardware', initials: 'CH', color: 'emerald', reason: 'Wrong Tint Mixed', reasonType: 'warning', amount: 85000 },
    { id: 'RET-9023', orderId: 'ORD-5540', dealer: 'Modern Hardware Hub', initials: 'MH', color: 'blue', reason: 'Expired Batch', reasonType: 'neutral', amount: 42200 },
    { id: 'RET-9024', orderId: 'ORD-5545', dealer: 'Classic Brushes & Rolls', initials: 'CB', color: 'purple', reason: 'Leaking Container', reasonType: 'critical', amount: 210000 },
    { id: 'RET-9025', orderId: 'ORD-5552', dealer: 'The Paint Hub', initials: 'PH', color: 'orange', reason: 'Wrong Item Shipped', reasonType: 'success', amount: 31000 },
];

export default function AdminReturnsPage() {
    const [activeTab, setActiveTab] = useState('all');
    const [filters, setFilters] = useState({
        damaged: true,
        wrongTint: true,
        expired: false,
        cancelled: false,
        duplicate: false
    });

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const getReasonStyles = (type: string) => {
        switch (type) {
            case 'critical':
                return 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300';
            case 'warning':
                return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300';
            case 'success':
                return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300';
            default:
                return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
        }
    };

    const getInitialsBg = (color: string) => {
        const colors: Record<string, string> = {
            indigo: 'bg-indigo-100 text-indigo-600',
            emerald: 'bg-emerald-100 text-emerald-600',
            blue: 'bg-blue-100 text-blue-600',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600'
        };
        return colors[color] || 'bg-slate-100 text-slate-600';
    };

    const handleApprove = (id: string) => {
        alert(`Approved return ${id}`);
    };

    const handleInspect = (id: string) => {
        alert(`Opening inspection for ${id}`);
    };

    return (
        <div className="max-w-7xl mx-auto animate-fade-in">
            {/* Title Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Returns & Cancellations Management</h1>
                <p className="text-slate-500 dark:text-slate-400">Review and authorize dealer return requests and refund processes.</p>
            </div>

            {/* KPI Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Open Returns */}
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50 rounded-xl p-6 relative overflow-hidden group card-hover">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <span className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg text-amber-600 dark:text-amber-400">
                                <span className="material-symbols-outlined">pending_actions</span>
                            </span>
                            <span className="text-amber-600 dark:text-amber-400 text-sm font-bold bg-amber-100 dark:bg-amber-900/50 px-2 py-0.5 rounded">+12%</span>
                        </div>
                        <h3 className="text-amber-800 dark:text-amber-200 font-medium text-sm">Open Returns</h3>
                        <p className="text-3xl font-bold text-amber-900 dark:text-amber-50 mt-1 tracking-tight">42</p>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-9xl">pending_actions</span>
                    </div>
                </div>

                {/* Critical Refunds */}
                <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50 rounded-xl p-6 relative overflow-hidden group card-hover">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <span className="p-2 bg-rose-100 dark:bg-rose-900 rounded-lg text-rose-600 dark:text-rose-400">
                                <span className="material-symbols-outlined">report</span>
                            </span>
                            <span className="text-rose-600 dark:text-rose-400 text-sm font-bold bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded">High Priority</span>
                        </div>
                        <h3 className="text-rose-800 dark:text-rose-200 font-medium text-sm">Critical Refunds</h3>
                        <p className="text-3xl font-bold text-rose-900 dark:text-rose-50 mt-1 tracking-tight">12</p>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-9xl">report</span>
                    </div>
                </div>

                {/* Processed Today */}
                <div className="bg-brand-purple/5 dark:bg-brand-purple/10 border border-brand-purple/10 dark:border-brand-purple/20 rounded-xl p-6 relative overflow-hidden group card-hover">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <span className="p-2 bg-brand-purple/20 dark:bg-brand-purple/30 rounded-lg text-brand-purple dark:text-brand-purple/80">
                                <span className="material-symbols-outlined">task_alt</span>
                            </span>
                            <span className="text-brand-purple dark:text-brand-purple/80 text-sm font-bold bg-brand-purple/10 dark:bg-brand-purple/20 px-2 py-0.5 rounded">Goal Met</span>
                        </div>
                        <h3 className="font-medium text-sm">Processed Today</h3>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight">156</p>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-9xl text-brand-purple">task_alt</span>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Tabs */}
                <div className="px-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex gap-8">
                        {[
                            { key: 'all', label: 'All Requests' },
                            { key: 'pending', label: 'Pending Review' },
                            { key: 'approved', label: 'Approved' },
                            { key: 'completed', label: 'Completed' }
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`py-4 border-b-2 text-sm font-medium transition-colors ${activeTab === tab.key
                                        ? 'border-brand-purple text-brand-purple font-bold'
                                        : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Export CSV
                        </button>
                    </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Return ID</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Order #</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Dealer Name</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Reason</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Amount</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {returns.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">{item.id}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href={`/admin/orders/${item.orderId}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-purple">#{item.orderId}</Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`size-8 rounded-lg ${getInitialsBg(item.color)} flex items-center justify-center font-bold text-xs`}>{item.initials}</div>
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">{item.dealer}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getReasonStyles(item.reasonType)}`}>
                                            {item.reason}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">{formatCurrency(item.amount)}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleApprove(item.id)}
                                                className="px-3 py-1.5 bg-brand-purple text-white text-xs font-bold rounded-lg hover:bg-brand-purple/90 transition-all"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleInspect(item.id)}
                                                className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                                            >
                                                Inspect
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">Showing 1 to 5 of 42 results</span>
                    <div className="flex items-center gap-2">
                        <button className="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-brand-purple transition-colors">
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <button className="px-3 py-1 rounded bg-brand-purple text-white text-xs font-bold">1</button>
                        <button className="px-3 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-brand-purple transition-colors text-xs font-bold">2</button>
                        <button className="px-3 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-brand-purple transition-colors text-xs font-bold">3</button>
                        <span className="text-slate-400">...</span>
                        <button className="px-3 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-brand-purple transition-colors text-xs font-bold">9</button>
                        <button className="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-brand-purple transition-colors">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
