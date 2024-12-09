"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Tab {
    label: string;
    href: string;
}

const tabs: Tab[] = [
    { label: 'Sensibilisation', href: '/campagne/create-campaign/sensibilisation' },
    { label: 'Nos modèles de sensibilisation', href: '/campagne/create-campaign/sensibilisation/modeles' },
];

export default function TabNavigation() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(tabs[0].label);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const currentTab = tabs.find(tab => pathname.startsWith(tab.href)) || tabs[0];
        setActiveTab(currentTab.label);
    }, [pathname]);

    useEffect(() => {
        const activeTabElement = tabRefs.current[tabs.findIndex(tab => tab.label === activeTab)];
        if (activeTabElement) {
            setIndicatorStyle({
                left: `${activeTabElement.offsetLeft}px`,
                width: `${activeTabElement.offsetWidth}px`,
            });
        }
    }, [activeTab]);

    return (
        <div className="relative">
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[rgb(40,38,44,0.3)] rounded-full"></div>
            <nav className="relative z-10">
                <ul className="flex">
                    {tabs.map((tab, index) => (
                        <li key={tab.label} className="mr-8 max-sm:text-sm">
                            <Link href={tab.href}>
                                <span
                                    ref={el => tabRefs.current[index] = el}
                                    className={`relative pb-2 cursor-pointer ${
                                        activeTab === tab.label ? 'text-[#066FEC]  ' : 'text-[#333736]'
                                    }`}
                                    onClick={() => setActiveTab(tab.label)}
                                >
                                    {tab.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <span
                    className="absolute -bottom-2 h-0.5 bg-[#066FEC] rounded-full transition-all duration-300 ease-in-out"
                    style={indicatorStyle}
                ></span>
            </nav>
        </div>
    );
}