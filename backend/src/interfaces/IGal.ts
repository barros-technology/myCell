import { ICell } from "./ICell";
import { ILeaders } from "./ILeaders";

export interface IGal {
    id: number;
    name: string;
    address: string;
    cell?: ICell[] | undefined;
    member?: ILeaders[] | undefined;
}
