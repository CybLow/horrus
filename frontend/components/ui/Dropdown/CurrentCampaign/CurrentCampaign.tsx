"use client"
import { useEffect, useRef, useState } from 'react';
import { Checkbox } from "@nextui-org/react";
import { Button } from "@/components/ui/Shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Shadcn/popover";
import { ChevronDown, Mails } from "lucide-react";

const CampaignDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([]);
    const [buttonWidth, setButtonWidth] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const campaigns = [
        { id: '1', name: 'Campagne 1' },
        { id: '2', name: 'Campagne 2' },
        { id: '3', name: 'Campagne 3' },
    ];

    useEffect(() => {
        const updateWidth = () => {
            if (buttonRef.current) {
                setButtonWidth(buttonRef.current.offsetWidth);
            }
        };

        updateWidth(); // Initial measurement
        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleCampaignToggle = (campaignId: string) => {
        setSelectedCampaigns(prev =>
            prev.includes(campaignId)
                ? prev.filter(id => id !== campaignId)
                : [...prev, campaignId]
        );
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button ref={buttonRef} variant="secondary" className="w-[15rem] justify-between max-xl:w-[14rem] max-md:w-full focus:border-[hsl(var(--secondary-border-hover))]">
                    <div className="flex items-center justify-center">
                        <Mails className="h-[1.5rem] w-[1.5rem] mr-2 text-[#9CA3AF]" />
                        Campagne en cours
                    </div>
                    <div className="flex">
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent style={{ width: `${buttonWidth}px` }} className="p-1">
                <div className="px-2 pt-2">
                    {campaigns.map((campaign) => (
                        <div key={campaign.id} className="mb-2 flex items-center hover:bg-[rgba(238,242,241,0.6)] p-2 rounded-md">
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

export default CampaignDropdown;