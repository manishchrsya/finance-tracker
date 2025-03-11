import { useCallback, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { v4 } from "uuid";

import { Notification } from "utils";
import { AddTransactionFormState, TransactionsState } from "store";
import { API_URL, COMMON, ILoadingStatus, LOADING_STATUS } from "constant";
import useNetwork from "./use-network";

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
  }, [errorNotification, get, setTransaction]);

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
    if (status === 200 || status === 201) {
      successNotification(COMMON.TRANSACTION_CREATED);
      setTransaction((prev) => {
        return [payload, ...prev];
      });
    } else {
      errorNotification(message ?? COMMON.TRANSACTION_LOAD_FAILED);
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
