import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LoanInformationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class LoanInformation {
  readonly id: string;
  readonly PurposeOfLoan: string;
  readonly LoanAmount: number;
  readonly Terms: number;
  readonly username?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<LoanInformation, LoanInformationMetaData>);
  static copyOf(source: LoanInformation, mutator: (draft: MutableModel<LoanInformation, LoanInformationMetaData>) => MutableModel<LoanInformation, LoanInformationMetaData> | void): LoanInformation;
}