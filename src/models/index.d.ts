import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum EventTypes {
  TRAINING = "TRAINING",
  CHAMPIONSHIP = "CHAMPIONSHIP",
  SEMINAR = "SEMINAR"
}

export enum Disciplines {
  KUMITE = "KUMITE",
  KATA = "KATA",
  TRADITIONAL_KARATE = "TRADITIONAL_KARATE"
}

export enum Categories {
  BEGGINERS = "BEGGINERS",
  CADETS_JNR_UNDER21 = "CADETS_JNR_UNDER21",
  SENIOR = "SENIOR",
  ALL = "ALL"
}

export enum Genders {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}



type EventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssociatedMembersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClubsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssociatedMembersEventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Events {
  readonly id: string;
  readonly name: string;
  readonly type: EventTypes | keyof typeof EventTypes;
  readonly description: string;
  readonly discipline: Disciplines | keyof typeof Disciplines;
  readonly starting_date: string;
  readonly starting_time: string;
  readonly location: string;
  readonly capacity?: string | null;
  readonly image?: string | null;
  readonly category: Categories | keyof typeof Categories;
  readonly price?: number | null;
  readonly AssociatedMembers?: (AssociatedMembersEvents | null)[] | null;
  readonly ending_date: string;
  readonly ending_time: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Events, EventsMetaData>);
  static copyOf(source: Events, mutator: (draft: MutableModel<Events, EventsMetaData>) => MutableModel<Events, EventsMetaData> | void): Events;
}

export declare class AssociatedMembers {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly birth_date: string;
  readonly gender?: Genders | keyof typeof Genders | null;
  readonly email?: string | null;
  readonly address: string;
  readonly city?: string | null;
  readonly phone: string;
  readonly clubID: string;
  readonly events?: (AssociatedMembersEvents | null)[] | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AssociatedMembers, AssociatedMembersMetaData>);
  static copyOf(source: AssociatedMembers, mutator: (draft: MutableModel<AssociatedMembers, AssociatedMembersMetaData>) => MutableModel<AssociatedMembers, AssociatedMembersMetaData> | void): AssociatedMembers;
}

export declare class Clubs {
  readonly id: string;
  readonly name: string;
  readonly address?: string | null;
  readonly city: string;
  readonly owner: string;
  readonly phone?: string | null;
  readonly AssociatedMembers?: (AssociatedMembers | null)[] | null;
  readonly website?: string | null;
  readonly userId?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Clubs, ClubsMetaData>);
  static copyOf(source: Clubs, mutator: (draft: MutableModel<Clubs, ClubsMetaData>) => MutableModel<Clubs, ClubsMetaData> | void): Clubs;
}

export declare class AssociatedMembersEvents {
  readonly id: string;
  readonly events: Events;
  readonly associatedMembers: AssociatedMembers;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AssociatedMembersEvents, AssociatedMembersEventsMetaData>);
  static copyOf(source: AssociatedMembersEvents, mutator: (draft: MutableModel<AssociatedMembersEvents, AssociatedMembersEventsMetaData>) => MutableModel<AssociatedMembersEvents, AssociatedMembersEventsMetaData> | void): AssociatedMembersEvents;
}