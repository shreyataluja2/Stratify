
import React from 'react';

export default function DealerApprovalsPage() {
    return (
        <div className="p-6 md:p-8 w-full max-w-[1600px] mx-auto">
            {/* Breadcrumbs & Header */}
            <div className="mb-8">
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="hover:text-purple-700 cursor-pointer">Admin</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-slate-900 font-medium">Dealer Verification Queue</span>
                </nav>
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Dealer Approvals</h2>
                        <p className="text-slate-500 mt-1">Manage and verify onboarding applications for new network partners.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm text-slate-700">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Export List
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-lg text-sm font-semibold hover:bg-purple-800 transition-all shadow-md shadow-purple-200">
                            <span className="material-symbols-outlined text-lg">person_add</span>
                            Invite Dealer
                        </button>
                    </div>
                </div>
            </div>

            {/* KPI Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Pending Review - Yellow */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400"></div>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Pending Review</p>
                            <h3 className="text-3xl font-black mt-1 text-slate-900">24</h3>
                            <p className="text-sm text-amber-600 font-semibold mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                Avg. Wait: 1.2 Days
                            </p>
                        </div>
                        <div className="bg-amber-50 p-2 rounded-lg text-amber-600">
                            <span className="material-symbols-outlined">pending_actions</span>
                        </div>
                    </div>
                </div>
                {/* Urgent/Incomplete - Red */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500"></div>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Urgent / Incomplete</p>
                            <h3 className="text-3xl font-black mt-1 text-slate-900">05</h3>
                            <p className="text-sm text-red-600 font-semibold mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">priority_high</span>
                                Requires Attention
                            </p>
                        </div>
                        <div className="bg-red-50 p-2 rounded-lg text-red-600">
                            <span className="material-symbols-outlined">error</span>
                        </div>
                    </div>
                </div>
                {/* Approved Today - Purple */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500"></div>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Approved Today</p>
                            <h3 className="text-3xl font-black mt-1 text-slate-900">12</h3>
                            <p className="text-sm text-purple-600 font-semibold mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                +15% from yesterday
                            </p>
                        </div>
                        <div className="bg-purple-50 p-2 rounded-lg text-purple-600">
                            <span className="material-symbols-outlined">verified</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-72 flex-shrink-0 bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:sticky lg:top-6">
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="font-bold text-lg text-slate-900">Filters</h4>
                        <button className="text-xs text-purple-700 font-bold hover:underline">Reset All</button>
                    </div>
                    <div className="space-y-6">
                        {/* Search */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Search Dealer</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                                <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-purple-500 focus:border-purple-500 outline-none" placeholder="Name, ID or Region..." type="text" />
                            </div>
                        </div>
                        {/* Region Filter */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Region</label>
                            <select className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-purple-500 focus:border-purple-500 outline-none text-slate-700">
                                <option>All Regions</option>
                                <option>North America</option>
                                <option>European Union</option>
                                <option>Asia Pacific</option>
                                <option>Middle East</option>
                            </select>
                        </div>
                        {/* Business Type Filter */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Business Type</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input defaultChecked className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox" />
                                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Exclusive Partner</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input defaultChecked className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox" />
                                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Wholesale Dealer</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input className="rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox" />
                                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">Retail Stockist</span>
                                </label>
                            </div>
                        </div>
                        {/* Document Status */}
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Document Status</label>
                            <div className="grid grid-cols-1 gap-2">
                                <button className="text-left px-3 py-2 rounded-lg bg-purple-50 text-purple-700 text-sm font-semibold border border-purple-200">All Documents</button>
                                <button className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-600 text-sm font-medium border border-transparent transition-colors">Verified Only</button>
                                <button className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-600 text-sm font-medium border border-transparent transition-colors">Missing Papers</button>
                                <button className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-600 text-sm font-medium border border-transparent transition-colors">Expired IDs</button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Data Table Content */}
                <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden w-full">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                        <span className="text-sm font-medium text-slate-500">Showing 1-10 of 24 applications</span>
                        <div className="flex items-center gap-2">
                            <button className="p-1.5 hover:bg-slate-100 rounded text-slate-400">
                                <span className="material-symbols-outlined text-lg">chevron_left</span>
                            </button>
                            <span className="text-sm font-bold px-2 text-slate-700">1</span>
                            <button className="p-1.5 hover:bg-slate-100 rounded text-slate-400">
                                <span className="material-symbols-outlined text-lg">chevron_right</span>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Business Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Application Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Dealer Tier</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Region</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {/* Row 1 */}
                                <tr className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 font-bold shrink-0">AL</div>
                                            <div>
                                                <p className="font-bold text-slate-900">Apex Luxe Finishes</p>
                                                <p className="text-xs text-slate-500 italic">ID: #DLR-9921</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600">12 Oct 2023</td>
                                    <td className="px-6 py-5">
                                        <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                                            <span className="material-symbols-outlined text-sm text-blue-500">workspace_premium</span>
                                            Platinum
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600 font-medium">New York, US</td>
                                    <td className="px-6 py-5">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 uppercase tracking-tight">New</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm shadow-purple-200 hover:scale-105 active:scale-95 transition-all">Review</button>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0">VD</div>
                                            <div>
                                                <p className="font-bold text-slate-900">Vivid Decor Hub</p>
                                                <p className="text-xs text-slate-500 italic">ID: #DLR-8842</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600">10 Oct 2023</td>
                                    <td className="px-6 py-5">
                                        <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                                            <span className="material-symbols-outlined text-sm text-amber-500">stars</span>
                                            Gold
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600 font-medium">London, UK</td>
                                    <td className="px-6 py-5">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 uppercase tracking-tight">In-Progress</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm shadow-purple-200 hover:scale-105 active:scale-95 transition-all">Review</button>
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">SN</div>
                                            <div>
                                                <p className="font-bold text-slate-900">Spectrum Nexus</p>
                                                <p className="text-xs text-slate-500 italic">ID: #DLR-7710</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600">09 Oct 2023</td>
                                    <td className="px-6 py-5">
                                        <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                                            <span className="material-symbols-outlined text-sm text-gray-400">toll</span>
                                            Silver
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600 font-medium">Sydney, AU</td>
                                    <td className="px-6 py-5">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 uppercase tracking-tight">Flagged</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm shadow-purple-200 hover:scale-105 active:scale-95 transition-all">Review</button>
                                    </td>
                                </tr>
                                {/* Row 4 */}
                                <tr className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 font-bold shrink-0">GC</div>
                                            <div>
                                                <p className="font-bold text-slate-900">Global Coatings Co.</p>
                                                <p className="text-xs text-slate-500 italic">ID: #DLR-6651</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600">08 Oct 2023</td>
                                    <td className="px-6 py-5">
                                        <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                                            <span className="material-symbols-outlined text-sm text-blue-500">workspace_premium</span>
                                            Platinum
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600 font-medium">Dubai, UAE</td>
                                    <td className="px-6 py-5">
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 uppercase tracking-tight">New</span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm shadow-purple-200 hover:scale-105 active:scale-95 transition-all">Review</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-500">Rows per page:</span>
                            <select className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer text-slate-700 outline-none">
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 cursor-not-allowed">
                                <span className="material-symbols-outlined">first_page</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400 cursor-not-allowed">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-700 text-white font-bold shadow-sm">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600">3</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600">
                                <span className="material-symbols-outlined">last_page</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
