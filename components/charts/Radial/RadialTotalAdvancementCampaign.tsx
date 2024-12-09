"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { Button } from "@/components/ui/Shadcn/button";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/Shadcn/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/Shadcn/chart"
import styles from './RadialTotalAdvancementCampaign.module.css'

const chartData = [{desktop: 1260, mobile: 570 }]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function RadialTotalAdvancementCampaign() {
    const totalVisitors = chartData[0].desktop + chartData[0].mobile

    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                <ChartContainer
                    config={chartConfig}
                    className={styles.chartContainer}
                >
                    <RadialBarChart
                        data={chartData}
                        endAngle={180}
                        innerRadius={90}
                        outerRadius={175}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={
                            <ChartTooltipContent
                                hideLabel
                                className="border-[rgb(44, 38, 38, 0.3)] w-full"
                            />}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 22}
                                                    className="text-2xl text-[#333736] font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 4}
                                                    className="text-base"
                                                >
                                                    12j restants
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="desktop"
                            stackId="a"
                            cornerRadius={5}
                            fill="var(--color-desktop)"
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="mobile"
                            fill="var(--color-mobile)"
                            stackId="a"
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                        />
                    </RadialBarChart>
                </ChartContainer>
                <div className={styles.textContainer}>
                    <p className={styles.title}>Comptabilité campagne trimestre 3 2024</p>
                    <Button variant="secondary" className={styles.button}>Afficher</Button>
                </div>
            </CardContent>
            <CardFooter className={styles.cardFooter}>
                <Button className={styles.navButton} aria-label="Next chart left">
                    <ChevronLeft className="text-[rgba(51,55,54,0.85)]"/>
                </Button>
                <div className={styles.navText}>
                    1/5
                </div>
                <Button className={styles.navButton} aria-label="Next chart right">
                    <ChevronRight className="text-[rgba(51,55,54,0.85)]"/>
                </Button>
            </CardFooter>
        </Card>
    )
}