import { Button, Modal } from "components";
import { useCallback } from "react";
import { Styles } from "react-modal";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  AddTransactionFormErrorState,
  AddTransactionModalStatus,
  userState,
} from "store";
import styled from "styled-components";
import { getFirstName } from "utils";
import { mobileDevice } from "utils/media";
import { AddTransaction } from "view/add-transaction";

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  height: 76px;
  @media (max-width: 900px) {
    height: 96px;
    position: sticky;
    top: 0;
    background: #141332;
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #ffffff;
`;
const Message = styled.span`
  font-size: 16px;
  color: #a6a6a6;

  @media (max-width: 780px) {
    display: none;
  }
`;
const Greeting = styled.div``;
const ActionWrapper = styled.div``;

const ModalStyles: Styles = {
  content: {
    width: mobileDevice.matches ? "unset" : 480,
    margin: "auto",
    backgroundColor: "#1d1d41",
    border: "unset",
    height: mobileDevice.matches ? "unset" : "80vh",
    borderRadius: 12,
    padding: "unset",
    top: mobileDevice.matches ? 0 : "50%",
    bottom: mobileDevice.matches ? 0 : "unset",
    left: mobileDevice.matches ? 0 : "50%",
    right: mobileDevice.matches ? 0 : "unset",
    transform: mobileDevice.matches ? "unset" : "translate(-50%, -50%)",
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useRecoilState(AddTransactionModalStatus);
  const resetFormErrorState = useResetRecoilState(AddTransactionFormErrorState);
  const user = useRecoilValue(userState);

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    resetFormErrorState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavContainer>
      <Greeting>
        <Heading>{`Welcome back, ${getFirstName(user.name)} 👋🏻`}</Heading>
        <Message>Here’s what’s happening with your store today.</Message>
      </Greeting>
      <ActionWrapper>
        <Button onClick={handleOpen}>Add Transaction</Button>
      </ActionWrapper>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          closeOnEscBtn={true}
          handleCloseModal={handleCloseModal}
          modalStyle={ModalStyles}
        >
          <AddTransaction />
        </Modal>
      )}
    </NavContainer>
  );
};
