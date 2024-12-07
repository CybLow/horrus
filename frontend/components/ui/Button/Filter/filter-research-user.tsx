import { Button } from "@/components/ui/Shadcn/button"
import { SlidersHorizontal } from "lucide-react"

export default function FilterResearchUser() {
    return (
        <Button className="font-semibold px-2 py-2">
            <SlidersHorizontal className="h-[1.5rem] w-[1.5rem] text-[#FBFFFE] hover:bg-[rgb(6, 111, 236, 0.8)]"/>
        </Button>
    )
}
