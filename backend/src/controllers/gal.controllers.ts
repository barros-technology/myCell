import { Request, Response } from "express";
import { GalServices } from "../services/gal.services";
import { IGal } from "../interfaces/IGal";
import { generateId, galDatabase } from "../database/database";

export class GalControllers {
    private galServices: GalServices;

    constructor() {
        this.galServices = new GalServices();
    }

    getGals(req: Request, res: Response): Response {
        const response = this.galServices.getGals();
        return res.status(200).json(response);
    }

    getOneGal(req: Request, res: Response): Response {
        const response = this.galServices.getOneGal(req.params.id);
        if (!response) {
            return res.status(404).json({ message: "Gal not found" });
        }
        return res.status(200).json(response);
    }

    createGal(req: Request, res: Response): Response {
        const newGal: IGal = {
            id: generateId(),
            name: req.body.name,
            address: req.body.address,
            cell: req.body.cell,
            member: req.body.member
        };

        galDatabase.push(newGal);
        return res.status(201).json(newGal);
    }

    updateGal(req: Request, res: Response): Response {
        const updateGal: IGal = {
            id: Number(req.params.id),
            name: req.body.name,
            address: req.body.address,
            cell: req.body.cell,
            member: req.body.member
        };

        const result = this.galServices.updateGal(updateGal);

        if (!result) {
            return res.status(404).json({ message: "Gal not found" });
        }

        return res.status(200).json(updateGal);
    }

    partialUpdateGal(req: Request, res: Response): Response {
        const gal = this.galServices.getOneGal(req.params.id);

        if (!gal) {
            return res.status(404).json({ message: "Gal not found" });
        }

        const updatedGal: IGal = {
            ...gal,
            name: req.body.name || gal.name,
            address: req.body.address || gal.address,
            cell: req.body.cell ?? gal.cell,
            member: req.body.member ?? gal.member,
        };

        const result = this.galServices.updateGal(updatedGal);

        return res.status(200).json(updatedGal);
    }

    deleteGal(req: Request, res: Response): Response {
        const index = galDatabase.findIndex(gal => gal.id === Number(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: "Gal not found" });
        }
        galDatabase.splice(index, 1);

        return res.status(204).send();
    }
}
