"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/Shadcn/button"
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
                <div className={styles.chartWrapper}>
                    <ChartContainer
                        config={chartConfig}
                        className={styles.chartContainer}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart
                                data={chartData}
                                startAngle={180}
                                endAngle={0}
                                innerRadius={90}
                                outerRadius={140}
                                barSize={25}
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
                                                            y={(viewBox.cy || 0) - 15}
                                                            className={styles.chartValue}
                                                        >
                                                            {totalVisitors.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 15}
                                                            className={styles.chartLabel}
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
                                    fill="#0066FF"
                                    className="stroke-transparent stroke-2"
                                />
                                <RadialBar
                                    dataKey="mobile"
                                    fill="#E8EEFF"
                                    stackId="a"
                                    cornerRadius={5}
                                    className="stroke-transparent stroke-2"
                                />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.title}>Comptabilité campagne trimestre 3 2024</p>
                    <Button
                        variant="outline"
                        className={styles.button}
                    >
                        Afficher
                    </Button>
                </div>
            </CardContent>
            <CardFooter className={styles.cardFooter}>
                <Button
                    variant="ghost"
                    size="icon"
                    className={styles.navButton}
                    aria-label="Previous chart"
                >
                    <ChevronLeft className="h-4 w-4 text-white"/>
                </Button>
                <div className={styles.navText}>
                    1/5
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className={styles.navButton}
                    aria-label="Next chart"
                >
                    <ChevronRight className="h-4 w-4 text-white"/>
                </Button>
            </CardFooter>
        </Card>
    )
}

