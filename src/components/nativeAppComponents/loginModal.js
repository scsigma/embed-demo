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
            <Input type="email" placeholder="Email" defaultValue="alfonso@acme+plugs.com"/>
            <Input type="password" placeholder="Password" defaultValue="password" />
            <Button onClick={nextPage}>Login</Button>
          </LoginForm>
          <Logo src={PlugsLogo}/>
        </Modal>
      </AppContainer>

      <div className='modal-div' style={{height: "auto", position: "absolute", left: "100px", top: "300px", backgroundCcolor: "#f4f4f4", borderRadius: "10px", boxShadow: "3px 2px 8px 2px grey"}}>
        <div className="text-container" style={{fontSize: "23px", width: "350px", margin: "20px", marginBottom: "50px" }}>
          Plugs Electronics is an electronics retailer with many suppliers.  They created this portal for their suppliers to track orders and to provide them with analytics on product sales.
        </div>
      </div>

      <div className='modal-div-2' style={{height: "auto", position: "absolute", left: "979px", top: "264px", backgroundCcolor: "#f4f4f4", borderRadius: "10px", boxShadow: "3px 2px 8px 2px grey"}}>
        <div className="text-container" style={{fontSize: "23px", width: "350px", margin: "20px", marginBottom: "50px" }}>
          <p>We’ll start by logging in as Alfonso, a manager at the Acme supplier.</p>

          <p>The Plugs Portal uses username + password, but Sigma embedding works with any authentication framework.</p>

          <p>Click “Log In” to enter the portal</p>
        </div>
      </div>
    </div>

  );
}

