import { useCallback, useState } from "react";
import useNetwork from "./use-network";
import { API_URL, COMMON, ILoadingStatus, LOADING_STATUS } from "constant";
import { useSetRecoilState } from "recoil";
import { userState } from "store";
import { Notification } from "utils";

export const useUser = () => {
  const setUser = useSetRecoilState(userState);
  const [loadingStatus, setLoadingStatus] = useState<ILoadingStatus>(
    LOADING_STATUS.IDLE
  );

  const { get } = useNetwork();
  const { errorNotification } = Notification();

  const fetchLoginUser = useCallback(async () => {
    setLoadingStatus(LOADING_STATUS.LOADING);
    const resp = await get(API_URL.USER);
    const { status, data, message } = resp;
    if (status === 200) {
      setUser(data);
      setTimeout(() => {
        setLoadingStatus(LOADING_STATUS.SUCCESS);
      }, 1000);
    } else {
      errorNotification(message ?? COMMON.USER_LOAD_FAILED);
      setTimeout(() => {
        setLoadingStatus(LOADING_STATUS.REJECTED);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { fetchLoginUser, loadingStatus };
};
