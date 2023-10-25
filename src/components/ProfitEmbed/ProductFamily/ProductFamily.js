import React from "react";
import { Caret } from "../Caret/Caret.js";
import styled from "styled-components";

const StyledProductFamily = styled.div`
  align-items: center;
  background-color: var(--productgray-neutral0);
  border: 1px solid;
  border-color: #dbdbdb;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  height: 39px;
  left: 544px;
  padding: 4px 0px 4px 8px;
  position: absolute;
  top: 97px;
  width: 282px;

  & .text-wrapper-14 {
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

  & .caret-instance {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }
`;

export const ProductFamily = () => {
  return (
    <StyledProductFamily>
      <div className="text-wrapper-14">All Product Families</div>
      <Caret className="caret-instance" color="#8F8F8F" />
    </StyledProductFamily>
  );
};
