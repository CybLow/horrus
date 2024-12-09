'use client'

import { useState, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Check, ZoomIn, ZoomOut } from 'lucide-react'
import { Dialog, DialogContent } from "@/components/ui/Shadcn/dialog"
import { Button } from "@/components/ui/Shadcn/button"
import { Card, CardContent, CardFooter } from "@/components/ui/Shadcn/card"
import { motion, AnimatePresence } from "framer-motion"

const images = [
    '/images/affiche1.jpg',
    '/images/affiche2.png',
    '/images/affiche3.png',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
]

export default function Lightbox() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [selectedImages, setSelectedImages] = useState<number[]>([])
    const [scale, setScale] = useState(1)
    const lightboxRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (isOpen && lightboxRef.current) {
            lightboxRef.current.focus()
        }
    }, [isOpen])

    useEffect(() => {
        setScale(1)
    }, [currentImageIndex])

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index)
        setIsOpen(true)
    }

    const closeLightbox = () => {
        setIsOpen(false)
        setScale(1)
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const handleCardClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        if (!(event.target as HTMLElement).closest('button')) {
            openLightbox(index)
        }
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        event.stopPropagation()
        setSelectedImages(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        )
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            nextImage()
        } else if (event.key === 'ArrowLeft') {
            prevImage()
        } else if (event.key === 'Escape') {
            closeLightbox()
        }
    }

    const handleZoomIn = () => {
        setScale(prevScale => Math.min(prevScale + 0.5, 3))
    }

    const handleZoomOut = () => {
        setScale(prevScale => Math.max(prevScale - 0.5, 1))
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Galerie d'images</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <Card
                        key={index}
                        className={`overflow-hidden cursor-pointer relative rounded-lg border border-gray-200 shadow-md ${selectedImages.includes(index) ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={(e) => handleCardClick(e, index)}
                    >
                        <CardContent className="p-4">
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-auto rounded-md"
                            />
                            <AnimatePresence>
                                {selectedImages.includes(index) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="absolute top-6 left-6 bg-blue-500 rounded-full p-1"
                                    >
                                        <Check className="h-4 w-4 text-white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Button
                                className={`w-full rounded-md ${selectedImages.includes(index) ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                                onClick={(e) => handleButtonClick(e, index)}
                            >
                                {selectedImages.includes(index) ? 'Sélectionné' : 'Visionner le modèle'}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Dialog open={isOpen} onOpenChange={closeLightbox}>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
                    <div
                        ref={lightboxRef}
                        className="relative w-full h-full overflow-auto"
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                    >
                        <div className="min-h-full flex items-center justify-center">
                            <img
                                ref={imageRef}
                                src={images[currentImageIndex]}
                                alt={`Image en plein écran ${currentImageIndex + 1}`}
                                className="max-w-none"
                                style={{
                                    transform: `scale(${scale})`,
                                    transition: 'transform 0.2s ease-in-out',
                                    cursor: scale > 1 ? 'move' : 'default'
                                }}
                            />
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={closeLightbox}
                        >
                            <X className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="bg-black/50 hover:bg-black/70 text-white"
                                onClick={handleZoomOut}
                                disabled={scale === 1}
                            >
                                <ZoomOut className="h-6 w-6" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="bg-black/50 hover:bg-black/70 text-white"
                                onClick={handleZoomIn}
                                disabled={scale === 3}
                            >
                                <ZoomIn className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}