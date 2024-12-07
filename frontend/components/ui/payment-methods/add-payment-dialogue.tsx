"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/Shadcn/dialog"
import { Input } from "@/components/ui/Shadcn/input"
import { Button } from "@/components/ui/Shadcn/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/Shadcn/radio-group"
import { Label } from "@/components/ui/Shadcn/label"

interface AddPaymentDialogProps {
    isOpen: boolean
    onClose: () => void
    paymentMethod: string
}

export default function AddPaymentDialog({ isOpen, onClose, paymentMethod }: AddPaymentDialogProps) {
    const [deposit, setDeposit] = useState("973.5")
    const [selectedCard, setSelectedCard] = useState("5212")

    const handleConfirm = () => {
        // Handle confirmation logic here
        console.log("Confirmed:", { deposit, selectedCard })
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Monthly payment</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="deposit" className="text-right">
                            Deposit
                        </Label>
                        <Input
                            id="deposit"
                            value={`$${deposit} (monthly)`}
                            className="col-span-3"
                            onChange={(e) => setDeposit(e.target.value.replace(/[^0-9.]/g, ''))}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="card-type" className="text-right">
                            Type of card
                        </Label>
                        <RadioGroup
                            defaultValue={selectedCard}
                            onValueChange={setSelectedCard}
                            className="col-span-3"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="5212" id="card-5212" />
                                <Label htmlFor="card-5212">$5,212 - Main source of capital</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="7428" id="card-7428" />
                                <Label htmlFor="card-7428">$7,428 - CBDC account</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Close</Button>
                    <Button onClick={handleConfirm}>Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}