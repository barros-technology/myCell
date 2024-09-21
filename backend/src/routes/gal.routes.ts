import { Request, Response, Router } from "express";

export const galRouter = Router();

galRouter.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Leitura realizada com sucesso"});
})

galRouter.post("/", (req: Request, res: Response) => {
    return res.status(201).json({message: "Criação realizada com sucesso"});
})

galRouter.put("/", (req: Request, res: Response) => {
    return res.json({message: "Atualização realizada com sucesso!"});
})

galRouter.delete("/", (req: Request, res: Response) => {
    return res.json({message: "Exclusão realizada com sucesso"})
})