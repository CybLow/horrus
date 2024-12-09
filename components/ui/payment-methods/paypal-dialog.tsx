"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/Shadcn/dialog"
import { Input } from "@/components/ui/Shadcn/input"
import { Button } from "@/components/ui/Shadcn/button"
import { Label } from "@/components/ui/Shadcn/label"

interface PaypalDialogProps {
    isOpen: boolean
    onClose: () => void
}

export default function PaypalDialog({ isOpen, onClose }: PaypalDialogProps) {
    const [email, setEmail] = useState("")

    const handleConfirm = () => {
        console.log("PayPal Confirmed:", { email })
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add PayPal Account</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="paypal-email" className="text-right">
                            PayPal Email
                        </Label>
                        <Input
                            id="paypal-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button onClick={handleConfirm}>Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}