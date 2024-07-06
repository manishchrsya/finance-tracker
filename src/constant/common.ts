type IMessageKey =
  | "transaction_created"
  | "transaction_load_failed"
  | "user_load_failed";

type IMessages = {
  [key in Uppercase<IMessageKey>]: string;
};

export const COMMON: IMessages = {
  TRANSACTION_CREATED: "New Transaction added",
  TRANSACTION_LOAD_FAILED: "Failed to Load Transactions.",
  USER_LOAD_FAILED: "Failed to load user, try again",
};

export type ILoadingStatus = "idle" | "loading" | "success" | "rejected";

export const LOADING_STATUS: {
  [key in Uppercase<ILoadingStatus>]: Lowercase<key>;
} = {
  IDLE: "idle",
  LOADING: "loading",
  REJECTED: "rejected",
  SUCCESS: "success",
};
