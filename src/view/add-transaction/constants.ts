import { IOption } from "components";
import type { IFormField } from "./types";

export const formFields: IFormField[] = [
  {
    label: "Title",
    name: "title",
    placeholder: "enter the title",
    icon: "",
    component: "input",
    required: true,
  },
  {
    label: "Category",
    name: "category",
    placeholder: "enter the title",
    icon: "",
    component: "select",
    required: true,
  },
  {
    label: "Amount",
    name: "amount",
    placeholder: "Please Enter the amount",
    icon: "",
    component: "input",
    required: true,
  },
];

export const categoryOption: IOption[] = [
  {
    label: "Expense",
    value: "expense",
  },
  {
    label: "Income",
    value: "income",
  },
];
