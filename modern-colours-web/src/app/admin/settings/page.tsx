import React from 'react';
import Link from 'next/link';

export default function AdminSettingsPage() {
    return (
        <div className="max-w-4xl mx-auto p-8 animate-fade-in">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Settings</h1>
                <p className="text-slate-500">Manage your account and application preferences</p>
            </div>

            <div className="space-y-6">
                {/* Profile Section */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Profile</h3>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                            AM
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-white">Alex Morgan</p>
                            <p className="text-sm text-slate-500">Supply Chain Director</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                            <input type="text" defaultValue="Alex Morgan" className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input type="email" defaultValue="alex.morgan@moderncolours.com" className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white" />
                        </div>
                    </div>
                </div>

                {/* Notifications Section */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Notifications</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-slate-900 dark:text-white">Email Notifications</p>
                                <p className="text-sm text-slate-500">Receive order updates via email</p>
                            </div>
                            <button className="w-12 h-6 bg-brand-red rounded-full relative">
                                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-slate-900 dark:text-white">Push Notifications</p>
                                <p className="text-sm text-slate-500">Get real-time alerts</p>
                            </div>
                            <button className="w-12 h-6 bg-brand-red rounded-full relative">
                                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Security Section */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Security</h3>
                    <div className="space-y-4">
                        <button className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between">
                            <span className="font-medium text-slate-900 dark:text-white">Change Password</span>
                            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                        </button>
                        <button className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between">
                            <span className="font-medium text-slate-900 dark:text-white">Two-Factor Authentication</span>
                            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-between">
                <Link href="/admin/dashboard" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors">
                    Back to Dashboard
                </Link>
                <button className="px-6 py-3 bg-brand-red hover:bg-red-700 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-red-500/20">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
