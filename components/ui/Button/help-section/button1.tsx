import { Button } from "@/components/ui/Shadcn/button"

interface ShowMeButtonProps {
    sectionId: number;
}

export default function ShowMeButton({ sectionId }: ShowMeButtonProps) {
    const handleClick = () => {
        console.log(`Redirection pour la section ${sectionId}`);
    };

    return (
        <Button
            onClick={handleClick}
        >
            Montre moi
        </Button>
    );
}