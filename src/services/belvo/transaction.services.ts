import useSWR from "swr";

import { useBelvoStore } from "@/store";
import { Transaction } from "@/store/interfaces/Transaction.interface";
import { headersBelvo } from "./headers";
import { TransactionRequestData } from "./interfaces/Transaction.interface";

const fetcher = async (
  url: string,
  data: TransactionRequestData
): Promise<Transaction[]> => {
  const response = await fetch(url, {
    method: "POST",
    headers: headersBelvo,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const responseData: Transaction[] = await response.json();

  return responseData;
};

export function useTransactions(payload: TransactionRequestData) {
  const { data, error, isLoading, ...rest } = useSWR<Transaction[]>(
    `${process.env.BASE_URL}/transactions`,
    (url: string) => fetcher(url, payload)
  );

  const setTransaction = useBelvoStore((state) => state.setTransaction);

  if (data) setTransaction(data);

  return {
    transactions: data!,
    error,
    isLoading,
    ...rest,
  };
}
