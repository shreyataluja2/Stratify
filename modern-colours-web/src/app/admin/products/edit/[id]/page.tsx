
import React from 'react';
import Link from 'next/link';

export default function ProductEditPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">Edit Product</h2>
                        <p className="text-sm text-slate-500">Update product details for the supply chain catalog.</p>
                    </div>
                    <Link href="/admin/products" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
                        <span className="material-symbols-outlined">close</span>
                    </Link>
                </div>
                {/* Tabs */}
                <div className="px-8 border-b border-slate-100 bg-slate-50/50 overflow-x-auto">
                    <div className="flex gap-8 whitespace-nowrap">
                        <button className="flex items-center gap-2 py-4 border-b-2 border-purple-700 text-purple-700 text-sm font-semibold">
                            <span className="material-symbols-outlined text-sm">info</span>
                            Basic Info
                        </button>
                        <button className="flex items-center gap-2 py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors">
                            <span className="material-symbols-outlined text-sm">tune</span>
                            Specifications
                        </button>
                        <button className="flex items-center gap-2 py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors">
                            <span className="material-symbols-outlined text-sm">payments</span>
                            Pricing
                        </button>
                        <button className="flex items-center gap-2 py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors">
                            <span className="material-symbols-outlined text-sm">inventory_2</span>
                            Inventory
                        </button>
                        <button className="flex items-center gap-2 py-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors">
                            <span className="material-symbols-outlined text-sm">image</span>
                            Media
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Form */}
                        <div className="flex-1 space-y-6">
                            <div className="space-y-4">
                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-700 mb-2 block">Product Name</span>
                                    <input className="w-full rounded-lg border-slate-200 bg-white focus:ring-purple-700 focus:border-purple-700 px-4 py-3 text-slate-900 outline-none border" placeholder="e.g. Silk Finish Emulsion" type="text" defaultValue="Premium Satin Emulsion - Arctic White" />
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="block">
                                        <span className="text-sm font-semibold text-slate-700 mb-2 block">SKU Code</span>
                                        <div className="relative">
                                            <input className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-purple-700 focus:border-purple-700 px-4 py-3 font-mono text-sm text-slate-900 outline-none border" placeholder="MC-XXX-000" type="text" defaultValue="MC-SAT-2023-AW-05" />
                                            <div className="absolute inset-y-0 right-3 flex items-center">
                                                <span className="material-symbols-outlined text-slate-400 text-lg">barcode_scanner</span>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="block">
                                        <span className="text-sm font-semibold text-slate-700 mb-2 block">Category</span>
                                        <select className="w-full rounded-lg border-slate-200 bg-white focus:ring-purple-700 focus:border-purple-700 px-4 py-3 text-slate-900 outline-none border">
                                            <option>Interior Wall Paints</option>
                                            <option>Exterior Weatherproof</option>
                                            <option>Metal & Wood Primers</option>
                                            <option>Industrial Coatings</option>
                                        </select>
                                    </label>
                                </div>
                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-700 mb-2 block">Description (Internal Note)</span>
                                    <textarea className="w-full rounded-lg border-slate-200 bg-white focus:ring-purple-700 focus:border-purple-700 px-4 py-3 text-slate-900 outline-none border" placeholder="Provide a brief internal description..." rows={3}></textarea>
                                </label>
                            </div>
                            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-4">
                                <span className="material-symbols-outlined text-purple-700 mt-0.5">lightbulb</span>
                                <div className="text-xs text-slate-500 leading-relaxed">
                                    <strong>Tip:</strong> The product name and category will be used for indexing in the dealer portal. Make sure they are descriptive and contain keywords for better search results.
                                </div>
                            </div>
                        </div>

                        {/* Preview */}
                        <div className="w-full lg:w-72 flex-shrink-0">
                            <div className="sticky top-0">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Dealer Preview</p>
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
                                    <div className="aspect-square bg-slate-100 relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-transparent"></div>
                                        <img alt="Premium Satin Emulsion Arctic White bucket" className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHyjmtPLhQ_M5uboz0tkf6gZoxomXPQC6oPibbRcSkiXgDwI8QSBfj7PKQHpS2wCEjxW64VstA74EW-gkVv-E9Yb2DokLue0mzN1mSftwQ4JjJK_zraJMLNW80dCfwN2LRHngduVIIu9GZEo_vMoNxGtW_JqmeNBpdGJBNVADN8WXiHOoLgRVphxGNX15NJfVTAgnACj5HAOqvfzomOyXz5-Mx1uK7WqOHrcsfpgc_MDEvp_DaLG1xRTSqZzW4P-TsemMFv33coN4" />
                                        <div className="absolute top-2 right-2 flex flex-col gap-1">
                                            <div className="bg-white px-2 py-1 rounded shadow-sm text-[10px] font-bold text-brand-red">BEST SELLER</div>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <h3 className="font-bold text-sm text-slate-900 line-clamp-1">Arctic White Premium</h3>
                                        <p className="text-xs text-slate-500 font-medium">Interior Wall Paints</p>
                                        <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                                            <span className="text-brand-red font-black">₹4,250.00</span>
                                            <span className="text-[10px] text-slate-400 font-mono">5.0L</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                    Visible to 1,240 Dealers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="material-symbols-outlined text-sm">history</span>
                        Last updated 2 days ago by Admin
                    </div>
                    <div className="flex gap-3">
                        <Link href="/admin/products" className="px-5 py-2.5 rounded-lg font-semibold text-sm text-slate-600 hover:bg-slate-200 transition-colors">
                            Cancel
                        </Link>
                        <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-purple-200 transition-all active:scale-95">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
