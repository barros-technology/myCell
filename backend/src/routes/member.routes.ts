import {  Router } from "express";
import { MembersControllers } from "../controllers/member.controllers";
import { IsMemberIdValid } from "../middlewares/isMemberIdVAlid.middleware";



export const membersRouter = Router();

const membersControllers = new MembersControllers();

membersRouter.get("/", membersControllers.getMembers);

membersRouter.get("/:id", IsMemberIdValid.execute, membersControllers.getOneMember);

membersRouter.post("/", membersControllers.createMember);

membersRouter.put("/:id", IsMemberIdValid.execute, membersControllers.updateMember);

membersRouter.patch("/:id", IsMemberIdValid.execute, membersControllers.partialUpdateMember);

membersRouter.delete("/:id", IsMemberIdValid.execute, membersControllers.deleteMember);
