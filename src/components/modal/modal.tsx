import type { IModal } from "./types";

import { FC, PropsWithChildren } from "react";
import ReactModal, { Styles } from "react-modal";

export const styles: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(44, 48, 57, 0.8)",
    zIndex: 100,
    overflowY: "auto",
    margin: "auto",
  },
};

export const Modal: FC<PropsWithChildren<IModal>> = ({
  isOpen,
  children,
  handleCloseModal,
  closeOnEscBtn,
  modalStyle,
}) => {
  return (
    <ReactModal
      closeTimeoutMS={500}
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={{ ...styles, ...modalStyle } as Styles}
      shouldCloseOnEsc={closeOnEscBtn}
      parentSelector={() => document.querySelector("body") as any}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};
