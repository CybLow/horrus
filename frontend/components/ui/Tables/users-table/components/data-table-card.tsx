import React from 'react'
import { Row, Table } from "@tanstack/react-table"
import { Checkbox } from "@nextui-org/react"

interface DataTableCardProps<TData> {
    row: Row<TData>
    table: Table<TData>
}

export function DataTableCard<TData>({ row, table }: DataTableCardProps<TData>) {
    const fieldsToDisplay = [
        { key: 'id', title: 'Nom' },
        { key: 'sector', title: "Secteur d'activité" },
        { key: 'departement', title: 'Departement' },
        { key: 'success', title: 'Succèss' },
        { key: 'group', title: 'Groupe' },
        { key: 'actions', title: 'Actions' },
    ];

    // Check if the row should be displayed based on current filters
    const shouldDisplayRow = table.getRowModel().rows.some(r => r.id === row.id);

    if (!shouldDisplayRow) {
        return null;
    }

    return (
        <div className="bg-white p-4 border border-gray-200 rounded-md mb-4 shadow-sm">
            <div className="flex items-center mb-2">
                <Checkbox
                    isSelected={row.getIsSelected()}
                    onValueChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
            {fieldsToDisplay.map(({ key, title }) => {
                const column = table.getColumn(key);
                if (!column || !column.getIsVisible()) return null;
                const cell = row.getAllCells().find(cell => cell.column.id === key);
                if (!cell) return null;
                return (
                    <div key={key} className="mb-1">
                        <span className="font-bold mr-2">{title}:</span>
                        <span>{cell.getValue() as string}</span>
                    </div>
                );
            })}
        </div>
    )
}