import React from "react";
import { Component } from "../../component/component.js";
import styled from "styled-components";

const StyledCustomersKpi = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #dfdfdf;
  border-radius: 16px;
  box-shadow: 0px 32px 30px -5px #00000012;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 220px;
  left: 1360px;
  overflow: hidden;
  padding: 24px;
  position: absolute;
  top: 0;
  width: 501px;

  & .frame-22 {
    align-items: flex-start;
    align-self: stretch;
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    padding: 4px;
    position: relative;
    width: 100%;
  }

  & .frame-23 {
    align-items: center;
    align-self: stretch;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  & .frame-24 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    position: relative;
  }

  & .frame-25 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .frame-26 {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 3.61px;
    position: relative;
  }

  & .text-wrapper-8 {
    color: #252525;
    font-family: "IBM Plex Sans", Helvetica;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 67.2px;
    margin-top: -0.9px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .frame-27 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .frame-28 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 3.61px;
    position: relative;
  }

  & .text-wrapper-9 {
    color: #000000;
    font-family: "Lato", Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 19.6px;
    margin-top: -0.9px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .frame-29 {
    align-items: flex-start;
    align-self: stretch;
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    padding: 4px 8px;
    position: relative;
    width: 100%;
  }

  & .frame-30 {
    align-items: center;
    align-self: stretch;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    flex: 0 0 auto;
    gap: 16px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  & .frame-31 {
    align-items: center;
    display: flex;
    flex: 1;
    flex-grow: 1;
    justify-content: space-between;
    position: relative;
  }

  & .frame-32 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 0px 16px;
    position: relative;
  }

  & .component-6 {
    flex: 0 0 auto !important;
    gap: 1.8px !important;
  }

  & .component-7 {
    height: 12.62px !important;
    width: 12.62px !important;
  }

  & .component-8 {
    color: #ff8b73 !important;
    font-family: "IBM Plex Sans", Helvetica !important;
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: -0.9px !important;
  }

  & .text-wrapper-10 {
    color: #939393;
    font-family: "Lato", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 16.8px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .component-9 {
    font-family: "IBM Plex Sans", Helvetica !important;
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: -0.9px !important;
  }

  & .rectangle-2 {
    height: 10px;
    left: -1057px;
    position: absolute;
    top: 2308px;
    width: 446px;
  }
`;

export const CustomersKpi = () => {
  return (
    <StyledCustomersKpi>
      <div className="frame-22">
        <div className="frame-23">
          <div className="frame-24">
            <div className="frame-25">
              <div className="frame-26">
                <div className="text-wrapper-8">197</div>
              </div>
              <div className="frame-27">
                <div className="frame-28">
                  <div className="text-wrapper-9">Daily Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-29">
        <div className="frame-30">
          <div className="frame-31">
            <div className="frame-32">
              <Component
                className="component-6"
                divClassName="component-8"
                frame="https://c.animaapp.com/N3EODE93/img/frame-3.svg"
                frameClassName="component-7"
                positive1={false}
                style="two"
                text="0.05%"
              />
              <div className="text-wrapper-10">vs Prior day</div>
            </div>
            <div className="frame-32">
              <Component
                className="component-6"
                divClassName="component-9"
                frameClassName="component-7"
                img="https://c.animaapp.com/N3EODE93/img/frame-2.svg"
                positive1
                style="two"
                text="19.79%"
              />
              <div className="text-wrapper-10">vs 7d Prior</div>
            </div>
            <div className="frame-32">
              <Component
                className="component-6"
                divClassName="component-9"
                frameClassName="component-7"
                img="https://c.animaapp.com/N3EODE93/img/frame-1.svg"
                positive1
                style="two"
                text="32.34%"
              />
              <div className="text-wrapper-10">vs 30d Prior</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="rectangle-2"
        alt="Rectangle"
        src="https://c.animaapp.com/N3EODE93/img/rectangle-3342-2@2x.png"
      />
    </StyledCustomersKpi>
  );
};