import { Request, Response, Router } from "express";
import { CellControllers } from "../controllers/cell.controllers";
import { IsCellIdValid } from "../middlewares/isCellIdValid.middleware";

export const cellRouter = Router();

const cellControllers = new CellControllers();

cellRouter.get("/", cellControllers.getCells);

cellRouter.get("/:id", IsCellIdValid.execute, cellControllers.getOneCell);

cellRouter.post("/", cellControllers.createCell);

cellRouter.put("/:id", IsCellIdValid.execute, cellControllers.updateCell);

cellRouter.patch("/:id", IsCellIdValid.execute, cellControllers.partialUpdateCell);

cellRouter.delete("/:id", IsCellIdValid.execute, cellControllers.deleteCell);

//Agora falta atualizar o router do gal, leader e member