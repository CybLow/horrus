"use client"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/Shadcn/popover";
import {Button} from "@/components/ui/Shadcn/button";
import {ChevronDown} from "lucide-react";
import {useEffect, useRef, useState} from "react";

const model = [
    { key: "model 1", label: "model 1" },
    { key: "model 2", label: "model 2" },
    { key: "model 3", label: "model 3" },
    { key: "model 4", label: "model 4" },
    { key: "model 5", label: "model 5" },
    { key: "model 6", label: "model 6" },
    { key: "model 7", label: "model 7" },
];

export default function ModelSensibilisation() {
    const [buttonWidth, setButtonWidth] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [selectedModel, setSelectedModel] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const updateWidth = () => {
            if (buttonRef.current) {
                setButtonWidth(buttonRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleModelSelect = (modelKey: string) => {
        setSelectedModel(modelKey);
        setIsOpen(false);
    };

    return (
        <div>
            <h1 className="font-bold pt-16 pb-4 text-[#333736]">Choix du modèle</h1>
            <div className="flex gap-4">
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            ref={buttonRef}
                            variant="secondary"
                            className="w-full justify-between text-[#333736] focus:border-[hsl(var(--secondary-border-hover))]"
                            onClick={() => setIsOpen(true)}
                        >
                            <div className="flex items-center justify-center">
                                {selectedModel || "Choisissez un modèle"}
                            </div>
                            <div className="flex">
                                <ChevronDown className="ml-2 h-4 w-4 text-[#333736]" />
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent style={{ width: `${buttonWidth}px` }} className="p-1">
                        <div className="px-2 pt-2 text-[#333736]">
                            {model.map((modelItem) => (
                                <div
                                    key={modelItem.key}
                                    className="mb-2 flex items-center hover:bg-[rgba(238,242,241,0.6)] p-2 rounded-md cursor-pointer"
                                    onClick={() => handleModelSelect(modelItem.key)}
                                >
                                    <label className="ml-2 cursor-pointer flex-grow text-[#333736]">
                                        {modelItem.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}