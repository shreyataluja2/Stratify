
import React from 'react';
import { ProductCard } from '@/components/products/ProductCard';

export default function BuyerProductsPage() {
    return (
        <div className="max-w-[1280px] mx-auto px-6 py-8 space-y-8">
            {/* Header & Filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Discover Paints</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Premium finishes for every surface.</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input className="w-full h-10 pl-10 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-brand-red/20 outline-none" placeholder="Search..." />
                    </div>
                    <button className="h-10 px-4 flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">tune</span>
                        Filter
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                <button className="h-9 shrink-0 px-5 rounded-full bg-brand-red text-white font-semibold text-sm shadow-md shadow-brand-red/20">All</button>
                <button className="h-9 shrink-0 px-5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm hover:border-brand-red hover:text-brand-red transition-all">Interior</button>
                <button className="h-9 shrink-0 px-5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm hover:border-brand-red hover:text-brand-red transition-all">Exterior</button>
                <button className="h-9 shrink-0 px-5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm hover:border-brand-red hover:text-brand-red transition-all">Wood & Metal</button>
                <button className="h-9 shrink-0 px-5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm hover:border-brand-red hover:text-brand-red transition-all">Accessories</button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
                <ProductCard
                    title="Luxury Silk Emulsion"
                    category="Interior"
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
                    category="Exterior"
                    sku="EX-9920"
                    finish="Satin"
                    price={5100}
                    originalPrice={5900}
                    discount="14%"
                    stockStatus="Low Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAJZ6Cf-iLe4iN2fHDTpDePsX_JPBOrD229OJJ-QWMhWLliOf1UfqzH5C3UFy3YmRrfJ1dABkiTAbyaIXG9TXf4tMn7GTTkTSW-mC0cQcLfDwjFReDlX2ekKlDxduCgUW-7SSDDJx14TxA_Lqmu6DA7tEm2zRezfUJUUTZ7ISAYg7j2oSRq9Js9sGcwc_AoHpA2vFwSngqytAER973z7XdoOx2GzZxLNHiNi7n6E986TYLW7p4-T8QGkaakbsvnlxW4wiLrnVMyH1E8"
                />
                <ProductCard
                    title="Midnight Sky"
                    category="Interior"
                    sku="MC-9001"
                    finish="Matte"
                    price={3800}
                    stockStatus="In Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAEO8qTN8ukFfsXJ9yu31GqjocSzh0hqFJbC4B4PZMBW4_3900jBzq2K4mvzTE81ziQV6rypdyrBZ53eTSz5nOrAFBRozAdCSRS3N-6K1yHA8Vvl2gk-FFTNCMdwe6B8zfoeC58HiLAY-kNBT25nsxMFRh9hS8mdBW7_-fcN3ELzJ_JV9tGsKL6rxh5DPFvvtZW58zhWypRjJB-TN4u5qcHXpWEV15-U4R5OlM9C7t1b1jJ2lhQ6HRtUfK7T5fQ-1pkpr4RHTUXPLz6"
                />
                <ProductCard
                    title="High Gloss Teak Varnish"
                    category="Wood Care"
                    sku="WD-2201"
                    finish="High Gloss"
                    price={2850}
                    stockStatus="Out of Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBqH_vqD39GgxJ8zd5sLd0CQtWphJsRAaT6Sh6DKqUQVv-vallKN6r6pNKsX2qYwQ1lS0UVwiIeKMOFXfmun5yj2O7inpfx49fJNTIjrvxvK8yH8Rf2Y84hb53oJ_k2hT0z-X5RE3Zqsw4oBJ8X9wh8C8zRMwF3Syt3MVrKhmQnMS2GgGE0H8v6-U5uiFu2kx8Tl9sPsVQvl3XLqjlFortzosXtfAZ5Pihm_x5eO6vTjzAFJ1rEkJhjVexHBPng-gecOmdqgJGMskkY"
                />
                <ProductCard
                    title="Stucco Finish Plaster"
                    category="Speciality"
                    sku="SP-1102"
                    finish="Textured"
                    price={6400}
                    stockStatus="In Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCdRZgPoT_i7f-q9voEUsYP68zFm7G0YSUj_6-E9dA6xY9wA3xHNXS4zJ5y5nQfTBn2ABT-fzLjknnNLlinX7ZCi1I8fSJKGxT_A9GRvUAEr9O9SRh1JbVQOYAy9gzslf_5pErERc_8RUvpP_JlElzCOa-HOILiVGEOIuiUS0ZGczzNgYWlhJkYXTdHO3FwROEeXCJnJObKbwRE2zQ13T6yBxg5Q2PVtlGZ6QqRRDqtyGnjAw_vmzxMZWQp0bCXppcDcVBfi66odpc8"
                />
                <ProductCard
                    title="Cotton Cloud"
                    category="Interior"
                    sku="MC-8822"
                    finish="Satin"
                    price={3200}
                    stockStatus="In Stock"
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuB5y3sDXC2ydKNeN2B-84e_jdlL_czIFhISSNiHLuUhVq6zxKQWbvfm8O5XFHRQD-ZsuAagP_cl_OiuhzcnIf6HNsMSXtWU8n2exTCuzOue991DColDuAICvNpu1j4AOkoWauqXBX2uOdytb-Wb37Vgy0dsWGXYD_FfeR3BjWUzq6EWYq9foA7gi7lsKQ8FyfrJk8VvfEO9FD2odFvwvkKh3dRV0zUntmAagviQSG6q1APYdjf6Ire04RxgcxsSytub9ppTY_F-l6CA"
                />
            </div>
        </div>
    );
}
