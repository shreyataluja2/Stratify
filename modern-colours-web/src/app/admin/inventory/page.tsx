
import React from 'react';

export default function InventoryPage() {
    return (
        <div className="flex flex-col h-full bg-[#f8fafc] w-full">
            <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white/50 px-6 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">Inventory Intelligence</h2>
                </div>
                <div className="flex items-center gap-6">
                    <div className="relative w-80">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#64748b]">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input className="block w-full rounded-lg border-slate-200 bg-white/50 py-2 pl-10 pr-3 text-sm text-[#0f172a] placeholder-[#64748b] focus:border-purple-600 focus:ring-1 focus:ring-purple-600 focus:bg-white transition-colors outline-none" placeholder="Search batches, precursors, SKUs..." type="text" />
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/50 text-[#0f172a] hover:bg-white border border-slate-200 transition-colors relative">
                            <span className="material-symbols-outlined text-[20px]">notifications</span>
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/50 text-[#0f172a] hover:bg-white border border-slate-200 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                        </button>
                        <div className="h-9 w-9 rounded-full bg-cover bg-center ring-2 ring-white shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIGojVXpmeJ4htEjYFGIpXqktViXBvh4KPHEcgMEGzQ4fBNsrShWeN6RPPx7Nt19qdv61iziGSWjTCckUDdDBT_SAQwZq_15Xhydn1qJJE1wCCuwFAH1ml7l6m1qMHRONRZZYp8rwKYhLtmoCCZWo-30Cr0EhJpi3tPjkFZwV3o-cYSHJQ83KCJiV1ccyZ6eLoBkA7RXKn4nLfoscF2Y1-g2qWL75OPboFnYMJzDkjj9xfJMHrDPRqubqJtIpl9lcM8-2Er46SdW0")' }}></div>
                    </div>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h3 className="text-3xl font-black text-[#0f172a] tracking-tight">Current Batch Levels</h3>
                        <p className="text-[#64748b] mt-1">Real-time liquid levels for ongoing paint production</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-semibold text-[#0f172a] hover:bg-slate-50 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">history</span>
                            Logs
                        </button>
                        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-purple-500/20 hover:from-purple-700 hover:to-indigo-700 transition-all">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            New Batch
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    {/* Card 1 */}
                    <div className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 p-6 pt-7 transition-transform hover:-translate-y-1 shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-50/50 to-transparent"></div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-[#64748b]">Regal Purple Base</span>
                                <span className="text-2xl font-bold text-[#0f172a] mt-1">85%</span>
                            </div>
                            <div className="size-8 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.3)] border-2 border-white ring-1 ring-purple-100"></div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="flex items-center text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                                <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                                +2.4%
                            </span>
                            <span className="text-xs text-[#64748b]">vs yesterday</span>
                        </div>
                        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
                            <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 p-6 pt-7 transition-transform hover:-translate-y-1 shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-yellow-50/50 to-transparent"></div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-[#64748b]">Solar Yellow Pigment</span>
                                <span className="text-2xl font-bold text-[#0f172a] mt-1">42%</span>
                            </div>
                            <div className="size-8 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)] border-2 border-white ring-1 ring-yellow-100"></div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="flex items-center text-xs font-bold text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-100">
                                <span className="material-symbols-outlined text-[16px] mr-1">trending_down</span>
                                -12%
                            </span>
                            <span className="text-xs text-[#64748b]">needs restock</span>
                        </div>
                        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
                            <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 p-6 pt-7 transition-transform hover:-translate-y-1 shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-50/50 to-transparent"></div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-[#64748b]">Sunset Orange Dye</span>
                                <span className="text-2xl font-bold text-[#0f172a] mt-1">67%</span>
                            </div>
                            <div className="size-8 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)] border-2 border-white ring-1 ring-orange-100"></div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="flex items-center text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                                <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                                +5.1%
                            </span>
                            <span className="text-xs text-[#64748b]">stable</span>
                        </div>
                        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
                            <div className="h-full w-[67%] rounded-full bg-gradient-to-r from-orange-400 to-red-500"></div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 p-6 pt-7 transition-transform hover:-translate-y-1 shadow-sm">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-600"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-50/50 to-transparent"></div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-[#64748b]">Carbon Black</span>
                                <span className="text-2xl font-bold text-[#0f172a] mt-1">15%</span>
                            </div>
                            <div className="size-8 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.3)] border-2 border-white ring-1 ring-red-200"></div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                                <span className="material-symbols-outlined text-[16px] mr-1">warning</span>
                                Critical
                            </span>
                            <span className="text-xs text-[#64748b]">reorder now</span>
                        </div>
                        <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
                            <div className="h-full w-[15%] rounded-full bg-gradient-to-r from-red-500 to-pink-600"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="rounded-xl bg-white border border-slate-200 p-6 lg:col-span-2 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h4 className="text-lg font-bold text-[#0f172a]">Inventory Levels - Last 30 Days</h4>
                                <p className="text-sm text-[#64748b]">Tracking fast vs. slow moving SKUs</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="size-3 rounded-full bg-purple-600"></span>
                                    <span className="text-xs text-[#0f172a]">Total Stock</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-3 rounded-full bg-yellow-500"></span>
                                    <span className="text-xs text-[#0f172a]">Projected</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-[250px] w-full">
                            <svg className="h-full w-full overflow-visible" viewBox="0 0 800 250">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#9333ea" stopOpacity="0.2"></stop>
                                        <stop offset="100%" stopColor="#9333ea" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="800" y1="200" y2="200"></line>
                                <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="800" y1="150" y2="150"></line>
                                <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="800" y1="100" y2="100"></line>
                                <line stroke="#e2e8f0" strokeDasharray="4" x1="0" x2="800" y1="50" y2="50"></line>
                                <path d="M0,180 C50,170 100,120 150,130 C200,140 250,90 300,80 C350,70 400,100 450,90 C500,80 550,40 600,60 C650,80 700,50 750,40 L800,30 L800,250 L0,250 Z" fill="url(#chartGradient)"></path>
                                <path d="M0,180 C50,170 100,120 150,130 C200,140 250,90 300,80 C350,70 400,100 450,90 C500,80 550,40 600,60 C650,80 700,50 750,40 L800,30" fill="none" stroke="#9333ea" strokeLinecap="round" strokeWidth="3"></path>
                                <path d="M0,190 C60,185 120,160 180,150 C240,140 300,130 360,110 C420,90 480,95 540,85 C600,75 660,60 720,50 L800,45" fill="none" stroke="#eab308" strokeDasharray="6 4" strokeLinecap="round" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <div className="flex justify-between text-xs text-[#64748b] mt-2">
                            <span>Week 1</span>
                            <span>Week 2</span>
                            <span>Week 3</span>
                            <span>Week 4</span>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
                        <div>
                            <h4 className="text-lg font-bold text-[#0f172a]">Storage Capacity</h4>
                            <p className="text-sm text-[#64748b]">Main Warehouse A</p>
                        </div>
                        <div className="relative flex items-center justify-center py-6">
                            <svg className="size-48 rotate-[-90deg]" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="capacityGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 1 }}></stop>
                                        <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 1 }}></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f1f5f9" strokeWidth="12"></circle>
                                <circle cx="50" cy="50" fill="transparent" r="40" stroke="url(#capacityGradient)" strokeDasharray="251.2" strokeDashoffset="60" strokeLinecap="round" strokeWidth="12"></circle>
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600">76%</span>
                                <span className="text-xs text-[#64748b]">Occupied</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#64748b]">Free Space</span>
                                <span className="text-[#0f172a] font-medium">2,400 sqft</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#64748b]">Incoming (24h)</span>
                                <span className="text-[#8b5cf6] font-medium">+450 units</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl bg-white overflow-hidden border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-200 p-6 bg-white">
                        <div>
                            <h4 className="text-lg font-bold text-[#0f172a]">Chemical Precursors Status</h4>
                            <p className="text-sm text-[#64748b]">Raw material inventory monitoring</p>
                        </div>
                        <button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-[#0f172a] hover:bg-slate-50 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">filter_list</span>
                            Filter
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 text-xs uppercase text-[#64748b]">
                                <tr>
                                    <th className="px-6 py-4 font-semibold tracking-wider">Chemical Name</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider">Category</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider w-1/4">Stock Level</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider">Status</th>
                                    <th className="px-6 py-4 font-semibold tracking-wider">Last Updated</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                                                <span className="material-symbols-outlined text-[18px]">science</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#0f172a]">Titanium Dioxide</p>
                                                <p className="text-xs text-[#64748b]">#TD-405-A</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-[#64748b] ring-1 ring-inset ring-slate-300">Pigment</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-full rounded-full bg-slate-100">
                                                <div className="h-2 rounded-full bg-purple-600" style={{ width: '92%' }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-[#0f172a]">92%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-600/20">
                                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                                            Optimal
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#64748b]">2 mins ago</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-[#94a3b8] hover:text-[#0f172a]"><span className="material-symbols-outlined">more_vert</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-8 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                                                <span className="material-symbols-outlined text-[18px]">water_drop</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#0f172a]">Acrylic Resin</p>
                                                <p className="text-xs text-[#64748b]">#AR-202-B</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-[#64748b] ring-1 ring-inset ring-slate-300">Binder</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-full rounded-full bg-slate-100">
                                                <div className="h-2 rounded-full bg-yellow-500" style={{ width: '35%' }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-[#0f172a]">35%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-semibold text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-yellow-600"></span>
                                            Watch
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#64748b]">15 mins ago</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-[#94a3b8] hover:text-[#0f172a]"><span className="material-symbols-outlined">more_vert</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-8 items-center justify-center rounded-lg bg-red-50 text-red-600">
                                                <span className="material-symbols-outlined text-[18px]">science</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#0f172a]">Glycol Ether</p>
                                                <p className="text-xs text-[#64748b]">#GE-101-X</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-[#64748b] ring-1 ring-inset ring-slate-300">Solvent</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-full rounded-full bg-slate-100">
                                                <div className="h-2 rounded-full bg-red-600" style={{ width: '12%' }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-[#0f172a]">12%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/20">
                                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></span>
                                            Critical
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#64748b]">1 hr ago</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-[#94a3b8] hover:text-[#0f172a]"><span className="material-symbols-outlined">more_vert</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                                                <span className="material-symbols-outlined text-[18px]">bubble_chart</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-[#0f172a]">Silica Extender</p>
                                                <p className="text-xs text-[#64748b]">#SE-882-C</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-[#64748b] ring-1 ring-inset ring-slate-300">Additive</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-2 w-full rounded-full bg-slate-100">
                                                <div className="h-2 rounded-full bg-purple-600" style={{ width: '78%' }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-[#0f172a]">78%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-600/20">
                                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                                            Optimal
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#64748b]">2 hrs ago</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-[#94a3b8] hover:text-[#0f172a]"><span className="material-symbols-outlined">more_vert</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="border-t border-slate-200 bg-white p-4">
                        <div className="flex items-center justify-between text-xs text-[#64748b]">
                            <p>Showing 4 of 128 chemical precursors</p>
                            <div className="flex gap-2">
                                <button className="rounded px-2 py-1 hover:bg-slate-100 hover:text-[#0f172a]">Previous</button>
                                <button className="rounded bg-slate-100 px-2 py-1 text-[#0f172a] font-medium">1</button>
                                <button className="rounded px-2 py-1 hover:bg-slate-100 hover:text-[#0f172a]">2</button>
                                <button className="rounded px-2 py-1 hover:bg-slate-100 hover:text-[#0f172a]">3</button>
                                <span className="px-2 py-1">...</span>
                                <button className="rounded px-2 py-1 hover:bg-slate-100 hover:text-[#0f172a]">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
