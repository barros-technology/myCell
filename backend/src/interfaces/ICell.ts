import { IMember } from "./IMember";

export interface ICell {
    id: number;
    name: string;
    address: string;
    cellDay: string;
    timeCell: string;
    member?: IMember[] | undefined; // Tornando a propriedade opcional
  }