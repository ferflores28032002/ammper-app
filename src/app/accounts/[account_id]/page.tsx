"use client";

import { MaxWidthWrapper, buttonVariants } from "@/components";
import Loading from "@/components/Loading";
import { useTransactions } from "@/services/belvo/transaction.services";
import { useParams } from "next/navigation";
import { columns } from "../shared/transaction.columns";
import { DataTable } from "@/components/DataTable";
import FeatureMessage from "@/components/FeatureMessage";
import Link from "next/link";

const TransactionsPage = () => {
  const params = useParams();

  const { transactions, error, isLoading } = useTransactions({
    link: "c51e0460-b917-43db-aeed-ef2f7afb05a3",
    date_from: "2023-05-12",
    date_to: "2024-02-12",
    account: `${params.account_id}`,
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      <MaxWidthWrapper>
        <FeatureMessage
          subtitle="Belvo Transactions"
          description=" Easily and securely access a wide range of financial data sources,
          including bank and non-bank data, to obtain a complete picture of
          your clients' financial activity and offer tailored products."
          title="Welcome to"
        />
        <div className=" mx-auto text-center flex flex-col items-center max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/accounts" className={buttonVariants()}>
              &larr; Accounts
            </Link>
            <Link href="/" className={buttonVariants()}>
              &larr; Home
            </Link>
          </div>
        </div>

        <DataTable columns={columns} data={transactions} />
      </MaxWidthWrapper>
    </div>
  );
};

export default TransactionsPage;
