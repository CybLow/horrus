"use client"
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Stepper from '@/components/ui/Stepper/Stepper';
import { Button } from "@/components/ui/Shadcn/button";
import { Card } from "@/components/ui/Shadcn/card";
import ConfirmationDialog from '@/components/ui/PopUp/validation-create-campaign.tsx';

const steps = [
    { name: 'Informations générales', path: '/campagne/create-campaign/generals-informations' },
    { name: 'Sensibilisation', path: '/campagne/create-campaign/sensibilisation' },
    { name: 'Programmation', path: '/campagne/create-campaign/schedule' }
];

const StepperLayout = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const currentStep = steps.findIndex(step => pathname.startsWith(step.path));
    const isModelesPage = pathname.includes('modeles');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleNavigation = (action) => {
        switch(action) {
            case 'cancel':
                if (isModelesPage) {
                    router.push('/campagne/create-campaign/sensibilisation');
                } else {
                    router.push('/campagne');
                }
                break;
            case 'next':
                if (currentStep < steps.length - 1) {
                    router.push(steps[currentStep + 1].path);
                }
                break;
            case 'prev':
                if (currentStep > 0) {
                    router.push(steps[currentStep - 1].path);
                }
                break;
            case 'validate':
                if (isModelesPage) {
                    router.push('/campagne/create-campaign/sensibilisation');
                } else if (pathname === '/campagne/create-campaign/schedule') {
                    setIsDialogOpen(true);
                } else {
                    console.log('Validating and submitting...');
                }
                break;
        }
    };

    const handleConfirm = () => {
        setIsDialogOpen(false);
        console.log('Campaign confirmed and launched');
        // Add logic here to actually launch the campaign
    };

    const renderButtons = () => {
        if (isModelesPage) {
            return (
                <>
                    <Button variant="secondary" onClick={() => handleNavigation('cancel')}>Annuler</Button>
                    <Button onClick={() => handleNavigation('validate')}>Valider</Button>
                </>
            );
        } else if (currentStep === 0) {
            return (
                <>
                    <Button variant="secondary" onClick={() => handleNavigation('cancel')}>Annuler</Button>
                    <Button onClick={() => handleNavigation('next')}>Suivant</Button>
                </>
            );
        } else if (currentStep === steps.length - 1) {
            return (
                <>
                    <Button variant="secondary" onClick={() => handleNavigation('prev')}>Précédent</Button>
                    <Button onClick={() => handleNavigation('validate')}>Valider</Button>
                </>
            );
        } else {
            return (
                <>
                    <Button variant="secondary" onClick={() => handleNavigation('prev')}>Précédent</Button>
                    <Button onClick={() => handleNavigation('next')}>Suivant</Button>
                </>
            );
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Card className="flex flex-col h-full bg-[#FBFFFE]">
                <div className="flex-shrink-0 p-4">
                    <Stepper steps={steps} />
                </div>
                <div className="flex-grow overflow-auto p-4 scrollbar-none">
                    {children}
                </div>
                <div className="flex-shrink-0 flex justify-end gap-6 p-4">
                    {renderButtons()}
                </div>
            </Card>
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={handleConfirm}
                campaignName="Nom de la campagne"
            />
        </div>
    );
};

export default StepperLayout;