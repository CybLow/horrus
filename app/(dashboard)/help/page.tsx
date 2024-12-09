'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SearchBarHelpSection from '@/components/ui/Searchbar/Searchbar-help-section'
import { Card, CardContent } from "@/components/ui/Shadcn/card"
import ShowMeButton from '@/components/ui/Button/help-section/button1'

const faqItems = [
    { id: 1, question: "Signaler quand une campagne est terminée", answer: "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffg99999999999999999f9999999vjuievdinvieivosdffvoeivoeivosdffvoeivoeivoeivoedfvosdffvoeidvfvoeidvfkjvjeidfgowvlkjsdvflksdvflksdvflksdfvlkfvoeivoeive9999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" },
    { id: 2, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 2" },
    { id: 3, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 3" },
    { id: 4, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 4" },
    { id: 5, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 5" },
    { id: 6, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 6" },
    { id: 7, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 7" },
    { id: 8, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 8" },
    { id: 9, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 9" },
    { id: 10, question: "Signaler quand une campagne est terminée", answer: "Réponse pour la question 10" },
]

export default function HelpPage() {
    const [expandedItem, setExpandedItem] = useState<number | null>(null)

    const toggleItem = (id: number) => {
        setExpandedItem(prevExpandedItem => prevExpandedItem === id ? null : id)
    }

    return (
        <div className="w-full h-full p-4">
            <Card className="w-full">
                <CardContent>
                    <div className="relative mb-6 pt-4">
                        <SearchBarHelpSection/>
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((item) => (
                            <div key={item.id} className="border-b border-gray-200 pb-4">
                                <button
                                    className="flex justify-between items-center w-full text-left py-2 text-sm sm:text-base"
                                    onClick={() => toggleItem(item.id)}
                                    aria-expanded={expandedItem === item.id}
                                    aria-controls={`faq-answer-${item.id}`}
                                >
                                    <span className="font-medium pr-6">{item.question}</span>
                                    {expandedItem === item.id ? (
                                        <ChevronUp className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <ChevronDown className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                    )}
                                </button>
                                {expandedItem === item.id && (
                                    <div
                                        id={`faq-answer-${item.id}`}
                                        className="mt-2 text-sm sm:text-base text-gray-600"
                                    >
                                        <p className="mb-4 break-words">{item.answer}</p>
                                        <div className="flex justify-end">
                                            <ShowMeButton sectionId={item.id} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}