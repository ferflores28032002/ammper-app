"use client";

import Link from "next/link";

import { Button, MaxWidthWrapper, buttonVariants } from "@/components";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Discover Belvo -
            <span className="text-blue-600"> Your Financial Passport!</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Would you like to have full control of your finances in one place?
            With Belvo it is possible! Our app allows you to connect all your
            bank accounts and credit cards in one easy-to-use platform. Get a
            complete view of your income, expenses and savings in real time.
            Goodbye to financial chaos, hello to peace of mind!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/accounts" className={buttonVariants()}>
              accounts &rarr;
            </Link>
            <Button>Belvo &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
