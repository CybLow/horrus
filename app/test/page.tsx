import Topbar from '@/components/dashboard/overview/Topbar/Topbar'
import GridCard from "@/components/dashboard/overview/StatsCard/GridCard";
import LineChartSuccessCampaign from "@/components/charts/LineChart/LineSuccessCampaign";
import RadialTotalAdvancementCampaign from "@/components/charts/Radial/RadialTotalAdvancementCampaign";
import ActionsCards from "@/components/dashboard/overview/ActionsStatCard/ActionsCards";
export default function Home() {
    return(
        <div className="bg-[#F5F7FA]">
            <div className="p-4 flex flex-col">
                <Topbar/>
                <div>
                    <GridCard/>
                </div>
                <div className="pl-[20rem] grid grid-cols-4 gap-4
                    max-xl:pl-[18rem]
                    max-lg:pl-0
                    max-md:grid-cols-1">
                    <div className="col-span-3
                        max-2xl:col-span-2
                        max-md:col-span-1">
                        <LineChartSuccessCampaign/>
                    </div>
                    <div className="col-span-1
                        max-2xl:col-span-2
                        max-md:col-span-1">
                        <RadialTotalAdvancementCampaign/>
                    </div>
                </div>
            </div>
            <div className="pl-[20rem] max-xl:pl-[18rem] max-lg:pl-0" >
                <ActionsCards/>
            </div>
        </div>
    )
}