import { atom } from "recoil";

interface IUserState {
  id: string;
  name: string;
  email: string;
  role: string;
  profile: string;
}

export const userState = atom<IUserState | Record<string, string>>({
  key: "user-state-key",
  default: {},
});
