import React, { useState } from 'react'
import { Slider } from "@nextui-org/slider";
import { Input } from "@/components/ui/Shadcn/input"
import { X } from "lucide-react"

export default function MailCountSelector() {
    const [inputValue, setInputValue] = useState("10")
    const [sliderValue, setSliderValue] = useState(10)
    const sliderSteps = [1, 10, 25, 50, 75, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    const maxInputValue = 10000
    const maxSliderValue = 1000

    const handleSliderChange = (newValue: number | number[]) => {
        const value = Array.isArray(newValue) ? newValue[0] : newValue
        const closestStep = sliderSteps.reduce((prev, curr) =>
            Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
        )
        setSliderValue(closestStep)
        setInputValue(closestStep.toString())
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        const parsedValue = parseInt(newValue, 10)

        if (newValue === "" || (parsedValue >= 1 && parsedValue <= maxInputValue)) {
            setInputValue(newValue)
            if (!isNaN(parsedValue)) {
                if (parsedValue <= maxSliderValue) {
                    const closestStep = sliderSteps.reduce((prev, curr) =>
                        Math.abs(curr - parsedValue) < Math.abs(prev - parsedValue) ? curr : prev
                    )
                    setSliderValue(closestStep)
                } else {
                    setSliderValue(maxSliderValue)
                }
            }
        }
    }

    const clearInput = () => {
        setInputValue("")
        setSliderValue(sliderSteps[0])
    }

    return (
        <div className="w-full max-w-sm space-y-4 max-sm:max-w-none">
            <h3 className="font-medium pt-6">Nombre de mails à envoyer</h3>
            <div className="flex items-center space-x-2">
                <span className="text-sm">{sliderSteps[0]}</span>
                <Slider
                    value={sliderValue}
                    minValue={sliderSteps[0]}
                    maxValue={maxSliderValue}
                    step={1}
                    onChange={handleSliderChange}
                    className="flex-grow custom-slider max-sm:w-full"
                    classNames={{
                        track: "E2E8F0",
                    }}
                />
                <span className="text-sm">{maxSliderValue}+</span>
            </div>
            <div className="relative">
                <Input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="pr-8 max-sm:w-full"
                />
                <button
                    onClick={clearInput}
                    className="absolute text-[#333736] right-2 top-1/2 -translate-y-1/2"
                >
                    <X size={16} />
                </button>
            </div>
            <p className="text-sm -translate-y-3 text-[rgb(40,38,44,0.5)]">
                Valeur maximale : {maxInputValue}
            </p>
        </div>
    )
}