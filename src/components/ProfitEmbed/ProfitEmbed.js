import React from "react";
import { ChartElement } from "./ChartElement/ChartElement.js";
import { CustomerName } from "./CustomerName/CustomerName.js";
import { KPIs } from "./KPIs/KPIs.js";
import { ProductFamily } from "./ProductFamily/ProductFamily.js";
import { NickHolmesChartElement } from "./ClickedBarChart/NickHolmesChart.js";
import styled from "styled-components";

const StyledPageEmbed = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #dfdfdf;
  border-radius: 16px;
  height: 830px;
  overflow: hidden;
  position: relative;
  width: 963px;

  & .text-wrapper-15 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 36px;
    font-weight: 700;
    left: 43px;
    letter-spacing: 0;
    line-height: 44.8px;
    position: absolute;
    top: 25px;
    white-space: nowrap;
  }
`;

export const ProfitEmbed = ({ currClick }) => {
  return (
    <StyledPageEmbed>
      <div className="text-wrapper-15">Profit Snapshot</div>
      <KPIs currClick={currClick} />
      <CustomerName currClick={currClick} />
      <ProductFamily />
      {currClick === 1 ? 
      <ChartElement /> : <NickHolmesChartElement />}
    </StyledPageEmbed>
  );
};

// 844 x 1468