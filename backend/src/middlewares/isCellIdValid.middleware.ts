import { NextFunction, Request, Response } from "express";
import { cellsDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsCellIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
     if(!cellsDatabase.some(cell => cell.id === Number(req.params.id))){
        throw new AppError(404, "Cell not found")
     }

        next();

    }
}