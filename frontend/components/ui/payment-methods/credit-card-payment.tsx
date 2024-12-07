"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/Shadcn/button"
import AddPaymentDialog from './add-payment-dialogue'

export default function CreditCardPayment() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [savedCards, setSavedCards] = useState([])

    useEffect(() => {
        const savedInfo = localStorage.getItem('creditCardInfo')
        if (savedInfo) {
            setSavedCards(JSON.parse(savedInfo))
        }
    }, [])

    const handleAddCard = () => {
        setIsDialogOpen(true)
    }

    return (
        <div>
            {savedCards.length > 0 ? (
                savedCards.map((card, index) => (
                    <div key={index} className="mb-2">
                        Card ending in {card.number.slice(-4)}
                    </div>
                ))
            ) : (
                <p>No saved cards</p>
            )}
            <Button onClick={handleAddCard}>Add Credit Card</Button>
            <AddPaymentDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                paymentMethod="card"
            />
        </div>
    )
}