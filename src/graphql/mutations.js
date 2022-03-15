/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLoanInformation = /* GraphQL */ `
  mutation CreateLoanInformation(
    $input: CreateLoanInformationInput!
    $condition: ModelLoanInformationConditionInput
  ) {
    createLoanInformation(input: $input, condition: $condition) {
      id
      PurposeOfLoan
      LoanAmount
      Terms
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLoanInformation = /* GraphQL */ `
  mutation UpdateLoanInformation(
    $input: UpdateLoanInformationInput!
    $condition: ModelLoanInformationConditionInput
  ) {
    updateLoanInformation(input: $input, condition: $condition) {
      id
      PurposeOfLoan
      LoanAmount
      Terms
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLoanInformation = /* GraphQL */ `
  mutation DeleteLoanInformation(
    $input: DeleteLoanInformationInput!
    $condition: ModelLoanInformationConditionInput
  ) {
    deleteLoanInformation(input: $input, condition: $condition) {
      id
      PurposeOfLoan
      LoanAmount
      Terms
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
