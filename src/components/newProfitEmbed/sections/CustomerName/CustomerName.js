import React from "react";
import styled from "styled-components";
// import { Caret } from "../../../../icons/Caret";

const StyledCustomerName = styled.div`
  align-items: center;
  background-color: var(--productgray-neutral0);
  border: 1px solid;
  border-color: #dbdbdb;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  height: 27px;
  left: 69px;
  padding: 4px 0px 4px 8px;
  position: absolute;
  top: 50px;
  width: 200px;

  & .text-wrapper-17 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #858585;
    display: -webkit-box;
    flex: 1;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 20px;
    margin-top: -1.5px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
  }

  & .size-24px-direction-down {
    height: 24px !important;
    margin-bottom: -2.5px !important;
    margin-top: -2.5px !important;
    position: relative !important;
    width: 24px !important;
  }
`;

const renderCustomerName = (currStep) => {
    if (currStep < 2) {
        return "All Customers"
    } else if (currStep === 2) {
        return "Nick Holmes"
    } else if (currStep > 2) {
        return "Lucy Daniells"
    }
}

export const CustomerName = ({ currStep }) => {
  return (
    <StyledCustomerName>
      <div className="text-wrapper-17">{renderCustomerName(currStep)}</div>
      {/* <Caret className="size-24px-direction-down" color="#8F8F8F" /> */}
    </StyledCustomerName>
  );
};
