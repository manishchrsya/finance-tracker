export type ITransactionType = "income" | "expense";

export interface ITransactionForm {
  title: string;
  transationType: ITransactionType;
  amount: string;
}
