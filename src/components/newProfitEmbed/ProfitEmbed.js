import React from "react";
import styled from "styled-components";
import { BarChart } from "./sections/BarChart/BarChart.js";
import { CustomerName } from "./sections/CustomerName/CustomerName.js";
import { KpIs } from "./sections/KPIs/KPIs.js";
import { ProductFamily } from "./sections/ProductFamily/ProductFamily.js";
import { FilterDropdown } from "../filterDropdown/FilterDropdown.js";
import { ProductFamilyDropdown } from "../productFamilyDropdown/ProductFamilyDropdown.js";

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

export const PageEmbed = ({ currStep }) => {
  return (
    <StyledPageEmbed>
      <div className="div-2">
        <div className="text-wrapper-19">Profit Snapshot</div>
        <KpIs currStep={currStep} />
        {currStep === 1 ? 
          <div className="filter-modal-container" style={{"width":"245px", "height":"195px", "paddingLeft":"5px", "paddingRight":"5px", "paddingTop":"5px", "top":"88px","left":"69px","zIndex":"1","position":"absolute", "backgroundColor":"#ffffff", "borderRadius":"5px","boxShadow":"0px 2px 5px rgba(0, 0, 0, 0.2)"}}>
            <FilterDropdown style={{"z-index":"1"}} />
          </div> 
          : <div className="empty-placeholder"></div>
        }
        {currStep === 4 ? 
          <div className="productfamily-filter-modal-container" style={{"width":"245px", "height":"195px", "paddingLeft":"5px", "paddingRight":"5px", "paddingTop":"5px", "top":"88px","left":"343px","zIndex":"1","position":"absolute", "backgroundColor":"#ffffff", "borderRadius":"5px","boxShadow":"0px 2px 5px rgba(0, 0, 0, 0.2)"}}>
            <ProductFamilyDropdown style={{"z-index":"1"}} />
          </div> 
          : <div className="empty-placeholder"></div>
        }
        <BarChart currStep={currStep} />
        <CustomerName currStep={currStep} />
        <ProductFamily currStep={currStep}/>
      </div>
    </StyledPageEmbed>
  );
};