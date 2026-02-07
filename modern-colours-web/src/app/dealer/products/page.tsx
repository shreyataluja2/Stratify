
import React from 'react';
import { ProductCard } from '@/components/products/ProductCard';

export default function DealerProductsPage() {
    return (
        <div className="p-8 w-full max-w-[1600px] mx-auto space-y-8">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full h-12 pl-12 pr-4 bg-slate-100 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-brand-red/20 text-base placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none transition-all" placeholder="Search paints, SKUs, or finishes" />
                    </div>
                    <button className="h-12 px-6 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined">tune</span>
                        <span>Filter</span>
                    </button>
                </div>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                <button className="h-10 shrink-0 px-6 rounded-full bg-brand-red text-white font-semibold text-sm shadow-md shadow-brand-red/20">All</button>
                <button className="h-10 shrink-0 px-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-sm hover:border-brand-red transition-colors">Interior</button>
                <button className="h-10 shrink-0 px-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-sm hover:border-brand-red transition-colors">Exterior</button>
                <button className="h-10 shrink-0 px-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-sm hover:border-brand-red transition-colors">Wood</button>
                <button className="h-10 shrink-0 px-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-sm hover:border-brand-red transition-colors">Metal</button>
                <button className="h-10 shrink-0 px-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-medium text-sm hover:border-brand-red transition-colors">Primer</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-12">
                <ProductCard
                    title="Luxury Silk Emulsion"
                    category="Interior Emulsion"
                    sku="MC-7821"
                    finish="Matte"
                    price={4250}
                    originalPrice={4800}
                    discount="12%"
                    stockStatus="In Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCdRZgPoT_i7f-q9voEUsYP68zFm7G0YSUj_6-E9dA6xY9wA3xHNXS4zJ5y5nQfTBn2ABT-fzLjknnNLlinX7ZCi1I8fSJKGxT_A9GRvUAEr9O9SRh1JbVQOYAy9gzslf_5pErERc_8RUvpP_JlElzCOa-HOILiVGEOIuiUS0ZGczzNgYWlhJkYXTdHO3FwROEeXCJnJObKbwRE2zQ13T6yBxg5Q2PVtlGZ6QqRRDqtyGnjAw_vmzxMZWQp0bCXppcDcVBfi66odpc8"
                />
                <ProductCard
                    title="Shield Max Exterior"
                    category="Weather Guard"
                    sku="EX-9920"
                    finish="Satin"
                    price={5100}
                    originalPrice={5900}
                    discount="14%"
                    stockStatus="Low Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZ6Cf-iLe4iN2fHDTpDePsX_JPBOrD229OJJ-QWMhWLliOf1UfqzH5C3UFy3YmRrfJ1dABkiTAbyaIXG9TXf4tMn7GTTkTSW-mC0cQcLfDwjFReDlX2ekKlDxduCgUW-7SSDDJx14TxA_Lqmu6DA7tEm2zRezfUJUUTZ7ISAYg7j2oSRq9Js9sGcwc_AoHpA2vFwSngqytAER973z7XdoOx2GzZxLNHiNi7n6E986TYLW7p4-T8QGkaakbsvnlxW4wiLrnVMyH1E8"
                />
                <ProductCard
                    title="High Gloss Teak Varnish"
                    category="Varnish & Gloss"
                    sku="WD-2201"
                    finish="High Gloss"
                    price={2850}
                    stockStatus="Out of Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBqH_vqD39GgxJ8zd5sLd0CQtWphJsRAaT6Sh6DKqUQVv-vallKN6r6pNKsX2qYwQ1lS0UVwiIeKMOFXfmun5yj2O7inpfx49fJNTIjrvxvK8yH8Rf2Y84hb53oJ_k2hT0z-X5RE3Zqsw4oBJ8X9wh8C8zRMwF3Syt3MVrKhmQnMS2GgGE0H8v6-U5uiFu2kx8Tl9sPsVQvl3XLqjlFortzosXtfAZ5Pihm_x5eO6vTjzAFJ1rEkJhjVexHBPng-gecOmdqgJGMskkY"
                />
                <ProductCard
                    title="Stucco Finish Plaster"
                    category="Speciality Coating"
                    sku="SP-1102"
                    finish="Textured"
                    price={6400}
                    stockStatus="In Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCdRZgPoT_i7f-q9voEUsYP68zFm7G0YSUj_6-E9dA6xY9wA3xHNXS4zJ5y5nQfTBn2ABT-fzLjknnNLlinX7ZCi1I8fSJKGxT_A9GRvUAEr9O9SRh1JbVQOYAy9gzslf_5pErERc_8RUvpP_JlElzCOa-HOILiVGEOIuiUS0ZGczzNgYWlhJkYXTdHO3FwROEeXCJnJObKbwRE2zQ13T6yBxg5Q2PVtlGZ6QqRRDqtyGnjAw_vmzxMZWQp0bCXppcDcVBfi66odpc8"
                />
            </div>
        </div>
    );
}
