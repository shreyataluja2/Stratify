'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Sample color products matching the screenshot
const colorProducts = [
    {
        id: '1',
        name: 'Sunset Orange',
        code: 'SC-402',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop',
    },
    {
        id: '2',
        name: 'Velvet Rose',
        code: 'VR-55',
        price: 51.00,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop',
    },
    {
        id: '3',
        name: 'Terracotta',
        code: 'TC-205',
        price: 48.00,
        image: 'https://images.unsplash.com/photo-1558618047-f4b511a880d3?w=400&h=500&fit=crop',
    },
    {
        id: '4',
        name: 'Forest Green',
        code: 'FG-301',
        price: 42.00,
        image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=500&fit=crop',
    },
    {
        id: '5',
        name: 'Ocean Blue',
        code: 'OB-128',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1558051815-0f18e64e6280?w=400&h=500&fit=crop',
    },
    {
        id: '6',
        name: 'Sage Mist',
        code: 'SM-112',
        price: 39.00,
        image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=500&fit=crop',
    },
];

const colorCategories = ['All', 'Red', 'Green', 'Yellow', 'Neutral', 'Blue'];

export default function ColorExplorerPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [favorites, setFavorites] = useState<Set<string>>(new Set(['1', '2']));

    const toggleFavorite = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setFavorites(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    return (
        <div className="bg-[#f8f6f6] min-h-screen">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white px-4 py-3 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <button className="p-1">
                        <span className="material-symbols-outlined text-gray-700">menu</span>
                    </button>
                    <h1 className="text-base font-bold text-[#181111]">Color Explorer</h1>
                    <button className="p-1">
                        <span className="material-symbols-outlined text-gray-700">notifications</span>
                    </button>
                </div>
            </header>

            {/* Search Bar */}
            <div className="px-4 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-200">
                        <span className="material-symbols-outlined text-gray-400 text-xl">search</span>
                        <input
                            type="text"
                            placeholder="Search color name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-sm text-[#181111] placeholder:text-gray-400"
                        />
                    </div>
                    <button className="bg-primary text-white p-3 rounded-xl shrink-0">
                        <span className="material-symbols-outlined text-xl">tune</span>
                    </button>
                </div>
                <p className="text-primary text-xs mt-2 px-1">
                    Try Visual AI: Upload a photo to match colors
                </p>
            </div>

            {/* Category Pills */}
            <div className="px-4 pb-4">
                <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                    {colorCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                    ? 'bg-[#181111] text-white'
                                    : 'bg-white text-[#181111] border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="px-4 pb-24">
                <div className="grid grid-cols-2 gap-4">
                    {colorProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm"
                        >
                            <div className="relative aspect-[4/5]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={(e) => toggleFavorite(product.id, e)}
                                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md"
                                >
                                    <span
                                        className={`material-symbols-outlined text-lg ${favorites.has(product.id) ? 'text-primary' : 'text-gray-300'}`}
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        favorite
                                    </span>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-[#181111] text-sm mb-1">{product.name}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-400 text-xs">{product.code}</span>
                                    <span className="text-primary font-bold text-sm">${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 flex justify-around items-center z-50">
                <Link href="/colors" className="flex flex-col items-center gap-1 py-1 px-3 text-primary">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
                    <span className="text-[10px] font-bold">Explore</span>
                </Link>
                <Link href="/favorites" className="flex flex-col items-center gap-1 py-1 px-3 text-gray-400">
                    <span className="material-symbols-outlined text-2xl">favorite</span>
                    <span className="text-[10px] font-medium">My Colors</span>
                </Link>
                <Link href="/products" className="flex flex-col items-center gap-1 py-1 px-3 text-gray-400">
                    <span className="material-symbols-outlined text-2xl">storefront</span>
                    <span className="text-[10px] font-medium">Shop</span>
                </Link>
                <Link href="/profile" className="flex flex-col items-center gap-1 py-1 px-3 text-gray-400">
                    <span className="material-symbols-outlined text-2xl">person</span>
                    <span className="text-[10px] font-medium">Profile</span>
                </Link>
            </div>
        </div>
    );
}
