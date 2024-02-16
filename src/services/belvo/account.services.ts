import useSWR from "swr";

import { useBelvoStore } from "@/store";

import { Account } from "@/store/interfaces/Account.interface";
import { headersBelvo } from "./headers/index";
import { AccountResponse } from "./interfaces/AccountResponse.interface";

const fetcher = async (url: string) => {
  const response = await fetch(url, {
    headers: headersBelvo,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data as AccountResponse;
};

export function useAccounts() {
  const { data, error, isLoading, ...rest } = useSWR(
    `${process.env.BASE_URL}/accounts?page=1`,
    fetcher
  );

  //  agregamos la información de las cuenntas a nuestro store de zustand por si deseamos tener de forma global nuestra información
  const setAccount = useBelvoStore((state) => state.setAccount);

  if (data?.results) setAccount(data.results);

  return {
    accounts: data?.results as Account[],
    error,
    isLoading,
    ...rest,
  };
}
