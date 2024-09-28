import { z } from "zod";
import { createMemberBodySchema } from "./createMemberBody.schema";
import { createCellBodySchema } from "./createCellBody.schema";

export const createGalBodySchema = z.object({
    id: z.number(),
    name: z.string().max(20),
    address: z.string().max(255),
    cell: z.array(createCellBodySchema).optional(),
    member: z.array(createMemberBodySchema).optional()
    
})