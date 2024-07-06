export interface ITransactionsRowData {
  title: string;
  date: Date;
  id: string;
  category: () => JSX.Element;
  amount: number;
}
