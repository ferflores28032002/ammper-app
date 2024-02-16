import { Button } from "@/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Account } from "@/store/interfaces/Account.interface";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Account>[] = [
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
              onClick={() => (window.location.href = `/accounts/${payment.id}`)}
            >
              Transactions
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
