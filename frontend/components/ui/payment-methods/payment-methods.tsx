"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/Shadcn/card"
import { Button } from "@/components/ui/Shadcn/button"
import { Banknote, CreditCard, PlusCircle } from 'lucide-react'
import BankTransferDialog from './bank-transfer-dialog'
import CreditCardDialog from './credit-card-dialog'
import PaypalDialog from './paypal-dialog'

const paymentMethods = [
    { id: 'bank', name: 'Virement bancaire', icon: Banknote, component: BankTransferDialog },
    { id: 'card', name: 'Carte bancaire', icon: CreditCard, component: CreditCardDialog },
    { id: 'paypal', name: 'Paypal', icon: CreditCard, component: PaypalDialog },
]

export default function PaymentMethods() {
    const [selectedMethod, setSelectedMethod] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleAddPayment = () => {
        if (selectedMethod) {
            setIsDialogOpen(true)
        } else {
            alert("Please select a payment method first")
        }
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false)
    }

    const SelectedDialog = selectedMethod ? paymentMethods.find(method => method.id === selectedMethod)?.component : null

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {paymentMethods.map((method) => (
                    <Card
                        key={method.id}
                        className={`flex items-center justify-center h-24 cursor-pointer border border-gray-200 ${selectedMethod === method.id ? 'ring-2 ring-primary' : ''}`}
                        onClick={() => setSelectedMethod(method.id)}
                    >
                        <CardContent className="flex flex-col items-center justify-center p-6">
                            <method.icon className="w-6 h-6 mb-2" />
                            <p className="text-sm font-medium">{method.name}</p>
                        </CardContent>
                    </Card>
                ))}
                <Card
                    className="flex items-center justify-center h-24 cursor-pointer border border-dashed border-gray-300"
                    onClick={handleAddPayment}
                >
                    <CardContent className="flex flex-col items-center justify-center p-6">
                        <PlusCircle className="w-6 h-6 mb-2" />
                        <p className="text-sm font-medium">Add card</p>
                    </CardContent>
                </Card>
            </div>
            {SelectedDialog && (
                <SelectedDialog
                    isOpen={isDialogOpen}
                    onClose={handleCloseDialog}
                />
            )}
        </div>
    )
}