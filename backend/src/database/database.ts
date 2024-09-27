import { ICell } from "../interfaces/ICell";
import { IGal } from "../interfaces/IGal";
import { ILeaders } from "../interfaces/ILeaders";
import { IMember } from "../interfaces/IMember";

export const cellsDatabase: ICell[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}

export const memberDatabase: IMember[] = [];

export const leaderDatabase: ILeaders[] = [];

export const galDatabase: IGal[] = [];