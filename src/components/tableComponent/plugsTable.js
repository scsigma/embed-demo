import React from 'react';
import styled from 'styled-components';
import plugsData from './plugs.json';

const Table = styled.table`
  width: 80%;
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
//   padding: 10px;
//   border-bottom: 1px solid white;
    
    font-size: x-small;
    max-width: 4px; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    padding-top: 10px;
    padding-bottom: 10px;

    border: 1px solid red;
`;

export const PlugsTable = () => {
  
  const columns = Object.keys(plugsData);
  console.log(columns);
  
  return (
    <Table>
      <thead>
        <TableRow>
            {columns.map(column => (
                <TableHeader key={column}>{column}</TableHeader>
            ))}
        </TableRow>
      </thead>
      <tbody>
        {plugsData.map((item, index) => (
            <TableRow key={index}>
                {columns.map(column => (
                <TableCell key={column} className={`cell column-${column}`}>{item[column]}</TableCell>
                ))}
            </TableRow>
        ))}
      </tbody>
    </Table>
  );
}