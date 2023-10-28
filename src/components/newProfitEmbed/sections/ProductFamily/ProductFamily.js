import React from "react";
// import { Caret } from "../../../../icons/Caret";
import styled from "styled-components";

const StyledProductFamily = styled.div`
  align-items: center;
  background-color: var(--productgray-neutral0);
  border: 1px solid;
  border-color: #dbdbdb;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  height: 27px;
  left: 343px;
  padding: 4px 0px 4px 8px;
  position: absolute;
  top: 50px;
  width: 200px;

  & .text-wrapper-18 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #858585;
    display: -webkit-box;
    flex: 1;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 20px;
    margin-top: -1.5px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
  }

  & .caret-instance {
    height: 24px !important;
    margin-bottom: -2.5px !important;
    margin-top: -2.5px !important;
    position: relative !important;
    width: 24px !important;
  }
`;

const renderProductFamily = (currStep) => {
    if (currStep < 5) {
        return "All Product Families"
    } else {
        return "Computers"
    }
}

export const ProductFamily = ({ currStep }) => {
    return (
    <StyledProductFamily>
      <div className="text-wrapper-18">{renderProductFamily(currStep)}</div>
      {/* <Caret className="caret-instance" color="#8F8F8F" /> */}
    </StyledProductFamily>
  );
};
