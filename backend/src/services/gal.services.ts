import { generateId, galDatabase } from "../database/database";
import { IGal } from "../interfaces/IGal";
import { ICell } from "../interfaces/ICell";
import { ILeaders } from "../interfaces/ILeaders";

export class GalServices {
    getGals() {
        return galDatabase;
    }

    getOneGal(id: string) {
        const findGal = galDatabase.find(gal => gal.id === Number(id));
        return findGal;
    }

    createGal(name: string, address: string, cell?: ICell[], member?: ILeaders[]) {
        const newGal: IGal = {
            id: generateId(),
            name,
            address,
            cell: cell ?? [],
            member: member ?? []
        };

        galDatabase.push(newGal);
        return newGal;
    }

    updateGal(updateGal: IGal) {
        const index = galDatabase.findIndex(gal => gal.id === Number(updateGal.id));
        if (index === -1) {
            return null;
        }

        galDatabase[index] = updateGal;
        return updateGal;
    }

    partialUpdateGal(id: string, partialGal: Partial<IGal>) {
        const gal = this.getOneGal(id);
        if (!gal) {
            return null;
        }

        const newGalData: IGal = {
            ...gal,
            name: partialGal.name || gal.name,
            address: partialGal.address || gal.address,
            cell: partialGal.cell ?? gal.cell,
            member: partialGal.member ?? gal.member,
        };

        return this.updateGal(newGalData);
    }

    deleteGal(id: string) {
        const index = galDatabase.findIndex(gal => gal.id === Number(id));
        if (index === -1) {
            return null;
        }

        galDatabase.splice(index, 1);
        return true;
    }
}
