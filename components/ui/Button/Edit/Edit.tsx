import { Button } from "@/components/ui/Shadcn/button"
import { Pencil } from "lucide-react"
import { Task } from "@/components/ui/Tables/users-table/data/Schema"

interface EditButtonProps {
    task: Task
    onEdit: (task: Task) => void
}

export function EditButton({ task, onEdit }: EditButtonProps) {
    return (
        <Button variant="ghost" className="text-[#333736]" size="icon" onClick={() => onEdit(task)}>
            <Pencil className="h-5 w-5" />
            <span className="sr-only">Edit</span>
        </Button>
    )
}