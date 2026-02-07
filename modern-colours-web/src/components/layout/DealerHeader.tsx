
import React from 'react';

export function DealerHeader() {
    return (
        <header className="h-[72px] bg-white/80 backdrop-blur-md dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800 px-8 flex items-center justify-between shrink-0">
            <div className="max-w-md w-full relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl h-10 pl-11 pr-4 text-sm font-medium focus:ring-2 focus:ring-brand-red/20 transition-all outline-none" placeholder="Search paints, codes, or tools..." type="text" />
            </div>
            <div className="flex items-center gap-4">
                <button className="size-10 flex items-center justify-center rounded-full bg-slate-100/50 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700 relative">
                    <span className="material-symbols-outlined text-[22px] text-slate-600 dark:text-slate-300">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-brand-red rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-slate-200/60 dark:border-slate-800">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">Rajesh Traders</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase mt-1">Diamond Dealer</p>
                    </div>
                    <div className="size-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-brand-red/10">
                        <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApbSj08gb4QFXOHA6L06buNEo0YS3aulfoeVdMwJ9xHHKM0d1lus1RqegjEwpvCW1zBQMuArGOk5OUZ1Ie6cu_ZzIZe9VVBOZcDU4NPscV83JPTUF_yKjyrhImqz66UOxWTw1UuyyGutpMW0r5pVg02D5TjWLQbq3xVSvCenubGGJvtZ9jAUD4uQePfnPboP8eNdy2u6-dpIcBT4quZYkewZhNQeFxPSfnXoYcC3ILQfIbYdp6_0eZrBeN5x3boUvo_yducQxiR4sJ" />
                    </div>
                </div>
            </div>
        </header>
    );
}
