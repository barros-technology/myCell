import { z } from "zod";

export const createLeaderBodySChema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    phone: z.number(),
    address: z.string().max(255),
    password: z.string().min(6),
    gal: z.string()
});