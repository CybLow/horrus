"use client"

import React from 'react'
import { Table } from "@tanstack/react-table"
import { SearchbarHistoryCampaign } from "@/components/ui/Searchbar/SearchbarHistoryCampaign";
import DownloadReport from "@/components/ui/Button/DownloadReport/DownloadReport";
import ViewCampaign from "@/components/ui/Button/ViewCampaign/ViewCampaign";
import CreateCampaign from "@/components/ui/Button/CreateCampaign/CreateCampaign";
import { DataTableViewOptions } from "@/components/ui/Button/Filter/FilterHistoryCampaign"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
    onSearch: (value: string) => void
}

export function DataTableToolbar<TData>({ table, onSearch }: DataTableToolbarProps<TData>) {
    const selectedRows = table.getFilteredSelectedRowModel().rows;
    const isViewEnabled = selectedRows.length === 1;

    const handleViewClick = () => {
        if (isViewEnabled) {
            // Logique pour afficher la campagne sélectionnée
            console.log("Affichage de la campagne :", selectedRows[0].original);
        }
    };

    return (
        <div className="flex flex-row max-md:flex-col gap-4 justify-between">
            <div className="flex flex-row gap-4 max-md:justify-between max-sm:flex-col">
                <SearchbarHistoryCampaign onSearch={onSearch}/>
                <div className="flex flex-row gap-2 max-sm:justify-between">
                    <DataTableViewOptions table={table} />
                    <ViewCampaign isEnabled={isViewEnabled} onClick={handleViewClick} />
                    <DownloadReport/>
                </div>
            </div>
            <CreateCampaign/>
        </div>
    )
}