import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import { Card } from "@/components/ui/Shadcn/card"
import { columns } from "@/components/ui/Tables/groups-table/components/Columns"
import { DataTable } from "@/components/ui/Tables/groups-table/components/data-table"
import { taskSchema } from "@/components/ui/Tables/groups-table/data/Schema"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

async function getTasks() {
    const data = await fs.readFile(
        path.join(process.cwd(), "components/ui/Tables/users-table/data/Tasks.json")
    )

    const tasks = JSON.parse(data.toString())

    return z.array(taskSchema).parse(tasks)
}


export default async function UserTable() {
    const tasks = await getTasks()

    return (
        <Card className="flex flex-col p-4 h-full">
            <DataTable data={tasks} columns={columns} />
        </Card>
    )
}