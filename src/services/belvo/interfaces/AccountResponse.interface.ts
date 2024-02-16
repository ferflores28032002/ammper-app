import { Account } from "@/store/interfaces/Account.interface";

export interface AccountResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Account[];
}
