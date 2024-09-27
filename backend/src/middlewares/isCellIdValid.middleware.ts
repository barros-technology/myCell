import { NextFunction, Request, Response } from "express";
import { cellsDatabase } from "../database/database";

export class IsCellIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const cellFound = cellsDatabase.find(
            (cell) => cell.id === Number(req.params.id)

        );

        if(!cellFound) {
            
            return res.status(404).json({ message: "Cell not found. "});

        }
        res.locals.cell = cellFound;

        return next();

    }
}