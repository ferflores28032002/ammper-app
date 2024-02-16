export interface Account {
  id: string;
  link: string;
  institution: {
    name: string;
    type: string;
  };
  created_at: string;
  name: string;
  type: string;
  agency: string;
  number: string;
  balance: {
    current: number;
    available: number;
  };
  category: string;
  currency: string;
  loan_data?: any;
  credit_data?: any;
  balance_type: string;
  collected_at: string;
  bank_product_id: string;
  last_accessed_at?: string;
  internal_identification?: string;
  public_identification_name?: string;
  public_identification_value?: string;
}

export interface AccountSlice {
  // properties
  account: Account[];

  // methods
  setAccount: (account: Account[]) => void;
}
