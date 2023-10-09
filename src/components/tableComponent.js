import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

const TableRow = styled.tr`
    background-color: black;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid white;
`;

export const StyledTable = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Order #</TableHeader>
          <TableHeader>Customer</TableHeader>
          <TableHeader>Amount</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>560857</TableCell>
          <TableCell>Lucy Daniells</TableCell>
          <TableCell>$8,532.12</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>175840</TableCell>
          <TableCell>Charlize Richardson</TableCell>
          <TableCell>$8,443.90</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>549531</TableCell>
          <TableCell>Nick Holmes</TableCell>
          <TableCell>$7,465.00</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
}