import { useCallback, useMemo } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";

import { Button } from "components";
import {
  AddTransactionFormErrorState,
  AddTransactionFormState,
  AddTransactionModalStatus,
} from "store";
import { useTransaction } from "../hooks/use-transaction";

const Footer = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
  padding: 0 12px;
  border-top: 1px solid #141332;
`;

export const AddTransactionFooter = () => {
  const resetIsModalOpen = useResetRecoilState(AddTransactionModalStatus);
  const resetFormErrorState = useResetRecoilState(AddTransactionFormErrorState);
  const resetTransactionForm = useResetRecoilState(AddTransactionFormState);

  const error = useRecoilValue(AddTransactionFormErrorState);
  const transactionForm = useRecoilValue(AddTransactionFormState);

  const { addnewTransaction, loadingStatus } = useTransaction();

  const handleClose = useCallback(() => {
    resetIsModalOpen();
    resetFormErrorState();
    resetTransactionForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddTransaction = useCallback(async () => {
    const status = await addnewTransaction();
    if (status) {
      setTimeout(() => {
        handleClose();
      }, 1000);
    }
  }, [addnewTransaction, handleClose]);

  const isDisabled = useMemo(() => {
    const { amount, description } = error;
    if (
      amount ||
      description ||
      !transactionForm.description ||
      !transactionForm.amount
    ) {
      return true;
    }
    return false;
  }, [error, transactionForm.amount, transactionForm.description]);

  const PrimaryButtonLabel = useMemo(() => {
    if (loadingStatus === "loading") {
      return "Loading...";
    } else {
      return "Add";
    }
  }, [loadingStatus]);

  return (
    <Footer>
      <Button onClick={handleClose}>Close</Button>
      <Button disabled={isDisabled} onClick={handleAddTransaction}>
        {PrimaryButtonLabel}
      </Button>
    </Footer>
  );
};
