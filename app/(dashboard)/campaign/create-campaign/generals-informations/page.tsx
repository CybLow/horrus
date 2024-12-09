"use client"
import { CampaignProvider, useCampaignContext } from '@/components/dashboard/campaign/CampaignContext.tsx';
import AutomaticButton from "@/components/ui/Button/ChoiceCreatecampaign/Automatic";
import CustomButton from "@/components/ui/Button/ChoiceCreatecampaign/Custom";
import FlagsButton from "@/components/ui/Button/Flags/Flags";
import PhishingCard from "@/components/dashboard/campaign/ChoiceAttacks/PhishingAttacks";
import RansomwareCard from "@/components/dashboard/campaign/ChoiceAttacks/RansomwareAttacks";
import {Input} from "@/components/ui/Shadcn/input";
import styles from '@/styles/app-style/generals-informations.module.css';

function GeneralsInformationsContent() {
    const { mode } = useCampaignContext();

    const isDisabled = mode === 'none';
    const isAutomaticMode = mode === 'automatic';

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Mode de création de campagne</h1>
                <div className={styles.buttonContainer}>
                    <AutomaticButton />
                    <CustomButton />
                </div>
                <div className={`${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}>
                    <h2 className={styles.subtitle}>Informations générales</h2>
                    <div className={styles.inputContainer}>
                        <div className={styles.inputWrapper}>
                            <h3 className={styles.inputLabel}>Nom de la campagne</h3>
                            <Input type="text" name="campaign_name" id="campaign_name" className="w-full" disabled={isDisabled} />
                        </div>
                        <div className={styles.inputWrapper}>
                            <h3 className={styles.inputLabel}>Description de la campagne</h3>
                            <Input name="campaign_description" id="campaign_description" className="w-full" disabled={isDisabled} />
                        </div>
                        <h3 className={styles.attackTypeTitle}>Sélectionner le type d'attaque</h3>
                        <FlagsButton disabled={isDisabled} />
                    </div>
                    <h3 className={styles.subtitle}>Sélectionner le type d'attaque</h3>
                    <div className={`${styles.cardContainer} ${isAutomaticMode ? 'opacity-50 pointer-events-none' : ''}`}>
                        <PhishingCard />
                        <RansomwareCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GeneralsInformations() {
    return (
        <CampaignProvider>
            <GeneralsInformationsContent />
        </CampaignProvider>
    );
}