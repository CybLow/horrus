import { Button } from "@/components/ui/Shadcn/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/Shadcn/hover-card"
import { Settings } from "lucide-react"
import { useCampaignContext } from '@/components/dashboard/campaign/CampaignContext';

export default function AutomaticButton() {
    const { setMode } = useCampaignContext();

    return (
        <div className="flex flex-row items-center gap-4">
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="secondary" onClick={() => setMode('automatic')}>
                        <Settings className="text-[#333736] h-[1.5rem] w-[1.5rem]"/>
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto p-2">
                    <p className="text-[#333736]">Informations supplémentaires sur le mode automatique</p>
                </HoverCardContent>
            </HoverCard>
            <span className="text-base text-[#333736] font-medium">Automatique</span>
        </div>
    )
}