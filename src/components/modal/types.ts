import { Styles } from "react-modal";

export interface IModal {
  isOpen: boolean;
  handleCloseModal: () => void;
  closeOnEscBtn: boolean;
  modalStyle: Styles;
}
