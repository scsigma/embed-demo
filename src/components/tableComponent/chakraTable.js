import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import data from './plugs.json';

export const SimpleTable = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          {Object.keys(data[0]).map((column, index) => (
            <Th key={index}>{column}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, index) => (
          <Tr key={index}>
            {Object.keys(item).map((column, colIndex) => (
              <Td key={colIndex}>{item[column]}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
