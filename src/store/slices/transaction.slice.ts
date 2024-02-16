import { StateCreator } from "zustand";

import {
  Transaction,
  TransactionSlice,
} from "../interfaces/Transaction.interface";

export const createTransactionSlice: StateCreator<TransactionSlice> = (
  set
) => ({
  accountId: "",
  Transaction: [],
  setTransaction: (Transaction: Transaction[]) => set({ Transaction }),
  setAccountId: (accountId: string) => set({ accountId }),
});
