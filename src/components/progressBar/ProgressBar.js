import React, { useState } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 200px;
  height: 20px;
  background-color: white;
  border-radius: 10px; /* Pill shape */
  overflow: hidden;
  display: flex;
`;

const ProgressBarFill = styled.div`
  width: ${props => props.globalStep}%;
  height: 100%;
  background-color: #A0CBE8;
  transition: width 0.5s; /* Add a transition for a smooth fill effect */
`;

export const  ProgressBar = ({ globalStep }) => {
  
  return (
    <div>
      <ProgressBarContainer>
        <ProgressBarFill globalStep={(globalStep / 18) * 100}>
        </ProgressBarFill>
        <div style={{color: "black", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", top: "0px"}}>
            {Math.round((globalStep / 18) * 100)}%
        </div>
      </ProgressBarContainer>
    </div>
  );
}
