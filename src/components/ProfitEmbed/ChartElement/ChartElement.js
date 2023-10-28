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
    position: absolute;
    top: -13px;
    width: 752px;
  }

  & .bars-and-labels {
    height: 413px;
    left: 0;
    position: absolute;
    top: 26px;
    width: 752px;
  }

  & .product {
    height: 48px;
    left: 0;
    position: absolute;
    top: 0;
    width: 754px;
  }

  & .rectangle {
    background-color: #ffffff;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 500px;
    left: 484px;
    position: absolute;
    top: -226px;
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

  & .product-2 {
    height: 48px;
    left: 0;
    position: absolute;
    top: 73px;
    width: 584px;
  }

  & .rectangle-2 {
    background-color: #ffffff;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 330px;
    left: 399px;
    position: absolute;
    top: -141px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .product-3 {
    height: 36px;
    left: 0;
    position: absolute;
    top: 152px;
    width: 563px;
  }

  & .rectangle-3 {
    background-color: #ffffff;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 309px;
    left: 388px;
    position: absolute;
    top: -136px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .text-wrapper-6 {
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

  & .product-4 {
    height: 36px;
    left: 0;
    position: absolute;
    top: 225px;
    width: 485px;
  }

  & .rectangle-4 {
    background-color: #ffffff;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 231px;
    left: 350px;
    position: absolute;
    top: -97px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .product-5 {
    height: 36px;
    left: 0;
    position: absolute;
    top: 298px;
    width: 408px;
  }

  & .rectangle-5 {
    background-color: #ffffff;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 154px;
    left: 311px;
    position: absolute;
    top: -59px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .product-6 {
    height: 48px;
    left: 0;
    position: absolute;
    top: 365px;
    width: 358px;
  }

  & .rectangle-6 {
    background-color: #ffffff;
    border-radius: 2.38px 2.38px 0px 0px;
    height: 104px;
    left: 286px;
    position: absolute;
    top: -28px;
    transform: rotate(90deg);
    width: 36px;
  }

  & .y-axis {
    height: 469px;
    left: 252px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 2px;
  }

  & .text-wrapper-7 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 591px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 114px;
    white-space: nowrap;
    width: 60px;
  }

  & .text-wrapper-8 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 569px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 187px;
    white-space: nowrap;
    width: 60px;
  }

  & .text-wrapper-9 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 490px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 260px;
    white-space: nowrap;
    width: 60px;
  }

  & .text-wrapper-10 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 413px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 333px;
    white-space: nowrap;
    width: 60px;
  }

  & .text-wrapper-11 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 368px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 406px;
    white-space: nowrap;
    width: 49px;
  }

  & .text-wrapper-12 {
    color: #000000;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 400;
    height: 19px;
    left: 744px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 27px;
    white-space: nowrap;
    width: 60px;
  }
`;

export const ChartElement = () => {
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
                <div className="text-wrapper-5">Finger and Hand Cymbals</div>
              </div>
              <div className="product-2">
                <div className="rectangle-2" />
                <div className="text-wrapper-5">Brickaroid Digital Camera</div>
              </div>
              <div className="product-3">
                <div className="rectangle-3" />
                <div className="text-wrapper-6">Aviz 15 Inch Laptop</div>
              </div>
              <div className="product-4">
                <div className="rectangle-4" />
                <div className="text-wrapper-6">LP InkMaster Printer</div>
              </div>
              <div className="product-5">
                <div className="rectangle-5" />
                <div className="text-wrapper-6">LiteFone 6 Edge</div>
              </div>
              <div className="product-6">
                <div className="rectangle-6" />
                <div className="text-wrapper-5">USB-C Compatible Portable Charger</div>
              </div>
            </div>
            <img className="y-axis" alt="Y axis" src="https://c.animaapp.com/0iqgHiSI/img/y-axis.svg" />
            <div className="text-wrapper-7">$322k</div>
            <div className="text-wrapper-8">$301k</div>
            <div className="text-wrapper-9">$219k</div>
            <div className="text-wrapper-10">$134k</div>
            <div className="text-wrapper-11">$67k</div>
          </div>
          <div className="text-wrapper-12">$547k</div>
        </div>
      </div>
    </StyledChartElement>
  );
};
