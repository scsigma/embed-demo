import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define a keyframe animation for the pulse effect
const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

// Define a keyframe animation for the ripple effect
const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(5);
    opacity: 0;
  }
`;

const CircleContainer = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #D113A8;
  border-radius: 50%;
  animation: ${pulseAnimation} 2s linear infinite;
`;

const Ripple = styled.div`
  position: absolute;
  width: 45%;
  height: 45%;
  background-color: #D113A8;
  border-radius: 50%;
  animation: ${rippleAnimation} 2s cubic-bezier(0.45, 1, 0.55, 0) infinite;
//   animation-delay: 3s; // Delay the ripple animation by 1 second
`;

export const RippleCircle = () => {
  return (
    <CircleContainer>
      <Circle />
      <Ripple />
    </CircleContainer>
  );
};