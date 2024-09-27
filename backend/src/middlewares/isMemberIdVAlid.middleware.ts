import { NextFunction, Request, Response } from "express";
import { memberDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class IsMemberIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!memberDatabase.some( member => member.id === Number(req.params.id))){
            throw new AppError(404, "Member not found")
        }
        next();
    }
}