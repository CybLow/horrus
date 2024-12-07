import { Button } from "@/components/ui/Shadcn/button"
import { FileDown } from "lucide-react"

export default function DownloadReport() {
    return (
        <Button className="p-2 w-full">
            <FileDown className="h-[1.5rem] w-[1.5rem] text-[#FBFFFE] hover:bg-[rgb(6, 111, 236, 0.8)]"/>
        </Button>
    )
}
