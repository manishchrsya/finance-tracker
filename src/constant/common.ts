interface IMessages {
  [key: Uppercase<string>]: string;
}

export const COMMON: IMessages = {
  //
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
