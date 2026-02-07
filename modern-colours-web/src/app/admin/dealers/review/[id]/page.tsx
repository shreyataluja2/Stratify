
import React from 'react';
import Link from 'next/link';

export default function DealerReviewPage() {
    return (
        <div className="max-w-[1280px] mx-auto px-6 py-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                <Link className="hover:text-purple-700" href="/admin">Admin Central</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <Link className="hover:text-purple-700" href="/admin/dealers">Dealer Onboarding</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-slate-900 font-medium">Review Application</span>
            </div>

            {/* Page Header & Main Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <div className="flex gap-5">
                    <div className="size-20 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 overflow-hidden shrink-0">
                        <img className="w-full h-full object-cover" alt="Business Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHihgLoJfUFu1gapZAZ5Sg80zGAqp5NyFAJwHgDrTDqiOxTNJalXbuvHVFJM_-4cmSpcvAHGx_Nv9Ldk1sKjh6B4DESkvmz4u98aAH1m2NaswFGYA2TIj9TkO8XJ8iMavqHH4JCSyHgT6jkQYZAokFgPritafnv_72IylwVN8XZEC6isid1Hhj7Xpng1C8ILuE1i7fyfgya0n3eKX-MYMjVkFBAbXdhjoh8USGgLCOmH0SQw6kAAL5VnzyUzW4RClBu4fbwfMfm60" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900">Aravind Paints & Decor</h2>
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">Under Review</span>
                        </div>
                        <p className="text-slate-500 text-sm flex items-center gap-4">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">fingerprint</span> DEALER-2023-0891</span>
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_today</span> Applied: Oct 24, 2023</span>
                        </p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-red-500 text-red-500 hover:bg-red-50 hover:text-red-700 transition-all font-bold rounded-lg text-sm">
                        <span className="material-symbols-outlined text-lg">flag</span>
                        Reject / Flag
                    </button>
                    <button className="flex items-center gap-2 px-8 py-2.5 bg-green-600 text-white hover:bg-green-700 transition-all font-bold rounded-lg text-sm shadow-lg shadow-green-500/20">
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                        Approve Dealer
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Business Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Section: Business Identity */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="w-full flex items-center justify-between p-5 bg-slate-50/50 border-b border-slate-200">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-purple-700">badge</span>
                                <span className="font-bold text-slate-900">Business Identity</span>
                            </div>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Legal Name</p>
                                <p className="text-slate-900 font-medium">Aravind Paints & Decor Pvt Ltd</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">GSTIN Number</p>
                                <p className="text-slate-900 font-medium">29AAAAA0000A1Z5</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Permanent Account Number (PAN)</p>
                                <p className="text-slate-900 font-medium">ABCDE1234F</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Business Type</p>
                                <p className="text-slate-900 font-medium">Proprietorship</p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Address Details */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="w-full flex items-center justify-between p-5 bg-slate-50/50 border-b border-slate-200">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-purple-700">location_on</span>
                                <span className="font-bold text-slate-900">Address Details</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Registered Office</p>
                                    <p className="text-slate-900 text-sm leading-relaxed">
                                        No. 42, 1st Main Road, Industrial Estate,<br />
                                        Rajajinagar, Bengaluru, Karnataka 560010
                                    </p>
                                </div>
                                <div className="w-full md:w-48 h-32 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative">
                                    <img className="w-full h-full object-cover" alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh2YO2oEk3u544Z-5045L0CcNINBPs0iuNIi9lwTmOjoGx4mwjBacnZumTCghqSfjYriGik-0HLKPI5W7CfGLmAWBiMRal7-uQNc8NyrP3EcmIQuujy5D4Ba8E1QvBrRC91WsfMs2A1i4GITFwN9aXmHZNfqctiPe1YAVYSm9QSvUXwrVg3u7Y58U9yKMzbaQqbQBtu9RhOMzSDKsIVuGh9VO48PSB7iaxYINngXCIe2j3ZYl9iBPaUFLaexqGKKo5Vc9_p0JfvBg" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                        <span className="material-symbols-outlined text-purple-700 text-3xl drop-shadow-lg">location_on</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Credit Assessment */}
                    <div className="bg-purple-50 rounded-xl border-2 border-purple-100 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-purple-700 text-2xl">payments</span>
                            <h3 className="text-lg font-bold text-slate-900">Credit Assessment</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Approved Credit Limit (INR)</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                                    <input className="w-full pl-8 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-purple-700 focus:border-purple-700 font-bold text-lg outline-none" type="number" defaultValue="500000" />
                                </div>
                                <p className="text-xs text-slate-500 italic">Recommended limit based on GST filing: ₹4,50,000</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Payment Terms</label>
                                <select className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-purple-700 focus:border-purple-700 font-medium outline-none">
                                    <option>Net 30 Days</option>
                                    <option>Net 45 Days</option>
                                    <option>Net 60 Days</option>
                                    <option>Cash on Delivery</option>
                                </select>
                                <p className="text-xs text-slate-500 italic">Default for new dealers is Net 30 Days</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Documents */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 h-full flex flex-col shadow-sm">
                        <div className="p-5 border-b border-slate-200">
                            <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                <span className="material-symbols-outlined text-purple-700">description</span>
                                Document Verification
                            </h3>
                        </div>
                        <div className="p-5 space-y-4 flex-grow overflow-y-auto">
                            {/* Document 1 */}
                            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-red-100 text-red-600 flex items-center justify-center rounded">
                                            <span className="material-symbols-outlined">picture_as_pdf</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">GST Certificate</p>
                                            <p className="text-xs text-slate-500">Uploaded 3 days ago</p>
                                        </div>
                                    </div>
                                    <button className="text-purple-700 hover:underline text-xs font-bold">VIEW</button>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                                    <span className="text-xs font-semibold text-slate-500">Status</span>
                                    <div className="flex items-center gap-2">
                                        <button className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 hover:border-red-500 hover:text-red-500">REJECT</button>
                                        <button className="px-3 py-1 bg-green-600 text-white rounded text-[10px] font-bold">VERIFIED</button>
                                    </div>
                                </div>
                            </div>
                            {/* Document 2 */}
                            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-red-100 text-red-600 flex items-center justify-center rounded">
                                            <span className="material-symbols-outlined">picture_as_pdf</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">PAN Card</p>
                                            <p className="text-xs text-slate-500">Uploaded 3 days ago</p>
                                        </div>
                                    </div>
                                    <button className="text-purple-700 hover:underline text-xs font-bold">VIEW</button>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                                    <span className="text-xs font-semibold text-slate-500">Status</span>
                                    <div className="flex items-center gap-2">
                                        <button className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 hover:border-red-500 hover:text-red-500">REJECT</button>
                                        <button className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 hover:border-green-600 hover:text-green-600">VERIFY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
