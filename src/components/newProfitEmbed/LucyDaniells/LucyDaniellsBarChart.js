import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  height: 302px;
  position: relative;
  width: 596px;

  & .bar-chart {
    height: 302px;
    position: relative;
    top: 177px;
    left: 8px;
    width: 594px;
  }

  & .overlap-group {
    height: 270px;
    left: 0;
    position: absolute;
    top: 32px;
    width: 596px;
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
    width: 596px;
  }

  & .product {
    height: 30px;
    left: 5px;
    position: absolute;
    top: 0;
    width: 595px;
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

  & .text-wrapper {
    color: #8f8f8f;
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

  & .div {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 544px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 7px;
    width: 47px;
  }

  & .product-2 {
    height: 26px;
    left: 0;
    position: absolute;
    top: 48px;
    width: 419px;
  }

  & .rectangle-2 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 216px;
    left: 244px;
    position: absolute;
    top: -95px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-2 {
    color: #8f8f8f;
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

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 365px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 3px;
    width: 50px;
  }

  & .product-3 {
    height: 26px;
    left: 6px;
    position: absolute;
    top: 93px;
    width: 363px;
  }

  & .rectangle-3 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 166px;
    left: 213px;
    position: absolute;
    top: -70px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-4 {
    color: #8f8f8f;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 13px;
    font-weight: 400;
    height: 17px;
    left: 0;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 4px;
    width: 130px;
  }

  & .text-wrapper-5 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 310px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 3px;
    width: 49px;
  }

  & .product-4 {
    height: 27px;
    left: 0;
    position: absolute;
    top: 137px;
    width: 350px;
  }

  & .rectangle-4 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 157px;
    left: 214px;
    position: absolute;
    top: -65px;
    transform: rotate(90deg);
    width: 27px;
  }

  & .text-wrapper-6 {
    color: #8f8f8f;
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

  & .text-wrapper-7 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 299px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 4px;
    width: 47px;
  }

  & .product-5 {
    height: 26px;
    left: 23px;
    position: absolute;
    top: 182px;
    width: 223px;
  }

  & .rectangle-5 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 55px;
    left: 140px;
    position: absolute;
    top: -14px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-8 {
    color: #8f8f8f;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 13px;
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

  & .text-wrapper-9 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 173px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 3px;
    width: 46px;
  }

  & .product-6 {
    height: 26px;
    left: 1px;
    position: absolute;
    top: 227px;
    width: 234px;
  }

  & .rectangle-6 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 48px;
    left: 159px;
    position: absolute;
    top: -11px;
    transform: rotate(90deg);
    width: 26px;
  }

  & .text-wrapper-10 {
    color: #8f8f8f;
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

  & .text-wrapper-11 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 19px;
    left: 186px;
    letter-spacing: 0;
    line-height: 14px;
    position: absolute;
    text-align: right;
    top: 3px;
    width: 44px;
  }

  & .text-wrapper-12 {
    color: #171717;
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

export const LucyDaniells = () => {
  return (
    <StyledBox>
      <div className="bar-chart">
        <div className="overlap-group">
          <img className="y-axis" alt="Y axis" src="https://c.animaapp.com/0wbB20wP/img/y-axis.svg" />
          <div className="bars-and-labels">
            <div className="product">
              <div className="rectangle" />
              <div className="text-wrapper">Aviz 15 Inch Laptop</div>
              <div className="div">$8.02k</div>
            </div>
            <div className="product-2">
              <div className="rectangle-2" />
              <div className="text-wrapper-2">BigView 55 Inch TV</div>
              <div className="text-wrapper-3">$4.24k</div>
            </div>
            <div className="product-3">
              <div className="rectangle-3" />
              <div className="text-wrapper-4">SmartPhone 7 Neuro</div>
              <div className="text-wrapper-5">$3.32k</div>
            </div>
            <div className="product-4">
              <div className="rectangle-4" />
              <div className="text-wrapper-6">Wireless Charger</div>
              <div className="text-wrapper-7">$3.1k</div>
            </div>
            <div className="product-5">
              <div className="rectangle-5" />
              <div className="text-wrapper-8">Remote Controlled Vacuum</div>
              <div className="text-wrapper-9">$970</div>
            </div>
            <div className="product-6">
              <div className="rectangle-6" />
              <div className="text-wrapper-10">OLED TriColor Floor Lamp</div>
              <div className="text-wrapper-11">$746</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-12">Most Profitable Products</div>
      </div>
    </StyledBox>
  );
};
