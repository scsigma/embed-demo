import React from 'react';
import styled from 'styled-components';
import PlugsLogo from '../graphics/plugs_electronics_logo_green.png'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid grey;
`;

const Modal = styled.div`
  background: #fefefe;
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
  background-color: #124342;
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
    <div className='modal-container' style={{display: "flex", position: "relative", justifyContent:"center", alignItems: "center", width: "100%", height: "100%"}}> 
      <AppContainer>
        <Modal>
          <h2 style={{"color":"#124342"}}>Supplier Portal</h2>
          <LoginForm>
            <Input type="email" placeholder="Email" defaultValue="alfonso@acme+plugs.com"/>
            <Input type="password" placeholder="Password" defaultValue="password" />
            <Input type="text" placeholder="Cloud Provider" defaultValue={"GCP"}/>
            <Button onClick={nextPage}>Login</Button>
          </LoginForm>
          <Logo src={PlugsLogo}/>
        </Modal>
      </AppContainer>

      <div className='modal-div' style={{width: "300px", height: "auto", position: "absolute", left: "200px", top: "300px", border: "1px solid red"}}>
        Plugs Electronics is an electronics retailer with many suppliers.  They created this portal for their suppliers to track orders and to provide them with analytics on product sales.
      </div>

      <div className='modal-div' style={{width: "300px", height:"auto", position: "absolute", left: "1000px", top: "300px", border: "1px solid red"}}>
      We’ll start by logging in as Alfonso, a manager at the Acme supplier.

      The Plugs Portal uses username + password, but Sigma embedding works with any authentication framework.

      Click “Log In” to enter the portal
      </div>
    </div>

  );
}

