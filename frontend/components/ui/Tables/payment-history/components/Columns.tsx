"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Task } from "../data/Schema"

export const columns: ColumnDef<Task>[] = [
    {
        accessorKey: "facture",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Facture" />
        ),
    },
    {
        accessorKey: "methode",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Méthode" />
        ),
    },
    {
        accessorKey: "prix",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Prix" />
        ),
    },
    {
        accessorKey: "date",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date" />
        ),
    },
]