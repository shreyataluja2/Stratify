
import { StatsCard } from "@/components/dashboard/StatsCard";

export default function AdminDashboard() {
    return (
        <div className="w-full max-w-[1400px] mx-auto p-8 md:p-10 flex flex-col gap-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-100/40 to-transparent pointer-events-none z-0"></div>
            <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col gap-6">
                {/* Hero Card */}
                <div className="w-full rounded-2xl overflow-hidden relative min-h-[240px] shadow-xl shadow-slate-200/70 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d32f2f] via-[#8e24aa] to-[#b45309] opacity-95 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                    <div className="relative h-full flex flex-col justify-end p-8 md:p-10 z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 rounded bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                Live Status
                            </span>
                            <span className="text-white/90 text-xs">Updated 2m ago</span>
                        </div>
                        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-2">
                            Supply Chain Overview
                        </h2>
                        <p className="text-white max-w-xl text-sm md:text-base leading-relaxed opacity-95 font-medium">
                            Global distribution channels are operating at 94% efficiency. Key
                            mixing nodes in Southeast Asia report optimal throughput.
                        </p>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl font-extrabold tracking-widest uppercase text-slate-800 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-brand-red rounded-full"></span>
                        Performance Metrics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                        {/* Card 1: Raw Material Stock (Custom color mixing logic) */}
                        <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow"></div>
                            <div className="flex justify-between items-start">
                                <div className="p-2 rounded-lg bg-yellow-50 text-brand-yellow border border-yellow-100">
                                    <span className="material-symbols-outlined">warning</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-brand-red bg-red-50 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 border border-red-100">
                                        <span className="material-symbols-outlined text-[14px]">trending_down</span> -5.2%
                                    </span>
                                    <div className="flex items-center gap-1 mt-1 text-slate-400">
                                        <span className="material-symbols-outlined text-[10px]">auto_awesome</span>
                                        <span className="text-[10px] font-medium">96% confidence</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="text-slate-600 text-sm font-semibold">Raw Material Stock</p>
                                    <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] uppercase font-bold tracking-wider rounded border border-yellow-200">Risk Detected</span>
                                </div>
                                <h3 className="text-slate-900 text-3xl font-bold tracking-tight">42%</h3>
                            </div>
                            <div className="w-full h-10 flex items-end gap-1 opacity-80">
                                <div className="w-1/6 bg-yellow-200 h-full rounded-sm"></div>
                                <div className="w-1/6 bg-yellow-300 h-[60%] rounded-sm"></div>
                                <div className="w-1/6 bg-yellow-200 h-[40%] rounded-sm"></div>
                                <div className="w-1/6 bg-brand-yellow h-[30%] rounded-sm"></div>
                                <div className="w-1/6 bg-yellow-300 h-[20%] rounded-sm"></div>
                                <div className="w-1/6 bg-gradient-to-t from-brand-yellow to-yellow-600 h-[15%] rounded-sm shadow-sm"></div>
                            </div>
                            <div className="mt-2 pt-3 border-t border-slate-200 flex flex-col gap-1">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <span className="material-symbols-outlined text-brand-yellow text-[14px]">auto_awesome</span>
                                    <span className="text-yellow-700 text-[10px] uppercase font-bold tracking-wider">SYSTEM INSIGHT</span>
                                </div>
                                <p className="text-xs text-slate-700 font-medium">Reorder pigments within 48h to avoid delays.</p>
                            </div>
                        </div>

                        {/* Card 2: Production Efficiency */}
                        <StatsCard
                            title="Production Efficiency"
                            value="92%"
                            trend="+1.1%"
                            trendUp={true}
                            icon="precision_manufacturing"
                            color="red"
                            confidence="92%"
                            insight="Optimal polymer mix ratio maintained for Batch A-9."
                        >
                            <div className="relative w-full h-10 mt-auto">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 25">
                                    <path d="M0,25 Q25,10 50,15 T100,5" fill="none" stroke="#d32f2f" strokeLinecap="round" strokeWidth="3"></path>
                                </svg>
                            </div>
                        </StatsCard>

                        {/* Card 3: Active Shipments */}
                        <StatsCard
                            title="Active Shipments"
                            value="1,240"
                            trend="+5%"
                            trendUp={true}
                            icon="local_shipping"
                            color="purple"
                            confidence="98%"
                            insight="Dynamic routing saved 14h on Asia-Pacific lanes."
                        >
                            <div className="w-full flex-col flex gap-1 mt-auto">
                                <div className="w-full bg-slate-200 rounded-full h-1.5">
                                    <div className="bg-brand-purple h-1.5 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                                <p className="text-xs text-slate-500 font-medium">12 pending departure</p>
                            </div>
                        </StatsCard>

                        {/* Card 4: On-Time Delivery */}
                        <StatsCard
                            title="On-Time Delivery"
                            value="98.5%"
                            trend="+0.8%"
                            trendUp={true}
                            icon="schedule"
                            color="red"
                            confidence="95%"
                            insight="Typhoon alert cleared; North Sea route optimal."
                        >
                            <div className="flex gap-1 mt-auto w-full items-end">
                                <div className="h-1.5 flex-1 rounded-full bg-brand-red"></div>
                                <div className="h-1.5 flex-1 rounded-full bg-brand-red"></div>
                                <div className="h-1.5 flex-1 rounded-full bg-brand-red"></div>
                                <div className="h-1.5 flex-1 rounded-full bg-red-200"></div>
                            </div>
                        </StatsCard>

                    </div>
                </div>

                {/* Strategic Action */}
                <div className="flex flex-col gap-8">
                    <h3 className="text-2xl font-extrabold tracking-widest uppercase text-slate-800 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-brand-purple to-purple-600 rounded-full"></span>
                        Strategic Action
                    </h3>
                    <div className="rounded-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8 group z-10 p-10 md:p-12 shadow-2xl shadow-purple-900/10 border border-purple-200 bg-gradient-to-br from-[#4a0404] via-[#581c87] to-[#451a03]">
                        <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none transition-all duration-700"></div>
                        <div className="flex-shrink-0 relative">
                            <div className="size-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                                <span className="material-symbols-outlined text-4xl text-white">auto_awesome</span>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-white font-bold text-2xl tracking-tight">Strategic Recommendation</h4>
                                <span className="px-2.5 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-wider shadow-sm">Urgent Action</span>
                            </div>
                            <p className="text-slate-100 text-xl leading-relaxed max-w-4xl font-medium">
                                The system suggests reallocating <span className="text-white font-bold decoration-amber-400/80 underline decoration-2 underline-offset-4">15% of Titan White pigment</span> from Mumbai Hub to New York to prevent an out-of-stock event in <span className="text-white font-bold border-b-2 border-red-400">72h</span>.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-100 text-sm font-semibold transition-colors border border-white/20">Dismiss</button>
                            <button className="flex-1 md:flex-none px-8 py-3.5 rounded-lg bg-gradient-to-r from-brand-red via-brand-purple to-brand-yellow hover:from-red-800 hover:to-yellow-700 text-white text-sm font-bold shadow-lg shadow-purple-900/30 transition-all flex items-center justify-center gap-2 border border-white/20">
                                <span className="material-symbols-outlined text-[20px]">bolt</span>
                                Apply Reallocation
                            </button>
                        </div>
                    </div>
                </div>

                {/* Global Network (Placeholder for now, simplified) */}
                <div className="flex flex-col flex-1 min-h-[500px] gap-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h3 className="text-2xl font-extrabold tracking-widest uppercase text-slate-800 flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-gradient-to-b from-brand-yellow to-yellow-600 rounded-full"></span>
                            Global Network
                        </h3>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200">Export Data</button>
                            <button className="px-4 py-2 rounded-lg text-xs font-medium bg-brand-red hover:bg-red-700 text-white transition-colors shadow-lg shadow-red-500/20">Add Route</button>
                        </div>
                    </div>
                    {/* Map Container */}
                    <div className="flex-1 rounded-2xl overflow-hidden border border-slate-200 relative bg-[#f0f9ff] shadow-xl shadow-slate-200 min-h-[400px] flex items-center justify-center">
                        {/*  Using the image from HTML but it might fail if weird URL. */}
                        <div className="absolute inset-0 bg-cover bg-center opacity-30 invert filter contrast-125 saturate-50" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvaqqOuRh1dTPHlf42X5obh46IbDI3_SHuct8JC7_EX1WirKZOl5q1dXiN8qK5M3fOO5EGDItKFBzggME-Z9N7a20xPYX3zgTfnlIim9dsxsYKW139CjR7WaqyGDwdYL2hLoEt8Wq1cxyJUaB21KiXxpHQ5lFw2ebVKIGvKGjDMSBk_P6N39TCzArilBr4WVxXRy1ak7ShlUXV5bT8141FGjiFFcioXw5ImKrF18F2CApLXtrnFgPC5bSdksdCGuQm46TKLkA5ERY")' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>

                        <div className="relative z-10 text-center p-10">
                            <p className="text-slate-500 font-medium">Interactive Map View</p>
                        </div>
                    </div>
                    <footer className="mt-8 text-center text-slate-400 text-xs py-4">
                        © 2023 Modern Colours Pvt. Ltd. Internal Logistics System v2.4.1
                    </footer>
                </div>

            </div>
        </div>
    );
}
