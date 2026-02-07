
import React from 'react';

export default function ForecastingPage() {
    return (
        <div className="flex flex-col h-full bg-[#f8fafc] w-full font-display">
            <header className="sticky top-0 z-10 backdrop-blur-xl bg-gradient-to-r from-purple-50/90 via-fuchsia-50/90 to-yellow-50/90 border-b border-white/50">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-gradient-to-br from-red-600 to-purple-700 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                                <span className="material-symbols-outlined text-[20px]">analytics</span>
                            </div>
                            <h2 className="text-[#0f172a] text-xl font-bold leading-tight tracking-tight hidden sm:block">
                                Modern Colours <span className="bg-gradient-to-r from-red-600 to-purple-700 bg-clip-text text-transparent font-normal">Command Center</span>
                            </h2>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <label className="relative w-full flex items-center">
                            <span className="absolute left-3 text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </span>
                            <input className="w-full h-10 bg-white/60 border border-slate-200/60 rounded-lg pl-10 pr-4 text-sm text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all" placeholder="Search analytics or predictions..." type="text" />
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center justify-center size-10 rounded-lg hover:bg-white/50 text-slate-600 transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2.5 right-2.5 size-2 bg-rose-500 rounded-full"></span>
                        </button>
                        <div className="w-px h-6 bg-slate-300/50 mx-1"></div>
                        <div className="flex items-center gap-3 pl-1">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs font-medium text-[#0f172a]">Alex Morgan</p>
                                <p className="text-[10px] text-slate-500">Analytics Lead</p>
                            </div>
                            <div className="size-9 rounded-full bg-cover bg-center border border-white shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBNcYVMStJ3bgCr8a4tJ__RKknJvTF73zEORN3wqqBvN7fC4EJeab7qFl_60w6VsBdTsxWo8YNpAtUCAmtncf43QbA2ATjmce7SAWRp7DIkA8j4uYafYW2xrA-EZbemlc9z1l8OhYvy8WZiFq3egRvKFRq0t6MnGCwyrV_EkqNytmZkTaUtDr6xI1nKkxLG-y6sXJ9M9TjgGIYsLma3NjA6Ni5ZW7tdrItY3xfojwI51bLgu0nTBVa-SpxqxQK978-DZE0cMtpU1o")' }}></div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 overflow-y-auto scroll-smooth">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-[#0f172a] tracking-tight">Analytics Dashboard</h1>
                        <p className="text-slate-500 mt-1">Advanced multi-modal forecasting & risk command center.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="h-10 px-4 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">tune</span>
                            Parameters
                        </button>
                        <button className="h-10 px-4 rounded-lg bg-gradient-to-r from-purple-700 to-red-600 hover:shadow-lg hover:shadow-purple-500/30 text-white text-sm font-medium transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">summarize</span>
                            Generate Report
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Metric 1 */}
                    <div className="relative overflow-hidden group rounded-xl shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-br from-red-600 to-fuchsia-500 text-white p-5">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-white/20 rounded-lg text-white backdrop-blur-sm">
                                <span className="material-symbols-outlined">query_stats</span>
                            </div>
                            <span className="text-white text-xs font-bold bg-white/20 px-2 py-1 rounded-full border border-white/20">+2.1%</span>
                        </div>
                        <p className="text-white/90 text-sm font-medium">Forecast Accuracy</p>
                        <h3 className="text-2xl font-bold text-white mt-1">94.2%</h3>
                    </div>
                    {/* Metric 2 */}
                    <div className="glass-panel p-5 rounded-xl border-l-4 border-l-purple-700 bg-white/80 border border-white/60 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-700">
                                <span className="material-symbols-outlined">inventory_2</span>
                            </div>
                            <div className="w-16 h-8">
                                <svg className="w-full h-full stroke-purple-700 stroke-2 fill-none" viewBox="0 0 100 30">
                                    <path d="M0 20 Q 10 5, 20 25 T 40 15 T 60 20 T 80 10 T 100 18"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Inventory Turnover</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-2xl font-bold text-[#0f172a] mt-1">8.5x</h3>
                            <span className="text-[10px] text-rose-500 font-bold">-0.3%</span>
                        </div>
                    </div>
                    {/* Metric 3 */}
                    <div className="glass-panel p-5 rounded-xl border-l-4 border-l-yellow-500 bg-white/80 border border-white/60 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-yellow-50 rounded-lg text-yellow-500">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <div className="w-16 h-8">
                                <svg className="w-full h-full stroke-yellow-500 stroke-2 fill-none" viewBox="0 0 100 30">
                                    <path d="M0 25 Q 15 20, 30 15 T 50 10 T 70 5 T 100 8"></path>
                                </svg>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">On-Time Delivery</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-2xl font-bold text-[#0f172a] mt-1">98.1%</h3>
                            <span className="text-[10px] text-purple-700 font-bold">+1.5%</span>
                        </div>
                    </div>
                    {/* Metric 4 */}
                    <div className="glass-panel p-5 rounded-xl border-l-4 border-l-fuchsia-500 bg-white/80 border border-white/60 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-fuchsia-50 rounded-lg text-fuchsia-500">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">Optimal</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">System Reliability</p>
                        <h3 className="text-2xl font-bold text-[#0f172a] mt-1">High</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="glass-panel p-6 rounded-xl relative bg-white/80 border border-white/60 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0f172a]">Demand Forecast vs. Actual</h3>
                                    <p className="text-xs text-slate-500">Advanced predictive modeling with confidence interval</p>
                                </div>
                                <div className="flex items-center gap-4 text-[10px] font-medium">
                                    <div className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-purple-700"></span> Actual</div>
                                    <div className="flex items-center gap-1.5"><span className="w-3 h-0.5 border-t border-dashed border-fuchsia-500"></span> Forecast</div>
                                    <div className="flex items-center gap-1.5"><span className="w-3 h-2 bg-fuchsia-500/10"></span> Confidence</div>
                                </div>
                            </div>
                            <div className="h-64 relative mt-4">
                                <svg className="w-full h-full drop-shadow-md" preserveAspectRatio="none" viewBox="0 0 800 200">
                                    <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="800" y1="40" y2="40"></line>
                                    <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="800" y1="80" y2="80"></line>
                                    <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="800" y1="120" y2="120"></line>
                                    <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="800" y1="160" y2="160"></line>
                                    <path d="M 400 120 L 480 90 L 560 110 L 640 70 L 720 100 L 800 60 L 800 140 L 720 170 L 640 140 L 560 180 L 480 160 L 400 120 Z" fill="rgba(217, 70, 239, 0.08)"></path>
                                    <path d="M 0 160 L 80 140 L 160 170 L 240 110 L 320 130 L 400 120" fill="none" stroke="#7e22ce" strokeLinecap="round" strokeWidth="3"></path>
                                    <path d="M 400 120 L 480 125 L 560 145 L 640 105 L 720 135 L 800 100" fill="none" stroke="#d946ef" strokeDasharray="8 4" strokeLinecap="round" strokeWidth="3"></path>
                                    <line stroke="#eab308" strokeDasharray="4 4" strokeWidth="1" x1="400" x2="400" y1="0" y2="200"></line>
                                </svg>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-50 text-yellow-700 text-[10px] px-2 py-0.5 rounded border border-yellow-200 font-bold">TODAY</div>
                            </div>
                            <div className="flex justify-between mt-4 px-2 text-[10px] text-slate-400 font-mono">
                                <span>WK 28</span><span>WK 29</span><span>WK 30</span><span>WK 31</span><span>WK 32</span><span>WK 33</span><span>WK 34</span><span>WK 35</span><span>WK 36</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-panel p-6 rounded-xl bg-white/80 border border-white/60 shadow-sm">
                                <h3 className="text-sm font-semibold text-[#0f172a] mb-4">Regional Accuracy</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1.5 font-medium">
                                            <span className="text-slate-600">North Region</span>
                                            <span className="text-purple-700">96.8%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-700 w-[96.8%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1.5 font-medium">
                                            <span className="text-slate-600">South Region</span>
                                            <span className="text-fuchsia-500">92.4%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-fuchsia-500 w-[92.4%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1.5 font-medium">
                                            <span className="text-slate-600">East Region</span>
                                            <span className="text-red-600">88.5%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-600 w-[88.5%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1.5 font-medium">
                                            <span className="text-slate-600">West Region</span>
                                            <span className="text-yellow-500">95.1%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-yellow-500 w-[95.1%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-xl bg-white/80 border border-white/60 shadow-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-semibold text-[#0f172a]">Risk Level Heatmap</h3>
                                    <div className="flex gap-1">
                                        <span className="size-2 rounded-sm bg-purple-700"></span>
                                        <span className="size-2 rounded-sm bg-fuchsia-500"></span>
                                        <span className="size-2 rounded-sm bg-red-600"></span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {/* Heatmap Row 1 */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-mono text-slate-400 w-8">NOR</span>
                                        <div className="grid grid-cols-12 gap-[4px] flex-1">
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/50"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/60"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/50"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/90"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/20"></div>
                                        </div>
                                    </div>
                                    {/* Heatmap Row 2 */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-mono text-slate-400 w-8">SOU</span>
                                        <div className="grid grid-cols-12 gap-[4px] flex-1">
                                            <div className="aspect-square rounded-[2px] bg-purple-700/20"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/20"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/60"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/20"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/80"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/50"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/40"></div>
                                        </div>
                                    </div>
                                    {/* Heatmap Row 3 */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-mono text-slate-400 w-8">EST</span>
                                        <div className="grid grid-cols-12 gap-[4px] flex-1">
                                            <div className="aspect-square rounded-[2px] bg-red-600/20"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/60"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/80"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/100"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/90"></div>
                                            <div className="aspect-square rounded-[2px] bg-red-600/70"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/60"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/50"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/20"></div>
                                        </div>
                                    </div>
                                    {/* Heatmap Row 4 */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-mono text-slate-400 w-8">WST</span>
                                        <div className="grid grid-cols-12 gap-[4px] flex-1">
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/20"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/50"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/30"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/40"></div>
                                            <div className="aspect-square rounded-[2px] bg-purple-700/60"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/50"></div>
                                            <div className="aspect-square rounded-[2px] bg-fuchsia-500/30"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-[8px] text-slate-400 pt-1">
                                        <span>AUG 01</span><span>AUG 15</span><span>AUG 31</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-panel p-6 rounded-xl flex items-center justify-between bg-white/80 border border-white/60 shadow-sm">
                                <div>
                                    <h3 className="text-sm font-semibold text-[#0f172a] mb-1">Inventory Health</h3>
                                    <p className="text-[10px] text-slate-500 mb-4">Current stock optimization</p>
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2 text-[10px]"><span className="size-2 rounded-full bg-purple-700"></span> Optimal (65%)</div>
                                        <div className="flex items-center gap-2 text-[10px]"><span className="size-2 rounded-full bg-yellow-500"></span> Overstock (20%)</div>
                                        <div className="flex items-center gap-2 text-[10px]"><span className="size-2 rounded-full bg-red-600"></span> Understock (15%)</div>
                                    </div>
                                </div>
                                <div className="relative size-24">
                                    <svg className="size-full" viewBox="0 0 36 36">
                                        <circle cx="18" cy="18" fill="none" r="16" stroke="#eee" strokeWidth="4"></circle>
                                        <circle cx="18" cy="18" fill="none" r="16" stroke="#7e22ce" strokeDasharray="65 100" strokeDashoffset="0" strokeWidth="4"></circle>
                                        <circle cx="18" cy="18" fill="none" r="16" stroke="#eab308" strokeDasharray="20 100" strokeDashoffset="-65" strokeWidth="4"></circle>
                                        <circle cx="18" cy="18" fill="none" r="16" stroke="#dc2626" strokeDasharray="15 100" strokeDashoffset="-85" strokeWidth="4"></circle>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-xs font-bold">12k</span>
                                        <span className="text-[8px] text-slate-500 uppercase">SKUs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-panel p-6 rounded-xl flex items-center justify-between bg-white/80 border border-white/60 shadow-sm">
                                <div>
                                    <h3 className="text-sm font-semibold text-[#0f172a] mb-1">Inventory Aging</h3>
                                    <p className="text-[10px] text-slate-500 mb-4">Stock lifecycle analysis</p>
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2 text-[10px]"><span className="size-2 rounded-full bg-purple-700"></span> &lt; 30 Days (72%)</div>
                                        <div className="flex items-center gap-2 text-[10px]"><span className="size-2 rounded-full bg-fuchsia-500"></span> 30-60 Days (18%)</div>
                                        <div className="flex items-center gap-2 text-[10px]"><span className="size-2 rounded-full bg-slate-300"></span> &gt; 60 Days (10%)</div>
                                    </div>
                                </div>
                                <div className="relative size-24">
                                    <svg className="size-full" viewBox="0 0 36 36">
                                        <circle cx="18" cy="18" fill="none" r="16" stroke="#eee" strokeWidth="4"></circle>
                                        <circle cx="18" cy="18" fill="none" r="16" stroke="#7e22ce" strokeDasharray="72 100" strokeDashoffset="0" strokeWidth="4"></circle>
                                        <circle cx="18" cy="18" fill="none" r="16" stroke="#d946ef" strokeDasharray="18 100" strokeDashoffset="-72" strokeWidth="4"></circle>
                                        <circle cx="18" cy="18" fill="none" r="16" stroke="#cbd5e1" strokeDasharray="10 100" strokeDashoffset="-90" strokeWidth="4"></circle>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-xs font-bold">New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-panel rounded-xl overflow-hidden border-2 border-purple-700/20 bg-gradient-to-br from-white to-purple-50/50">
                            <div className="p-5 border-b border-purple-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-purple-700">lightbulb</span>
                                <h3 className="text-md font-bold text-[#0f172a]">Strategic Insights</h3>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="flex gap-3">
                                    <div className="size-5 rounded-full bg-purple-700/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="size-1.5 rounded-full bg-purple-700"></div>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        <span className="font-bold text-purple-700">Demand Spike:</span> Expected in <span className="font-semibold">East Region</span> over next 2 weeks due to seasonal procurement cycles.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="size-5 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="size-1.5 rounded-full bg-yellow-500"></div>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        <span className="font-bold text-yellow-500">Efficiency Alert:</span> Re-allocating 15% stock from West to North could reduce lead times by 22 hours.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="size-5 rounded-full bg-red-600/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <div className="size-1.5 rounded-full bg-red-600"></div>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        <span className="font-bold text-red-600">Vendor Risk:</span> High probability of Cobalt Blue pigment shortage from primary APAC supplier by mid-September.
                                    </p>
                                </div>
                                <button className="w-full py-2 px-4 rounded-lg bg-white border border-purple-700/20 text-purple-700 text-xs font-semibold hover:bg-purple-700 hover:text-white transition-all">
                                    Review Recommended Actions
                                </button>
                            </div>
                        </div>

                        <div className="glass-panel rounded-xl border border-white flex flex-col overflow-hidden bg-white/80 shadow-sm">
                            <div className="p-5 border-b border-slate-100 bg-white flex justify-between items-center">
                                <h3 className="text-sm font-semibold text-[#0f172a]">Operational Alerts</h3>
                                <button className="text-[10px] text-purple-700 hover:underline font-bold">CLEAR ALL</button>
                            </div>
                            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
                                <div className="p-3 rounded-lg bg-white border border-slate-100 border-l-4 border-l-red-600 shadow-sm">
                                    <h4 className="text-xs font-bold text-[#0f172a]">Shipment Delayed</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5">SKU-892 stuck at customs (48h).</p>
                                    <span className="text-[8px] text-slate-400 mt-1 block">10m ago</span>
                                </div>
                                <div className="p-3 rounded-lg bg-white border border-slate-100 border-l-4 border-l-yellow-500 shadow-sm">
                                    <h4 className="text-xs font-bold text-[#0f172a]">Inventory Low</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5">Solvent base below safety stock in WH-B.</p>
                                    <span className="text-[8px] text-slate-400 mt-1 block">2h ago</span>
                                </div>
                                <div className="p-3 rounded-lg bg-white border border-slate-100 border-l-4 border-l-purple-700 shadow-sm">
                                    <h4 className="text-xs font-bold text-[#0f172a]">Prediction Updated</h4>
                                    <p className="text-[10px] text-slate-500 mt-0.5">Model refreshed with Q3 sales data.</p>
                                    <span className="text-[8px] text-slate-400 mt-1 block">5h ago</span>
                                </div>
                            </div>
                            <div className="p-5 border-t border-slate-100 bg-slate-50/50">
                                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                                    <span>System Status</span>
                                    <span className="text-emerald-500">Live</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-purple-700 w-full"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-mono">
                                        <span className="text-slate-400">LATENCY</span>
                                        <span className="text-yellow-500">420ms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
