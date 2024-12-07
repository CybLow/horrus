import { Textarea } from "@/components/ui/Shadcn/textarea";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/Shadcn/tooltip";
import { InfoIcon } from 'lucide-react';

const EvaluationCustomizer = () => {
    return (
        <div className="w-full ">
            <div className="flex items-center mb-4">
                <h2 className="text-lg text-[#333736] font-semibold mr-2">Personnaliser l'évaluation</h2>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <InfoIcon className="w-5 h-5 text-[rgb(40,38,44,0.5)] cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="text-[#333736]">Personnalisez votre évaluation en ajoutant des détails spécifiques ou des instructions.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Textarea
                placeholder="Entrez vos instructions personnalisées ici..."
                className="min-h-[100px] w-full p-2 "
            />
        </div>
    );
};

export default EvaluationCustomizer;