import { Request, Response, Router } from "express";
import { GalControllers } from "../controllers/gal.controllers";

const galRouter = Router();
const galControllers = new GalControllers();

galRouter.get("/", (req: Request, res: Response) => {
    return galControllers.getGals(req, res);
});

galRouter.get("/:id", (req: Request, res: Response) => {
    return galControllers.getOneGal(req, res);
});

galRouter.post("/", (req: Request, res: Response) => {
    return galControllers.createGal(req, res);
});

galRouter.put("/:id", (req: Request, res: Response) => {
    return galControllers.updateGal(req, res);
});

galRouter.patch("/:id", (req: Request, res: Response) => {
    return galControllers.partialUpdateGal(req, res);
});

galRouter.delete("/:id", (req: Request, res: Response) => {
    return galControllers.deleteGal(req, res);
});

export { galRouter };
