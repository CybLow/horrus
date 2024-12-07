'use client'
import { useState, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header/Header'
import styles from './Sidebar.module.css'

import {
    House,
    Mail,
    UserRoundPlus,
    UsersRound,
    CircleHelp,
    LogOut,
    Settings,
    Wallet,
    Plus,
} from 'lucide-react'

interface NavItem {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
}

const navigation: NavItem[] = [
    { name: "Vu d'ensemble", href: '/', icon: House },
    { name: 'Campagne', href: '/campagne', icon: Mail },
    { name: 'Utilisateurs', href: '/users', icon: UserRoundPlus },
    { name: 'Groupes', href: '/groups', icon: UsersRound },
]

const UserSpace: NavItem[] = [
    { name: 'Paiement', href: '/payment', icon: Wallet },
    { name: 'Paramètres', href: '/parametres', icon: Settings },
    { name: 'Aide', href: '/help', icon: CircleHelp },
]

const allRoutes = [...navigation, ...UserSpace];

function classNames(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()

    const handleLinkClick = () => {
        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };

    const activeTitle = useMemo(() => {
        const currentPage = allRoutes.find(item =>
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
        );
        return currentPage ? currentPage.name : "Vu d'ensemble";
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === href
        }
        return pathname.startsWith(href)
    }

    return (
        <>
            <Header setSidebarOpen={setSidebarOpen} title={activeTitle} />
            <div className={classNames(styles.sidebarOverlay, sidebarOpen ? styles.sidebarOpen : '')} onClick={() => setSidebarOpen(false)} />
            <div className={classNames(styles.sidebarContainer, sidebarOpen ? styles.sidebarOpen : '')}>
                <div className={styles.sidebar}>
                    <div className={styles.sidebarContent}>
                        <div className={styles.logo}>
                            <Image
                                alt="Company Logo"
                                src="/images/LogoPicture.png"
                                width={150}
                                height={150}
                                priority
                            />
                        </div>
                        <nav className={styles.nav}>
                            <ul role="list" className={styles.navList}>
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={classNames(
                                                isActive(item.href) ? styles.navItemActive : styles.navItemInactive,
                                                styles.navItem
                                            )}
                                            onClick={handleLinkClick}
                                        >
                                            <item.icon className={styles.navIcon} aria-hidden="true"/>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={styles.teamsSection}>
                            <h1 className={styles.sectionTitle}>Mon espace</h1>
                            <ul role="list" className={styles.teamsList}>
                                {UserSpace.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={classNames(
                                                isActive(item.href) ? styles.navItemActive : styles.navItemInactive,
                                                styles.navItem
                                            )}
                                        >
                                            <item.icon className={styles.navIcon} aria-hidden="true"/>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.sidebarFooter}>
                        <a href="#" className={styles.LogoutLink}>
                            <LogOut className={styles.LogoutIcon} aria-hidden="true"/>
                            Déconnexion
                        </a>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className={styles.closeSidebarButton}
                >
                    <span className="sr-only">Close sidebar</span>
                    <Plus aria-hidden="true" className={styles.closeIcon} />
                </button>
            </div>
        </>
    )
}