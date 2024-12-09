"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@nextui-org/react"
import { Task } from "@/components/ui/Tables/users-table/data/Schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { AvatarGroup, Avatar } from "@nextui-org/react"
import { EditButton } from "@/components/ui/Button/Edit/Edit"
import { DeleteButton } from "@/components/ui/Button/Delete/delete-row-user-table"

const renderAvatars = (group: { name: string; avatar: string }[] | undefined) => {
    if (!group || !Array.isArray(group) || group.length === 0) {
        return <span>Aucun membre</span>;
    }

    return (
        <AvatarGroup size="sm">
            {group.map((member, index) => (
                <Avatar key={index} src={member.avatar}/>
            ))}
        </AvatarGroup>
    );
};

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
        id: "select",
        header: ({ table }) => (
            <Checkbox
                isSelected={table.getIsAllPageRowsSelected()}
                isIndeterminate={table.getIsSomePageRowsSelected()}
                onValueChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                isSelected={row.getIsSelected()}
                onValueChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Nom" />
        ),
        cell: ({ row }) => <div className="w-full">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "departement",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Departement" />
        ),
    },
    {
        accessorKey: "sector",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Statut" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "success",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Succès" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "actions",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Actions" />
        ),
        cell: ({ row }) => (
            <div className="flex items-center">
                <EditButton task={row.original} onEdit={handleEdit} />
                <DeleteButton task={row.original} onDelete={handleDelete} />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    /*{
        accessorKey: "group",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Groupe" />
        ),
        cell: ({ row }) => {
            const group = row.original.group;
            return renderAvatars(group);
        },
        enableSorting: false,
        enableHiding: false,
    },*/
]