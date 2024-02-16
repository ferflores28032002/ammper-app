import { Button } from "@/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

import { Transaction } from "@/store/interfaces/Transaction.interface";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "category",
    header: "category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "description",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("description")}</div>
    ),
  },

  {
    accessorKey: "type",
    header: "type",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "amount",
    header: "amount",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "balance",
    header: "balance",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("balance")}</div>
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
    accessorKey: "reference",
    header: "reference",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("reference")}</div>
    ),
  },
  {
    accessorKey: "value_date",
    header: "value_date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("value_date")}</div>
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
    accessorKey: "accounting_date",
    header: "accounting_date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("accounting_date")}</div>
    ),
  },
  {
    accessorKey: "internal_identification",
    header: "internal_identification",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("internal_identification")}
      </div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
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
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
