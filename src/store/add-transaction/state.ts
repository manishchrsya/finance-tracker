import { atom } from "recoil";
import { ITransactionForm, ITransactionFormError } from "./types";

export const AddTransactionModalStatus = atom<boolean>({
  key: "add-transaction-modal-status",
  default: false,
});

export const AddTransactionFormState = atom<ITransactionForm>({
  key: "add-transaction-form-state-key",
  default: {
    amount: "",
    category: { label: "Expense", value: "expense" },
    description: "",
  },
});

export const AddTransactionFormErrorState = atom<ITransactionFormError>({
  key: "add-transaction-form-error-state-key",
  default: { description: false, amount: false },
});
