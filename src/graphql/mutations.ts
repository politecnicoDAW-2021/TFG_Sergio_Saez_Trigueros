/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
      id
      name
      type
      description
      discipline
      starting_date
      starting_time
      location
      capacity
      image
      category
      price
      AssociatedMembers {
        nextToken
        startedAt
      }
      ending_date
      ending_time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
      id
      name
      type
      description
      discipline
      starting_date
      starting_time
      location
      capacity
      image
      category
      price
      AssociatedMembers {
        nextToken
        startedAt
      }
      ending_date
      ending_time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
      id
      name
      type
      description
      discipline
      starting_date
      starting_time
      location
      capacity
      image
      category
      price
      AssociatedMembers {
        nextToken
        startedAt
      }
      ending_date
      ending_time
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createClubs = /* GraphQL */ `
  mutation CreateClubs(
    $input: CreateClubsInput!
    $condition: ModelClubsConditionInput
  ) {
    createClubs(input: $input, condition: $condition) {
      id
      name
      address
      city
      owner
      phone
      AssociatedMembers {
        nextToken
        startedAt
      }
      website
      userId
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateClubs = /* GraphQL */ `
  mutation UpdateClubs(
    $input: UpdateClubsInput!
    $condition: ModelClubsConditionInput
  ) {
    updateClubs(input: $input, condition: $condition) {
      id
      name
      address
      city
      owner
      phone
      AssociatedMembers {
        nextToken
        startedAt
      }
      website
      userId
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteClubs = /* GraphQL */ `
  mutation DeleteClubs(
    $input: DeleteClubsInput!
    $condition: ModelClubsConditionInput
  ) {
    deleteClubs(input: $input, condition: $condition) {
      id
      name
      address
      city
      owner
      phone
      AssociatedMembers {
        nextToken
        startedAt
      }
      website
      userId
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAssociatedMembers = /* GraphQL */ `
  mutation CreateAssociatedMembers(
    $input: CreateAssociatedMembersInput!
    $condition: ModelAssociatedMembersConditionInput
  ) {
    createAssociatedMembers(input: $input, condition: $condition) {
      id
      first_name
      last_name
      birth_date
      gender
      email
      address
      city
      phone
      clubID
      events {
        nextToken
        startedAt
      }
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAssociatedMembers = /* GraphQL */ `
  mutation UpdateAssociatedMembers(
    $input: UpdateAssociatedMembersInput!
    $condition: ModelAssociatedMembersConditionInput
  ) {
    updateAssociatedMembers(input: $input, condition: $condition) {
      id
      first_name
      last_name
      birth_date
      gender
      email
      address
      city
      phone
      clubID
      events {
        nextToken
        startedAt
      }
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAssociatedMembers = /* GraphQL */ `
  mutation DeleteAssociatedMembers(
    $input: DeleteAssociatedMembersInput!
    $condition: ModelAssociatedMembersConditionInput
  ) {
    deleteAssociatedMembers(input: $input, condition: $condition) {
      id
      first_name
      last_name
      birth_date
      gender
      email
      address
      city
      phone
      clubID
      events {
        nextToken
        startedAt
      }
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAssociatedMembersEvents = /* GraphQL */ `
  mutation CreateAssociatedMembersEvents(
    $input: CreateAssociatedMembersEventsInput!
    $condition: ModelAssociatedMembersEventsConditionInput
  ) {
    createAssociatedMembersEvents(input: $input, condition: $condition) {
      id
      eventsID
      associatedMembersID
      events {
        id
        name
        type
        description
        discipline
        starting_date
        starting_time
        location
        capacity
        image
        category
        price
        ending_date
        ending_time
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      associatedMembers {
        id
        first_name
        last_name
        birth_date
        gender
        email
        address
        city
        phone
        clubID
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAssociatedMembersEvents = /* GraphQL */ `
  mutation UpdateAssociatedMembersEvents(
    $input: UpdateAssociatedMembersEventsInput!
    $condition: ModelAssociatedMembersEventsConditionInput
  ) {
    updateAssociatedMembersEvents(input: $input, condition: $condition) {
      id
      eventsID
      associatedMembersID
      events {
        id
        name
        type
        description
        discipline
        starting_date
        starting_time
        location
        capacity
        image
        category
        price
        ending_date
        ending_time
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      associatedMembers {
        id
        first_name
        last_name
        birth_date
        gender
        email
        address
        city
        phone
        clubID
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAssociatedMembersEvents = /* GraphQL */ `
  mutation DeleteAssociatedMembersEvents(
    $input: DeleteAssociatedMembersEventsInput!
    $condition: ModelAssociatedMembersEventsConditionInput
  ) {
    deleteAssociatedMembersEvents(input: $input, condition: $condition) {
      id
      eventsID
      associatedMembersID
      events {
        id
        name
        type
        description
        discipline
        starting_date
        starting_time
        location
        capacity
        image
        category
        price
        ending_date
        ending_time
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      associatedMembers {
        id
        first_name
        last_name
        birth_date
        gender
        email
        address
        city
        phone
        clubID
        userId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
