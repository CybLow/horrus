"use client"
import { BellIcon, MegaphoneIcon, Bars3Icon } from '@heroicons/react/24/outline'
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/Shadcn/avatar'
import styles from './Header.module.css'

interface HeaderProps {
    setSidebarOpen: (isOpen: boolean) => void;
    title: string;
}
export default function Header({ setSidebarOpen, title }: HeaderProps) {
    return (
        <div className={styles.header}>
            <div className="flex items-center">
                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Ouvrir la sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <h1 className={styles.title}>{title}</h1>
            </div>

            <div className="flex items-center space-x-4">
                <button type="button" className={styles.iconButton}>
                    <span className="sr-only">Voir les notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <button type="button" className={styles.iconButton}>
                    <span className="sr-only">Paramètres</span>
                    <MegaphoneIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="flex items-center">
                    <Avatar>
                        <AvatarImage
                            src="/avatars/01.png"
                            alt="Profile picture"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className={styles.profileName}>
                        Maksim Dudarenka
                    </span>
                </div>
            </div>
        </div>
    )
}