import React from "react";
import { Clock, InfoIcon } from "lucide-react";
import { TimeInput } from "@nextui-org/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/Shadcn/tooltip";

export default function TimePicker({ date, setDate }) {
    return (
        <div className="flex-col items-center">
            <div className="flex items-center justify-between mb-2">
                <h1>Entrez l'heure d'envoi</h1>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <InfoIcon className="w-5 h-5 text-[rgb(40,38,44,0.5)] cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="text-[#333736]">Choisissez l'heure d'envoi de votre message</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <TimeInput
                labelPlacement="outside"
                className="w-[14rem] max-sm:w-full"
                variant="secondary"
                classNames={{
                    inputWrapper: "bg-transparent border-2 border-[rgb(40,38,44,0.3)] rounded-md hover:bg-transparent hover:border-[rgb(40,38,44,0.5)] focus:border-[rgb(40,38,44,0.5)]",
                    input: "font-medium text-[#333736] focus:bg-transparent",
                }}
                startContent={
                    <Clock className="h-6 w-6 text-[#333736]" />
                }
            />
        </div>
    );
}