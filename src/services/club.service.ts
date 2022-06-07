import type { Clubs } from "@/API";
import { createClubs, deleteClubs } from "@/graphql/mutations";
import { listClubs } from "@/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

class ClubService {
  getClubs = async () => {
    try {
      const clubList = await API.graphql(graphqlOperation(listClubs));
      return clubList.data.listClubs.items;
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

  createClub = (name: string, city: string, owner: string) => {
    try {
      API.graphql({
        query: createClubs,
        variables: { input: { name: name, city: city, owner: owner } },
      });
    } catch (err) {
      console.log(err);
    }
  };

  syncClubs = () => {
    try {
      API.graphql(graphqlOperation(syncClubs));
    } catch (err) {
      console.error(err);
    }
  };
}

export const clubService = new ClubService();
