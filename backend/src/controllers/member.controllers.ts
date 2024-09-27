import { Request, Response } from "express";
import { IMember } from "../interfaces/IMember";
import { memberDatabase, generateId } from "../database/database";
import { MembersServices } from "../services/members.services";


export class MembersControllers {
  private membersServices = new MembersServices();

  getMembers(req: Request, res: Response): Response {
    const response = this.membersServices.getMembers();
    return res.status(200).json(response);
  }

  getOneMember(req: Request, res: Response): Response {
    const response = this.membersServices.getOneMember(req.params.id);
    return res.status(response ? 200 : 404).json(response || { message: "Member not found" });
  }

  createMember(req: Request, res: Response): Response {
    const newMember: IMember = {
      id: generateId(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: req.body.password,
      cell: req.body.cell,
    };

    memberDatabase.push(newMember);

    return res.status(201).json(newMember);
  }

  updateMember(req: Request, res: Response): Response {
    const updatedMember: IMember = {
      id: Number(req.params.id),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: req.body.password,
      cell: req.body.cell,
    };
  
    const result = this.membersServices.updateMember(updatedMember);
  
    return res.status(result ? 200 : 404).json(result || { message: "Member not found" });
  }

  partialUpdateMember(req: Request, res: Response): Response {
    const member = this.membersServices.getOneMember(req.params.id);
  
    const updatedMember: IMember = {
      id: Number(req.params.id),
      name: req.body.name || member?.name,
      email: req.body.email || member?.email,
      phone: req.body.phone || member?.phone,
      address: req.body.address || member?.address,
      password: req.body.password || member?.password,
      cell: req.body.cell || member?.cell,
    };
  
    const result = this.membersServices.updateMember(updatedMember);
  
    return res.status(result ? 200 : 404).json(result || { message: "Member not found" });
  }

  deleteMember(req: Request, res: Response): Response {
    const index = memberDatabase.findIndex(member => member.id === Number(req.params.id));

    if (index !== -1) {
      memberDatabase.splice(index, 1);
      return res.status(204).json();
    }

    return res.status(404).json({ message: "Member not found" });
  }
}
