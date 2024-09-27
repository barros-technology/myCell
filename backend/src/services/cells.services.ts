import { cellsDatabase, generateId } from "../database/database";
import { ICell } from "../interfaces/ICell";
import { IMember } from "../interfaces/IMember";

export class CellsServices {
  getCells() {
    return cellsDatabase;
  }

  getOneCell(id: string) {
    const findCell = cellsDatabase.find(cell => cell.id === Number(id));
    return findCell;
  }

  createCell(name: string, address: string, cellDay: string, timeCell: string, member: IMember[]) {
    const newCell: ICell = {
      id: generateId(),
      name,
      address,
      cellDay,
      timeCell,
      member,
    };

    cellsDatabase.push(newCell);
    return newCell;
  }

  updateCell(updatedCell: ICell) {
    const index = cellsDatabase.findIndex(cell => cell.id === Number(updatedCell.id));
    if (index === -1) {
      return null;
    }

    cellsDatabase[index] = updatedCell;
    return updatedCell;
  }

  partialUpdateCell(id: string, partialCell: Partial<ICell>) {
    const cell = this.getOneCell(id);
    if (!cell) {
      return null;
    }

    const newCellData: ICell = {
      id: cell.id,
      name: partialCell.name || cell.name,
      address: partialCell.address || cell.address,
      cellDay: partialCell.cellDay || cell.cellDay,
      timeCell: partialCell.timeCell || cell.timeCell,
      member: partialCell.member ?? cell.member, // Usando o operador de coalescência nula
    };

    return this.updateCell(newCellData);
  }

  deleteCell(id: string) {
    const index = cellsDatabase.findIndex(cell => cell.id === Number(id));
    if (index === -1) {
      return null;
    }

    cellsDatabase.splice(index, 1);
    return true;
  }
}
