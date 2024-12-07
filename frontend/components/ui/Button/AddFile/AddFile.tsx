import React, { useState } from 'react';
import { Button } from "@/components/ui/Shadcn/button";
import { Input } from "@/components/ui/Shadcn/input";
import { PaperclipIcon } from "lucide-react";
import { z } from 'zod';

const fileSchema = z.instanceof(File).refine((file) => file.size <= 5000000, {
    message: "Le fichier doit être inférieur à 5 Mo.",
});

export const FileUploadButton = () => {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            try {
                fileSchema.parse(selectedFile);
                setFile(selectedFile);
                setError(null);
            } catch (err) {
                if (err instanceof z.ZodError) {
                    setError(err.errors[0].message);
                }
            }
        }
    };

    return (
        <div className="flex flex-col justify-start gap-4">
            <Input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
            />
            <Button
                asChild
                variant="outline"
                className="w-full h-10 px-3 justify-start"
            >
                <label htmlFor="file-upload" className="cursor-pointer flex items-center w-full">
                    <PaperclipIcon className="w-4 h-4 text-[#333736] mr-2 flex-shrink-0" />
                    <span className="text-sm text-[#333736] truncate">
                        {file ? file.name : "Importer un contenu personnalisé"}
                    </span>
                </label>
            </Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};