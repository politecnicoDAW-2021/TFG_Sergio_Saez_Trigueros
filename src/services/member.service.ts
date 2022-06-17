import {
  createAssociatedMembers,
  updateAssociatedMembers,
  type deleteAssociatedMembers,
} from "@/graphql/mutations";
import { getAssociatedMembers, listAssociatedMembers } from "@/graphql/queries";
import { API } from "aws-amplify";

class MemberService {
  getMembers = () => {
    try {
      return API.graphql({
        query: listAssociatedMembers,
      });
    } catch (err) {
      console.error(err);
    }
  };

  getMember = (id: string) => {
    return API.graphql({
      query: getAssociatedMembers,
      variables: { id: id },
    });
  };

  deleteMember = (id: string) => {
    return API.graphql({
      query: deleteAssociatedMembers,
      variables: { input: { id: id } },
    });
  };

  createMember = (memberData) => {
    return API.graphql({
      query: createAssociatedMembers,
      variables: { input: clubData },
    });
  };

  updateMebmer = (memberData) => {
    return API.graphql({
      query: updateAssociatedMembers,
      variables: { input: memberData },
    });
  };

  findMebmerByLinkedUser = (userId: string) => {
    return API.graphql({
      query: listAssociatedMembers,
      variables: { filter: { userId: { eq: userId } } },
    });
  };

  linkMemberWithAccount = (memberId, userId) => {
    return API.graphql({
      query: updateAssociatedMembers,
      variables: { input: { id: memberId, userId: userId } },
    });
  };
}

export const memberService = new MemberService();
