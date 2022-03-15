/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLoanInformation = /* GraphQL */ `
  query GetLoanInformation($id: ID!) {
    getLoanInformation(id: $id) {
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
export const listLoanInformations = /* GraphQL */ `
  query ListLoanInformations(
    $filter: ModelLoanInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoanInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLoanInformations = /* GraphQL */ `
  query SyncLoanInformations(
    $filter: ModelLoanInformationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLoanInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
