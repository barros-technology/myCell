import { generateId, leaderDatabase } from "../database/database";
import { IGal } from "../interfaces/IGal";
import { ILeaders } from "../interfaces/ILeaders";

export class LeadersServices {
    getLeaders() {
        return leaderDatabase;
    }

    getOneLeader(id: string) {
        const findLeader = leaderDatabase.find(leader => leader.id === Number(id));
        return findLeader;
    }

    createLeader(name: string, email: string, password: string, phone: string, address: string, gal: IGal[]) {
        const newLeader: ILeaders = {
            id: generateId(),
            name,
            email,
            phone,
            address,
            password,
            gal
        };

        leaderDatabase.push(newLeader);
        return newLeader;
    }

    updateLeader(updateLeader: ILeaders) {
        const index = leaderDatabase.findIndex(leader => leader.id === Number(updateLeader.id));
        if (index === -1) {
            return null;
        }

        leaderDatabase[index] = updateLeader;
        return updateLeader;
    }

    partialUpdateLeader(id: string, partialLeader: Partial<ILeaders>) {
        const leader = this.getOneLeader(id);
        if (!leader) {
            return null;
        }

        const newLeaderData: ILeaders = {
            ...leader,
            name: partialLeader.name || leader.name,
            phone: partialLeader.phone || leader.phone,
            address: partialLeader.address || leader.address,
            email: partialLeader.email || leader.email,
            password: partialLeader.password || leader.password,
            gal: partialLeader.gal ?? leader.gal,
        };

        return this.updateLeader(newLeaderData);
    }

    deleteLeader(id: string) {
        const index = leaderDatabase.findIndex(leader => leader.id === Number(id));
        if (index === -1) {
            return null;
        }

        leaderDatabase.splice(index, 1);
        return true;
    }
}
