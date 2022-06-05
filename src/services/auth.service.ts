import { Auth } from "aws-amplify";

class AuthService {
  getCurrentUser = () => {
    return Auth.currentAuthenticatedUser();
  };

  // setAssociatedMemberId = (id) => {
  //     Auth.userAttributes
  // }

  // getCurrentUserAttributes = () => {
  //   const user = Auth.currentAuthenticatedUser();
  // }
}

export const authService = new AuthService();
