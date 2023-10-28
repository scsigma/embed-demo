import React from "react";
import styled from "styled-components";
import { Caret } from "./icons/Caret";

const StyledBox = styled.div`
  height: 201px;
  position: relative;
  width: 1176px;

  & .title-filters-kpis {
    height: 201px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1176px;
  }

  & .KP-is {
    height: 101px;
    left: 18px;
    position: absolute;
    top: 100px;
    width: 1156px;
  }

  & .revenue {
    height: 100px;
    left: 0;
    position: absolute;
    top: 0;
    width: 209px;
  }

  & .overlap-group {
    height: 100px;
    position: relative;
    width: 205px;
  }

  & .text-wrapper {
    color: #828282;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 33.6px;
    position: absolute;
    top: 0;
    width: 205px;
  }

  & .div {
    color: #000000;
    font-family: "Roboto", Helvetica;
    font-size: 48px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: 67.2px;
    position: absolute;
    top: 33px;
    width: 204px;
  }

  & .profit {
    height: 100px;
    left: 250px;
    position: absolute;
    top: 0;
    width: 209px;
  }

  & .text-wrapper-2 {
    color: #828282;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 33.6px;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 162px;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Roboto", Helvetica;
    font-size: 48px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: 67.2px;
    position: absolute;
    top: 34px;
    white-space: nowrap;
    width: 205px;
  }

  & .orders {
    height: 101px;
    left: 500px;
    position: absolute;
    top: 0;
    width: 174px;
  }

  & .text-wrapper-4 {
    color: #828282;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 33.6px;
    position: absolute;
    top: 0;
    width: 170px;
  }

  & .text-wrapper-5 {
    color: #000000;
    font-family: "Roboto", Helvetica;
    font-size: 48px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: 67.2px;
    position: absolute;
    top: 34px;
    width: 132px;
  }

  & .overlap {
    height: 101px;
    left: 702px;
    position: absolute;
    top: 0;
    width: 458px;
  }

  & .OTD {
    height: 101px;
    left: 0;
    position: absolute;
    top: 0;
    width: 348px;
  }

  & .text-wrapper-6 {
    color: #828282;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 33.6px;
    position: absolute;
    top: 0;
    width: 344px;
  }

  & .text-wrapper-7 {
    color: #000000;
    font-family: "Roboto", Helvetica;
    font-size: 48px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: 67.2px;
    position: absolute;
    top: 34px;
    width: 182px;
  }

  & .return-rate {
    height: 101px;
    left: 270px;
    position: absolute;
    top: 0;
    width: 187px;
  }

  & .text-wrapper-8 {
    color: #828282;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 33.6px;
    position: absolute;
    top: 0;
    width: 183px;
  }

  & .text-wrapper-9 {
    color: #000000;
    font-family: "Roboto", Helvetica;
    font-size: 48px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: 67.2px;
    position: absolute;
    top: 34px;
    width: 156px;
  }

  & .filters {
    height: 37px;
    left: 33px;
    position: absolute;
    top: 54px;
    width: 1122px;
  }

  & .input-field {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #dbdbdb;
    border-radius: 4px;
    height: 37px;
    left: 0;
    position: absolute;
    top: 0;
    width: 200px;
  }

  & .overlap-group-2 {
    height: 24px;
    left: 8px;
    position: relative;
    top: 8px;
    width: 180px;
  }

  & .text-wrapper-10 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #848484;
    display: -webkit-box;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 400;
    height: 20px;
    left: 0;
    letter-spacing: 0;
    line-height: 20px;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 1px;
    white-space: nowrap;
    width: 168px;
  }

  & .size-24px-direction-down {
    height: 24px !important;
    left: 156px !important;
    position: absolute !important;
    top: 0 !important;
    width: 24px !important;
  }

  & .overlap-wrapper {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #dbdbdb;
    border-radius: 4px;
    height: 37px;
    left: 308px;
    position: absolute;
    top: 0;
    width: 200px;
  }

  & .overlap-group-wrapper {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #dbdbdb;
    border-radius: 4px;
    height: 37px;
    left: 615px;
    position: absolute;
    top: 0;
    width: 200px;
  }

  & .div-wrapper {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #dbdbdb;
    border-radius: 4px;
    height: 37px;
    left: 922px;
    position: absolute;
    top: 0;
    width: 200px;
  }

  & .title {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1176px;
  }

  & .text-wrapper-11 {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 24px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: 44.8px;
    position: absolute;
    top: -1px;
    white-space: nowrap;
  }
`;

export const TitleFilterKPIs = () => {
  return (
    <StyledBox>
      <div className="title-filters-kpis">
        <div className="KP-is">
          <div className="revenue">
            <div className="overlap-group">
              <div className="text-wrapper">Gross Revenue</div>
              <div className="div">$3.14M</div>
            </div>
          </div>
          <div className="profit">
            <div className="text-wrapper-2">Gross Profit</div>
            <div className="text-wrapper-3">$1.33M</div>
          </div>
          <div className="orders">
            <div className="text-wrapper-4">Order Volume</div>
            <div className="text-wrapper-5">68.7k</div>
          </div>
          <div className="overlap">
            <div className="OTD">
              <div className="text-wrapper-6">On Time Delivery Rate</div>
              <div className="text-wrapper-7">96.4%</div>
            </div>
            <div className="return-rate">
              <div className="text-wrapper-8">Return Rate</div>
              <div className="text-wrapper-9">4.98%</div>
            </div>
          </div>
        </div>
        <div className="filters">
          <div className="input-field">
            <div className="overlap-group-2">
              <div className="text-wrapper-10">All Product Families</div>
              <Caret className="size-24px-direction-down" color="#8F8F8F" />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-10">All Regions</div>
              <Caret className="size-24px-direction-down" color="#8F8F8F" />
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-10">All Customers</div>
              <Caret className="size-24px-direction-down" color="#8F8F8F" />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-10">All Months</div>
              <Caret className="size-24px-direction-down" color="#8F8F8F" />
            </div>
          </div>
        </div>
        <div className="title">
          <div className="text-wrapper-11">Acme Analytics</div>
        </div>
      </div>
    </StyledBox>
  );
};
