import { IGal } from "./IGal";

export interface ILeaders{
    id: number;
    name: string;
    email: string;
    phone: number;
    address: string;
    password: string
    gal?: IGal[]
}