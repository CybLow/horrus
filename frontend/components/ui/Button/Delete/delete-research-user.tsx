import { Button } from "@/components/ui/Shadcn/button"
import { Trash } from "lucide-react"

export default function DeleteResearchUser() {
    return (
        <Button className="font-semibold px-2 py-2">
            <Trash className="h-[1.5rem] w-[1.5rem] text-[#FBFFFE] hover:bg-[rgb(6, 111, 236, 0.8)]"/>
        </Button>
    )
}
