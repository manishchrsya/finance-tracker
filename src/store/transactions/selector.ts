import { selector } from "recoil";
import { TransactionsState } from "./state";

export const TransactionsSelector = selector({
  key: "transactions-selector-key",
  get: ({ get }) => {
    const transactions = get(TransactionsState);
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
    return { savings, income, expense };
  },
});
