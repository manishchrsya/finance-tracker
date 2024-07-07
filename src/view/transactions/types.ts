export interface ITransactionsRowData {
  title: string;
  date: Date;
  id: () => JSX.Element;
  category: () => JSX.Element;
  amount: number;
}
