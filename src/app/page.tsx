"use client";

import Link from "next/link";

import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

import { Button, MaxWidthWrapper, buttonVariants } from "@/components";
import { useAccounts } from "@/services/belvo/account.services";
import { useTransactions } from "@/services/belvo/transaction.services";

const perks = [
  {
    name: "Instant devlivery",
    Icon: ArrowDownToLine,
    description: "Lorem ipsum dolor sit amet  elit. Aut, placeat!",
  },
  {
    name: "Guaranteed quality",
    Icon: CheckCircle,
    description: "Lorem ipsum dolor sit amet  elit. Aut, placeat!",
  },
  {
    name: "For the plannet",
    Icon: Leaf,
    description: "Lorem ipsum dolor sit amet  elit. Aut, placeat!",
  },
];

export default function Home() {
  const { transactions, error, isLoading } = useTransactions({
    link: "c51e0460-b917-43db-aeed-ef2f7afb05a3",
    date_from: "2023-05-12",
    date_to: "2024-02-12",
    account: "638209ff-a2f2-43ea-8f34-34432d57cecb",
  });

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality
            <span className="text-blue-600"> digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to digitalhippo. Every asset on our platform is verified by
            our team to ensure our highest quality starndars
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/accounts" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button>Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* todo: list products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex  md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16  flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
