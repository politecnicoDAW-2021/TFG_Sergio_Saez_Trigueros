// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EventTypes = {
  "TRAINING": "TRAINING",
  "CHAMPIONSHIP": "CHAMPIONSHIP",
  "SEMINAR": "SEMINAR"
};

const Disciplines = {
  "KUMITE": "KUMITE",
  "KATA": "KATA",
  "TRADITIONAL_KARATE": "TRADITIONAL_KARATE"
};

const Categories = {
  "BEGGINERS": "BEGGINERS",
  "CADETS_JNR_UNDER21": "CADETS_JNR_UNDER21",
  "SENIOR": "SENIOR",
  "ALL": "ALL"
};

const { Users, AssociatedMembers, Events, AssociatedMembersEvents } = initSchema(schema);

export {
  Users,
  AssociatedMembers,
  Events,
  AssociatedMembersEvents,
  EventTypes,
  Disciplines,
  Categories
};