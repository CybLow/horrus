import CardStructure from "./CardStructure";
import {UsersRound, MailOpen, Mails, Trophy} from "lucide-react";
import ProgressbarLevelPhishingCard from "@/components/charts/ProgressBar/ProgressbarLevelPhishingCard";
import CircularTotalSuccess from "@/components/charts/Circular/CircularTotalSuccess";

export default function GridCard(){
    return (
        <div className="grid grid-cols-4 gap-4 pl-[20rem] py-4 max-2xl:grid-cols-2 max-xl:pl-[18rem] max-lg:pl-[0rem] max-md:grid-cols-1">
            <CardStructure
                title="Participants actifs à la formation"
                value="365 / 500"
                subValue="d'engagement hebdomadaire"
                icon={<UsersRound className="text-[#8280FF]" size={30}/>}
                iconBgColor="bg-[#E2E4FE]"
                trend="up"
                trendValue="9.6%"
            />
            <CardStructure
                title="Taux d'ouverture de phishing"
                value="36 %"
                subValue="depuis la semaine dernière"
                icon={<MailOpen className="text-[#FEC53D]" size={30}/>}
                iconBgColor="bg-[#FCF3D5]"
                trend="up"
                trendValue="8.5%"
                isPhishingMetric={true}
            />
            <CardStructure
                title="Niveau d'expertise en phishing"
                value="3.6 / 5"
                valueClassName="mt-1"
                icon={<Mails className="text-[#2581EE]" size={30} />}
                iconBgColor="bg-[#D3E5FC]"
            >
                <ProgressbarLevelPhishingCard value={3.6} min={0} max={5} />
            </CardStructure>
            <CardStructure
                title="Performance globale de l’entreprise"
                icon={<Trophy className="text-[#4AD991]" size={30}/>}
                iconBgColor="bg-[#D6F7E7]"
            >
                <CircularTotalSuccess/>
            </CardStructure>
        </div>
    )
}