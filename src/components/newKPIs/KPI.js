import React from "react";
import styled from "styled-components";

const StyledOrdersKpi = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .frame-wrapper {
    height: 154px;
    width: 352px;
  }

  & .div {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #dfdfdf;
    border-radius: 16px;
    box-shadow: 0px 32px 30px -5px #00000012;
    height: 155px;
    overflow: hidden;
    position: relative;
    top: -1px;
  }

  & .frame-2 {
    background-color: #ffffff;
    border-radius: 4px;
    height: 95px;
    left: 59px;
    overflow: hidden;
    position: absolute;
    top: 3px;
    width: 221px;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "Lato", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: 72px;
    letter-spacing: 0;
    line-height: 19.6px;
    position: absolute;
    top: 66px;
    white-space: nowrap;
  }

  & .text-wrapper-3 {
    color: #252525;
    font-family: "IBM Plex Sans", Helvetica;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 56px;
    position: relative;
    text-align: center;
    top: 10px;
    white-space: nowrap;
  }

  & .frame-3 {
    background-color: #ffffff;
    border-radius: 4px;
    height: 45px;
    left: 2px;
    overflow: hidden;
    position: absolute;
    top: 98px;
    width: 349px;
  }

  & .overlap {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 229px;
  }

  & .overlap-group-wrapper {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 108px;
  }

  & .overlap-group {
    height: 44px;
    left: 20px;
    position: relative;
    width: 70px;
  }

  & .component-1 {
    gap: 1.8px !important;
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .component-instance {
    color: #ff8b73 !important;
    font-family: "IBM Plex Sans", Helvetica !important;
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: -0.9px !important;
  }

  & .text-wrapper-4 {
    color: #939393;
    font-family: "Lato", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 4px;
    letter-spacing: 0;
    line-height: 16.8px;
    position: absolute;
    top: 27px;
    white-space: nowrap;
  }

  & .overlap-wrapper {
    height: 45px;
    left: 108px;
    position: absolute;
    top: 0;
    width: 120px;
  }

  & .overlap-2 {
    height: 44px;
    left: 16px;
    position: relative;
    width: 86px;
  }

  & .component-1-instance {
    font-family: "IBM Plex Sans", Helvetica !important;
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: -0.9px !important;
  }

  & .text-wrapper-5 {
    color: #939393;
    font-family: "Lato", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 16px;
    letter-spacing: 0;
    line-height: 16.8px;
    position: absolute;
    top: 27px;
    white-space: nowrap;
  }

  & .div-wrapper {
    height: 45px;
    left: 229px;
    position: absolute;
    top: 0;
    width: 120px;
  }

  & .text-wrapper-6 {
    color: #939393;
    font-family: "Lato", Helvetica;
    font-size: 12px;
    font-weight: 400;
    left: 12px;
    letter-spacing: 0;
    line-height: 16.8px;
    position: absolute;
    top: 27px;
    white-space: nowrap;
  }
`;

export const KPI = ({ mainNum, title, firstNum, secondNum, thirdNum }) => {
  return (
    <StyledOrdersKpi>
      <div className="frame-wrapper">
        <div className="div">
          <div className="frame-2">
            <div className="text-wrapper-2">{title}</div>
            <div className="text-wrapper-3">{mainNum}</div>
          </div>
          <div className="frame-3">
            <div className="overlap">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="text-within" style={{"color":"black", "position":"absolute", "left":"12px"}}>
                    {firstNum}%
                  </div>

                  <div className="text-wrapper-4">vs Prior day</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-2">
                    <div className="text-within" style={{"color":"black", "position":"absolute", "left":"12px"}}>
                      {secondNum}%
                    </div>
                  <div className="text-wrapper-5">vs 7d Prior</div>
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-2">
                  <div className="text-within" style={{"color":"black", "position":"absolute", "left":"12px"}}>
                    {thirdNum}%
                  </div>
                <div className="text-wrapper-6">vs 30d Prior</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledOrdersKpi>
  );
};
