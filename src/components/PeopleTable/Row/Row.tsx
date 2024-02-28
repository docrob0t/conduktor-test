import { Table, Drawer } from '@mantine/core';
import React from 'react';
import { People } from 'types';
import { useDisclosure } from '@mantine/hooks';

function Row({ person }: { person: People }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Table.Tr onClick={open}>
        <Table.Td>{person.name}</Table.Td>
        <Table.Td>{person.dob}</Table.Td>
        <Table.Td>{person.email}</Table.Td>
        <Table.Td>{person.verified ? 'Yes' : 'No'}</Table.Td>
        <Table.Td>{person.salary}</Table.Td>
      </Table.Tr>
      <Drawer position="right" opened={opened} onClose={close} title={person.name}>
        <p>Date of Birth: {person.dob}</p>
        <p>Email: {person.email}</p>
        <p>Salary: {person.salary}</p>
        <p>Adress: {person.address.postode}</p>
      </Drawer>
    </>
  );
}

export default Row;
