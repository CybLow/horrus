import "@/styles/globals.css"
import SearchBar from "@/components/ui/Searchbar/Searchbar"
import CurrentCampaign from "@/components/ui/Dropdown/CurrentCampaign/CurrentCampaign"
import CreateCampaign from "@/components/ui/Button/CreateCampaign/CreateCampaign"
import { Card } from "@/components/ui/Shadcn/card"

export default function TopBar() {
    return (
        <div className="pl-[20rem] max-xl:pl-[18rem] max-lg:pl-[0rem] md:flex md:flex-col">
            <Card className="card flex flex-col md:flex-row justify-between p-3">
                <div className="flex flex-col md:flex-row gap-4 max-xl:gap-3 mb-4 md:mb-0">
                    <SearchBar />
                    <CurrentCampaign />
                </div>
                <CreateCampaign />
            </Card>
        </div>
    )
}