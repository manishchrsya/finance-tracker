export interface IFooter {
  handlePrimaryCallback: () => void;
  handleSecondaryCallback: () => void;
}

export type formFieldKey = "title" | "category" | "amount";

export type IComponentType = "input" | "select";

export interface IFormField {
  label: string;
  name: formFieldKey;
  placeholder: string;
  icon: string;
  component: IComponentType;
  required: true;
}
