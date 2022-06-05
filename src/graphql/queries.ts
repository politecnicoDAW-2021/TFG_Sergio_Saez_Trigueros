/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getClubs = /* GraphQL */ `
  query GetClubs($id: ID!) {
    getClubs(id: $id) {
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
export const listClubs = /* GraphQL */ `
  query ListClubs(
    $filter: ModelClubsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        city
        owner
        phone
        website
        userId
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClubs = /* GraphQL */ `
  query SyncClubs(
    $filter: ModelClubsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClubs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        city
        owner
        phone
        website
        userId
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAssociatedMembers = /* GraphQL */ `
  query GetAssociatedMembers($id: ID!) {
    getAssociatedMembers(id: $id) {
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
export const listAssociatedMembers = /* GraphQL */ `
  query ListAssociatedMembers(
    $filter: ModelAssociatedMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssociatedMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAssociatedMembers = /* GraphQL */ `
  query SyncAssociatedMembers(
    $filter: ModelAssociatedMembersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssociatedMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAssociatedMembersEvents = /* GraphQL */ `
  query GetAssociatedMembersEvents($id: ID!) {
    getAssociatedMembersEvents(id: $id) {
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
export const listAssociatedMembersEvents = /* GraphQL */ `
  query ListAssociatedMembersEvents(
    $filter: ModelAssociatedMembersEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssociatedMembersEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventsID
        associatedMembersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAssociatedMembersEvents = /* GraphQL */ `
  query SyncAssociatedMembersEvents(
    $filter: ModelAssociatedMembersEventsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssociatedMembersEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventsID
        associatedMembersID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
