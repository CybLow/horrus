import { Button } from "@/components/ui/Shadcn/button"
import { Trash2 } from "lucide-react"
import { Task } from "@/components/ui/Tables/users-table/data/Schema"

interface DeleteButtonProps {
    task: Task
    onDelete: (task: Task) => void
}

export function DeleteButton({ task, onDelete }: DeleteButtonProps) {
    return (
        <Button variant="ghost" className="text-[#333736]" size="icon" onClick={() => onDelete(task)}>
            <Trash2 className="h-5 w-5" />
            <span className="sr-only">Delete</span>
        </Button>
    )
}