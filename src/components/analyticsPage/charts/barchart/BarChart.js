import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  height: 393px;
  position: relative;
  width: 573px;

  & .bar {
    height: 393px;
    left: 0;
    position: absolute;
    top: 0;
    width: 575px;
  }

  & .title {
    color: #171717;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 600;
    left: 29px;
    letter-spacing: 0;
    line-height: 20px;
    position: absolute;
    top: 0;
    width: 420px;
  }

  & .chart {
    height: 346px;
    left: 0;
    position: absolute;
    top: 47px;
    width: 573px;
  }

  & .overlap-group {
    height: 346px;
    position: relative;
  }

  & .bars-and-labels {
    height: 326px;
    left: 0;
    position: absolute;
    top: 10px;
    width: 573px;
  }

  & .product {
    height: 29px;
    left: 53px;
    position: absolute;
    top: 0;
    width: 524px;
  }

  & .rectangle {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 355px;
    left: 277px;
    position: absolute;
    top: -163px;
    transform: rotate(90deg);
    width: 29px;
  }

  & .text-wrapper {
    color: #8f8f8f;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 400;
    height: 18px;
    left: 0;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    text-align: right;
    top: 6px;
    width: 97px;
  }

  & .div {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 19px;
    left: 465px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    text-align: right;
    top: 5px;
    white-space: nowrap;
    width: 55px;
  }

  & .product-2 {
    height: 30px;
    left: 59px;
    position: absolute;
    top: 59px;
    width: 315px;
  }

  & .rectangle-2 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 156px;
    left: 171px;
    position: absolute;
    top: -63px;
    transform: rotate(90deg);
    width: 30px;
  }

  & .text-wrapper-2 {
    color: #8f8f8f;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 400;
    height: 18px;
    left: 0;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    text-align: right;
    top: 6px;
    width: 91px;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 19px;
    left: 265px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    text-align: right;
    top: 5px;
    white-space: nowrap;
    width: 46px;
  }

  & .product-3 {
    height: 36px;
    left: 0;
    position: absolute;
    top: 116px;
    width: 360px;
  }

  & .rectangle-3 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 141px;
    left: 223px;
    position: absolute;
    top: -53px;
    transform: rotate(90deg);
    width: 29px;
  }

  & .media-entertainment {
    color: #8f8f8f;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 400;
    height: 36px;
    left: 0;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    text-align: right;
    top: 0;
    width: 150px;
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 19px;
    left: 308px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    text-align: right;
    top: 8px;
    white-space: nowrap;
    width: 48px;
  }

  & .product-4 {
    height: 29px;
    left: 85px;
    position: absolute;
    top: 178px;
    width: 186px;
  }

  & .rectangle-4 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 51px;
    left: 93px;
    position: absolute;
    top: -11px;
    transform: rotate(90deg);
    width: 29px;
  }

  & .text-wrapper-5 {
    color: #8f8f8f;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 400;
    height: 18px;
    left: 0;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    text-align: right;
    top: 6px;
    width: 65px;
  }

  & .text-wrapper-6 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 19px;
    left: 133px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    text-align: right;
    top: 5px;
    white-space: nowrap;
    width: 49px;
  }

  & .product-5 {
    height: 30px;
    left: 38px;
    position: absolute;
    top: 237px;
    width: 218px;
  }

  & .rectangle-5 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 36px;
    left: 132px;
    position: absolute;
    top: -3px;
    transform: rotate(90deg);
    width: 30px;
  }

  & .text-wrapper-7 {
    color: #8f8f8f;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 400;
    height: 18px;
    left: 0;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    text-align: right;
    top: 6px;
    width: 112px;
  }

  & .text-wrapper-8 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 19px;
    left: 165px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    text-align: right;
    top: 5px;
    white-space: nowrap;
    width: 49px;
  }

  & .product-6 {
    height: 29px;
    left: 38px;
    position: absolute;
    top: 297px;
    width: 204px;
  }

  & .rectangle-6 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 30px;
    left: 130px;
    position: absolute;
    top: 0;
    transform: rotate(90deg);
    width: 29px;
  }

  & .text-wrapper-9 {
    color: #8f8f8f;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 400;
    height: 18px;
    left: 0;
    letter-spacing: 0;
    line-height: 18px;
    position: absolute;
    text-align: right;
    top: 4px;
    width: 112px;
  }

  & .text-wrapper-10 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 19px;
    left: 159px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    text-align: right;
    top: 5px;
    white-space: nowrap;
    width: 41px;
  }

  & .y-axis {
    height: 346px;
    left: 167px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 1px;
  }
`;

export const BarChart = () => {
  return (
    <StyledBox>
      <div className="bar">
        <div className="title">Revenue by Product Family</div>
        <div className="chart">
          <div className="overlap-group">
            <div className="bars-and-labels">
              <div className="product">
                <div className="rectangle" />
                <div className="text-wrapper">Computers</div>
                <div className="div">$1.46M</div>
              </div>
              <div className="product-2">
                <div className="rectangle-2" />
                <div className="text-wrapper-2">Mobiles</div>
                <div className="text-wrapper-3">$758k</div>
              </div>
              <div className="product-3">
                <div className="rectangle-3" />
                <div className="media-entertainment">Media &amp; Entertainment</div>
                <div className="text-wrapper-4">$693k</div>
              </div>
              <div className="product-4">
                <div className="rectangle-4" />
                <div className="text-wrapper-5">Music</div>
                <div className="text-wrapper-6">$244k</div>
              </div>
              <div className="product-5">
                <div className="rectangle-5" />
                <div className="text-wrapper-7">Accessories</div>
                <div className="text-wrapper-8">$208k</div>
              </div>
              <div className="product-6">
                <div className="rectangle-6" />
                <div className="text-wrapper-9">Photography</div>
                <div className="text-wrapper-10">$151k</div>
              </div>
            </div>
            <img className="y-axis" alt="Y axis" src="https://c.animaapp.com/05IHBnnn/img/y-axis.svg" />
          </div>
        </div>
      </div>
    </StyledBox>
  );
};
