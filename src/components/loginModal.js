import React from 'react';
import styled from 'styled-components';
import PlugsLogo from '../graphics/plugs_electronics_logo_green.png';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px red solid;
`;

const Modal = styled.div`
  background: #1f263c;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 230px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Logo = styled.img`
    height: 75%;
    width: 75%;
`;

export const ModalPage = ({ nextPage, nextStep, currStep }) => {


  return (
    <AppContainer>
      <Modal>
        <h2 style={{"color":"white"}}>Supplier Portal</h2>
        <LoginForm>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="text" placeholder="Cloud Provider" />
          <Button onClick={nextPage}>Login</Button>
        </LoginForm>
        <Logo src={PlugsLogo}/>
      </Modal>
    </AppContainer>
  );
}

