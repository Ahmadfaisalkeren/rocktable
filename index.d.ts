// index.d.ts
declare module "rocktable" {
  import { ReactNode } from "react";

  export interface Column {
    header: string;
    accessor: string;
  }

  export interface TableContainerProps {
    columns: Column[];
    data: any[];
    onEdit?: (item: any) => void;
    onDelete?: (item: any) => void;
  }

  export const TableContainer: React.FC<TableContainerProps>;
  export const TableComponent: React.FC;
  export const Search: React.FC;
  export const Pagination: React.FC;
  export const ItemsPerPage: React.FC;
}
