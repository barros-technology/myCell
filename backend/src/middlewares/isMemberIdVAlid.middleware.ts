import { NextFunction, Request, Response } from "express";
import { memberDatabase } from "../database/database";

export class IsMemberIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        const memberFound = memberDatabase.find(
            (member) => member.id === Number(req.params.id)
        );

        if(!memberFound) {
            return res.status(404).json({ message: "Member not found. "});
        }
        res.locals.member = memberFound;

        return next();
    }
}