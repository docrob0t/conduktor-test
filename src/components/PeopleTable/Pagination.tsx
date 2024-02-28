import React from 'react';
import { useTableContext } from 'context';
import { Button, Flex } from '@mantine/core';

function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useTableContext();

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Flex align="center" justify="center" gap="xs">
      <Button disabled={currentPage === 1} onClick={handlePrevious}>
        Previous
      </Button>
      <Button disabled={currentPage === totalPages} onClick={handleNext}>
        Next
      </Button>
    </Flex>
  );
}

export default Pagination;
