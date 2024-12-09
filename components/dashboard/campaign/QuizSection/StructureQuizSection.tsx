import{ useState } from 'react';
import { Switch } from "@nextui-org/react";
import DifficultyCard from './CardChoice';
import QuizChoice from '@/components/ui/Dropdown/QuizChoice/QuizChoice.tsx';
import EvaluationCustomizer from './CustomEvaluation';

export default function StructureQuizSection() {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleSwitchChange = (checked: boolean) => {
        setIsEnabled(checked);
    };

    return (
        <div>
            <div className="flex items-center space-x-2 mb-4">
                <Switch
                    isSelected={isEnabled}
                    onValueChange={handleSwitchChange}
                    size="sm"
                >
                    Quiz
                </Switch>
            </div>
            {isEnabled && (
                <>
                    <h1 className="text-[#333736] py-2">Renforcer l'apprentissage avec un quiz interactif pour découvrir et apprendre de la cybersécurité</h1>
                    <DifficultyCard/>
                    <div className="pt-4 pb-8">
                        <QuizChoice />
                    </div>
                    <EvaluationCustomizer />
                </>
            )}
        </div>
    );
}