"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Shadcn/card"
import { Input } from "@/components/ui/Shadcn/input"
import { Button } from "@/components/ui/Shadcn/button"

export default function BankTransferPayment() {
    const [bankInfo, setBankInfo] = useState({ iban: '', bic: '' })

    useEffect(() => {
        // Simuler le chargement des informations sauvegardées
        const savedInfo = localStorage.getItem('bankTransferInfo')
        if (savedInfo) {
            setBankInfo(JSON.parse(savedInfo))
        }
    }, [])

    const handleSave = () => {
        localStorage.setItem('bankTransferInfo', JSON.stringify(bankInfo))
        alert('Informations de virement bancaire sauvegardées')
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Informations de virement bancaire</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <Input
                    placeholder="IBAN"
                    value={bankInfo.iban}
                    onChange={(e) => setBankInfo({ ...bankInfo, iban: e.target.value })}
                />
                <Input
                    placeholder="BIC"
                    value={bankInfo.bic}
                    onChange={(e) => setBankInfo({ ...bankInfo, bic: e.target.value })}
                />
                <Button onClick={handleSave}>Sauvegarder</Button>
            </CardContent>
        </Card>
    )
}