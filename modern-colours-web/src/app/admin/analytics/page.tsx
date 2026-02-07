import React from 'react';
import Link from 'next/link';

export default function AdminAnalyticsPage() {
    return (
        <div className="max-w-6xl mx-auto p-8 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Analytics</h1>
                    <p className="text-slate-500">Business intelligence and performance metrics</p>
                </div>
                <div className="flex gap-3">
                    <select className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                    </select>
                    <button className="px-4 py-2 bg-brand-red hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-red-500/20">
                        Generate Report
                    </button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-brand-red to-purple-600 rounded-2xl p-6 text-white">
                    <p className="text-sm font-medium opacity-80 mb-1">Total Revenue</p>
                    <p className="text-3xl font-bold mb-2">₹42.5L</p>
                    <p className="text-sm font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        +12.5% from last month
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-medium text-slate-500 mb-1">Active Dealers</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">248</p>
                    <p className="text-sm font-medium text-emerald-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        +8 new this month
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-medium text-slate-500 mb-1">Avg. Order Value</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">₹18,420</p>
                    <p className="text-sm font-medium text-emerald-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                        +5.2% from last month
                    </p>
                </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mb-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Revenue Trend</h3>
                <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-700/30 rounded-xl">
                    <div className="text-center">
                        <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-500 mb-2">bar_chart</span>
                        <p className="text-slate-400 text-sm">Interactive charts coming soon</p>
                    </div>
                </div>
            </div>

            {/* Top Products */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Top Selling Products</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg"></div>
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Royal Red Matte</p>
                                <p className="text-xs text-slate-500">Interior Paint</p>
                            </div>
                        </div>
                        <p className="font-bold text-slate-900 dark:text-white">₹4.2L</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Ocean Blue Gloss</p>
                                <p className="text-xs text-slate-500">Exterior Paint</p>
                            </div>
                        </div>
                        <p className="font-bold text-slate-900 dark:text-white">₹3.8L</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg"></div>
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Golden Sunset</p>
                                <p className="text-xs text-slate-500">Premium Series</p>
                            </div>
                        </div>
                        <p className="font-bold text-slate-900 dark:text-white">₹3.1L</p>
                    </div>
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
