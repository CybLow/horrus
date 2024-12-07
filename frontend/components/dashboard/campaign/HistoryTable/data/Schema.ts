import { z } from "zod"

export const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    label: z.string(),
    dateStart: z.string(),
    dateEnd: z.string(),
    attachments: z.string().optional(), //z.array(z.string()).optional(),
})

export type Task = z.infer<typeof taskSchema>