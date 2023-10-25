import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
  align-items: center;
  display: inline-flex;
  position: relative;

  & .text-wrapper {
    font-family: "SF Compact-Medium", Helvetica;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 15px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }

  & .frame {
    height: 14px;
    position: relative;
    width: 14px;
  }

  & .element {
    font-family: "Inter", Helvetica;
    letter-spacing: 0;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  &.one {
    border-radius: 4px;
    gap: 4px;
    justify-content: center;
    padding: 4px 8px;
  }

  &.three {
    border-radius: 4px;
    gap: 4px;
    justify-content: center;
    padding: 4px 8px;
  }

  &.two {
    gap: 2px;
  }

  &.positive-false.one {
    background-color: #fff0ee;
  }

  &.positive-true.one {
    background-color: #ebf9eb;
  }

  &.positive-true .text-wrapper {
    color: #3d9a50;
  }

  &.positive-false .text-wrapper {
    color: #cc3414;
    transform: rotate(-180deg);
  }

  &.one .element {
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
  }

  &.three .element {
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
  }

  &.two .element {
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
  }

  &.positive-false.one .element {
    color: #cc3414;
  }

  &.three.positive-true .element {
    color: #3d9a50;
  }

  &.two.positive-true .element {
    color: #46a758;
  }

  &.three.positive-false .element {
    color: #cc3414;
  }

  &.positive-true.one .element {
    color: #3d9a50;
  }

  &.two.positive-false .element {
    color: #d94021;
  }
`;

export const Component = ({
  positive = true,
  style,
  positive1,
  className,
  frameClassName,
  frame = "https://c.animaapp.com/N3EODE93/img/frame-10.svg",
  divClassName,
  text = "23%",
  img = "https://c.animaapp.com/N3EODE93/img/frame.svg"
}) => {
  return (
    <StyledComponent className={`component ${style} positive-${positive1} ${className}`}>
      {["one", "three"].includes(style) && <div className={`text-wrapper ${frameClassName}`}>􀄨</div>}

      {style === "two" && <img className={`frame ${frameClassName}`} alt="Frame" src={!positive1 ? frame : img} />}

      <div className={`element ${divClassName}`}>{text}</div>
    </StyledComponent>
  );
};

Component.propTypes = {
  positive: PropTypes.bool,
  style: PropTypes.oneOf(["two", "three", "one"]),
  positive1: PropTypes.bool,
  frame: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string
};