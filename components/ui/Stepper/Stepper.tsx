"use client"
import { usePathname } from 'next/navigation';

interface Step {
    name: string;
    path: string;
}

interface StepperProps {
    steps: Step[];
}

export default function Stepper({ steps }: StepperProps) {
    const pathname = usePathname();

    const getCurrentStep = () => {
        const currentStepIndex = steps.findIndex(step => pathname.startsWith(step.path));
        return currentStepIndex !== -1 ? currentStepIndex : 0;
    };

    const currentStep = getCurrentStep();

    return (
        <div className="w-full px-24 py-4 max-sm:px-8">
            <div className="relative flex items-center justify-between w-full">
                <div className="absolute left-0 top-2/4 h-2 w-full -translate-y-2/4 bg-[#E2E8F0]"></div>
                <div
                    className="absolute left-0 top-2/4 h-2 -translate-y-2/4 bg-[#066FEC] transition-all duration-500 rounded-lg"
                    style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                ></div>
                {steps.map((step, index) => (
                    <div
                        key={step.name}
                        className={`relative z-10 grid w-10 h-10 font-bold transition-all duration-300 ${
                            index <= currentStep
                                ? 'bg-[#066FEC] text-[#FBFFFE]'
                                : 'bg-[#E2E8F0] text-black'
                        } rounded-full place-items-center`}
                    >
                        {index + 1}
                        <div className="absolute -bottom-[2.5rem] w-max text-center">
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700  max-sm:hidden">
                                {step.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}