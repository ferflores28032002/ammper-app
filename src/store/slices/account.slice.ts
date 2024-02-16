import { StateCreator } from "zustand";

import { Account, AccountSlice } from "../interfaces/Account.interface";

export const createAccountSlice: StateCreator<AccountSlice> = (set) => ({
  account: [],
  setAccount: (account: Account[]) => set({ account }),
});
