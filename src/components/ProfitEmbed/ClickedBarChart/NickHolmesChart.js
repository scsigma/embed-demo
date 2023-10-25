import React from "react";
import styled from "styled-components";

const StyledChartElement = styled.div`
  height: 506px;
  left: 43px;
  position: absolute;
  top: 290px;
  width: 878px;

  & .chart-and-title {
    height: 534px;
    position: relative;
  }

  & .title {
    align-items: center;
    display: flex;
    justify-content: space-between;
    left: 0;
    position: absolute;
    top: 0;
    width: 878px;
  }

  & .text-wrapper-4 {
    color: #181818;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 20px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .label {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
  }

  & .bar-chart {
    height: 518px;
    left: 0;
    position: absolute;
    top: 50px;
    width: 878px;
  }

  & .overlap-group {
    height: 469px;
    left: -15px;
    position: relative;
    top: -13px;
    width: 761px;
  }

  & .bars-and-labels {
    height: 407px;
    left: 0;
    position: absolute;
    top: 26px;
    width: 761px;
  }

  & .product {
    height: 48px;
    left: 0;
    position: absolute;
    top: 0;
    width: 765px;
  }

  & .rectangle {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 437px;
    left: 452px;
    position: absolute;
    top: -194px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .text-wrapper-5 {
    color: #858585;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 48px;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 0;
    width: 232px;
  }

  & .text-wrapper-6 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 689px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 14px;
    white-space: nowrap;
    width: 72px;
  }

  & .product-2 {
    height: 36px;
    left: 0;
    position: absolute;
    top: 79px;
    width: 716px;
  }

  & .rectangle-2 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 388px;
    left: 428px;
    position: absolute;
    top: -176px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .text-wrapper-7 {
    color: #858585;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 24px;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 6px;
    width: 232px;
  }

  & .text-wrapper-8 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 640px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 8px;
    white-space: nowrap;
    width: 72px;
  }

  & .product-3 {
    height: 48px;
    left: 0;
    position: absolute;
    top: 146px;
    width: 706px;
  }

  & .rectangle-3 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 375px;
    left: 422px;
    position: absolute;
    top: -164px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .text-wrapper-9 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 627px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 14px;
    white-space: nowrap;
    width: 75px;
  }

  & .product-4 {
    height: 48px;
    left: 0;
    position: absolute;
    top: 219px;
    width: 644px;
  }

  & .rectangle-4 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 325px;
    left: 396px;
    position: absolute;
    top: -138px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .text-wrapper-10 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 580px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 14px;
    white-space: nowrap;
    width: 60px;
  }

  & .product-5 {
    height: 36px;
    left: 0;
    position: absolute;
    top: 298px;
    width: 504px;
  }

  & .rectangle-5 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 171px;
    left: 320px;
    position: absolute;
    top: -68px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .text-wrapper-11 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 423px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 8px;
    white-space: nowrap;
    width: 77px;
  }

  & .product-6 {
    height: 36px;
    left: 0;
    position: absolute;
    top: 371px;
    width: 390px;
  }

  & .rectangle-6 {
    background-color: #0270e0;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 65px;
    left: 266px;
    position: absolute;
    top: -14px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .text-wrapper-12 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 308px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 8px;
    white-space: nowrap;
    width: 78px;
  }

  & .y-axis {
    height: 469px;
    left: 252px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 2px;
  }
`;

export const NickHolmesChartElement = () => {
  return (
    <StyledChartElement>
      <div className="chart-and-title">
        <div className="title">
          <div className="text-wrapper-4">Most Profitable Products</div>
          <div className="label" />
        </div>
        <div className="bar-chart">
          <div className="overlap-group">
            <div className="bars-and-labels">
              <div className="product">
                <div className="rectangle" />
                <div className="text-wrapper-5">Brickaroid 35mm Camera</div>
                <div className="text-wrapper-6">$11.4k</div>
              </div>
              <div className="product-2">
                <div className="rectangle-2" />
                <div className="text-wrapper-7">Aviz 15 Inch Laptop</div>
                <div className="text-wrapper-8">$9.12k</div>
              </div>
              <div className="product-3">
                <div className="rectangle-3" />
                <div className="text-wrapper-5">Finger and Hand Cymbals</div>
                <div className="text-wrapper-9">$8.98k</div>
              </div>
              <div className="product-4">
                <div className="rectangle-4" />
                <div className="text-wrapper-5">Q150 Bookself Speakers</div>
                <div className="text-wrapper-10">$7.16k</div>
              </div>
              <div className="product-5">
                <div className="rectangle-5" />
                <div className="text-wrapper-7">SmartPhone 7 Neuro</div>
                <div className="text-wrapper-11">$3.85k</div>
              </div>
              <div className="product-6">
                <div className="rectangle-6" />
                <div className="text-wrapper-7">24 Inch OLED Monitor</div>
                <div className="text-wrapper-12">$1.52k</div>
              </div>
            </div>
            <img className="y-axis" alt="Y axis" src="https://c.animaapp.com/VaHjGTTz/img/y-axis.svg" />
          </div>
        </div>
      </div>
    </StyledChartElement>
  );
};
