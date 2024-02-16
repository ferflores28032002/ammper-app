"use client";
import { MaxWidthWrapper } from "@/components";
import { DataTable } from "@/components/DataTable";
import Loading from "@/components/Loading";

import { useAccounts } from "@/services/belvo/account.services";
import { columns } from "./shared/columns.accounts";
import FeatureMessage from "@/components/FeatureMessage";

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
