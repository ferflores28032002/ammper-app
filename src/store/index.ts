import { create } from "zustand";

import { devtools } from "zustand/middleware";

import { createAccountSlice } from "./slices/account.slice";
import { createTransactionSlice } from "./slices/transaction.slice";

import { AccountSlice } from "./interfaces/Account.interface";
import { TransactionSlice } from "./interfaces/Transaction.interface";

// types
type ShareState = AccountSlice & TransactionSlice;

// store
export const useBelvoStore = create<ShareState>()(
  devtools((...a) => ({
    ...createAccountSlice(...a),
    ...createTransactionSlice(...a),
  }))
);
