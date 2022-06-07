/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventsInput = {
  id?: string | null,
  name: string,
  type: EventTypes,
  description: string,
  discipline: Disciplines,
  starting_date: string,
  starting_time: string,
  location: string,
  capacity?: string | null,
  image?: string | null,
  category: Categories,
  price?: number | null,
  ending_date: string,
  ending_time: string,
};

export enum EventTypes {
  TRAINING = "TRAINING",
  CHAMPIONSHIP = "CHAMPIONSHIP",
  SEMINAR = "SEMINAR",
}


export enum Disciplines {
  KUMITE = "KUMITE",
  KATA = "KATA",
  TRADITIONAL_KARATE = "TRADITIONAL_KARATE",
}


export enum Categories {
  BEGGINERS = "BEGGINERS",
  CADETS_JNR_UNDER21 = "CADETS_JNR_UNDER21",
  SENIOR = "SENIOR",
  ALL = "ALL",
}


export type ModelEventsConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelEventTypesInput | null,
  description?: ModelStringInput | null,
  discipline?: ModelDisciplinesInput | null,
  starting_date?: ModelStringInput | null,
  starting_time?: ModelStringInput | null,
  location?: ModelStringInput | null,
  capacity?: ModelStringInput | null,
  image?: ModelStringInput | null,
  category?: ModelCategoriesInput | null,
  price?: ModelFloatInput | null,
  ending_date?: ModelStringInput | null,
  ending_time?: ModelStringInput | null,
  and?: Array< ModelEventsConditionInput | null > | null,
  or?: Array< ModelEventsConditionInput | null > | null,
  not?: ModelEventsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelEventTypesInput = {
  eq?: EventTypes | null,
  ne?: EventTypes | null,
};

export type ModelDisciplinesInput = {
  eq?: Disciplines | null,
  ne?: Disciplines | null,
};

export type ModelCategoriesInput = {
  eq?: Categories | null,
  ne?: Categories | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Events = {
  __typename: "Events",
  id: string,
  name: string,
  type: EventTypes,
  description: string,
  discipline: Disciplines,
  starting_date: string,
  starting_time: string,
  location: string,
  capacity?: string | null,
  image?: string | null,
  category: Categories,
  price?: number | null,
  AssociatedMembers?: ModelAssociatedMembersEventsConnection | null,
  ending_date: string,
  ending_time: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelAssociatedMembersEventsConnection = {
  __typename: "ModelAssociatedMembersEventsConnection",
  items:  Array<AssociatedMembersEvents | null >,
  nextToken?: string | null,
};

export type AssociatedMembersEvents = {
  __typename: "AssociatedMembersEvents",
  id: string,
  eventsID: string,
  associatedMembersID: string,
  events: Events,
  associatedMembers: AssociatedMembers,
  createdAt: string,
  updatedAt: string,
};

export type AssociatedMembers = {
  __typename: "AssociatedMembers",
  id: string,
  first_name: string,
  last_name: string,
  birth_date: string,
  gender?: Genders | null,
  email?: string | null,
  address: string,
  city?: string | null,
  phone: string,
  clubID: string,
  events?: ModelAssociatedMembersEventsConnection | null,
  userId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum Genders {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}


export type UpdateEventsInput = {
  id: string,
  name?: string | null,
  type?: EventTypes | null,
  description?: string | null,
  discipline?: Disciplines | null,
  starting_date?: string | null,
  starting_time?: string | null,
  location?: string | null,
  capacity?: string | null,
  image?: string | null,
  category?: Categories | null,
  price?: number | null,
  ending_date?: string | null,
  ending_time?: string | null,
};

export type DeleteEventsInput = {
  id: string,
};

export type CreateClubsInput = {
  id?: string | null,
  name: string,
  address?: string | null,
  city: string,
  owner: string,
  phone?: string | null,
  website?: string | null,
  userId?: string | null,
  email?: string | null,
};

export type ModelClubsConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  website?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelClubsConditionInput | null > | null,
  or?: Array< ModelClubsConditionInput | null > | null,
  not?: ModelClubsConditionInput | null,
};

export type Clubs = {
  __typename: "Clubs",
  id: string,
  name: string,
  address?: string | null,
  city: string,
  owner: string,
  phone?: string | null,
  AssociatedMembers?: ModelAssociatedMembersConnection | null,
  website?: string | null,
  userId?: string | null,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAssociatedMembersConnection = {
  __typename: "ModelAssociatedMembersConnection",
  items:  Array<AssociatedMembers | null >,
  nextToken?: string | null,
};

export type UpdateClubsInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  city?: string | null,
  owner?: string | null,
  phone?: string | null,
  website?: string | null,
  userId?: string | null,
  email?: string | null,
};

export type DeleteClubsInput = {
  id: string,
};

export type CreateAssociatedMembersInput = {
  id?: string | null,
  first_name: string,
  last_name: string,
  birth_date: string,
  gender?: Genders | null,
  email?: string | null,
  address: string,
  city?: string | null,
  phone: string,
  clubID: string,
  userId?: string | null,
};

export type ModelAssociatedMembersConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  birth_date?: ModelStringInput | null,
  gender?: ModelGendersInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  clubID?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelAssociatedMembersConditionInput | null > | null,
  or?: Array< ModelAssociatedMembersConditionInput | null > | null,
  not?: ModelAssociatedMembersConditionInput | null,
};

export type ModelGendersInput = {
  eq?: Genders | null,
  ne?: Genders | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAssociatedMembersInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  birth_date?: string | null,
  gender?: Genders | null,
  email?: string | null,
  address?: string | null,
  city?: string | null,
  phone?: string | null,
  clubID?: string | null,
  userId?: string | null,
};

export type DeleteAssociatedMembersInput = {
  id: string,
};

export type CreateAssociatedMembersEventsInput = {
  id?: string | null,
  eventsID: string,
  associatedMembersID: string,
};

export type ModelAssociatedMembersEventsConditionInput = {
  eventsID?: ModelIDInput | null,
  associatedMembersID?: ModelIDInput | null,
  and?: Array< ModelAssociatedMembersEventsConditionInput | null > | null,
  or?: Array< ModelAssociatedMembersEventsConditionInput | null > | null,
  not?: ModelAssociatedMembersEventsConditionInput | null,
};

export type UpdateAssociatedMembersEventsInput = {
  id: string,
  eventsID?: string | null,
  associatedMembersID?: string | null,
};

export type DeleteAssociatedMembersEventsInput = {
  id: string,
};

export type ModelEventsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelEventTypesInput | null,
  description?: ModelStringInput | null,
  discipline?: ModelDisciplinesInput | null,
  starting_date?: ModelStringInput | null,
  starting_time?: ModelStringInput | null,
  location?: ModelStringInput | null,
  capacity?: ModelStringInput | null,
  image?: ModelStringInput | null,
  category?: ModelCategoriesInput | null,
  price?: ModelFloatInput | null,
  ending_date?: ModelStringInput | null,
  ending_time?: ModelStringInput | null,
  and?: Array< ModelEventsFilterInput | null > | null,
  or?: Array< ModelEventsFilterInput | null > | null,
  not?: ModelEventsFilterInput | null,
};

export type ModelEventsConnection = {
  __typename: "ModelEventsConnection",
  items:  Array<Events | null >,
  nextToken?: string | null,
};

export type ModelClubsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  website?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelClubsFilterInput | null > | null,
  or?: Array< ModelClubsFilterInput | null > | null,
  not?: ModelClubsFilterInput | null,
};

export type ModelClubsConnection = {
  __typename: "ModelClubsConnection",
  items:  Array<Clubs | null >,
  nextToken?: string | null,
};

export type ModelAssociatedMembersFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  birth_date?: ModelStringInput | null,
  gender?: ModelGendersInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  clubID?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  and?: Array< ModelAssociatedMembersFilterInput | null > | null,
  or?: Array< ModelAssociatedMembersFilterInput | null > | null,
  not?: ModelAssociatedMembersFilterInput | null,
};

export type ModelAssociatedMembersEventsFilterInput = {
  id?: ModelIDInput | null,
  eventsID?: ModelIDInput | null,
  associatedMembersID?: ModelIDInput | null,
  and?: Array< ModelAssociatedMembersEventsFilterInput | null > | null,
  or?: Array< ModelAssociatedMembersEventsFilterInput | null > | null,
  not?: ModelAssociatedMembersEventsFilterInput | null,
};

export type CreateEventsMutationVariables = {
  input: CreateEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type CreateEventsMutation = {
  createEvents?:  {
    __typename: "Events",
    id: string,
    name: string,
    type: EventTypes,
    description: string,
    discipline: Disciplines,
    starting_date: string,
    starting_time: string,
    location: string,
    capacity?: string | null,
    image?: string | null,
    category: Categories,
    price?: number | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    ending_date: string,
    ending_time: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventsMutationVariables = {
  input: UpdateEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type UpdateEventsMutation = {
  updateEvents?:  {
    __typename: "Events",
    id: string,
    name: string,
    type: EventTypes,
    description: string,
    discipline: Disciplines,
    starting_date: string,
    starting_time: string,
    location: string,
    capacity?: string | null,
    image?: string | null,
    category: Categories,
    price?: number | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    ending_date: string,
    ending_time: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventsMutationVariables = {
  input: DeleteEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type DeleteEventsMutation = {
  deleteEvents?:  {
    __typename: "Events",
    id: string,
    name: string,
    type: EventTypes,
    description: string,
    discipline: Disciplines,
    starting_date: string,
    starting_time: string,
    location: string,
    capacity?: string | null,
    image?: string | null,
    category: Categories,
    price?: number | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    ending_date: string,
    ending_time: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClubsMutationVariables = {
  input: CreateClubsInput,
  condition?: ModelClubsConditionInput | null,
};

export type CreateClubsMutation = {
  createClubs?:  {
    __typename: "Clubs",
    id: string,
    name: string,
    address?: string | null,
    city: string,
    owner: string,
    phone?: string | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersConnection",
      nextToken?: string | null,
    } | null,
    website?: string | null,
    userId?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClubsMutationVariables = {
  input: UpdateClubsInput,
  condition?: ModelClubsConditionInput | null,
};

export type UpdateClubsMutation = {
  updateClubs?:  {
    __typename: "Clubs",
    id: string,
    name: string,
    address?: string | null,
    city: string,
    owner: string,
    phone?: string | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersConnection",
      nextToken?: string | null,
    } | null,
    website?: string | null,
    userId?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClubsMutationVariables = {
  input: DeleteClubsInput,
  condition?: ModelClubsConditionInput | null,
};

export type DeleteClubsMutation = {
  deleteClubs?:  {
    __typename: "Clubs",
    id: string,
    name: string,
    address?: string | null,
    city: string,
    owner: string,
    phone?: string | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersConnection",
      nextToken?: string | null,
    } | null,
    website?: string | null,
    userId?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssociatedMembersMutationVariables = {
  input: CreateAssociatedMembersInput,
  condition?: ModelAssociatedMembersConditionInput | null,
};

export type CreateAssociatedMembersMutation = {
  createAssociatedMembers?:  {
    __typename: "AssociatedMembers",
    id: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender?: Genders | null,
    email?: string | null,
    address: string,
    city?: string | null,
    phone: string,
    clubID: string,
    events?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssociatedMembersMutationVariables = {
  input: UpdateAssociatedMembersInput,
  condition?: ModelAssociatedMembersConditionInput | null,
};

export type UpdateAssociatedMembersMutation = {
  updateAssociatedMembers?:  {
    __typename: "AssociatedMembers",
    id: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender?: Genders | null,
    email?: string | null,
    address: string,
    city?: string | null,
    phone: string,
    clubID: string,
    events?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssociatedMembersMutationVariables = {
  input: DeleteAssociatedMembersInput,
  condition?: ModelAssociatedMembersConditionInput | null,
};

export type DeleteAssociatedMembersMutation = {
  deleteAssociatedMembers?:  {
    __typename: "AssociatedMembers",
    id: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender?: Genders | null,
    email?: string | null,
    address: string,
    city?: string | null,
    phone: string,
    clubID: string,
    events?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssociatedMembersEventsMutationVariables = {
  input: CreateAssociatedMembersEventsInput,
  condition?: ModelAssociatedMembersEventsConditionInput | null,
};

export type CreateAssociatedMembersEventsMutation = {
  createAssociatedMembersEvents?:  {
    __typename: "AssociatedMembersEvents",
    id: string,
    eventsID: string,
    associatedMembersID: string,
    events:  {
      __typename: "Events",
      id: string,
      name: string,
      type: EventTypes,
      description: string,
      discipline: Disciplines,
      starting_date: string,
      starting_time: string,
      location: string,
      capacity?: string | null,
      image?: string | null,
      category: Categories,
      price?: number | null,
      ending_date: string,
      ending_time: string,
      createdAt: string,
      updatedAt: string,
    },
    associatedMembers:  {
      __typename: "AssociatedMembers",
      id: string,
      first_name: string,
      last_name: string,
      birth_date: string,
      gender?: Genders | null,
      email?: string | null,
      address: string,
      city?: string | null,
      phone: string,
      clubID: string,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssociatedMembersEventsMutationVariables = {
  input: UpdateAssociatedMembersEventsInput,
  condition?: ModelAssociatedMembersEventsConditionInput | null,
};

export type UpdateAssociatedMembersEventsMutation = {
  updateAssociatedMembersEvents?:  {
    __typename: "AssociatedMembersEvents",
    id: string,
    eventsID: string,
    associatedMembersID: string,
    events:  {
      __typename: "Events",
      id: string,
      name: string,
      type: EventTypes,
      description: string,
      discipline: Disciplines,
      starting_date: string,
      starting_time: string,
      location: string,
      capacity?: string | null,
      image?: string | null,
      category: Categories,
      price?: number | null,
      ending_date: string,
      ending_time: string,
      createdAt: string,
      updatedAt: string,
    },
    associatedMembers:  {
      __typename: "AssociatedMembers",
      id: string,
      first_name: string,
      last_name: string,
      birth_date: string,
      gender?: Genders | null,
      email?: string | null,
      address: string,
      city?: string | null,
      phone: string,
      clubID: string,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssociatedMembersEventsMutationVariables = {
  input: DeleteAssociatedMembersEventsInput,
  condition?: ModelAssociatedMembersEventsConditionInput | null,
};

export type DeleteAssociatedMembersEventsMutation = {
  deleteAssociatedMembersEvents?:  {
    __typename: "AssociatedMembersEvents",
    id: string,
    eventsID: string,
    associatedMembersID: string,
    events:  {
      __typename: "Events",
      id: string,
      name: string,
      type: EventTypes,
      description: string,
      discipline: Disciplines,
      starting_date: string,
      starting_time: string,
      location: string,
      capacity?: string | null,
      image?: string | null,
      category: Categories,
      price?: number | null,
      ending_date: string,
      ending_time: string,
      createdAt: string,
      updatedAt: string,
    },
    associatedMembers:  {
      __typename: "AssociatedMembers",
      id: string,
      first_name: string,
      last_name: string,
      birth_date: string,
      gender?: Genders | null,
      email?: string | null,
      address: string,
      city?: string | null,
      phone: string,
      clubID: string,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEventsQueryVariables = {
  id: string,
};

export type GetEventsQuery = {
  getEvents?:  {
    __typename: "Events",
    id: string,
    name: string,
    type: EventTypes,
    description: string,
    discipline: Disciplines,
    starting_date: string,
    starting_time: string,
    location: string,
    capacity?: string | null,
    image?: string | null,
    category: Categories,
    price?: number | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    ending_date: string,
    ending_time: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventsConnection",
    items:  Array< {
      __typename: "Events",
      id: string,
      name: string,
      type: EventTypes,
      description: string,
      discipline: Disciplines,
      starting_date: string,
      starting_time: string,
      location: string,
      capacity?: string | null,
      image?: string | null,
      category: Categories,
      price?: number | null,
      ending_date: string,
      ending_time: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClubsQueryVariables = {
  id: string,
};

export type GetClubsQuery = {
  getClubs?:  {
    __typename: "Clubs",
    id: string,
    name: string,
    address?: string | null,
    city: string,
    owner: string,
    phone?: string | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersConnection",
      nextToken?: string | null,
    } | null,
    website?: string | null,
    userId?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClubsQueryVariables = {
  filter?: ModelClubsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClubsQuery = {
  listClubs?:  {
    __typename: "ModelClubsConnection",
    items:  Array< {
      __typename: "Clubs",
      id: string,
      name: string,
      address?: string | null,
      city: string,
      owner: string,
      phone?: string | null,
      website?: string | null,
      userId?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssociatedMembersQueryVariables = {
  id: string,
};

export type GetAssociatedMembersQuery = {
  getAssociatedMembers?:  {
    __typename: "AssociatedMembers",
    id: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender?: Genders | null,
    email?: string | null,
    address: string,
    city?: string | null,
    phone: string,
    clubID: string,
    events?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssociatedMembersQueryVariables = {
  filter?: ModelAssociatedMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssociatedMembersQuery = {
  listAssociatedMembers?:  {
    __typename: "ModelAssociatedMembersConnection",
    items:  Array< {
      __typename: "AssociatedMembers",
      id: string,
      first_name: string,
      last_name: string,
      birth_date: string,
      gender?: Genders | null,
      email?: string | null,
      address: string,
      city?: string | null,
      phone: string,
      clubID: string,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssociatedMembersEventsQueryVariables = {
  id: string,
};

export type GetAssociatedMembersEventsQuery = {
  getAssociatedMembersEvents?:  {
    __typename: "AssociatedMembersEvents",
    id: string,
    eventsID: string,
    associatedMembersID: string,
    events:  {
      __typename: "Events",
      id: string,
      name: string,
      type: EventTypes,
      description: string,
      discipline: Disciplines,
      starting_date: string,
      starting_time: string,
      location: string,
      capacity?: string | null,
      image?: string | null,
      category: Categories,
      price?: number | null,
      ending_date: string,
      ending_time: string,
      createdAt: string,
      updatedAt: string,
    },
    associatedMembers:  {
      __typename: "AssociatedMembers",
      id: string,
      first_name: string,
      last_name: string,
      birth_date: string,
      gender?: Genders | null,
      email?: string | null,
      address: string,
      city?: string | null,
      phone: string,
      clubID: string,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssociatedMembersEventsQueryVariables = {
  filter?: ModelAssociatedMembersEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssociatedMembersEventsQuery = {
  listAssociatedMembersEvents?:  {
    __typename: "ModelAssociatedMembersEventsConnection",
    items:  Array< {
      __typename: "AssociatedMembersEvents",
      id: string,
      eventsID: string,
      associatedMembersID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEventsSubscription = {
  onCreateEvents?:  {
    __typename: "Events",
    id: string,
    name: string,
    type: EventTypes,
    description: string,
    discipline: Disciplines,
    starting_date: string,
    starting_time: string,
    location: string,
    capacity?: string | null,
    image?: string | null,
    category: Categories,
    price?: number | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    ending_date: string,
    ending_time: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventsSubscription = {
  onUpdateEvents?:  {
    __typename: "Events",
    id: string,
    name: string,
    type: EventTypes,
    description: string,
    discipline: Disciplines,
    starting_date: string,
    starting_time: string,
    location: string,
    capacity?: string | null,
    image?: string | null,
    category: Categories,
    price?: number | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    ending_date: string,
    ending_time: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventsSubscription = {
  onDeleteEvents?:  {
    __typename: "Events",
    id: string,
    name: string,
    type: EventTypes,
    description: string,
    discipline: Disciplines,
    starting_date: string,
    starting_time: string,
    location: string,
    capacity?: string | null,
    image?: string | null,
    category: Categories,
    price?: number | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    ending_date: string,
    ending_time: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClubsSubscription = {
  onCreateClubs?:  {
    __typename: "Clubs",
    id: string,
    name: string,
    address?: string | null,
    city: string,
    owner: string,
    phone?: string | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersConnection",
      nextToken?: string | null,
    } | null,
    website?: string | null,
    userId?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClubsSubscription = {
  onUpdateClubs?:  {
    __typename: "Clubs",
    id: string,
    name: string,
    address?: string | null,
    city: string,
    owner: string,
    phone?: string | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersConnection",
      nextToken?: string | null,
    } | null,
    website?: string | null,
    userId?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClubsSubscription = {
  onDeleteClubs?:  {
    __typename: "Clubs",
    id: string,
    name: string,
    address?: string | null,
    city: string,
    owner: string,
    phone?: string | null,
    AssociatedMembers?:  {
      __typename: "ModelAssociatedMembersConnection",
      nextToken?: string | null,
    } | null,
    website?: string | null,
    userId?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssociatedMembersSubscription = {
  onCreateAssociatedMembers?:  {
    __typename: "AssociatedMembers",
    id: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender?: Genders | null,
    email?: string | null,
    address: string,
    city?: string | null,
    phone: string,
    clubID: string,
    events?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssociatedMembersSubscription = {
  onUpdateAssociatedMembers?:  {
    __typename: "AssociatedMembers",
    id: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender?: Genders | null,
    email?: string | null,
    address: string,
    city?: string | null,
    phone: string,
    clubID: string,
    events?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssociatedMembersSubscription = {
  onDeleteAssociatedMembers?:  {
    __typename: "AssociatedMembers",
    id: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender?: Genders | null,
    email?: string | null,
    address: string,
    city?: string | null,
    phone: string,
    clubID: string,
    events?:  {
      __typename: "ModelAssociatedMembersEventsConnection",
      nextToken?: string | null,
    } | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssociatedMembersEventsSubscription = {
  onCreateAssociatedMembersEvents?:  {
    __typename: "AssociatedMembersEvents",
    id: string,
    eventsID: string,
    associatedMembersID: string,
    events:  {
      __typename: "Events",
      id: string,
      name: string,
      type: EventTypes,
      description: string,
      discipline: Disciplines,
      starting_date: string,
      starting_time: string,
      location: string,
      capacity?: string | null,
      image?: string | null,
      category: Categories,
      price?: number | null,
      ending_date: string,
      ending_time: string,
      createdAt: string,
      updatedAt: string,
    },
    associatedMembers:  {
      __typename: "AssociatedMembers",
      id: string,
      first_name: string,
      last_name: string,
      birth_date: string,
      gender?: Genders | null,
      email?: string | null,
      address: string,
      city?: string | null,
      phone: string,
      clubID: string,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssociatedMembersEventsSubscription = {
  onUpdateAssociatedMembersEvents?:  {
    __typename: "AssociatedMembersEvents",
    id: string,
    eventsID: string,
    associatedMembersID: string,
    events:  {
      __typename: "Events",
      id: string,
      name: string,
      type: EventTypes,
      description: string,
      discipline: Disciplines,
      starting_date: string,
      starting_time: string,
      location: string,
      capacity?: string | null,
      image?: string | null,
      category: Categories,
      price?: number | null,
      ending_date: string,
      ending_time: string,
      createdAt: string,
      updatedAt: string,
    },
    associatedMembers:  {
      __typename: "AssociatedMembers",
      id: string,
      first_name: string,
      last_name: string,
      birth_date: string,
      gender?: Genders | null,
      email?: string | null,
      address: string,
      city?: string | null,
      phone: string,
      clubID: string,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssociatedMembersEventsSubscription = {
  onDeleteAssociatedMembersEvents?:  {
    __typename: "AssociatedMembersEvents",
    id: string,
    eventsID: string,
    associatedMembersID: string,
    events:  {
      __typename: "Events",
      id: string,
      name: string,
      type: EventTypes,
      description: string,
      discipline: Disciplines,
      starting_date: string,
      starting_time: string,
      location: string,
      capacity?: string | null,
      image?: string | null,
      category: Categories,
      price?: number | null,
      ending_date: string,
      ending_time: string,
      createdAt: string,
      updatedAt: string,
    },
    associatedMembers:  {
      __typename: "AssociatedMembers",
      id: string,
      first_name: string,
      last_name: string,
      birth_date: string,
      gender?: Genders | null,
      email?: string | null,
      address: string,
      city?: string | null,
      phone: string,
      clubID: string,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
