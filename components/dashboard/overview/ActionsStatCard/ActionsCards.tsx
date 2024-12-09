"use client"
import React, { useState, useEffect } from 'react';
import StructureCard from './StructureCard';

interface Action {
    label: string;
    value: number;
    ariaLabel: string;
}

const dangerousActionsData: Action[] = [
    { label: "Liens cliqués", value: 23, ariaLabel: "Pourcentage de liens dangereux cliqués : 23%" },
    { label: "Données transmises", value: 20, ariaLabel: "Pourcentage de données sensibles transmises : 20%" },
    { label: "Pièces jointes téléchargées", value: 5, ariaLabel: "Pourcentage de pièces jointes dangereuses téléchargées : 5%" }
];

const securityActionsData: Action[] = [
    { label: "Mails signalés", value: 57, ariaLabel: "Pourcentage de mails signalés comme suspects : 57%" },
    { label: "Mails supprimés", value: 10, ariaLabel: "Pourcentage de mails supprimés automatiquement : 10%" },
    { label: "Mails ajoutés aux spams", value: 6, ariaLabel: "Pourcentage de mails marqués comme spam : 6%" }
];

const SecurityDashboard: React.FC = () => {
    const [securityActions, setSecurityActions] = useState<Action[]>([]);
    const [dangerousActions, setDangerousActions] = useState<Action[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setTimeout(() => {
                setSecurityActions(securityActionsData);
                setDangerousActions(dangerousActionsData);
                setIsLoading(false);
            }, 1000);
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-4">
            <StructureCard title="Actions de sécurité" actions={securityActions} />
            <StructureCard title="Actions dangereuses" actions={dangerousActions} />
        </div>
    );
};

export default SecurityDashboard;