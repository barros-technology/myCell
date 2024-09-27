import { memberDatabase, generateId } from "../database/database";
import { ICell } from "../interfaces/ICell";
import { IMember } from "../interfaces/IMember";

export class MembersServices {
  getMembers() {
    return memberDatabase;
  }

  getOneMember(id: string) {
    const findMember = memberDatabase.find(member => member.id === Number(id));
    return findMember;
  }

  createMember(name: string, email: string, phone: number, address: string, password: string, cell?: ICell[]) {
    const newMember: IMember = {
      id: generateId(),
      name,
      email,
      phone,
      address,
      password,
      cell,
    };

    memberDatabase.push(newMember);
    return newMember;
  }

  updateMember(updatedMember: IMember) {
    const index = memberDatabase.findIndex(member => member.id === Number(updatedMember.id));
    if (index === -1) {
      return null;
    }

    memberDatabase[index] = updatedMember;
    return updatedMember;
  }

  partialUpdateMember(id: string, partialMember: Partial<IMember>) {
    const member = this.getOneMember(id);
    if (!member) {
      return null;
    }

    const newMemberData: IMember = {
      id: member.id,
      name: partialMember.name || member.name,
      email: partialMember.email || member.email,
      phone: partialMember.phone || member.phone,
      address: partialMember.address || member.address,
      password: partialMember.password || member.password,
      cell: partialMember.cell ?? member.cell, // Usando o operador de coalescência nula
    };

    return this.updateMember(newMemberData);
  }

  deleteMember(id: string) {
    const index = memberDatabase.findIndex(member => member.id === Number(id));
    if (index === -1) {
      return null;
    }

    memberDatabase.splice(index, 1);
    return true;
  }
}
