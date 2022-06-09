import { Auth } from "aws-amplify";

class AuthService {
  getAuth = () => {
    return Auth;
  };

  getUserGroup = () => {
    return Auth.currentSession().then((session) => {
      return session.accessToken.payload["cognito:groups"];
    });
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
}

export const authService = new AuthService();
