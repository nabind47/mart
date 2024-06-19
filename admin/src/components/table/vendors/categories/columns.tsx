import { ICategory } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit3, MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<ICategory>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard.title",
    header: "Billboard Title",
  },
  {
    accessorKey: "billboard.description",
    header: "Billboard Description",
  },

  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Edit3 className="w-4 h-4 mr-2" />
              EDIT
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem></DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="w-4 h-4 mr-2" />
              DELETE
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
