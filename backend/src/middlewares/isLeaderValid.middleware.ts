import { NextFunction, Request, Response } from "express";
import { leaderDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class isLeaderIdValid{
    static execute( req: Request, res: Response, next: NextFunction){
        if(!leaderDatabase.some(leader => leader.id === Number(req.params.id))){
            throw new AppError(404, "Leader not found")
        }
        next();
    }
}