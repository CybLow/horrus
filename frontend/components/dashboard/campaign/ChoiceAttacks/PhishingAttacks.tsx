"use client"
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Shadcn/card';
import { Link, X } from 'lucide-react';
import { Checkbox } from '@nextui-org/react';
import { Input } from '@/components/ui/Shadcn/input';
import AddLinkButton from "@/components/ui/Button/add-link-attachement-campaign/AddLink";
import { z } from 'zod';

const urlSchema = z.string().url();
const MAX_LINKS = 10;

const PhishingCard = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [links, setLinks] = useState([]);
    const [currentLink, setCurrentLink] = useState('');
    const [error, setError] = useState('');

    const handleCardClick = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            setLinks([]);
            setCurrentLink('');
            setError('');
        }
    };

    const handleCheckboxChange = (e) => {
        e.stopPropagation();
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        if (!newCheckedState) {
            setLinks([]);
            setCurrentLink('');
            setError('');
        }
    };

    const handleLinkChange = (e) => {
        setCurrentLink(e.target.value);
        setError('');
    };

    const handleAddLink = () => {
        if (links.length >= MAX_LINKS) {
            setError(`Vous ne pouvez pas ajouter plus de ${MAX_LINKS} liens.`);
            return;
        }

        try {
            urlSchema.parse(currentLink);
            setLinks([...links, currentLink]);
            setCurrentLink('');
            setError('');
        } catch (err) {
            setError('Veuillez entrer une URL valide');
        }
    };

    const handleRemoveLink = (index) => {
        setLinks(links.filter((_, i) => i !== index));
        setError('');
    };

    return (
        <div className="w-full space-y-4">
            <div className="border border-[rgb(40,38,44,0.3)] hover:border-[rgb(40,38,44,0.5)] rounded-lg transition-colors duration-200 cursor-pointer">
                <Card className="border-none shadow-none" onClick={handleCardClick}>
                    <CardContent className="flex flex-row p-4">
                        <div className="flex flex-col flex-grow h-[6rem] max-xl:h-[7.5rem] max-md:h-[6rem]">
                            <div className="flex flex-row items-start space-x-4 pb-4">
                                <Link className="w-6 h-6 text-[#333736]"/>
                                <h2 className="font-semibold text-lg">Phishing</h2>
                            </div>
                            <p className="text-md text-[#333736]">
                                Un lien dans l'e-mail mène vers une fausse page web pour récupérer les données des
                                utilisateurs.
                            </p>
                        </div>
                        <Checkbox
                            className="ml-2"
                            size="lg"
                            isSelected={isChecked}
                            onChange={handleCheckboxChange}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </CardContent>
                </Card>
            </div>
            {isChecked && (
                <div className="space-y-2">
                    <div className="flex flex-col space-y-2">
                        <Input
                            type="url"
                            placeholder="Entrer un lien"
                            value={currentLink}
                            onChange={handleLinkChange}
                            className={`flex-grow ${error ? 'border-red-500' : ''}`}
                            disabled={links.length >= MAX_LINKS}
                        />
                        <AddLinkButton
                            onClick={handleAddLink}
                            disabled={links.length >= MAX_LINKS}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {links.map((link, index) => (
                        <div key={index} className="relative">
                            <Input
                                type="url"
                                value={link}
                                readOnly
                                className="w-full pr-10"
                            />
                            <button
                                onClick={() => handleRemoveLink(index)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    ))}
                    <p className="text-sm text-gray-500">
                        {links.length} / {MAX_LINKS} liens ajoutés
                    </p>
                </div>
            )}
        </div>
    );
};

export default PhishingCard;