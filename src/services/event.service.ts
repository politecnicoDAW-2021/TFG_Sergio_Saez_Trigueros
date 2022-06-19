import {
  createAssociatedMembersEvents,
  createEvents,
  deleteEvents,
  updateEvents,
} from "@/graphql/mutations";
import {
  getEvents,
  listAssociatedMembersEvents,
  listEvents,
} from "@/graphql/queries";
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

  createEvent = (eventData: any) => {
    return API.graphql({
      query: createEvents,
      variables: { input: eventData },
    });
  };

  updateEvent = (eventData: any) => {
    return API.graphql({
      query: updateEvents,
      variables: { input: eventData },
    });
  };

  addMemberToEvent = (memberId: string, eventId: string) => {
    return API.graphql({
      query: createAssociatedMembersEvents,
      variables: {
        input: { associatedMembersID: memberId, eventsID: eventId },
      },
    });
  };

  getEventsOfMember = (memberId: string) => {
    return API.graphql({
      query: listAssociatedMembersEvents,
      variables: { filter: { associatedMembersID: { eq: memberId } } },
    });
  };
}

export const eventService = new EventService();
