/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
      id
      name
      patients {
        items {
          id
          title
          accountID
        }
        nextToken
      }
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
      id
      name
      patients {
        items {
          id
          title
          accountID
        }
        nextToken
      }
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
      id
      name
      patients {
        items {
          id
          title
          accountID
        }
        nextToken
      }
    }
  }
`;
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
      id
      title
      accountID
      account {
        id
        name
        patients {
          nextToken
        }
      }
      comments {
        items {
          id
          patientID
          notes
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
      id
      title
      accountID
      account {
        id
        name
        patients {
          nextToken
        }
      }
      comments {
        items {
          id
          patientID
          notes
        }
        nextToken
      }
    }
  }
`;
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
      id
      title
      accountID
      account {
        id
        name
        patients {
          nextToken
        }
      }
      comments {
        items {
          id
          patientID
          notes
        }
        nextToken
      }
    }
  }
`;
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment {
    onCreateAppointment {
      id
      patientID
      patient {
        id
        title
        accountID
        account {
          id
          name
        }
        comments {
          nextToken
        }
      }
      notes
    }
  }
`;
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment {
    onUpdateAppointment {
      id
      patientID
      patient {
        id
        title
        accountID
        account {
          id
          name
        }
        comments {
          nextToken
        }
      }
      notes
    }
  }
`;
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment {
    onDeleteAppointment {
      id
      patientID
      patient {
        id
        title
        accountID
        account {
          id
          name
        }
        comments {
          nextToken
        }
      }
      notes
    }
  }
`;
