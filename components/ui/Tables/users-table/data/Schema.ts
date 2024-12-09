import { z } from "zod";

export const taskSchema = z.object({
    id: z.string(),
    departement: z.string(),
    sector: z.string(),
    success: z.string(),
    group: z.array(
        z.object({
            name: z.string(),
            avatar: z.string()
        })
    ),
    actions: z.string(),
});

export type Task = z.infer<typeof taskSchema>;