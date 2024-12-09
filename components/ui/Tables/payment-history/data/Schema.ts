import { z } from "zod";

export const taskSchema = z.object({
    facture: z.string(),
    methode: z.string(),
    prix: z.string(),
    date: z.string(),
});

export type Task = z.infer<typeof taskSchema>;