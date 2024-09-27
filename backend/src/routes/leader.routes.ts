import { Request, Response, Router } from "express";
import { LeaderControllers } from "../controllers/leader.controllers";

const leaderRouter = Router();
const leaderControllers = new LeaderControllers();

leaderRouter.get("/", (req: Request, res: Response) => {
    return leaderControllers.getLeaders(req, res);
});

leaderRouter.get("/:id", (req: Request, res: Response) => {
    return leaderControllers.getOneLeader(req, res);
});

leaderRouter.post("/", (req: Request, res: Response) => {
    return leaderControllers.createLeader(req, res);
});

leaderRouter.put("/:id", (req: Request, res: Response) => {
    return leaderControllers.updateLeader(req, res);
});

leaderRouter.patch("/:id", (req: Request, res: Response) => {
    return leaderControllers.partialUpdateLeader(req, res);
});

leaderRouter.delete("/:id", (req: Request, res: Response) => {
    return leaderControllers.deleteLeader(req, res);
});

export { leaderRouter };
