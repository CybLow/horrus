import { Card } from "@/components/ui/Shadcn/card"
import SearchBar from "@/components/ui/Searchbar/Searchbar"
import FilterResearchUser from "@/components/ui/Button/Filter/filter-research-user"
import DeleteResearchUser from "@/components/ui/Button/Delete/delete-research-user"

export default function ResearchGroups() {
    return (
        <Card className="flex flex-row justify-between p-4 gap-4 w-full border-2 border-[rgb(40,38,44,0.3)]">
            <SearchBar/>
            <div className="flex gap-4">
            <FilterResearchUser/>
            <DeleteResearchUser/>
            </div>
        </Card>
    )
}