'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BuyerBottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/home') {
            return pathname === '/home' || pathname === '/';
        }
        return pathname === path || pathname.startsWith(path + '/');
    };

    const navItems = [
        { href: '/home', icon: 'home', label: 'Home' },
        { href: '/colors', icon: 'palette', label: 'Discover' },
        { href: '/orders/track', icon: 'local_shipping', label: 'Orders' },
        { href: '/profile', icon: 'person', label: 'Profile' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 flex justify-around items-center z-50">
            {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${active
                                ? 'text-primary'
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        <span
                            className={`material-symbols-outlined text-2xl ${active ? '' : ''}`}
                            style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
                        >
                            {item.icon}
                        </span>
                        <span className={`text-[10px] ${active ? 'font-bold text-primary' : 'font-medium'}`}>
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
