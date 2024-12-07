"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { SlidersHorizontal } from "lucide-react"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/Shadcn/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/Shadcn/dropdown-menu"

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>
}

type ColumnNameKey = 'status' | 'title' | 'dateStart' | 'dateEnd' | 'attachments';

export function DataTableViewOptions<TData>({
                                                table,
                                            }: DataTableViewOptionsProps<TData>) {
    // Mapping des identifiants aux noms de colonnes
    const columnNames: Record<ColumnNameKey, string> = {
        status: "Statut",
        title: "Description",
        dateStart: "Date de début",
        dateEnd: "Date de fin",
        attachments: "Informations jointes"
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="p-2 w-full" >
                    <SlidersHorizontal className="h-6 w-6" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Afficher les colonnes</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {(column.id in columnNames) ? columnNames[column.id as ColumnNameKey] : column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}