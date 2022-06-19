import { createEvents, deleteEvents, updateEvents } from "@/graphql/mutations";
import { getEvents, listEvents } from "@/graphql/queries";
import { API } from "aws-amplify";

class EventService {
  getEvents = () => {
    try {
      return API.graphql({
        query: listEvents,
      });
    } catch (err) {
      console.error(err);
    }
  };

  getEvent = (id: string) => {
    return API.graphql({
      query: getEvents,
      variables: { id: id },
    });
  };

  deleteEvent = (id: string) => {
    return API.graphql({
      query: deleteEvents,
      variables: { input: { id: id } },
    });
  };

  createEvent = (eventData) => {
    return API.graphql({
      query: createEvents,
      variables: { input: eventData },
    });
  };

  updateEvent = (eventData) => {
    return API.graphql({
      query: updateEvents,
      variables: { input: eventData },
    });
  };

  findMebmerByLinkedUser = (userId: string) => {
    return API.graphql({
      query: listEvents,
      variables: { filter: { userId: { eq: userId } } },
    });
  };

  linkEventWithAccount = (eventId, userId) => {
    return API.graphql({
      query: updateEvents,
      variables: { input: { id: eventId, userId: userId } },
    });
  };
}

export const eventService = new EventService();
