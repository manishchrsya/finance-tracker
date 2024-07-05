import { atom } from "recoil";
import { ITransactionForm } from "./types";

export const AddTransactionModalStatus = atom<boolean>({
  key: "add-transaction-modal-status",
  default: false,
});

export const AddTransactionFormState = atom<ITransactionForm>({
  key: "add-transaction-form-state-key",
  default: {
    amount: "",
    transationType: "expense",
    title: "",
  },
});
