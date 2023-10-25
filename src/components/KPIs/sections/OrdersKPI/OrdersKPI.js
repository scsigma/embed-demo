import React from "react";
import { Component } from"../../component/component.js";
import styled from "styled-components";

const StyledOrdersKpi = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 16px;
  left: 0;
  position: absolute;
  top: 0;

  & .div {
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
    overflow: hidden;
    padding: 24px;
    position: relative;
    width: 501px;
  }

  & .frame-wrapper {
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

  & .div-wrapper {
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

  & .frame-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    position: relative;
  }

  & .frame-3 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .frame-4 {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 3.61px;
    position: relative;
  }

  & .text-wrapper-2 {
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

  & .frame-5 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .frame-6 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 3.61px;
    position: relative;
  }

  & .text-wrapper-3 {
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

  & .frame-7 {
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

  & .frame-8 {
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

  & .frame-9 {
    align-items: center;
    display: flex;
    flex: 1;
    flex-grow: 1;
    justify-content: space-between;
    position: relative;
  }

  & .frame-10 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 0px 16px;
    position: relative;
  }

  & .component-1 {
    flex: 0 0 auto !important;
    gap: 1.8px !important;
  }

  & .component-instance {
    height: 12.62px !important;
    width: 12.62px !important;
  }

  & .component-1-instance {
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
    letter-spacing: 0;
    line-height: 16.8px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .design-component-instance-node {
    font-family: "IBM Plex Sans", Helvetica !important;
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: -0.9px !important;
  }

  & .rectangle {
    height: 10px;
    left: 303px;
    position: absolute;
    top: 2308px;
    width: 446px;
  }
`;

export const OrdersKpi = () => {
  return (
    <StyledOrdersKpi>
      <div className="div">
        <div className="frame-wrapper">
          <div className="div-wrapper">
            <div className="frame-2">
              <div className="frame-3">
                <div className="frame-4">
                  <div className="text-wrapper-2">218</div>
                </div>
                <div className="frame-5">
                  <div className="frame-6">
                    <div className="text-wrapper-3">Daily Orders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-7">
          <div className="frame-8">
            <div className="frame-9">
              <div className="frame-10">
                <Component
                  className="component-1"
                  divClassName="component-1-instance"
                  frame="https://c.animaapp.com/N3EODE93/img/frame-9.svg"
                  frameClassName="component-instance"
                  positive1={false}
                  style="two"
                  text="0.86%"
                />
                <div className="text-wrapper-4">vs Prior day</div>
              </div>
              <div className="frame-10">
                <Component
                  className="component-1"
                  divClassName="design-component-instance-node"
                  frameClassName="component-instance"
                  img="https://c.animaapp.com/N3EODE93/img/frame-8.svg"
                  positive1
                  style="two"
                  text="27.87%"
                />
                <div className="text-wrapper-4">vs 7d Prior</div>
              </div>
              <div className="frame-10">
                <Component
                  className="component-1"
                  divClassName="design-component-instance-node"
                  frameClassName="component-instance"
                  img="https://c.animaapp.com/N3EODE93/img/frame-7.svg"
                  positive1
                  style="two"
                  text="32.33%"
                />
                <div className="text-wrapper-4">vs 30d Prior</div>
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/N3EODE93/img/rectangle-3342-2@2x.png" />
      </div>
    </StyledOrdersKpi>
  );
};