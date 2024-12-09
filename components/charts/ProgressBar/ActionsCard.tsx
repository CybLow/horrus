import React from 'react';
import { Progress } from "@nextui-org/react";

interface ProgressBarItemProps {
    label: string;
    value: number;
    ariaLabel: string;
}

const ProgressBarItem: React.FC<ProgressBarItemProps> = ({ label, value, ariaLabel }) => {
    const progressId = `progress-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700" id={`${progressId}-label`}>{label}</span>
                <span className="text-sm font-medium text-gray-700" id={`${progressId}-value`}>{value}%</span>
            </div>
            <Progress
                value={value}
                className="w-full"
                classNames={{
                    track: "bg-[#E2E8F0]"}}
                aria-labelledby={`${progressId}-label ${progressId}-value`}
                aria-label={ariaLabel}
            />
        </div>
    );
};

export default ProgressBarItem;