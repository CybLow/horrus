"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@nextui-org/react";
import { Task } from "@/components/dashboard/campaign/HistoryTable/data/Schema"
import { DataTableColumnHeader } from "./Data-table-Column-Header"

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
        size: 10,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Nom" />
        ),
        cell: ({ row }) => <div className="w-full">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
        size: 120,
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Statut" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        size: 100,
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description" />
        ),
        size: 300,
    },
    {
        accessorKey: "dateStart",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date de début" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        size: 120,
    },
    {
        accessorKey: "dateEnd",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date de fin" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        size: 120,
    },
    {
        accessorKey: "attachments",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Informations jointes" />
        ),
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        size: 200,
    },
]