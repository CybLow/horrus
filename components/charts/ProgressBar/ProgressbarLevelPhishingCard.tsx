import React from "react";
import { Progress } from "@nextui-org/react";

interface CustomProgressBarProps {
    value: number;
    min: number;
    max: number;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ value, min, max }) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="relative">
            <div className="flex items-center gap-4">
                <span className="text-base font-medium text-[#208324]">{value.toFixed(1)}</span>
                <Progress
                    aria-label="Niveau d'expertise"
                    value={percentage}
                    className="max-w-full"
                    size="md"
                    classNames={{
                        track: "bg-[#E2E8F0]",
                        indicator: "bg-[#208324]"}}
                />
                <span className="text-base font-medium text-[#208324]">{(value + 0.1).toFixed(1)}</span>
            </div>
        </div>
    );
};

export default CustomProgressBar;