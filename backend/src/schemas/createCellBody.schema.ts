import { z } from "zod";
import { createMemberBodySchema } from "./createMemberBody.schema";

export const createCellBodySchema = z.object({
    id: z.number(),
    name: z.string(),
    address: z.string().max(255),
    cellDay: z.string().min(3),
    timeCell: z.string(),
    member: z.array(createMemberBodySchema).optional()
});