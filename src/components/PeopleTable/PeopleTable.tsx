import React, { useEffect } from 'react';
import { useTableContext } from 'context';
import axios from 'axios';
import { Flex, Table } from '@mantine/core';
import Pagination from './Pagination';
import RowsPerPage from './RowsPerPage';
import Row from './Row';

function PeopleTable() {
  const { setData, currentData } = useTableContext();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/ctRoot');
      setData(result.data);
    };

    fetchData();
  }, [setData]);

  return (
    <>
      <Flex justify="space-between" align="center">
        <RowsPerPage />
        <Pagination />
      </Flex>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Date of Birth</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Verified</Table.Th>
            <Table.Th>Salary</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {currentData.map((person) => (
            <Row key={person._id} person={person} />
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}

export default PeopleTable;
