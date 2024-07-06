import { selector } from "recoil";
import { SelectedDateRangeState, TransactionsState } from "./state";
import { getUtcMilliSecond } from "utils";

export const TransactionsSelector = selector({
  key: "transactions-selector-key",
  get: ({ get }) => {
    const transactions = get(TransactionsState);
    const dateRange = get(SelectedDateRangeState);
    let income = 0;
    let expense = 0;
    transactions.forEach((transaction) => {
      if (transaction.category === "income") {
        income += Number(transaction.amount);
      } else {
        expense += Number(transaction.amount);
      }
    });
    const savings = income - expense;
    const startDate = getUtcMilliSecond(dateRange[0].startDate, "start");
    const endDate = getUtcMilliSecond(dateRange[0].endDate, "end");

    const filteredTransactions = [...transactions]?.filter((item) => {
      const date = getUtcMilliSecond(item.date);
      if (date >= startDate && date <= endDate) {
        return item;
      }
      return null;
    });

    return { savings, income, expense, filteredTransactions };
  },
});
