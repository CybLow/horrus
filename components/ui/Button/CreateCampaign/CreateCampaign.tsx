import { Button } from "@/components/ui/Shadcn/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export default function CreateCampaign() {
    return (
        <Button className="font-semibold">
            <Plus className="h-[1.5rem] w-[1.5rem] text-[#FBFFFE] mr-2 hover:bg-[rgb(6, 111, 236, 0.8)]"/>
            <Link href="/campagne/create-campaign/generals-informations">Créer une campagne</Link>
        </Button>
    )
}
