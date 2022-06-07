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
}

export const authService = new AuthService();
