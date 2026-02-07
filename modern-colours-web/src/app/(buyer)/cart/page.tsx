'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
    const router = useRouter();
    const [selectedDealer, setSelectedDealer] = useState('metro');
    const [fulfillmentMethod, setFulfillmentMethod] = useState('delivery');
    const [isOrdering, setIsOrdering] = useState(false);

    const [items] = useState([
        {
            id: 1,
            name: 'Midnight Sky - Matte',
            description: 'Premium Interior Finish • 5L Container',
            price: 85.00,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100',
        },
        {
            id: 2,
            name: 'Cotton Cloud - Satin',
            description: 'High Durability • 1L Container',
            price: 32.00,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?w=100',
        },
    ]);

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = fulfillmentMethod === 'delivery' ? 0 : 0;
    const salesTax = 0;
    const total = subtotal + deliveryFee + salesTax;

    const handlePlaceOrder = () => {
        setIsOrdering(true);
        setTimeout(() => {
            router.push('/orders/track');
        }, 1500);
    };

    return (
        <div className="bg-[#f8f6f6] min-h-screen">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white px-4 py-3 flex items-center border-b border-gray-100">
                <Link href="/products" className="p-1 -ml-1">
                    <span className="material-symbols-outlined text-gray-700">arrow_back</span>
                </Link>
                <h1 className="flex-1 text-center text-base font-bold text-[#181111]">My Cart</h1>
                <div className="w-8"></div>
            </header>

            {/* Items Section */}
            <div className="p-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-600">Items in your cart</span>
                        <span className="text-primary font-bold text-sm">{items.length} Items</span>
                    </div>

                    <div className="space-y-4">
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-3">
                                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm text-[#181111] truncate">{item.name}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                                    <p className="text-primary font-bold text-sm mt-1">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="size-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500">
                                        <span className="material-symbols-outlined text-sm">remove</span>
                                    </button>
                                    <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                                    <button className="size-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Select Dealer Section */}
            <div className="p-4 pt-0">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <h2 className="font-bold text-sm text-[#181111] mb-1">Select a Dealer</h2>
                    <p className="text-xs text-gray-500 mb-4">Only verified dealers with all items currently in stock are listed below.</p>

                    <div className="space-y-3">
                        <label
                            className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedDealer === 'metro' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                }`}
                        >
                            <input
                                type="radio"
                                name="dealer"
                                value="metro"
                                checked={selectedDealer === 'metro'}
                                onChange={(e) => setSelectedDealer(e.target.value)}
                                className="sr-only"
                            />
                            <div className="size-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-indigo-600">store</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#181111]">Metro Paints & Decor</h3>
                                        <p className="text-xs text-gray-500">1.2 miles away • Waterfront Hub</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-primary text-[10px] font-bold">Earliest Delivery</span>
                                        <p className="text-primary font-bold text-xs">TODAY</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[10px] text-green-600 font-semibold mt-1">
                                    <span className="size-1.5 rounded-full bg-green-500"></span>
                                    IN STOCK
                                </span>
                            </div>
                        </label>

                        <label
                            className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${selectedDealer === 'harbor' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                }`}
                        >
                            <input
                                type="radio"
                                name="dealer"
                                value="harbor"
                                checked={selectedDealer === 'harbor'}
                                onChange={(e) => setSelectedDealer(e.target.value)}
                                className="sr-only"
                            />
                            <div className="size-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-gray-600">store</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold text-sm text-[#181111]">Harbor Heights Supplies</h3>
                                        <p className="text-xs text-gray-500">3.5 miles away • Waterfront</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-gray-500 text-[10px]">Earliest Delivery</span>
                                        <p className="text-gray-700 font-semibold text-xs">TOMORROW</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1 text-[10px] text-green-600 font-semibold mt-1">
                                    <span className="size-1.5 rounded-full bg-green-500"></span>
                                    IN STOCK
                                </span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Fulfillment Method */}
            <div className="p-4 pt-0">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <h2 className="font-bold text-sm text-[#181111] mb-3">Fulfillment Method</h2>

                    <div className="space-y-2">
                        <label
                            className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${fulfillmentMethod === 'delivery' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                }`}
                        >
                            <input
                                type="radio"
                                name="fulfillment"
                                value="delivery"
                                checked={fulfillmentMethod === 'delivery'}
                                onChange={(e) => setFulfillmentMethod(e.target.value)}
                                className="sr-only"
                            />
                            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">local_shipping</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-sm text-[#181111]">Home Delivery</h3>
                                <p className="text-xs text-gray-500">Est. 2-4 hours • Priority Service</p>
                            </div>
                        </label>

                        <label
                            className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${fulfillmentMethod === 'pickup' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                }`}
                        >
                            <input
                                type="radio"
                                name="fulfillment"
                                value="pickup"
                                checked={fulfillmentMethod === 'pickup'}
                                onChange={(e) => setFulfillmentMethod(e.target.value)}
                                className="sr-only"
                            />
                            <div className="size-10 rounded-xl bg-gray-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-600">store</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-sm text-[#181111]">Store Pick Up</h3>
                                <p className="text-xs text-gray-500">Free of charge • Ready in 1h</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Order Summary */}
            <div className="p-4 pt-0">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <h2 className="font-bold text-sm text-[#181111] mb-3">Order Summary</h2>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="text-[#181111]">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="text-green-600 font-semibold">FREE</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Sales Tax</span>
                            <span className="text-[#181111]">$0.00</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 mt-3 pt-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Total Amount</span>
                                <p className="text-2xl font-bold text-[#181111]">${total.toFixed(2)}</p>
                            </div>
                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">Free Shipping Applied</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Place Order Button */}
            <div className="p-4 pb-8">
                <button
                    onClick={handlePlaceOrder}
                    disabled={isOrdering}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-70"
                >
                    {isOrdering ? (
                        <>
                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                            Processing...
                        </>
                    ) : (
                        <>
                            Place Order
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </>
                    )}
                </button>
                <div className="flex items-center justify-center gap-1 mt-3 text-xs text-gray-500">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    SECURE CHECKOUT
                </div>
            </div>

            {/* Trust Badges */}
            <div className="px-4 pb-8 flex items-center justify-center gap-6 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    VERIFIED MERCHANT
                </div>
                <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">eco</span>
                    ECO-FRIENDLY DELIVERY
                </div>
            </div>
        </div>
    );
}
