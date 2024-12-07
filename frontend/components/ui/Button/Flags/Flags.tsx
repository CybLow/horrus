import { Button } from "@/components/ui/Shadcn/button"
import Flag from 'react-flagkit';

export default function FlagsButton({ disabled }: { disabled: boolean }) {
    return (
        <div className="flex flex-row gap-4">
            <Button variant="secondary" className="w-[4rem]" disabled={disabled}>
                <Flag country="FR" size={30}/>
            </Button>
            <Button variant="secondary" className="w-[4rem]" disabled={disabled}>
                <Flag country="GB" size={30}/>
            </Button>
            <Button variant="secondary" className="w-[4rem]" disabled={disabled}>
                <Flag country="ES" size={30}/>
            </Button>
        </div>
    )
}