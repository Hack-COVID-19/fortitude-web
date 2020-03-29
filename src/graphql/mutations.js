/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
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
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
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
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
