import { IMember } from "./IMember";

export interface ICell{
    id: number;
    name: string;
    address: string;
    cellDay: string;
    time: number;
    member?: IMember[]


}