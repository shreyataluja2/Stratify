
import React from 'react';

interface StatsCardProps {
    title: string;
    value: string;
    trend: string;
    trendUp?: boolean;
    icon: string;
    color: 'red' | 'purple' | 'yellow';
    confidence: string;
    insight: string;
    children?: React.ReactNode;
}

export function StatsCard({ title, value, trend, trendUp, icon, color, confidence, insight, children }: StatsCardProps) {
    const colorMap = {
        red: {
            bg: 'bg-red-50',
            text: 'text-brand-red',
            border: 'border-red-100',
            bar: 'bg-brand-red',
            grad: 'from-brand-red',
            insightIcon: 'text-brand-red',
            token: '#d32f2f'
        },
        purple: {
            bg: 'bg-purple-50',
            text: 'text-brand-purple',
            border: 'border-purple-100',
            bar: 'bg-brand-purple',
            grad: 'from-brand-purple',
            insightIcon: 'text-brand-purple',
            token: '#8e24aa'
        },
        yellow: {
            bg: 'bg-yellow-50',
            text: 'text-brand-yellow',
            border: 'border-yellow-100',
            bar: 'bg-brand-yellow',
            grad: 'from-brand-yellow',
            insightIcon: 'text-brand-yellow',
            token: '#fbc02d'
        }
    };

    const c = colorMap[color];

    return (
        <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className={`absolute top-0 left-0 w-full h-1 ${c.bar}`}></div>
            <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${c.bg} ${c.text} border ${c.border}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 border ${c.bg} ${c.text} ${c.border}`}>
                        <span className="material-symbols-outlined text-[14px]">{trendUp ? 'trending_up' : 'trending_down'}</span> {trend}
                    </span>
                    <div className="flex items-center gap-1 mt-1 text-slate-400">
                        <span className="material-symbols-outlined text-[10px]">auto_awesome</span>
                        <span className="text-[10px] font-medium">{confidence} confidence</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <p className="text-slate-600 text-sm font-semibold">{title}</p>
                    {/* Optional Badge slot or hardcoded for now if needed */}
                </div>
                <h3 className="text-slate-900 text-3xl font-bold tracking-tight">{value}</h3>
            </div>

            {/* Visualization Slot */}
            <div className="flex-1 min-h-[40px] flex items-end">
                {children}
            </div>

            <div className="mt-2 pt-3 border-t border-slate-200 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 mb-1">
                    <span className={`material-symbols-outlined text-[14px] ${c.insightIcon}`}>auto_awesome</span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${c.insightIcon}`}>SYSTEM INSIGHT</span>
                </div>
                <p className="text-xs text-slate-700 font-medium">{insight}</p>
            </div>
        </div>
    );
}
