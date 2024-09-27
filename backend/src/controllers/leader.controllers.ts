import { Request, Response } from "express";
import { MembersServices } from "../services/members.services";
import { LeadersServices } from "../services/leaders.services";
import { ILeaders } from "../interfaces/ILeaders";
import { generateId, leaderDatabase } from "../database/database";

export class LeaderControllers {
    private leaderServices: LeadersServices;

    constructor() {
        this.leaderServices = new LeadersServices();
    }

    getLeaders(req: Request, res: Response): Response {
        const response = this.leaderServices.getLeaders();
        return res.status(200).json(response);
    }

    getOneLeader(req: Request, res: Response): Response {
        const response = this.leaderServices.getOneLeader(req.params.id);
        if (!response) {
            return res.status(404).json({ message: "Leader not found" });
        }
        return res.status(200).json(response);
    }

    createLeader(req: Request, res: Response): Response {
        const newLeader: ILeaders = {
            id: generateId(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            password: req.body.password,
            gal: req.body.gal
        };

        leaderDatabase.push(newLeader);
        return res.status(201).json(newLeader);
    }

    updateLeader(req: Request, res: Response): Response {
        const updateLeader: ILeaders = {
            id: Number(req.params.id),
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            gal: req.body.gal
        };

        const result = this.leaderServices.updateLeader(updateLeader);

        if (!result) {
            return res.status(404).json({ message: "Leader not found" });
        }

        return res.status(200).json(updateLeader);
    }

    partialUpdateLeader(req: Request, res: Response): Response {
        const leader = this.leaderServices.getOneLeader(req.params.id);

        if (!leader) {
            return res.status(404).json({ message: "Leader not found" });
        }

        const updatedLeader: ILeaders = {
            ...leader,
            name: req.body.name || leader.name,
            address: req.body.address || leader.address,
            phone: req.body.phone || leader.phone,
            email: req.body.email || leader.email,
            password: req.body.password || leader.password,
            gal: req.body.gal ?? leader.gal,
        };

        const result = this.leaderServices.updateLeader(updatedLeader);

        return res.status(200).json(updatedLeader);
    }

    deleteLeader(req: Request, res: Response): Response {
        const index = leaderDatabase.findIndex(leader => leader.id === Number(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: "Leader not found" });
        }
        leaderDatabase.splice(index, 1);

        return res.status(204).send();
    }
}
