"use client"
import React from 'react';
import { FileUploadButton } from "@/components/ui/Button/AddFile/AddFile.tsx";
import StructureQuizSection from "@/components/dashboard/campaign/QuizSection/StructureQuizSection";
import ModelSensibilisation from "@/components/ui/Dropdown/ModelSensibilisation/model-sensibilisation";
import { CampaignProvider, useCampaignContext } from '@/components/dashboard/campaign/CampaignContext';

function SensibilisationContent() {
    const { mode } = useCampaignContext();

    const isAutomaticMode = mode === 'automatic';
    const isCustomMode = mode === 'custom';

    return (
        <div>
            <div className="flex flex-col gap-4">
                {(isAutomaticMode || isCustomMode) && (
                    <>
                        <ModelSensibilisation />
                        <FileUploadButton />
                    </>
                )}
                <div className={isAutomaticMode ? 'opacity-50 pointer-events-none' : ''}>
                    <StructureQuizSection />
                </div>
            </div>
        </div>
    );
}

export default function Sensibilisation() {
    return (
        <CampaignProvider>
            <SensibilisationContent />
        </CampaignProvider>
    );
}