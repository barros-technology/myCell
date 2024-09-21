import { Request, Response, Router } from "express";

export const leaderRouter = Router();

leaderRouter.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Leitura realizada com sucesso"});
})

leaderRouter.post("/", (req: Request, res: Response) => {
    return res.status(201).json({message: "Criação realizada com sucesso"});
})

leaderRouter.put("/", (req: Request, res: Response) => {
    return res.json({message: "Atualização realizada com sucesso!"});
})

leaderRouter.delete("/", (req: Request, res: Response) => {
    return res.json({message: "Exclusão realizada com sucesso"})
})