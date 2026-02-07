import React from 'react';
import Link from 'next/link';

export default function AdminWarehousesPage() {
    return (
        <div className="max-w-6xl mx-auto p-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Warehouses</h1>
                <p className="text-slate-500">Manage warehouse locations and capacity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Warehouse Cards */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                            <span className="material-symbols-outlined text-blue-600">warehouse</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">Mumbai Hub</h3>
                            <p className="text-xs text-slate-500">Primary Distribution</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Capacity</span>
                            <span className="font-semibold text-slate-900 dark:text-white">85%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                            <span>12,450 units</span>
                            <span>14,600 max</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl">
                            <span className="material-symbols-outlined text-emerald-600">warehouse</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">Delhi North</h3>
                            <p className="text-xs text-slate-500">Regional Center</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Capacity</span>
                            <span className="font-semibold text-slate-900 dark:text-white">62%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '62%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                            <span>8,200 units</span>
                            <span>13,200 max</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
                            <span className="material-symbols-outlined text-amber-600">warehouse</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">Chennai Port</h3>
                            <p className="text-xs text-slate-500">Export Hub</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Capacity</span>
                            <span className="font-semibold text-slate-900 dark:text-white">91%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full" style={{ width: '91%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                            <span>9,100 units</span>
                            <span>10,000 max</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <Link href="/admin/dashboard" className="px-6 py-3 bg-brand-red text-white rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
}
