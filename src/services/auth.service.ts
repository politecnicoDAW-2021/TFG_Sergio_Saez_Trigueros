import type { CognitoUser } from "@aws-amplify/auth";
import { Auth } from "aws-amplify";
import { clubService } from "./club.service";
import { memberService } from "./member.service";

class AuthService {
  getAuth = () => {
    return Auth;
  };

  getUserGroup = () => {
    return Auth.currentSession().then((session) => {
      return session.accessToken.payload["cognito:groups"];
    });
  };

  getCurrentUser = () => {
    return Auth.currentUserPoolUser();
  };

  getCurrentUserId = () => {
    return Auth.currentUserInfo().then((info) => info.username);
  };

  signOut = () => {
    return Auth.signOut();
  };

  isAdmin = async () => {
    const group = await this.getUserGroup();
    if (group === undefined) {
      return false;
    }
    if (group[0] == "Admin") {
      return true;
    }
    return false;
  };

  isUserLinkedToClub = async (userId: string) => {
    const clubsResponse = await clubService.getClubs().then((clubsData) => {
      return clubsData;
    });
    const clubs = clubsResponse.data.listClubs.items;
    const linkedClub = clubs.filter((club) => club.userId === userId);
    return linkedClub.length > 0;
  };

  isUserLinkedToMember = async (userId: string) => {
    const membersResponse = await memberService
      .getMembers()
      .then((membersData) => {
        return membersData;
      });
    const members = membersResponse.data.listAssociatedMembers.items;
    const linkedMember = members.filter((member) => member.userId === userId);
    return linkedMember.length > 0;
  };
}

export const authService = new AuthService();
