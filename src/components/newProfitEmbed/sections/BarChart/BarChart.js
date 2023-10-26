import React from "react";
import styled from "styled-components";

const StyledBarChart = styled.div`
  height: 302px;
  left: 8px;
  position: absolute;
  top: 177px;
  width: 594px;

  & .overlap-group {
    height: 270px;
    left: 0;
    position: absolute;
    top: 32px;
    width: 592px;
  }

  & .y-axis {
    height: 270px;
    left: 148px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 1px;
  }

  & .bars-and-labels {
    height: 253px;
    left: 0;
    position: absolute;
    top: 4px;
    width: 592px;
  }

  & .product {
    height: 30px;
    left: 5px;
    position: absolute;
    top: 0;
    width: 591px;
  }

  & .rectangle {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 405px;
    left: 333px;
    position: absolute;
    top: -186px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-4 {
    color: #858585;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 26px;
    left: 0;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 0;
    width: 130px;
  }

  & .text-wrapper-5 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 552px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 8px;
    width: 35px;
  }

  & .product-2 {
    height: 26px;
    left: 0;
    position: absolute;
    top: 48px;
    width: 522px;
  }

  & .rectangle-2 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 330px;
    left: 301px;
    position: absolute;
    top: -152px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-6 {
    color: #858585;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 26px;
    left: 0;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 0;
    width: 136px;
  }

  & .text-wrapper-7 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 480px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 4px;
    width: 38px;
  }

  & .product-3 {
    height: 26px;
    left: 6px;
    position: absolute;
    top: 93px;
    width: 494px;
  }

  & .rectangle-3 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 309px;
    left: 284px;
    position: absolute;
    top: -141px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-8 {
    color: #858585;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 17px;
    left: 0;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 5px;
    width: 130px;
  }

  & .text-wrapper-9 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 452px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 4px;
    width: 38px;
  }

  & .product-4 {
    height: 26px;
    left: 0;
    position: absolute;
    top: 137px;
    width: 421px;
  }

  & .rectangle-4 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 231px;
    left: 251px;
    position: absolute;
    top: -102px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-10 {
    color: #858585;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 17px;
    left: 0;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 5px;
    width: 136px;
  }

  & .text-wrapper-11 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 383px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 5px;
    width: 34px;
  }

  & .product-5 {
    height: 26px;
    left: 23px;
    position: absolute;
    top: 182px;
    width: 322px;
  }

  & .rectangle-5 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 154px;
    left: 190px;
    position: absolute;
    top: -64px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-12 {
    color: #858585;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 17px;
    left: 0;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 5px;
    width: 113px;
  }

  & .text-wrapper-13 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 280px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 4px;
    width: 38px;
  }

  & .product-6 {
    height: 26px;
    left: 1px;
    position: absolute;
    top: 227px;
    width: 287px;
  }

  & .rectangle-6 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 104px;
    left: 187px;
    position: absolute;
    top: -39px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-14 {
    color: #858585;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 24px;
    left: 0;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 1px;
    width: 135px;
  }

  & .text-wrapper-15 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 252px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 4px;
    width: 31px;
  }

  & .text-wrapper-16 {
    color: #181818;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 20px;
    font-weight: 600;
    left: 12px;
    letter-spacing: 0;
    line-height: 20px;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }
`;

export const BarChart = () => {
  return (
    <StyledBarChart>
      <div className="overlap-group">
        <img className="y-axis" alt="Y axis" src="https://c.animaapp.com/sZtkOaW4/img/y-axis.svg" />
        <div className="bars-and-labels">
          <div className="product">
            <div className="rectangle" />
            <div className="text-wrapper-4">Finger and Hand Cymbals</div>
            <div className="text-wrapper-5">$547k</div>
          </div>
          <div className="product-2">
            <div className="rectangle-2" />
            <div className="text-wrapper-6">Brickaroid Digital Camera</div>
            <div className="text-wrapper-7">$322k</div>
          </div>
          <div className="product-3">
            <div className="rectangle-3" />
            <div className="text-wrapper-8">Aviz 15 Inch Laptop</div>
            <div className="text-wrapper-9">$301k</div>
          </div>
          <div className="product-4">
            <div className="rectangle-4" />
            <div className="text-wrapper-10">LP InkMaster Printer</div>
            <div className="text-wrapper-11">$219k</div>
          </div>
          <div className="product-5">
            <div className="rectangle-5" />
            <div className="text-wrapper-12">LiteFone 6 Edge</div>
            <div className="text-wrapper-13">$134k</div>
          </div>
          <div className="product-6">
            <div className="rectangle-6" />
            <div className="text-wrapper-14">USB-C Compatible Portable Charger</div>
            <div className="text-wrapper-15">$67k</div>
          </div>
        </div>
      </div>
      <div className="text-wrapper-16">Most Profitable Products</div>
    </StyledBarChart>
  );
};
