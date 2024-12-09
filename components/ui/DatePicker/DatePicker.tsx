import * as React from "react"
import { CalendarDays } from "lucide-react"
import { addDays, format, isWithinInterval, isSameDay, isBefore, startOfDay } from "date-fns"
import { fr } from 'date-fns/locale'
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Shadcn/button"
import { Calendar } from "@/components/ui/Shadcn/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/Shadcn/popover"

export default function CalendarDateRangePicker({
                                                    className,
                                                }: React.HTMLAttributes<HTMLDivElement>) {
    const today = startOfDay(new Date())
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: today,
        to: addDays(today, 7),
    })

    const isDateInRange = (day: Date) => {
        return date?.from && date?.to && isWithinInterval(day, { start: date.from, end: date.to })
    }

    const isDateBoundary = (day: Date) => {
        return (date?.from && isSameDay(day, date.from)) || (date?.to && isSameDay(day, date.to))
    }

    const isPastDate = (day: Date) => isBefore(day, today)

    return (
        <div className={cn("grid gap-2", className)}>
            <h1>Entrer les dates de la campagne</h1>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant="secondary"
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarDays className="mr-2 h-5 w-5" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "d MMM y", { locale: fr })} -{" "}
                                    {format(date.to, "d MMM y", { locale: fr })}
                                </>
                            ) : (
                                format(date.from, "d MMM y", { locale: fr })
                            )
                        ) : (
                            <span>Choisir une date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={today}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        disabled={isPastDate}
                        modifiers={{
                            inRange: isDateInRange,
                            boundary: isDateBoundary
                        }}
                        modifiersStyles={{
                            inRange: { backgroundColor: 'rgb(208 222 255)', color: '#045BC3', borderColor: '#066FEC' },
                            boundary: { backgroundColor: 'rgb(59 130 246)', color: '#FBFFFE' }
                        }}
                        locale={fr}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}