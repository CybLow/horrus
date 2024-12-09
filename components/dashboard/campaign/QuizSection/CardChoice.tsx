import { useState } from 'react';
import { HelpCircle, Rocket, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Shadcn/card';

const DifficultyCard = ({ icon: Icon, title, questions, isSelected, onClick }) => (
    <Card
        className={`bg-[#FBFFFE] border-2 rounded-lg p-4 flex flex-col items-center justify-center space-y-2 w-full cursor-pointer transition-all duration-200 
        ${isSelected ? 'border-[rgba(40,38,44,0.5)]' : 'border-[rgba(40,38,44,0.3)]'} 
        hover:border-[rgba(40,38,44,0.5)]`}
        onClick={onClick}
    >
        <CardContent className="flex flex-col items-center justify-center p-0">
            <Icon className="w-8 h-8 text-[#333736]"/>
            <h3 className="font-semibold text-[#333736] text-lg ">{title}</h3>
            <p className="text-sm text-[#333736]">{questions} questions</p>
        </CardContent>
    </Card>
);

const DifficultyCards = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const difficulties = [
        { id: 'beginner', icon: HelpCircle, title: 'Débutant', questions: 3 },
        { id: 'intermediate', icon: Rocket, title: 'Intermédiaire', questions: 4 },
        { id: 'expert', icon: Shield, title: 'Expert', questions: 5 },
    ];

    const handleCardClick = (id) => {
        setSelectedCard(id);
    };

    return (
        <div className="flex flex-row justify-center w-full gap-4 max-sm:flex-col">
            {difficulties.map((difficulty) => (
                <DifficultyCard
                    key={difficulty.id}
                    icon={difficulty.icon}
                    title={difficulty.title}
                    questions={difficulty.questions}
                    isSelected={selectedCard === difficulty.id}
                    onClick={() => handleCardClick(difficulty.id)}
                />
            ))}
        </div>
    );
};

export default DifficultyCards;