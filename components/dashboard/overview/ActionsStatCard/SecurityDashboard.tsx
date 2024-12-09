"use client"

import React from 'react'
import StructureCard from './StructureCard'

interface Action {
    label: string
    value: number
    ariaLabel: string
}

const securityActionsData: Action[] = [
    { label: "Mails signalés", value: 57, ariaLabel: "Pourcentage de mails signalés comme suspects : 57%" },
    { label: "Mails supprimés", value: 10, ariaLabel: "Pourcentage de mails supprimés automatiquement : 10%" },
    { label: "Mails ajoutés aux spams", value: 6, ariaLabel: "Pourcentage de mails marqués comme spam : 6%" }
]

const dangerousActionsData: Action[] = [
    { label: "Liens cliqués", value: 23, ariaLabel: "Pourcentage de liens dangereux cliqués : 23%" },
    { label: "Données transmises", value: 20, ariaLabel: "Pourcentage de données sensibles transmises : 20%" },
    { label: "Pièces jointes téléchargées", value: 5, ariaLabel: "Pourcentage de pièces jointes dangereuses téléchargées : 5%" }
]

export default function SecurityDashboard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StructureCard title="Actions de sécurité" actions={securityActionsData} />
            <StructureCard title="Actions dangereuses" actions={dangerousActionsData} />
        </div>
    )
}

