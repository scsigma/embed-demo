import { React, useEffect, useState} from "react";
import { Component } from "./component.js";
import styled from "styled-components";
import UpArrow from '../graphics/upgreen-arrow.svg';
import DownArrow from '../graphics/downarrow-red.svg';

const StyledFrame = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 16px;
  position: relative;

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
    overflow: hidden;
    padding: 24px;
    position: relative;
    width: 376px;
  
    // border: 2px blue solid;
  }

  & .div-2 {
    align-items: flex-start;
    align-self: stretch;
    background-color: #ffffff;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 4px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "Lato", Helvetica;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 25.2px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-3 {
    color: #939393;
    font-family: "Lato", Helvetica;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 19.6px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
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

  & .frame-wrapper-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    position: relative;
  }

  & .div-3 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .element-wrapper {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 3.61px;
    position: relative;
  }

  & .element-2 {
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

  & .frame-wrapper-3 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .div-wrapper-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 3.61px;
    position: relative;
  }

  & .text-wrapper-4 {
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

  & .frame-wrapper-4 {
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

  & .frame-wrapper-5 {
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

  & .div-4 {
    align-items: center;
    display: flex;
    flex: 1;
    flex-grow: 1;
    justify-content: space-between;
    position: relative;
  }

  & .div-5 {
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

  & .text-wrapper-5 {
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

  & .div-6 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    margin-left: -18.64px;
    padding: 0px 16px;
    position: relative;
  }

  & .design-component-instance-node {
    font-family: "IBM Plex Sans", Helvetica !important;
    font-size: 20px !important;
    line-height: 28px !important;
    margin-top: -0.9px !important;
  }

  & .rectangle {
    height: 10px;
    left: -7285px;
    position: absolute;
    top: -619px;
    width: 446px;
  }
`;

export const Frame = () => {

  const [value, setValue] = useState("hello");
  const [nextVal, setNextVal] = useState(null);
  const [step, setStep] = useState(0);

  const clicked = () => {
    console.log(' i was clicked')
    setValue("goodbye");
    setNextVal(1000);
    setStep(step + 1);
  }

  return (
    <StyledFrame>
      {/* THIS IS THE BUTTON */}
      {/* <button onClick={clicked}>click me</button> */}
      {/* THIS IS THE BUTTON */}
      <div className="div">
        <div className="div-2">
          <div className="text-wrapper-2">Orders</div>
          <div className="text-wrapper-3">Number of orders placed</div>
        </div>
        <div className="frame-wrapper">
          <div className="div-wrapper">
            <div className="frame-wrapper-2">
              <div className="div-3">
                <div className="element-wrapper">
                  <div className="element-2" onClick={()=> console.log('hello')} style={{cursor: "pointer"}}>{step > 2 ? 1000 : 25000}</div>
                </div>
                <div className="frame-wrapper-3">
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-4">Last Complete Days (Orders)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper-4">
          <div className="frame-wrapper-5">
            <div className="div-4">
              <div className="div-5">
                <Component
                  className="component-1"
                  divClassName="component-1-instance"
                  frame={DownArrow}
                  frameClassName="component-instance"
                  positive1={false}
                  style="two"
                  text="0.86%"
                />
                <div className="text-wrapper-5">vs Prior day</div>
              </div>
              <div className="div-6">
                <Component
                  className="component-1"
                  divClassName="design-component-instance-node"
                  frameClassName="component-instance"
                  img={UpArrow}
                  positive1
                  style="two"
                  text="27,87%"
                />
                <div className="text-wrapper-5">vs 7d Prior</div>
              </div>
              <div className="div-6">
                <Component
                  className="component-1"
                  divClassName="design-component-instance-node"
                  frameClassName="component-instance"
                  img={UpArrow}
                  positive1
                  style="two"
                  text="32.33%"
                />
                <div className="text-wrapper-5">vs 30d Prior</div>
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/JeKdvHGJ/img/rectangle-3342@2x.png" />
      </div>
    </StyledFrame>
  );
};
