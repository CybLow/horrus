"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/Shadcn/dialog"
import { Input } from "@/components/ui/Shadcn/input"
import { Button } from "@/components/ui/Shadcn/button"
import { Label } from "@/components/ui/Shadcn/label"

interface BankTransferDialogProps {
    isOpen: boolean
    onClose: () => void
}

export default function BankTransferDialog({ isOpen, onClose }: BankTransferDialogProps) {
    const [iban, setIban] = useState("")
    const [bic, setBic] = useState("")

    const handleConfirm = () => {
        console.log("Bank Transfer Confirmed:", { iban, bic })
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Bank Transfer Details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="iban" className="text-right">
                            IBAN
                        </Label>
                        <Input
                            id="iban"
                            value={iban}
                            onChange={(e) => setIban(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="bic" className="text-right">
                            BIC
                        </Label>
                        <Input
                            id="bic"
                            value={bic}
                            onChange={(e) => setBic(e.target.value)}
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