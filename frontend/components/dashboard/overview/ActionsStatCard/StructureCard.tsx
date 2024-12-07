import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/Shadcn/card";
import ProgressBar from '@/components/charts/ProgressBar/ActionsCard';

interface Action {
    label: string;
    value: number;
    ariaLabel: string;
}

interface StructureCardProps {
    title: string;
    actions: Action[];
}

const StructureCard: React.FC<StructureCardProps> = ({ title, actions }) => {
    return (
        <Card className="w-full">
            <CardHeader className="pb-0 pt-3 flex-col items-start">
                <h2 className="font-bold text-large text-[#333736]">{title}</h2>
            </CardHeader>
            <CardContent className="overflow-visible py-2">
                {actions.map((action, index) => (
                    <ProgressBar
                        key={index}
                        label={action.label}
                        value={action.value}
                        ariaLabel={action.ariaLabel}
                    />
                ))}
            </CardContent>
        </Card>
    );
};

export default StructureCard;