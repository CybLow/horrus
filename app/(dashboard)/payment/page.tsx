import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import { Card } from "@/components/ui/Shadcn/card"
import { columns } from "@/components/ui/Tables/payment-history/components/Columns"
import { DataTable } from "@/components/ui/Tables/payment-history/components/data-table"
import { taskSchema, Task } from "@/components/ui/Tables/payment-history/data/Schema"
import PaymentMethods from "@/components/ui/payment-methods/payment-methods"

export const metadata: Metadata = {
    title: "Payment",
    description: "Payment methods and transaction history.",
}

async function getTasks(): Promise<Task[]> {
    const data = await fs.readFile(
        path.join(process.cwd(), "components/ui/Tables/payment-history/data/Tasks.json")
    )

    const tasks = JSON.parse(data.toString())

    return z.array(taskSchema).parse(tasks)
}

export default async function PaymentPage() {
    const tasks = await getTasks()

    return (
        <div className="space-y-6">
            <Card className="p-4">
                <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
                <PaymentMethods />
            </Card>
            <Card className="p-4">
                <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
                <DataTable data={tasks} columns={columns} />
            </Card>
        </div>
    )
}