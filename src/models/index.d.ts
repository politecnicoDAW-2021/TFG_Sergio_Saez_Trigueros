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



type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssociatedMembersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssociatedMembersEventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Users {
  readonly id: string;
  readonly username?: string | null;
  readonly profile_pic?: string | null;
  readonly email?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly password?: string | null;
  readonly AssociatedMembers?: AssociatedMembers | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usersAssociatedMembersId?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class AssociatedMembers {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly birth_date?: string | null;
  readonly gender?: string | null;
  readonly email?: string | null;
  readonly events?: (AssociatedMembersEvents | null)[] | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AssociatedMembers, AssociatedMembersMetaData>);
  static copyOf(source: AssociatedMembers, mutator: (draft: MutableModel<AssociatedMembers, AssociatedMembersMetaData>) => MutableModel<AssociatedMembers, AssociatedMembersMetaData> | void): AssociatedMembers;
}

export declare class Events {
  readonly id: string;
  readonly name?: string | null;
  readonly type?: EventTypes | keyof typeof EventTypes | null;
  readonly description?: string | null;
  readonly discipline?: Disciplines | keyof typeof Disciplines | null;
  readonly starting_date?: string | null;
  readonly duration?: string | null;
  readonly location?: string | null;
  readonly capacity?: number | null;
  readonly image?: string | null;
  readonly category?: Categories | keyof typeof Categories | null;
  readonly price?: number | null;
  readonly AssociatedMembers?: (AssociatedMembersEvents | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Events, EventsMetaData>);
  static copyOf(source: Events, mutator: (draft: MutableModel<Events, EventsMetaData>) => MutableModel<Events, EventsMetaData> | void): Events;
}

export declare class AssociatedMembersEvents {
  readonly id: string;
  readonly associatedMembers: AssociatedMembers;
  readonly events: Events;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AssociatedMembersEvents, AssociatedMembersEventsMetaData>);
  static copyOf(source: AssociatedMembersEvents, mutator: (draft: MutableModel<AssociatedMembersEvents, AssociatedMembersEventsMetaData>) => MutableModel<AssociatedMembersEvents, AssociatedMembersEventsMetaData> | void): AssociatedMembersEvents;
}