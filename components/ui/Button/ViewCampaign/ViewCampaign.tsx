import React from 'react'
import { Button } from "@/components/ui/Shadcn/button"
import { Eye } from "lucide-react"

interface ViewCampaignProps {
    isEnabled: boolean;
    onClick: () => void;
}

export default function ViewCampaign({ isEnabled, onClick }: ViewCampaignProps) {
    return (
        <Button
            className={`p-2 w-full ${isEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
            disabled={!isEnabled}
            onClick={onClick}
        >
            <Eye className={`h-[1.5rem] w-[1.5rem] ${isEnabled ? 'text-[#FBFFFE]' : 'text-gray-500'}`}/>
        </Button>
    )
}