export interface Transaction {
  id: string;
  account: Account;
  created_at: string;
  category: string | null;
  subcategory?: string | null;
  merchant?: Merchant | null;
  type: string;
  amount: number;
  status: string;
  balance: number;
  currency: string;
  reference?: string | null;
  value_date: string;
  description: string;
  collected_at: string;
  observations?: string | null;
  accounting_date: string;
  internal_identification?: string | null;
}

interface Account {
  id: string;
  link: string;
  institution: Institution;
  created_at: string;
  collected_at: string;
  currency: string;
  category: string;
  type: string;
  number: string;
  agency: string;
  bank_product_id: string;
  internal_identification: string;
  public_identification_name: string;
  public_identification_value: string;
  credit_data?: any; // Ajustar según la estructura de datos de crédito
  loan_data?: LoanData | null;
  name: string;
  balance: Balance;
  last_accessed_at: string;
  balance_type: string;
}

interface Institution {
  name: string;
  type: string;
}

interface Merchant {
  name: string;
  website?: string;
  logo?: string;
}

interface LoanData {
  collected_at: string;
  credit_limit: number;
  cutting_day: string;
  cutting_date: string;
}

interface Balance {
  current: number;
  available: number;
}

export interface TransactionSlice {
  // properties
  accountId: string;
  Transaction: Transaction[];

  // methods
  setTransaction: (Transaction: Transaction[]) => void;
  setAccountId: (accountId: string) => void;
}
