import { useCallback, useState } from "react";
import { Notification } from "utils";
import useNetwork from "./use-network";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AddTransactionFormState, TransactionsState } from "store";
import { v4 } from "uuid";
import { API_URL, ILoadingStatus, LOADING_STATUS } from "constant";

export const useTransaction = () => {
  const setTransaction = useSetRecoilState(TransactionsState);
  const transactionForm = useRecoilValue(AddTransactionFormState);
  const { post, get } = useNetwork();
  const { errorNotification, successNotification } = Notification();

  const [loadingStatus, setLoadingStatus] = useState<ILoadingStatus>(
    LOADING_STATUS.IDLE
  );

  const getTransactions = useCallback(async () => {
    setLoadingStatus(LOADING_STATUS.LOADING);
    const resp = await get(API_URL.TRANSACTIONS);
    const { status, data, message } = resp;
    if (status === 200) {
      setTransaction(data);
    } else {
      errorNotification(message ?? "Failed to Load Transactions.");
    }
    setTimeout(() => {
      setLoadingStatus(LOADING_STATUS.SUCCESS);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTransaction = useCallback(async () => {
    setLoadingStatus(LOADING_STATUS.LOADING);
    const payload = {
      ...transactionForm,
      category: transactionForm.category.value,
      id: v4(),
      date: new Date(),
    };
    const resp = await post(API_URL.TRANSACTIONS, payload);
    const { status, message } = resp;
    if (status === 200) {
      successNotification("Transaction Added");
      setTransaction((prev) => {
        return [payload, ...prev];
      });
    } else {
      errorNotification(message ?? "Transaction Failed, Try again later");
    }
    setTimeout(() => {
      setLoadingStatus(LOADING_STATUS.SUCCESS);
    }, 1000);
    return true;
  }, [
    errorNotification,
    post,
    setTransaction,
    successNotification,
    transactionForm,
  ]);
  return { getTransactions, createTransaction, loadingStatus };
};
