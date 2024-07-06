import { IDateRange } from "components/date-range-picker/type";
import { atom } from "recoil";
import { ITransactionForm } from "store/add-transaction/types";

type INewTransaction = Pick<ITransactionForm, "amount" | "description">;

export interface ITransaction extends INewTransaction {
  id: string;
  date: Date;
  category: "income" | "expense";
}

export const TransactionsState = atom<ITransaction[]>({
  key: "transactions-state-key",
  default: [],
});

export const SelectedDateRangeState = atom<IDateRange[]>({
  key: "selected-date-range-state-key",
  default: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
});
