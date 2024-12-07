import { Button } from '@/components/ui/Shadcn/button';
import { Plus } from 'lucide-react';

const AddFileButton = ({ onClick, disabled }) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            className="w-full font-semibold text[#FBFFFE] text-base"
        >
            <Plus className="h-[1.5rem] w-[1.5rem] text-[#FBFFFE] mr-2 hover:bg-[rgb(6, 111, 236, 0.8)]"/>
            Ajouter un fichier
        </Button>
    );
};

export default AddFileButton;