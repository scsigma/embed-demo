import React from "react";
import { SigmaFullWhite1 } from "./icons/SigmaFullWhite1";
import { Size16Px } from "./icons/Size16Px";
import styled from "styled-components";

const StyledSigmaNavBar = styled.div`
  background-color: #f9f9f9;
  border-radius: 0px 0px 15px 15px;
  height: 70px;
  overflow: hidden;
  position: relative;
  width: 1220px;

  & .group {
    height: 31px;
    left: 30px;
    position: absolute;
    top: 19px;
    width: 31px;
  }

  & .rectangle {
    background-color: var(--productgray-12);
    height: 5px;
    left: 0;
    position: absolute;
    top: 0;
    width: 31px;
  }

  & .div {
    background-color: var(--productgray-12);
    height: 5px;
    left: 0;
    position: absolute;
    top: 13px;
    width: 31px;
  }

  & .rectangle-2 {
    background-color: var(--productgray-12);
    height: 5px;
    left: 0;
    position: absolute;
    top: 26px;
    width: 31px;
  }

  & .caret {
    height: 16px;
    left: 275px;
    position: absolute;
    top: 23px;
    width: 16px;
  }

  & .text-wrapper {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: black;
    display: -webkit-box;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 20px;
    font-weight: 600;
    height: 23px;
    left: 84px;
    letter-spacing: 0;
    line-height: 20px;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 21px;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-2 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: black;
    display: -webkit-box;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 20px;
    font-weight: 600;
    height: 23px;
    left: 775px;
    letter-spacing: 0;
    line-height: 20px;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 22px;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-3 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: black;
    display: -webkit-box;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 20px;
    font-weight: 600;
    height: 23px;
    left: 1006px;
    letter-spacing: 0;
    line-height: 20px;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 22px;
    white-space: nowrap;
    width: fit-content;
  }

  & .bookmark {
    height: 32px !important;
    left: 863px !important;
    position: absolute !important;
    top: 19px !important;
    width: 32px !important;
  }

  & .switch {
    height: 30px;
    left: 932px;
    position: absolute;
    top: 20px;
    width: 56px;
  }

  & .sigma-full-white {
    height: 27px !important;
    left: 1103px !important;
    position: absolute !important;
    top: 21px !important;
    width: 94px !important;
  }
`;

export const SigmaFooter = () => {
  return (
    <StyledSigmaNavBar>
      <div className="group" style={{backgroundColor: "black"}}>
        <div className="rectangle" />
        <div className="div" />
        <div className="rectangle-2" />
      </div>
      <img className="caret" alt="Caret" src="https://c.animaapp.com/eoHGJqDF/img/caret.svg" />
      <div className="text-wrapper">Sales Performance</div>
      <div className="text-wrapper-2">Reset</div>
      <div className="text-wrapper-3">Explore</div>
      <Size16Px className="bookmark" />
      <img className="switch" alt="Switch" src="https://c.animaapp.com/eoHGJqDF/img/switch.svg" />
      <SigmaFullWhite1 className="sigma-full-white" />
    </StyledSigmaNavBar>
  );
};