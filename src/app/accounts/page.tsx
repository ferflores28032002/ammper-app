"use client";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@radix-ui/react-checkbox";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, MaxWidthWrapper } from "@/components";
import { Account } from "@/store/interfaces/Account.interface";
import { useAccounts } from "@/services/belvo/account.services";
import Loading from "@/components/Loading";

export const columns: ColumnDef<Account>[] = [
  {
    id: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "type",
    header: "type",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "agency",
    header: "agency",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("agency")}</div>
    ),
  },
  {
    accessorKey: "number",
    header: "number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("number")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "currency",
    header: "currency",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("currency")}</div>
    ),
  },
  {
    accessorKey: "balance_type",
    header: "balance_type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("balance_type")}</div>
    ),
  },
  {
    accessorKey: "collected_at",
    header: "collected_at",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("collected_at")}</div>
    ),
  },
  {
    accessorKey: "public_identification_name",
    header: "identification_name",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("public_identification_name")}
      </div>
    ),
  },
  {
    accessorKey: "public_identification_value",
    header: "identification_value",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("public_identification_value")}
      </div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy account id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const AccountsPage = () => {
  const { accounts, isLoading } = useAccounts();

  if (isLoading) return <Loading />;

  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-4 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Bienvenido a <span className="text-blue-600"> Belvo Accounts</span>
          </h1>
          <p className="mt-6 text-sm max-w-prose text-muted-foreground">
            Mueve dinero entre cuentas de forma instánea
          </p>
        </div>

        <DataTable columns={columns} data={accounts} />
      </MaxWidthWrapper>
    </div>
  );
};

export default AccountsPage;
