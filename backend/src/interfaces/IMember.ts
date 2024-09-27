import { ICell } from "./ICell";

export interface IMember{
    id: number;
    name: string;
    email: string;
    phone: number;
    address: string;
    password: string;
    cell?: ICell[] | undefined
}