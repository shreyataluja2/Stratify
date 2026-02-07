'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'admin' | 'dealer'>('admin');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate login - in production, this would call an auth API
        setTimeout(() => {
            if (role === 'admin') {
                router.push('/admin/dashboard');
            } else {
                router.push('/dealer/dashboard');
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-purple via-[#5c0eb0] to-[#191022] flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-12">
                    <div className="size-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <span className="material-symbols-outlined text-white text-3xl">format_paint</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Modern Colours</h1>
                </div>

                {/* Login Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 animate-scale-in">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Welcome Back</h2>
                        <p className="text-slate-500">Sign in to access your dashboard</p>
                    </div>

                    {/* Role Toggle */}
                    <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-6">
                        <button
                            type="button"
                            onClick={() => setRole('admin')}
                            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${role === 'admin'
                                    ? 'bg-white dark:bg-slate-700 text-brand-purple shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Admin Portal
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole('dealer')}
                            className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${role === 'dealer'
                                    ? 'bg-white dark:bg-slate-700 text-brand-red shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Dealer Portal
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-purple transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-11 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all placeholder:text-slate-400 dark:text-white"
                                    placeholder="you@company.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                                <Link href="/reset-password" className="text-xs font-semibold text-brand-purple hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-purple transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">lock</span>
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all placeholder:text-slate-400 dark:text-white"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                className="rounded border-slate-300 text-brand-purple focus:ring-brand-purple"
                            />
                            <label htmlFor="remember" className="text-sm text-slate-600 dark:text-slate-400">
                                Keep me signed in
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all ${role === 'admin'
                                    ? 'bg-brand-purple hover:bg-[#6b10c7] shadow-brand-purple/25'
                                    : 'bg-brand-red hover:bg-red-600 shadow-brand-red/25'
                                } ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 active:translate-y-0'}`}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                    Signing in...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {role === 'dealer' && (
                        <p className="text-center text-sm text-slate-500 mt-6">
                            New dealer?{' '}
                            <Link href="/register/dealer" className="font-semibold text-brand-red hover:underline">
                                Apply for partnership
                            </Link>
                        </p>
                    )}
                </div>

                <p className="text-center text-xs text-white/50 mt-8">
                    © 2024 Modern Colours Pvt. Ltd. All rights reserved.
                </p>
            </div>
        </div>
    );
}
