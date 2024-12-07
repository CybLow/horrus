"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@nextui-org/react"
import { Task } from "@/components/ui/Tables/users-table/data/Schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { EditButton } from "@/components/ui/Button/Edit/Edit"
import { DeleteButton } from "@/components/ui/Button/Delete/delete-row-user-table"

const handleEdit = (task: Task) => {
    // Implement edit functionality
    console.log("Edit task:", task)
}

const handleDelete = (task: Task) => {
    // Implement delete functionality
    console.log("Delete task:", task)
}

export const columns: ColumnDef<Task>[] = [
    {
        accessorKey: "id",
        header: ({ table }) => (
            <div className="flex items-center space-x-2">
                <Checkbox
                    isSelected={table.getIsAllPageRowsSelected()}
                    isIndeterminate={table.getIsSomePageRowsSelected()}
                    onValueChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
                <DataTableColumnHeader column={table.getColumn("id")} title="Nom du groupe" />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center space-x-2">
                <Checkbox
                    isSelected={row.getIsSelected()}
                    onValueChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
                <div className="w-full">{row.getValue("id")}</div>
            </div>
        ),
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "success",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Succès" />
        ),
        cell: ({ row }) => <div>{row.getValue("success")}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Actions" className="flex items-center justify-end pr-6" />
        ),
        cell: ({ row }) => (
            <div className="flex items-center justify-end">
                <EditButton task={row.original} onEdit={handleEdit} />
                <DeleteButton task={row.original} onDelete={handleDelete} />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
]