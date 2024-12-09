import React from 'react'
import { Input } from "@/components/ui/Shadcn/input"
import { SearchIcon } from 'lucide-react'

interface SearchbarHistoryCampaignProps {
    onSearch: (value: string) => void;
}

export function SearchbarHistoryCampaign({ onSearch }: SearchbarHistoryCampaignProps) {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Input
                type="search"
                placeholder="Rechercher"
                className="w-[15rem] pl-12 font-medium max-xl:w-[14rem] max-md:w-full [&::-webkit-search-cancel-button]:appearance-none"
                onChange={handleSearch}
            />
        </div>
    )
}