"use client";

import { DataTable, FeatureMessage, MaxWidthWrapper } from "@/components/";
import Loading from "@/components/Loading";

import { useAccounts } from "@/services/belvo/account.services";
import { columns } from "./shared/columns.accounts";

const AccountsPage = () => {
  const { accounts, isLoading, error } = useAccounts();

  if (isLoading) return <Loading />;
  if (error) return <div>An error has occurred...</div>;

  return (
    <div>
      <MaxWidthWrapper>
        <FeatureMessage
          subtitle="Belvo Accounts"
          description="Move money between accounts instantly"
          title="Welcome to"
        />

        <DataTable columns={columns} data={accounts} />
      </MaxWidthWrapper>
    </div>
  );
};

export default AccountsPage;
