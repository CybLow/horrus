import React, { useState, useRef, useEffect, useCallback } from 'react'
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
import { Plus, Upload, User, UserCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Shadcn/select"
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

export default function AddUser() {
    const [profilePicture, setProfilePicture] = useState<string | null>(null)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        containScroll: 'trimSnaps'
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit()
        }
    }, [emblaApi])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePicture(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleProfileSelect = (type: 'custom' | 'male' | 'female') => {
        if (type === 'custom') {
            fileInputRef.current?.click()
        } else if (type === 'male') {
            setProfilePicture('/path-to-male-profile-picture.jpg')
        } else if (type === 'female') {
            setProfilePicture('/path-to-female-profile-picture.jpg')
        }
    }

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return re.test(String(email).toLowerCase())
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value
        setEmail(newEmail)
        if (newEmail && !validateEmail(newEmail)) {
            setEmailError('Veuillez entrer une adresse email valide')
        } else {
            setEmailError('')
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateEmail(email)) {
            // Proceed with form submission
            console.log('Form submitted with email:', email)
        } else {
            setEmailError('Veuillez entrer une adresse email valide')
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus className="h-[1.5rem] w-[1.5rem] text-[#FBFFFE] mr-2 hover:bg-[rgb(6, 111, 236, 0.8)]"/>
                    Ajouter un utilisateur
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] pt-2">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-semibold">Ajouter un utilisateur</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col items-center justify-center">
                            <div className="relative w-full max-w-xs">
                                <div className="overflow-hidden" ref={emblaRef}>
                                    <div className="flex">
                                        <div className="flex-[0_0_100%] min-w-0">
                                            <div
                                                className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
                                                onClick={() => handleProfileSelect('custom')}
                                            >
                                                {profilePicture ? (
                                                    <Image src={profilePicture} alt="Profile" layout="fill"
                                                           objectFit="cover"/>
                                                ) : (
                                                    <div
                                                        className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                        <Upload className="h-8 w-8 text-gray-400"/>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-center mt-2">Personnalisé</p>
                                        </div>
                                        <div className="flex-[0_0_100%] min-w-0">
                                            <div
                                                className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
                                                onClick={() => handleProfileSelect('female')}
                                            >
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <UserCircle className="h-12 w-12 text-gray-400"/>
                                                </div>
                                            </div>
                                            <p className="text-center mt-2">Femme</p>
                                        </div>
                                        <div className="flex-[0_0_100%] min-w-0">
                                            <div
                                                className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
                                                onClick={() => handleProfileSelect('male')}
                                            >
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <User className="h-12 w-12 text-gray-400"/>
                                                </div>
                                            </div>
                                            <p className="text-center mt-2">Homme</p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white"
                                    onClick={scrollPrev}
                                >
                                    <ChevronLeft className="h-5 w-5 text-gray-600"/>
                                </button>
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white"
                                    onClick={scrollNext}
                                >
                                    <ChevronRight className="h-5 w-5 text-gray-600"/>
                                </button>
                            </div>
                            <Input
                                ref={fileInputRef}
                                id="picture"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                            <div>
                                <Label htmlFor="lastName">Nom</Label>
                                <Input id="lastName" className="mt-1" />
                            </div>
                            <div>
                                <Label htmlFor="firstName">Prénom</Label>
                                <Input id="firstName" className="mt-1" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 items-center gap-4">
                            <div>
                                <Label htmlFor="sector">Secteur</Label>
                                <Input id="sector" className="mt-1" />
                            </div>
                            <div>
                                <Label htmlFor="department">Département</Label>
                                <Input id="department" className="mt-1" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                className="mt-1"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                        <div>
                            <Label htmlFor="group">Ajouter à un groupe</Label>
                            <Select>
                                <SelectTrigger className="w-full mt-1">
                                    <SelectValue placeholder="Sélectionner un groupe" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="group1">Groupe 1</SelectItem>
                                    <SelectItem value="group2">Groupe 2</SelectItem>
                                    <SelectItem value="group3">Groupe 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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