import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledCaret = styled.svg`
  &.path {
    fill: ${props => props.color || "#8F8F8F"};
  }
`;

export const Caret = ({ color = "#8F8F8F", className }) => {
  return (
    <StyledCaret
      className={`caret ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path className="path" d="M12 14L8 10L16 10L12 14Z" />
    </StyledCaret>
  );
};

Caret.propTypes = {
  color: PropTypes.string
};
