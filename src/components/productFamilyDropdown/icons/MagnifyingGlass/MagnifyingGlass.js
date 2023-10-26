import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledMagnifyingGlass = styled.svg`
  .path {
    clip-rule: evenodd;
  }
`;

export const MagnifyingGlass = ({ color = "#B0B0B0", className }) => {
  return (
    <StyledMagnifyingGlass
      className={`magnifying-glass ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M10.1644 10.8715C9.30243 11.5768 8.20063 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 8.20063 11.5768 9.30243 10.8715 10.1644L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L10.1644 10.8715ZM11 7C11 9.20914 9.20914 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.20914 3 11 4.79086 11 7Z"
        fill={color}
        fillRule="evenodd"
      />
    </StyledMagnifyingGlass>
  );
};

MagnifyingGlass.propTypes = {
  color: PropTypes.string
};
