import React from 'react';
import styled from 'styled-components';
import PlugsLogo from '../graphics/plugs_electronics_logo_green.png'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  background: #f4f4f4;
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
            <Input type="email" placeholder="Email" defaultValue="alfonso@acmesupply.com"/>
            <Input type="password" placeholder="Password" defaultValue="password" />
            <Button onClick={nextPage}>Login</Button>
          </LoginForm>
          <Logo src={PlugsLogo}/>
        </Modal>
      </AppContainer>

      <div className='modal-div-2' style={{height: "auto", position: "absolute", left: "50px", top: "50px", backgroundCcolor: "#f4f4f4", borderRadius: "10px", boxShadow: "3px 2px 8px 2px grey"}}>
        <div className="text-container" style={{fontSize: "18px", color:"#171717", width: "420px", margin: "20px", marginBottom: "20px", fontFamily: "Lato"}}>
          <p>Plugs Electronics is an electronics retailer that created this portal to their suppliers with analytics on product sales.</p>
          <p>We’ll start by logging in as Alfonso, a manager at the Acme supplier.</p>
          <p>The Plugs Portal uses username + password, but Sigma embedding works with any authentication framework (SSO, OAuth, a homegrown solution, etc).</p>

          <p>Click <strong>Login</strong> to enter the portal</p>
        </div>
      </div>
    </div>

  );
}

