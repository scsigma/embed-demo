import React from "react";
import styled from "styled-components";

const StyledSize16Px = styled.svg`
  &.path {
    fill: #181818;
  }
`;

export const Size16Px = ({ className }) => {
  return (
    <StyledSize16Px
      className={`size-16px ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.66675 4.00002C6.66675 3.26365 7.26371 2.66669 8.00008 2.66669H24.0001C24.7365 2.66669 25.3334 3.26365 25.3334 4.00002V29.3334L16.0001 22.6667L6.66675 29.3334V4.00002Z"
        fill="#181818"
      />
    </StyledSize16Px>
  );
};
