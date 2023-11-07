import styled from 'styled-components';

export const MacWindow = styled.div`
  border: 1px solid #dedee3;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  background-color: #dedee3;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-left: 10px;
`;

const Button = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 3px;
`;

export const RedButton = styled(Button)`
  background-color: #ff5f57;
`;

export const YellowButton = styled(Button)`
  background-color: #ffdb58;
`;

export const GreenButton = styled(Button)`
  background-color: #28c940;
`;