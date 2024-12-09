import React from 'react'
import { Card, CardHeader, CardContent } from "@/components/ui/Shadcn/card"
import ProgressBar from '@/components/charts/ProgressBar/ActionsCard'

interface Action {
    label: string
    value: number
    ariaLabel: string
}

interface StructureCardProps {
    title: string
    actions: Action[]
}

const StructureCard: React.FC<StructureCardProps> = ({ title, actions }) => {
    return (
        <Card className="w-full h-full">
            <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold text-[#333736]">{title}</h2>
            </CardHeader>
            <CardContent className="space-y-4">
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
    )
}

export default StructureCard

