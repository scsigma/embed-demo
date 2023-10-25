import React from "react";
import { Component } from "../../component/component.js";
import styled from "styled-components";

const StyledRevenueKpi = styled.div`
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
  left: 680px;
  overflow: hidden;
  padding: 24px;
  position: absolute;
  top: 0;
  width: 501px;

  & .frame-11 {
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

  & .frame-12 {
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

  & .frame-13 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    position: relative;
  }

  & .frame-14 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .frame-15 {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 3.61px;
    position: relative;
  }

  & .text-wrapper-5 {
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

  & .frame-16 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .frame-17 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 3.61px;
    position: relative;
  }

  & .text-wrapper-6 {
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

  & .frame-18 {
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

  & .frame-19 {
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

  & .frame-20 {
    align-items: center;
    display: flex;
    flex: 1;
    flex-grow: 1;
    justify-content: space-between;
    position: relative;
  }

  & .frame-21 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 0px 16px;
    position: relative;
  }

  & .component-2 {
    flex: 0 0 auto !important;
    gap: 1.8px !important;
  }

  & .component-3 {
    height: 12.62px !important;
    width: 12.62px !important;
  }

  & .component-4 {
    color: #ff8b73 !important;
    font-family: "IBM Plex Sans", Helvetica !important;
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: -0.9px !important;
  }

  & .text-wrapper-7 {
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

  & .component-5 {
    font-family: "IBM Plex Sans", Helvetica !important;
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: -0.9px !important;
  }

  & .img {
    height: 10px;
    left: -377px;
    position: absolute;
    top: 2308px;
    width: 446px;
  }
`;

export const RevenueKpi = () => {
  return (
    <StyledRevenueKpi>
      <div className="frame-11">
        <div className="frame-12">
          <div className="frame-13">
            <div className="frame-14">
              <div className="frame-15">
                <div className="text-wrapper-5">$23,988</div>
              </div>
              <div className="frame-16">
                <div className="frame-17">
                  <div className="text-wrapper-6">Daily Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-18">
        <div className="frame-19">
          <div className="frame-20">
            <div className="frame-21">
              <Component
                className="component-2"
                divClassName="component-4"
                frame="https://c.animaapp.com/N3EODE93/img/frame-6.svg"
                frameClassName="component-3"
                positive1={false}
                style="two"
                text="1.73%"
              />
              <div className="text-wrapper-7">vs Prior day</div>
            </div>
            <div className="frame-21">
              <Component
                className="component-2"
                divClassName="component-5"
                frameClassName="component-3"
                img="https://c.animaapp.com/N3EODE93/img/frame-5.svg"
                positive1
                style="two"
                text="22.40%"
              />
              <div className="text-wrapper-7">vs 7d Prior</div>
            </div>
            <div className="frame-21">
              <Component
                className="component-2"
                divClassName="component-5"
                frameClassName="component-3"
                img="https://c.animaapp.com/N3EODE93/img/frame-4.svg"
                positive1
                style="two"
                text="28.06%"
              />
              <div className="text-wrapper-7">vs 30d Prior</div>
            </div>
          </div>
        </div>
      </div>
      <img className="img" alt="Rectangle" src="https://c.animaapp.com/N3EODE93/img/rectangle-3342-2@2x.png" />
    </StyledRevenueKpi>
  );
};
