import type { Clubs } from "@/API";
import { createClubs, deleteClubs } from "@/graphql/mutations";
import { listClubs } from "@/graphql/queries";
import { API } from "aws-amplify";

class ClubService {
  getClubs = () => {
    try {
      return API.graphql({
        query: listClubs,
      });
    } catch (err) {
      console.error(err);
    }
  };

  deleteClub: any = (id: string) => {
    try {
      return API.graphql({
        query: deleteClubs,
        variables: { input: { id: id } },
      });
    } catch (err) {
      console.error(err);
    }
  };

  createClub = ({ input }) => {
    try {
      return API.graphql({
        query: createClubs,
        variables: { input: input },
      });
    } catch (err) {
      console.log(err);
    }
  };

  //TODO: Intentar hacer un metodo general para todo
}

export const clubService = new ClubService();
