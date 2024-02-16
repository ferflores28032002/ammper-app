"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTransactions } from "@/services/belvo/transaction.services";
import Link from "next/link";
import { useParams } from "next/navigation";
import { columns } from "../shared/transaction.columns";

import {
  CustomAlert,
  DataTable,
  FeatureMessage,
  TransactionTypePieChart,
  Loading,
  MaxWidthWrapper,
  MultiLineChart,
  PieChart,
  ScatterPlot,
  StackedBarChart,
  buttonVariants,
  AreaChart,
  ComparativeHistograms,
} from "@/components/";

const TransactionsPage = () => {
  const params = useParams();

  const { transactions, error, isLoading } = useTransactions({
    link: "c51e0460-b917-43db-aeed-ef2f7afb05a3",
    date_from: "2023-05-12",
    date_to: "2024-02-12",
    account: `${params.account_id}`,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>An error has occurred...</div>;

  return (
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
      <Tabs defaultValue="graphics" className="my-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="graphics">graphics</TabsTrigger>
          <TabsTrigger value="transaction-list">transaction list</TabsTrigger>
        </TabsList>
        <TabsContent value="graphics">
          <div>
            {transactions.length === 0 ? (
              <div className="py-20">
                <CustomAlert
                  title="There are no transactions"
                  description="There are no sample graphs"
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <ComparativeHistograms />
                <PieChart />
                <ScatterPlot />
                <StackedBarChart />
                <AreaChart />
                <MultiLineChart />
                <TransactionTypePieChart />
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="transaction-list">
          <div>
            <DataTable columns={columns} data={transactions} />
          </div>
        </TabsContent>
      </Tabs>
    </MaxWidthWrapper>
  );
};

export default TransactionsPage;
