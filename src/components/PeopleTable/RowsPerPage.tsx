import React from 'react';
import { Flex, Select } from '@mantine/core';
import { useTableContext } from 'context';

function RowsPerPage() {
  const { rowsPerPage, setRowsPerPage } = useTableContext();

  const handleChange = (value: string | null) => {
    setRowsPerPage(Number(value));
  };

  return (
    <Flex align="center" justify="center">
      <Select
        label="Items per row:"
        data={['10', '20', '50']}
        defaultValue={`${rowsPerPage}`}
        onChange={(value) => handleChange(value)}
      />
    </Flex>
  );
}

export default RowsPerPage;
