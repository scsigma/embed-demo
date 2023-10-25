import React from "react";
import { Caret } from "../Caret/Caret.js";
import styled from "styled-components";

const StyledCustomerName = styled.div`
  align-items: center;
  background-color: var(--productgray-neutral0);
  border: 1px solid;
  border-color: #dbdbdb;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  height: 39px;
  left: 130px;
  padding: 4px 0px 4px 8px;
  position: absolute;
  top: 99px;
  width: 282px;

  & .text-wrapper-13 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #858585;
    display: -webkit-box;
    flex: 1;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 20px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
  }

  & .size-24px-direction-down {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }
`;

export const CustomerName = ({ currClick }) => {
  
  const CustomerName = (currClick) => {
    if (currClick === 1) {
        return "All Customers";
    } else if (currClick === 2) {
        return "Nick Holmes"
    }
  }  

  return (
    <StyledCustomerName>
      <div className="text-wrapper-13">{CustomerName(currClick)}</div>
      <Caret className="size-24px-direction-down" color="#8F8F8F" />
    </StyledCustomerName>
  );
};
