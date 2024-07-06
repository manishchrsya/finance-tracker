export interface IOption {
  label: string;
  value: string;
}

export interface IDropdown {
  handleChange: (event: IOption) => void;
  options: IOption[];
  value: IOption;
}
