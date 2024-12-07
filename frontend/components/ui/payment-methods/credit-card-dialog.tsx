"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/Shadcn/dialog"
import { Input } from "@/components/ui/Shadcn/input"
import { Button } from "@/components/ui/Shadcn/button"
import { Label } from "@/components/ui/Shadcn/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/Shadcn/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Shadcn/select"
import { PlusCircle } from 'lucide-react'

interface PaypalDialogProps {
    isOpen: boolean
    onClose: () => void
}

export default function PaypalDialog({ isOpen, onClose }: PaypalDialogProps) {
    const [depositType, setDepositType] = useState("mensuel")
    const [selectedCard, setSelectedCard] = useState("5212")
    const [cards, setCards] = useState([
        { id: "5212", balance: 5212, name: "Source principale de capital" },
        { id: "7428", balance: 7428, name: "Compte CBDC" }
    ])
    const [showNewCardForm, setShowNewCardForm] = useState(false)
    const [newCard, setNewCard] = useState({
        nom: "",
        prenom: "",
        numero: "",
        dateExpiration: "",
        cvc: ""
    })

    const getDepositAmount = () => {
        return depositType === "mensuel" ? "973,5 €" : "11 682 €"
    }

    const handleConfirm = () => {
        console.log("PayPal Confirmé:", { depositType, selectedCard })
        onClose()
    }

    const handleAddNewCard = () => {
        if (newCard.nom && newCard.prenom && newCard.numero && newCard.dateExpiration && newCard.cvc) {
            const newCardEntry = {
                id: Date.now().toString(),
                balance: 0,
                name: `${newCard.nom} ${newCard.prenom}`
            }
            setCards([...cards, newCardEntry])
            setNewCard({ nom: "", prenom: "", numero: "", dateExpiration: "", cvc: "" })
            setShowNewCardForm(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Paiement mensuel</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="deposit">Dépôt</Label>
                            <div className="flex items-center space-x-2">
                                <Select value={depositType} onValueChange={setDepositType}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mensuel">Mensuel</SelectItem>
                                        <SelectItem value="annuel">Annuel</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Montant du dépôt : {getDepositAmount()}</p>
                            <p className="text-sm text-gray-500">Effectuez un dépôt du montant moyen calculé</p>
                        </div>
                        <div>
                            <Label>Type de carte</Label>
                            <RadioGroup value={selectedCard} onValueChange={setSelectedCard}>
                                {cards.map((card) => (
                                    <div key={card.id} className="flex items-center space-x-2">
                                        <RadioGroupItem value={card.id} id={`card-${card.id}`} />
                                        <Label htmlFor={`card-${card.id}`}>{card.balance.toLocaleString()} € - {card.name}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                            {!showNewCardForm && (
                                <Button variant="outline" onClick={() => setShowNewCardForm(true)} className="mt-2">
                                    <PlusCircle className="w-4 h-4 mr-2" />
                                    Ajouter une nouvelle carte
                                </Button>
                            )}
                            {showNewCardForm && (
                                <div className="mt-2 space-y-2">
                                    <Input
                                        placeholder="Nom"
                                        value={newCard.nom}
                                        onChange={(e) => setNewCard({...newCard, nom: e.target.value})}
                                    />
                                    <Input
                                        placeholder="Prénom"
                                        value={newCard.prenom}
                                        onChange={(e) => setNewCard({...newCard, prenom: e.target.value})}
                                    />
                                    <Input
                                        placeholder="Numéro de carte"
                                        value={newCard.numero}
                                        onChange={(e) => setNewCard({...newCard, numero: e.target.value})}
                                    />
                                    <Input
                                        placeholder="Date d'expiration (MM/AA)"
                                        value={newCard.dateExpiration}
                                        onChange={(e) => setNewCard({...newCard, dateExpiration: e.target.value})}
                                    />
                                    <Input
                                        placeholder="CVC"
                                        value={newCard.cvc}
                                        onChange={(e) => setNewCard({...newCard, cvc: e.target.value})}
                                    />
                                    <Button onClick={handleAddNewCard}>Ajouter la carte</Button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-64 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl shadow-lg flex flex-col justify-between p-4 text-white">
                            <div className="flex justify-between items-start">
                                <div className="text-2xl font-bold">VISA</div>
                                <div className="text-xl">+</div>
                            </div>
                            <div className="text-lg">**** **** **** 8841</div>
                            <div className="text-sm">Jax Crow</div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Fermer</Button>
                    <Button onClick={handleConfirm}>Confirmer</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}