"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Shadcn/button"
import { Switch } from "@nextui-org/react";
import TopPSelector from "@/components/dashboard/campaign/Schedule/number-emails-send-selector"
import CalendarDateRangePicker from "@/components/ui/DatePicker/DatePicker"
import TimePicker from "@/components/ui/TimePicker/time-picker";
import ResearchUser from "@/components/dashboard/campaign/Schedule/research-user"
import ResearchGroups from "@/components/dashboard/campaign/Schedule/research-groups";
import { Textarea } from "@/components/ui/Shadcn/textarea"

export default function CampaignParameters() {
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [isEnabledSwitch1, setIsEnabledSwitch1] = useState(false);
    const [isEnabledSwitch2, setIsEnabledSwitch2] = useState(false);
    const [mode, setMode] = useState('none');

    useEffect(() => {
        const savedMode = localStorage.getItem('campaignMode');
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    const levels = ['Niveau 1', 'Niveau 2', 'Niveau 3', 'Niveau 4', 'Niveau 5'];

    const toggleLevel = (level) => {
        setSelectedLevels(prevLevels =>
            prevLevels.includes(level)
                ? prevLevels.filter(l => l !== level)
                : [...prevLevels, level]
        );
    };

    const isAutomaticMode = mode === 'automatic';
    const isCustomMode = mode === 'custom';

    return (
        <div>
            <div className={isAutomaticMode ? 'opacity-50 pointer-events-none' : ''}>
                <h1 className="text-lg pt-16 pb-2 font-semibold">Choix de la difficulté des mails</h1>
                <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                        <Button
                            key={level}
                            variant={selectedLevels.includes(level) ? "default" : "secondary"}
                            onClick={() => toggleLevel(level)}
                            className="px-4 py-2"
                        >
                            {level}
                        </Button>
                    ))}
                </div>
            </div>
            <TopPSelector/>
            <div className="flex flex-row gap-4 max-sm:flex-col">
                <CalendarDateRangePicker/>
                <TimePicker/>
            </div>
            <div className={isAutomaticMode ? 'opacity-50 pointer-events-none' : ''}>
                <h2 className="text-lg pt-8 pb-4 font-semibold">Choisir les utilisateurs ou les groupes pour la campagne</h2>
                <div className="flex flex-row gap-4 justify-between -translate-y-2 max-sm:flex-col">
                    <ResearchUser/>
                    <ResearchGroups/>
                </div>
                <h3 className="pt-4">Instructions supplémentaires</h3>
                <Textarea />
                <div className="flex flex-col gap-2 pt-4">
                    <div className="flex items-center space-x-2">
                        <Switch id="switch1" size="sm" checked={isEnabledSwitch1} onCheckedChange={setIsEnabledSwitch1} />
                        <label htmlFor="switch1">Affiner les instructions à l'IA</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="switch2" size="sm" checked={isEnabledSwitch2} onCheckedChange={setIsEnabledSwitch2} />
                        <label htmlFor="switch2">Renforcer l'impact du mail</label>
                    </div>
                </div>
            </div>
        </div>
    );
};