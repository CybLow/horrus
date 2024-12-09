"use client"
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/Shadcn/card';
import { Paperclip, X } from 'lucide-react';
import { Checkbox } from '@nextui-org/react';
import { Input } from '@/components/ui/Shadcn/input';
import AddFileButton from '@/components/ui/Button/add-link-attachement-campaign/AddFile';

const MAX_FILES = 10;

const RansomwareCard = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    const handleCardClick = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            setFiles([]);
            setError('');
        }
    };

    const handleCheckboxChange = (e) => {
        e.stopPropagation();
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        if (!newCheckedState) {
            setFiles([]);
            setError('');
        }
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        if (files.length + newFiles.length > MAX_FILES) {
            setError(`Vous ne pouvez pas ajouter plus de ${MAX_FILES} fichiers.`);
            return;
        }
        setFiles([...files, ...newFiles]);
        setError('');
    };

    const handleAddFile = () => {
        fileInputRef.current.click();
    };

    const handleRemoveFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
        setError('');
    };

    return (
        <div className="w-full space-y-4">
            <Card className="border border-[rgb(40,38,44,0.3)] hover:border-[rgb(40,38,44,0.5)] transition-colors duration-200 cursor-pointer" onClick={handleCardClick}>
                <CardContent className="flex flex-row p-4 ">
                    <div className="flex flex-col flex-grow h-[6rem] max-xl:h-[7.5rem] max-md:h-[6rem]">
                        <div className="flex flex-row items-start space-x-4 pb-4">
                            <Paperclip className="w-6 h-6 text-[#333736]"/>
                            <h2 className="font-semibold text-lg">Ransomware</h2>
                        </div>
                        <p className="text-md text-[#333736]">
                            Une pièce jointe malveillante à télécharger est incluse dans l'e-mail.
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
            {isChecked && (
                <div className="space-y-2 mt-4">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        multiple
                    />
                    <AddFileButton
                        onClick={handleAddFile}
                        disabled={files.length >= MAX_FILES}
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {files.map((file, index) => (
                        <div key={index} className="relative">
                            <Input
                                type="text"
                                value={file.name}
                                readOnly
                                className="w-full pr-10 rounded-md border border-input bg-background"
                            />
                            <button
                                onClick={() => handleRemoveFile(index)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    ))}
                    <p className="text-sm text-gray-500">
                        {files.length} / {MAX_FILES} fichiers ajoutés
                    </p>
                </div>
            )}
        </div>
    );
};

export default RansomwareCard;