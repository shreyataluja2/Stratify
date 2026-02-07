
import React from 'react';

export default function BuyerTrackingPage() {
    return (
        <div className="max-w-4xl w-full mx-auto px-6 py-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Track Order</h1>
            </div>

            {/* Order Details Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">Order Details</p>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white">#MC-88219</h3>
                    <div className="flex items-center gap-4 mt-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-full">In Transit</span>
                        <p className="text-brand-red font-bold text-xl">$145.00</p>
                    </div>
                </div>
                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-inner hidden md:block border border-slate-100 dark:border-slate-800">
                    <img alt="Order Items" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeK_v-aSTaszs1BEnrWyu1z2iu7OLS2mOuHY6e82XAdhMAKsNMvbL57vIbX7kNTEwVCYgI9QpXYdM8E5F1lkyJjey5as4NL3J3NQXxvLM-yEeR9OrHJSD2tSIwI4g_kPF8mrBpeZOCIgLcv2lISjyc-JLqZzIrJqV4-slZ6mK4xxsatqpinOeflvbquPznW9eRiOOIhOImPoIe0vN4olNoskhY_NcQyojTBpD4ritGWqxDN2MdGW_leAh2rD9OR7AZhQJIye5I0yIq" />
                </div>
            </div>

            {/* Delivery Progress */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
                <h4 className="text-lg font-bold mb-10 text-slate-900 dark:text-white">Delivery Progress</h4>
                <div className="relative ml-4">
                    {/* Step 1 */}
                    <div className="flex gap-6 mb-12">
                        <div className="relative flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white z-10 shadow-lg shadow-brand-red/20">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <div className="absolute top-8 w-0.5 h-12 bg-brand-red"></div>
                        </div>
                        <div>
                            <p className="font-bold text-lg text-slate-900 dark:text-white">Order Placed</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Oct 12, 2023 • 09:00 AM</p>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex gap-6 mb-12">
                        <div className="relative flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white z-10 shadow-lg shadow-brand-red/20">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <div className="absolute top-8 w-0.5 h-12 bg-brand-red"></div>
                        </div>
                        <div>
                            <p className="font-bold text-lg text-slate-900 dark:text-white">Confirmed</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Oct 12, 2023 • 10:30 AM</p>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex gap-6 mb-12">
                        <div className="relative flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white z-10 shadow-lg shadow-brand-red/20">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <div className="absolute top-8 w-0.5 h-12 bg-brand-red"></div>
                        </div>
                        <div>
                            <p className="font-bold text-lg text-slate-900 dark:text-white">Packed</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Oct 13, 2023 • 08:15 AM</p>
                        </div>
                    </div>
                    {/* Step 4 (Active) */}
                    <div className="flex gap-6 mb-12">
                        <div className="relative flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white z-10 animate-pulse shadow-lg shadow-brand-red/20">
                                <span className="material-symbols-outlined text-sm">local_shipping</span>
                            </div>
                            <div className="absolute top-8 w-0.5 h-12 bg-slate-200 dark:bg-slate-800"></div>
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <p className="font-bold text-lg text-slate-900 dark:text-white">Out for Delivery</p>
                                <span className="px-2 py-0.5 bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase rounded-full">Active</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Expected by 2:00 PM today</p>
                            <p className="text-brand-red font-bold mt-1">Courier is 2 stops away</p>
                        </div>
                    </div>
                    {/* Step 5 */}
                    <div className="flex gap-6">
                        <div className="relative flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-300 z-10">
                                <span className="material-symbols-outlined text-sm">home</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-lg text-slate-400">Delivered</p>
                            <p className="text-slate-400 text-sm">Pending</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <button className="flex-1 w-full h-12 bg-brand-red hover:bg-red-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-red/20 text-sm">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>Call Dealer</span>
                </button>
                <button className="flex-1 w-full h-12 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all border border-slate-200 dark:border-slate-700 text-sm">
                    <span className="material-symbols-outlined text-[18px]">help_outline</span>
                    <span>Get Help</span>
                </button>
            </div>

            <div className="mt-8 text-center">
                <p className="text-slate-400 text-sm">Need more details about your delivery? <a className="text-brand-red font-bold hover:underline" href="#">Chat with us</a></p>
            </div>
        </div>
    );
}
