import React from 'react';
import PeopleTable from 'components/PeopleTable';
import { TableProvider } from 'context';
import { Container } from '@mantine/core';

function App() {
  return (
    <Container>
      <TableProvider>
        <PeopleTable />
      </TableProvider>
    </Container>
  );
}

export default App;
