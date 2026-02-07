
import React from 'react';
import Link from 'next/link';

export default function ProductListPage() {
    return (
        <div className="p-6 md:p-8 w-full max-w-[1600px] mx-auto">
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <span className="hover:text-purple-700 cursor-pointer">Admin</span>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-slate-900 font-medium">Inventory</span>
                    </nav>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">Product Management</h2>
                    <p className="text-slate-500 mt-1">Manage catalog, pricing, and specifications.</p>
                </div>
                <Link href="/admin/products/edit/new" className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800 transition-all shadow-md shadow-purple-200">
                    <span className="material-symbols-outlined text-lg">add</span>
                    Add Product
                </Link>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-purple-500 focus:border-purple-500 outline-none" placeholder="Search products..." type="text" />
                    </div>
                    <select className="bg-slate-50 border-slate-200 rounded-lg text-sm text-slate-700 outline-none">
                        <option>All Categories</option>
                        <option>Interior</option>
                        <option>Exterior</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">SKU</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Stock</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {/* Row 1 */}
                            <tr className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-lg bg-slate-100 overflow-hidden">
                                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHyjmtPLhQ_M5uboz0tkf6gZoxomXPQC6oPibbRcSkiXgDwI8QSBfj7PKQHpS2wCEjxW64VstA74EW-gkVv-E9Yb2DokLue0mzN1mSftwQ4JjJK_zraJMLNW80dCfwN2LRHngduVIIu9GZEo_vMoNxGtW_JqmeNBpdGJBNVADN8WXiHOoLgRVphxGNX15NJfVTAgnACj5HAOqvfzomOyXz5-Mx1uK7WqOHrcsfpgc_MDEvp_DaLG1xRTSqZzW4P-TsemMFv33coN4" className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Arctic White Premium</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-sm text-slate-600 font-mono">MC-SAT-2023-AW-05</td>
                                <td className="px-6 py-5 text-sm text-slate-600">Interior Wall Paints</td>
                                <td className="px-6 py-5 text-sm font-bold text-slate-900">₹4,250</td>
                                <td className="px-6 py-5">
                                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                        In Stock
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <Link href="/admin/products/edit/1" className="text-purple-700 hover:text-purple-900 font-semibold text-sm">Edit</Link>
                                </td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-lg bg-slate-100 overflow-hidden">
                                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZ6Cf-iLe4iN2fHDTpDePsX_JPBOrD229OJJ-QWMhWLliOf1UfqzH5C3UFy3YmRrfJ1dABkiTAbyaIXG9TXf4tMn7GTTkTSW-mC0cQcLfDwjFReDlX2ekKlDxduCgUW-7SSDDJx14TxA_Lqmu6DA7tEm2zRezfUJUUTZ7ISAYg7j2oSRq9Js9sGcwc_AoHpA2vFwSngqytAER973z7XdoOx2GzZxLNHiNi7n6E986TYLW7p4-T8QGkaakbsvnlxW4wiLrnVMyH1E8" className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Shield Max Exterior</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-5 text-sm text-slate-600 font-mono">EX-9920</td>
                                <td className="px-6 py-5 text-sm text-slate-600">Weather Guard</td>
                                <td className="px-6 py-5 text-sm font-bold text-slate-900">₹5,100</td>
                                <td className="px-6 py-5">
                                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                        Low Stock
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-right">
                                    <Link href="/admin/products/edit/2" className="text-purple-700 hover:text-purple-900 font-semibold text-sm">Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
