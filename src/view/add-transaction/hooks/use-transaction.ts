import { useCallback, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { v4 } from "uuid";

import { Notification } from "utils";
import { API_URL } from "constant/api";
import useNetwork from "hooks/use-network";
import { AddTransactionFormState } from "store";
import { TransactionsState } from "store/transactions/state";

export const useTransaction = () => {
  const [loadingStatus, setLoadingStatus] = useState<
    "idle" | "loading" | "success"
  >("idle");
  const setTransaction = useSetRecoilState(TransactionsState);
  const transactionForm = useRecoilValue(AddTransactionFormState);
  const { post } = useNetwork();
  const { errorNotification, successNotification } = Notification();

  const addnewTransaction = useCallback(async (): Promise<boolean> => {
    setLoadingStatus("loading");
    const payload = {
      ...transactionForm,
      category: transactionForm.category.value,
      id: v4(),
      date: new Date(),
    };
    const response = await post(API_URL.TRANSACTIONS, payload);
    console.log("response", response);
    if (response) {
      successNotification("Transaction Added");
      setTransaction((prev) => {
        return [payload, ...prev];
      });
    } else {
      errorNotification("Transaction Failed, Try again later");
    }
    setTimeout(() => {
      setLoadingStatus("success");
    }, 1000);
    return true;
  }, [
    errorNotification,
    post,
    setTransaction,
    successNotification,
    transactionForm,
  ]);

  return { addnewTransaction, loadingStatus };
};
