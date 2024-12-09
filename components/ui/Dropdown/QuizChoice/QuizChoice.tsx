"use client"
import { useRef, useState } from 'react';
import { Checkbox } from "@nextui-org/react";
import { Button } from "@/components/ui/Shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Shadcn/popover";
import { ChevronDown } from "lucide-react";

const QuizChoice = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const QuizChoice = [
        { id: '1', name: 'Vrai / Faux' },
        { id: '2', name: 'Photos' },
        { id: '3', name: 'Choix multiples' },
        { id: '4', name: 'sensibilisation vie privé' },
        { id: '5', name: 'sensibilisation vie professionnelle' },
    ];

    const handleCampaignToggle = (QuizChoiceID: string) => {
        setSelectedCampaigns(prev =>
            prev.includes(QuizChoiceID)
                ? prev.filter(id => id !== QuizChoiceID)
                : [...prev, QuizChoiceID]
        );
    };

    const getSelectedQuizNames = () => {
        return selectedCampaigns.map(id =>
            QuizChoice.find(quiz => quiz.id === id)?.name
        ).filter(Boolean);
    };

    const getButtonText = () => {
        const selectedQuizNames = getSelectedQuizNames();
        if (selectedQuizNames.length === 0) {
            return "Sélectionner le(s) quiz(s)";
        } else if (selectedQuizNames.length === 1) {
            return selectedQuizNames[0];
        } else {
            return `${selectedQuizNames.length} quiz sélectionnés`;
        }
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    ref={buttonRef}
                    variant="secondary"
                    className="w-full justify-between focus:border-[hsl(var(--secondary-border-hover))]"
                >
                    <div className="flex items-center justify-center truncate">
                        {getButtonText()}
                    </div>
                    <div className="flex-shrink-0">
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-1 w-[var(--radix-popover-trigger-width)] max-w-[var(--radix-popover-content-available-width)]">
                <div className="px-2 pt-2 w-full">
                    {QuizChoice.map((campaign) => (
                        <div key={campaign.id} className="flex items-center hover:bg-[rgba(238,242,241,0.6)] p-2 rounded-md">
                            <Checkbox
                                isSelected={selectedCampaigns.includes(campaign.id)}
                                onValueChange={() => handleCampaignToggle(campaign.id)}
                                color="primary"
                                id={`checkbox-${campaign.id}`}
                            />
                            <label
                                htmlFor={`checkbox-${campaign.id}`}
                                className="ml-2 cursor-pointer flex-grow"
                                onClick={() => handleCampaignToggle(campaign.id)}
                            >
                                {campaign.name}
                            </label>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default QuizChoice;