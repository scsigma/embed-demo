import React from 'react';
import styled from 'styled-components';
import PlugsLogo from '../graphics/PlugsElect_White.png';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border: 2px red solid;
`;

const Modal = styled.div`
  background: #1f263c;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 300px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
    height: 100px;
    width: auto;
`;

export const ModalPage = () => {
  return (
    <AppContainer>
      <Modal>
        <h2 style={{"color":"white"}}>Supplier Portal</h2>
        <LoginForm>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="text" placeholder="Cloud Provider" />
          <Button onClick={() => console.log('login button clicked')}>Login</Button>
        </LoginForm>
        {/* <img src={PlugsLogo}></img> */}
        <Logo src={PlugsLogo}/>
      </Modal>
    </AppContainer>
  );
}

