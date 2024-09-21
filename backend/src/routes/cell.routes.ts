import { Request, Response, Router } from "express";

export const cellRouter = Router();

cellRouter.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Leitura realizada com sucesso"});
})

cellRouter.post("/", (req: Request, res: Response) => {
    return res.status(201).json({message: "Criação realizada com sucesso"});
})

cellRouter.put("/", (req: Request, res: Response) => {
    return res.json({message: "Atualização realizada com sucesso!"});
})

cellRouter.delete("/", (req: Request, res: Response) => {
    return res.json({message: "Exclusão realizada com sucesso"})
})