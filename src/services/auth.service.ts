import { Auth } from "aws-amplify";

class AuthService {
  getCurrentUser = () => {
    return Auth.currentAuthenticatedUser();
  };

  /*
  setAssociatedMemberId = (id) => {
      Auth.userAttributes
  }
  */
}

export const authService = new AuthService();
