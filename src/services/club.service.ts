import { createClubs, deleteClubs } from "@/graphql/mutations";
import { listClubs, getClubs } from "@/graphql/queries";
import { Clubs } from "@/models";
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

  getClub = (id: string) => {
    return API.graphql({
      query: getClubs,
      variables: { id: id },
    });
  };

  deleteClub = (id: string) => {
    return API.graphql({
      query: deleteClubs,
      variables: { input: { id: id } },
    });
  };

  createClub = (input) => {
    return API.graphql({
      query: createClubs,
      variables: { input: input },
    });
  };
}

export const clubService = new ClubService();
