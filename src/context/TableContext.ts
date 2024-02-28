import { createContext } from 'react';
import { People } from 'types';

interface Context {
  data: People[];
  setData: (data: People[]) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (rows: number) => void;
  currentData: People[];
  totalPages: number;
}

export const TableContext = createContext<Context | undefined>(undefined);
