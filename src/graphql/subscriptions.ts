/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents {
    onCreateEvents {
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents {
    onUpdateEvents {
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents {
    onDeleteEvents {
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
export const onCreateClubs = /* GraphQL */ `
  subscription OnCreateClubs {
    onCreateClubs {
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
export const onUpdateClubs = /* GraphQL */ `
  subscription OnUpdateClubs {
    onUpdateClubs {
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
export const onDeleteClubs = /* GraphQL */ `
  subscription OnDeleteClubs {
    onDeleteClubs {
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
export const onCreateAssociatedMembers = /* GraphQL */ `
  subscription OnCreateAssociatedMembers {
    onCreateAssociatedMembers {
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
export const onUpdateAssociatedMembers = /* GraphQL */ `
  subscription OnUpdateAssociatedMembers {
    onUpdateAssociatedMembers {
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
export const onDeleteAssociatedMembers = /* GraphQL */ `
  subscription OnDeleteAssociatedMembers {
    onDeleteAssociatedMembers {
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
export const onCreateAssociatedMembersEvents = /* GraphQL */ `
  subscription OnCreateAssociatedMembersEvents {
    onCreateAssociatedMembersEvents {
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
export const onUpdateAssociatedMembersEvents = /* GraphQL */ `
  subscription OnUpdateAssociatedMembersEvents {
    onUpdateAssociatedMembersEvents {
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
export const onDeleteAssociatedMembersEvents = /* GraphQL */ `
  subscription OnDeleteAssociatedMembersEvents {
    onDeleteAssociatedMembersEvents {
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
