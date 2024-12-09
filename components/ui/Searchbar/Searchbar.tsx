import { Input } from "@/components/ui/Shadcn/input"
import { SearchIcon } from 'lucide-react'

export default function SearchBar() {
    return (
        <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            <Input
                type="search"
                placeholder="Rechercher utilisateurs"
                className="w-full pl-12 font-medium max-xl:w-[14rem] max-md:w-full [&::-webkit-search-cancel-button]:appearance-none"
            />
        </div>
    )
}