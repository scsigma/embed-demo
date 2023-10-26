import React from "react";
import styled from "styled-components";
import { BarChart } from "./sections/BarChart/BarChart.js";
import { CustomerName } from "./sections/CustomerName/CustomerName.js";
import { KpIs } from "./sections/KPIs/KPIs.js";
import { ProductFamily } from "./sections/ProductFamily/ProductFamily.js";

const StyledPageEmbed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div-2 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #dfdfdf;
    height: 499px;
    position: relative;
    width: 612px;
    border-radius: 15px;

    & .text-wrapper-19 {
      color: #000000;
      font-family: "Source Sans Pro", Helvetica;
      font-size: 24px;
      font-weight: 600;
      left: 14px;
      letter-spacing: 0;
      line-height: 44.8px;
      position: absolute;
      top: 0;
      white-space: nowrap;
      width: 161px;
    }
  }
`;

export const PageEmbed = () => {
  return (
    <StyledPageEmbed>
      <div className="div-2">
        <div className="text-wrapper-19">Profit Snapshot</div>
        <KpIs />
        <BarChart />
        <CustomerName />
        <ProductFamily />
      </div>
    </StyledPageEmbed>
  );
};