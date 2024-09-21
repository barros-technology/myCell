import { Request, Response, Router } from "express";

export const membersRouter = Router();

membersRouter.get("/", (req: Request, res: Response) => {
    return res.json({ message: "Leitura realizada com sucesso!"});
})

membersRouter.post("/", (req: Request, res: Response) => {
    return res.status(201).json({message: "Criação realizada com sucesso"});
})

membersRouter.put("/", (req: Request, res: Response) => {
    return res.json({message: "Atualização realizada com sucesso!"});
})

membersRouter.delete("/", (req: Request, res: Response) => {
    return res.json({message: "Exclusão realizada com sucesso"})
})