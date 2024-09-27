import { Request, Response } from "express";
import { ICell } from "../interfaces/ICell";
import { cellsDatabase, generateId } from "../database/database";
import { CellsServices } from "../services/cells.services";

export class CellControllers {
  getCells(req: Request, res: Response): Response {
    
    const cellsServices = new CellsServices();

    const response = cellsServices.getCells();

    return res.status(200).json(response);
  }

  getOneCell(req: Request, res: Response): Response {
    const cellsServices = new CellsServices();

    const response = cellsServices.getOneCell(req.params.id)

    return res.status(200).json(response);
  }

  createCell(req: Request, res: Response): Response {
    const cellsServices = new CellsServices();
    
    const newCell: ICell = {
      id: generateId(),
      name: req.body.name,
      address: req.body.address,
      cellDay: req.body.cellDay,
      timeCell: req.body.time,
      member: req.body.member,
    };

    cellsDatabase.push(newCell);

    return res.status(201).json(newCell);
  }

  updateCell(req: Request, res: Response): Response {
    const cellsServices = new CellsServices();
    const updatedCell: ICell = {
      name: req.body.name,
      address: req.body.address,
      cellDay: req.body.cellDay,
      timeCell: req.body.time,
      member: req.body.member,
      id: 0
    };
  
    const result = cellsServices.updateCell(updatedCell);
  
    if (!result) {
      return res.status(404).json({ message: "Cell not found" });
    }
  
    return res.status(200).json(updatedCell);
  }
  

  partialUpdateCell(req: Request, res: Response): Response {
    const cellsServices = new CellsServices();
    const cell = cellsServices.getOneCell(req.params.id);
  
    if (!cell) {
      return res.status(404).json({ message: "Cell not found" });
    }
  
    const updatedCell: ICell = {
      name: req.body.name || cell.name,
      address: req.body.address || cell.address,
      cellDay: req.body.cellDay || cell.cellDay,
      timeCell: req.body.time || cell.timeCell,
      member: req.body.member || cell.member,
      id: 0
    };
  
    const result = cellsServices.updateCell(updatedCell);
  
    return res.status(200).json(updatedCell);
  }
  
  
  deleteCell(req: Request, res: Response): Response {
    const index = cellsDatabase.findIndex(cell => cell.id === Number(req.params.id));

    if (index === -1) {
      return res.status(404).json({ message: "Cell not found" });
    }

    cellsDatabase.splice(index, 1);

    return res.status(204).json();
  }
}
//Agora falta fazer  o controller do leader, do gal e do member