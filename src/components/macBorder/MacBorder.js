import React from 'react';
import styled from 'styled-components';

const MacWindow = styled.div`
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  background-color: #b0b0b0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Button = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 3px;
  cursor: pointer;
`;

const RedButton = styled(Button)`
  background-color: #ff5f57;
`;

const YellowButton = styled(Button)`
  background-color: #ffdb58;
`;

const GreenButton = styled(Button)`
  background-color: #28c940;
`;

const Content = styled.div`
  padding: 20px;
`;

export const MacBorder = ({ children }) => {
  return (
    <MacWindow>
      <TitleBar>
        <RedButton />
        <YellowButton />
        <GreenButton />
      </TitleBar>
      <Content>{children}</Content>
    </MacWindow>
  );
};