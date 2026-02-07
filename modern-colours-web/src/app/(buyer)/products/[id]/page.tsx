'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// Sample product data
const products: Record<string, {
    name: string;
    price: number;
    category: string;
    rating: number;
    reviews: number;
    description: string;
    color: string;
    colorHex: string;
    image: string;
    similarShades: { name: string; hex: string }[];
}> = {
    '1': {
        name: 'Velvet Matte - Crimson Sky',
        price: 45.00,
        category: 'Premium Matte',
        rating: 4.8,
        reviews: 124,
        description: 'A deep, sophisticated red that evokes the warmth of a sunset. Our Velvet Matte finish offers a rich, non-reflective surface that perfectly hides wall imperfections for a flawless finish.',
        color: 'Crimson Red',
        colorHex: '#dc143c',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        similarShades: [
            { name: 'Deep Maroon', hex: '#8b0000' },
            { name: 'Rust Orange', hex: '#ff4500' },
            { name: 'Bright Red', hex: '#dc143c' },
            { name: 'Fire Brick', hex: '#b22222' },
            { name: 'Indian Red', hex: '#cd5c5c' },
        ]
    },
    '2': {
        name: 'Royal Ivory - Pearl White',
        price: 38.00,
        category: 'Satin Finish',
        rating: 4.8,
        reviews: 89,
        description: 'A timeless, elegant white with subtle pearl undertones.',
        color: 'Pearl White',
        colorHex: '#f5f5f5',
        image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?w=800',
        similarShades: [
            { name: 'Snow White', hex: '#fffafa' },
            { name: 'Cream', hex: '#fffdd0' },
            { name: 'Ivory', hex: '#fffff0' },
            { name: 'Linen', hex: '#faf0e6' },
            { name: 'Seashell', hex: '#fff5ee' },
        ]
    }
};

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const productId = params.id as string;
    const product = products[productId] || products['1'];

    const [selectedSize, setSelectedSize] = useState('1');
    const [width, setWidth] = useState('12');
    const [height, setHeight] = useState('8');
    const [isFavorite, setIsFavorite] = useState(false);

    const calculateCoverage = () => {
        if (!width || !height) return '~1.5 Liters';
        const area = parseFloat(width) * parseFloat(height);
        const liters = (area / 100 * 1.5).toFixed(1);
        return `~${liters} Liters`;
    };

    const handleAddToCart = () => {
        router.push('/cart');
    };

    return (
        <div className="bg-[#f8f6f6] min-h-screen">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
                <Link href="/products" className="p-1">
                    <span className="material-symbols-outlined text-gray-700">arrow_back</span>
                </Link>
                <div className="text-center">
                    <p className="text-[10px] text-gray-500 font-medium">Modern</p>
                    <p className="text-xs font-bold text-[#181111]">Colours</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1">
                        <span className="material-symbols-outlined text-gray-700 text-xl">search</span>
                    </button>
                    <Link href="/cart" className="p-1">
                        <span className="material-symbols-outlined text-gray-700 text-xl">shopping_bag</span>
                    </Link>
                </div>
            </header>

            {/* Product Image with Color Visualization */}
            <div className="relative">
                <div
                    className="w-full aspect-[4/3] bg-cover bg-center"
                    style={{ backgroundColor: product.colorHex }}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xs flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    Color Visualization
                </button>
            </div>

            {/* Similar Shades */}
            <div className="px-4 py-4 bg-white">
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-3">Similar Shades</p>
                <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                    {product.similarShades.map((shade, i) => (
                        <div key={i} className="flex flex-col items-center shrink-0">
                            <div
                                className="size-12 rounded-full shadow-md border-2 border-white"
                                style={{ backgroundColor: shade.hex }}
                            />
                            <span className="text-[10px] text-gray-600 mt-1.5 text-center max-w-[60px] truncate">{shade.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Info */}
            <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold">{product.category}</span>
                    <span className="text-[10px] text-gray-400">•</span>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-xs font-medium">{product.rating}</span>
                        <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                    </div>
                </div>
                <h1 className="text-xl font-bold text-[#181111] mb-2">{product.name}</h1>
                <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-[#181111]">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500">/ Gallon</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="px-4 py-4 bg-white">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">Select Size</p>
                <div className="flex gap-3">
                    <button
                        onClick={() => setSelectedSize('1')}
                        className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${selectedSize === '1'
                                ? 'border-primary bg-primary/5 text-primary'
                                : 'border-gray-200 text-gray-600'
                            }`}
                    >
                        <span className="block text-lg font-bold">1</span>
                        <span className="text-[10px] uppercase">Gallon</span>
                    </button>
                    <button
                        onClick={() => setSelectedSize('3')}
                        className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${selectedSize === '3'
                                ? 'border-primary bg-primary/5 text-primary'
                                : 'border-gray-200 text-gray-600'
                            }`}
                    >
                        <span className="block text-lg font-bold">3</span>
                        <span className="text-[10px] uppercase">Gallons</span>
                    </button>
                    <button
                        onClick={() => setSelectedSize('sample')}
                        className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${selectedSize === 'sample'
                                ? 'border-primary bg-primary/5 text-primary'
                                : 'border-gray-200 text-gray-600'
                            }`}
                    >
                        <span className="material-symbols-outlined text-lg">colorize</span>
                        <span className="block text-[10px] uppercase">Sample</span>
                    </button>
                </div>
            </div>

            {/* Coverage Calculator */}
            <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary text-lg">calculate</span>
                    <p className="text-xs uppercase tracking-wider text-gray-700 font-semibold">Coverage Calculator</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="text-[10px] uppercase text-gray-500 block mb-1">Width (ft)</label>
                            <input
                                type="number"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                className="w-full bg-gray-50 rounded-lg px-3 py-2 text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-[10px] uppercase text-gray-500 block mb-1">Height (ft)</label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="w-full bg-gray-50 rounded-lg px-3 py-2 text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                        <span className="text-sm text-gray-600">Estimated Need:</span>
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">{calculateCoverage()}</span>
                    </div>
                </div>
            </div>

            {/* Find Dealers */}
            <div className="px-4 py-4">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-xs uppercase tracking-wider text-gray-700 font-semibold">Find Dealers Near You</p>
                    <Link href="/dealers" className="text-primary text-xs font-semibold">View Map</Link>
                </div>
                <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 border-2 border-primary">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="font-bold text-[#181111] text-sm">Modern Paints & Co.</h4>
                                <p className="text-xs text-gray-500 mt-0.5">2.4 miles away • Open until 8PM</p>
                            </div>
                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">IN STOCK</span>
                        </div>
                        <button className="mt-3 flex items-center gap-1 text-primary text-xs font-semibold">
                            <span className="material-symbols-outlined text-sm">directions</span>
                            Get Directions
                        </button>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="font-bold text-[#181111] text-sm">The Color Studio</h4>
                                <p className="text-xs text-gray-500 mt-0.5">3.1 miles away • Open until 6PM</p>
                            </div>
                            <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded">LOW STOCK</span>
                        </div>
                        <button className="mt-3 flex items-center gap-1 text-gray-600 text-xs font-semibold">
                            <span className="material-symbols-outlined text-sm">directions</span>
                            Get Directions
                        </button>
                    </div>
                </div>
            </div>

            {/* Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 flex items-center gap-4 z-50">
                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="size-12 rounded-xl border border-gray-200 flex items-center justify-center"
                >
                    <span
                        className={`material-symbols-outlined ${isFavorite ? 'text-primary' : 'text-gray-400'}`}
                        style={isFavorite ? { fontVariationSettings: "'FILL' 1" } : {}}
                    >
                        favorite
                    </span>
                </button>
                <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                    <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                    Add to Cart
                </button>
            </div>

            {/* Footer */}
            <div className="px-4 py-6 pb-24 text-center">
                <p className="text-[10px] text-gray-400">© 2024 Modern Colours. All rights reserved.</p>
            </div>
        </div>
    );
}
