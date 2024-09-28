import { z } from "zod";


export const createMemberBodySchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    phone: z.number(),
    address: z.string(),
    cell: z.string().optional(),
});