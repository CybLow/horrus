import React, { ReactNode } from 'react';
import styles from './CardStructure.module.css';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/Shadcn/card'

interface CardStructureProps {
    title: string;
    value?: string;
    subValue?: string;
    icon: ReactNode;
    iconBgColor: string;
    trend?: 'up' | 'down';
    trendValue?: string;
    isPhishingMetric?: boolean;
    children?: ReactNode;
    valueClassName?: string;
}

const CardStructure: React.FC<CardStructureProps> = ({ title, value, subValue, icon, iconBgColor, trend, trendValue, isPhishingMetric = false, children, valueClassName}) => {
    const getTrendClass = () => {
        if (isPhishingMetric) {
            return trend === 'up' ? styles.trendUpPhishing : styles.trendDownPhishing;
        }
        return trend === 'up' ? styles.trendUp : styles.trendDown;
    };

    return (
        <Card className={styles.card}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <div className={`${styles.iconContainer} ${iconBgColor}`}>
                    {icon}
                </div>
            </div>
            <div className={styles.valueContainer}>
                <p className={`${styles.value} ${valueClassName}`}>{value}</p>
            </div>
            <div className={styles.footer}>
            {trend && trendValue && (
                    <span className={`${styles.trend} ${getTrendClass()}`}>
                        {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {trendValue}
                    </span>
                )}
                {subValue && <span>{subValue}</span>}
            </div>
            {children}
        </Card>
    );
};

export default CardStructure;