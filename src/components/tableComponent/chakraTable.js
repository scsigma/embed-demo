import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Button, HStack, Col } from '@chakra-ui/react';
import data from './plugs.json';

const itemsPerPage = 12;

export const SimpleTable = ({ currStep }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = currStep >= 5 ? data.filter((item) => item.Type === "Computers").slice(startIndex, endIndex) : data.slice(startIndex, endIndex);
  
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box backgroundColor="lightgrey">
      <Table variant="simple" style={{borderCollapse:"separate", borderSpacing:"0 1em", tableLayout: "fixed", width:"540px"}}>
        <col className='order-col' style={{width: "8%"}}/>
        <col className='customer-col' style={{width: "16%"}}/>
        <col className='amount-col' style={{width: "9%"}}/>
        <col className='product-col' style={{width: "8%"}}/>
        <col className='type-col' style={{width: "15%"}}/>
        <Thead>
          <Tr color="black" style={{textAlign: "left"}}>
            {Object.keys(data[0]).map((column, index) => (
              <Th key={index}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {displayedData.map((item, index) => (
            <Tr key={index} border="1px solid black" >
              {Object.keys(item).map((column, colIndex) => (
                <Td key={colIndex} className={column} borderBottom="1px solid black" fontSize="11px" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" color="black" >
                    {item[column]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* <HStack spacing={2} mt={4} style={{justifyContent: "center", paddingBottom: "15px"}}>
        {Array.from({ length: totalPages }).map((_, page) => (
          <Button
            key={page}
            onClick={() => handlePageChange(page + 1)}
            colorScheme={currentPage === page + 1 ? 'teal' : 'gray'}
          >
            {page + 1}
          </Button>
        ))}
      </HStack> */}
    </Box>
  );
}
