export type ITransactionType = "income" | "expense";

export interface ITransactionForm {
  description: string;
  category: { label: Capitalize<ITransactionType>; value: ITransactionType };
  amount: string;
}

export type ITransactionFormError = { description: boolean; amount: boolean };
