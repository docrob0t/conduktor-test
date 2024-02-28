import React, { useContext, useEffect, useMemo, useState } from 'react';
import { People } from 'types';
import { TableContext } from './TableContext';

export function TableProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<People[]>([]);
  const [currentData, setCurrentData] = useState<People[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    setCurrentData(data.slice(start, end));
  }, [data, currentPage, rowsPerPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / rowsPerPage));
  }, [data, rowsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [rowsPerPage]);

  const context = useMemo(() => {
    return {
      data,
      setData,
      currentPage,
      setCurrentPage,
      rowsPerPage,
      setRowsPerPage,
      currentData,
      totalPages,
    };
  }, [
    data,
    setData,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    currentData,
    totalPages,
  ]);

  return <TableContext.Provider value={context}>{children}</TableContext.Provider>;
}

export const useTableContext = () => {
  const context = useContext(TableContext);

  if (context === undefined) {
    throw new Error('useTableContext must be used within a TableProvider');
  }

  return context;
};
