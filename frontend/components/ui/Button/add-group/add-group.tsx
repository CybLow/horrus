import React, { useState, useRef } from 'react'
import { Button } from "@/components/ui/Shadcn/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Shadcn/dialog"
import { Input } from "@/components/ui/Shadcn/input"
import { Label } from "@/components/ui/Shadcn/label"
import { Plus, Upload } from 'lucide-react'
import Image from 'next/image'
import SearchBar from "@/components/ui/Searchbar/Searchbar";

export default function AddGroup() {
    const [groupPicture, setGroupPicture] = useState<string | null>(null)
    const [groupName, setGroupName] = useState('')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setGroupPicture(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (groupName.trim()) {
            // Proceed with form submission
            console.log('Group added:', { name: groupName, picture: groupPicture })
            // Reset form
            setGroupName('')
            setGroupPicture(null)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="h-[1.5rem] w-[1.5rem] text-[#FBFFFE] mr-2 hover:bg-[rgb(6, 111, 236, 0.8)]"/>
                    Ajouter un groupe
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] pt-2">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-semibold">Ajouter un groupe</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col items-center justify-center">
                            <div
                                className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                {groupPicture ? (
                                    <Image src={groupPicture} alt="Group" layout="fill" objectFit="cover"/>
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <Upload className="h-8 w-8 text-gray-400"/>
                                    </div>
                                )}
                            </div>
                            <Input
                                ref={fileInputRef}
                                id="picture"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            <p className="text-center mt-2">Photo du groupe</p>
                        </div>
                        <div>
                            <Label htmlFor="groupName">Nom du groupe</Label>
                            <Input
                                id="groupName"
                                className="mt-1"
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                                required
                            />
                        </div>
                        <Label htmlFor="SearchUser" className="translate-y-1/2">Ajouter des utilisateurs</Label>
                        <SearchBar/>
                    </div>
                    <DialogFooter className="sm:justify-end">
                        <Button type="button" variant="secondary">Annuler</Button>
                        <Button type="submit">Ajouter</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}