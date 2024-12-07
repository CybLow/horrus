import React, { createContext, useContext, useState, useEffect } from 'react';

type CampaignMode = 'none' | 'automatic' | 'custom';

interface CampaignContextType {
    mode: CampaignMode;
    setMode: (mode: CampaignMode) => void;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export function CampaignProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<CampaignMode>(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('campaignMode');
            return (savedMode as CampaignMode) || 'none';
        }
        return 'none';
    });

    useEffect(() => {
        localStorage.setItem('campaignMode', mode);
    }, [mode]);

    return (
        <CampaignContext.Provider value={{ mode, setMode }}>
            {children}
        </CampaignContext.Provider>
    );
}

export function useCampaignContext() {
    const context = useContext(CampaignContext);
    if (context === undefined) {
        throw new Error('useCampaignContext must be used within a CampaignProvider');
    }
    return context;
}