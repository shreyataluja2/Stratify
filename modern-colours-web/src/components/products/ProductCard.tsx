
import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
    title: string;
    category: string;
    sku: string;
    finish: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    image: string;
    stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
    stockColor?: 'green' | 'orange' | 'red' | 'gray'; // override if needed
    productId?: string; // Optional - for navigation
}

export function ProductCard({
    title,
    category,
    sku,
    finish,
    price,
    originalPrice,
    discount,
    image,
    stockStatus,
    productId = '1',
}: ProductCardProps) {
    const isOutOfStock = stockStatus === 'Out of Stock';

    const getStockBadgeColor = () => {
        if (stockStatus === 'In Stock') return 'bg-green-500';
        if (stockStatus === 'Low Stock') return 'bg-orange-500';
        return 'bg-slate-900'; // Out of stock default
    };

    return (
        <Link href={`/products/${productId}`} className={`flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group ${isOutOfStock ? 'opacity-70' : ''}`}>
            <div className={`relative w-full aspect-video bg-center bg-no-repeat bg-cover ${isOutOfStock ? 'grayscale' : ''}`} style={{ backgroundImage: `url("${image}")` }}>
                {!isOutOfStock && (
                    <div className={`absolute top-4 left-4 ${getStockBadgeColor()} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm`}>
                        {stockStatus}
                    </div>
                )}
                {isOutOfStock && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-white/90 text-black px-5 py-2 rounded-lg font-bold text-xs tracking-[0.2em] shadow-lg">OUT OF STOCK</span>
                    </div>
                )}

                <button className="absolute top-4 right-4 bg-white/90 dark:bg-black/50 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-brand-red text-[22px] selected">favorite</span>
                </button>
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.1em]">{category}</p>
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight mt-1">{title}</h3>
                </div>

                <div className="flex flex-col text-sm text-slate-600 dark:text-slate-300">
                    <p>SKU: {sku} • <span className="font-medium text-slate-900 dark:text-white">Finish: {finish}</span></p>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">₹{price.toLocaleString()}</p>
                    {originalPrice && (
                        <p className="text-sm text-slate-400 line-through">₹{originalPrice.toLocaleString()}</p>
                    )}
                    {discount && (
                        <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">{discount} OFF</span>
                    )}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    {!isOutOfStock ? (
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 shrink-0 bg-slate-50 dark:bg-slate-800 rounded-lg p-1">
                                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-slate-700 shadow-sm active:scale-95 transition-transform">
                                    <span className="material-symbols-outlined text-[18px]">remove</span>
                                </button>
                                <input className="w-8 text-center bg-transparent font-bold text-base focus:ring-0 border-none p-0 appearance-none" type="number" defaultValue="1" />
                                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-slate-700 shadow-sm active:scale-95 transition-transform">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                </button>
                            </div>
                            <button className="flex-1 bg-brand-red hover:bg-red-700 text-white h-11 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20 transition-all">
                                <span className="material-symbols-outlined text-[18px]">shopping_basket</span>
                                <span>Add to Order</span>
                            </button>
                        </div>
                    ) : (
                        <button className="w-full border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 h-11 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">notifications</span>
                            <span>Notify Me When Available</span>
                        </button>
                    )}
                </div>
            </div>
        </Link>
    );
}
