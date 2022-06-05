import { Auth } from "aws-amplify";

class AuthService {
  getCurrentUser = () => {
    return Auth.currentAuthenticatedUser();
  };
}

export const authService = new AuthService();
