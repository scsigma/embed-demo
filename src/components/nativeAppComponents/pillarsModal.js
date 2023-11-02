import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import PlugsLogo from '../graphics/plugs_electronics_logo_green.png'
import QuickToDevelopPNG from '../graphics/pillar_qtd.png'
import SecurePNG from '../graphics/pillar_secure.png'
import RobustPNG from '../graphics/pillar_robust.png'

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

const FadingDiv = styled.div`
  opacity: ${props => (props.isvisible === "true" ? '1' : '0')};
  transition: opacity .1s;
`;

export const PillarsPage = ({ currStep, nextStep, nextPage }) => {
  //const [modalStep, setModalStep] = useState(1);
  const resetVisbility = () => {
    setIsVisible("false");
    const timer = setTimeout(() => {
        setIsVisible("true");
      }, 3000);
    setModalStep(modalStep + 1);
  }

  const [modalStep, setModalStep] = useState(1);

  const [isVisible, setIsVisible] = useState("false");

  useEffect(() => {
    // Use setTimeout to change the state after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible("true");
    }, 3000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
      <AppContainer>
        {isVisible && modalStep === 1 && (
        <div id="intro-page" style={{display: "flex", flexDirection: "column", alignContent: "center", justifyContent:"center"}}>
          <div style={{height: "50px", display: "flex", alignContent: "center", justifyContent: "center", padding:"25px"}}>
            <Button onClick={resetVisbility} style={{backgroundColor: "white", border:"2px solid #1976d2", borderRadius: "8px", fontFamily: "Lato", fontSize: "24px", color: "#1976d2"}}>Start the tutorial</Button>
          </div>
          <Modal>
            <h2 style={{"color":"#124342"}}>Supplier Portal</h2>
            <LoginForm>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button>Login</Button>
            </LoginForm>
            <Logo src={PlugsLogo}/>
          </Modal>
        </div>
      )}

      {isVisible && modalStep === 2 && (
        <div id="pillar-container" style={{width: "1200px", height:"750px", display: "flex", flexDirection: "column"}}>
            <div id="title" style={{width: "100%", height:"100px", alignContent:"center"}}>
              <h1 style={{fontFamily: 'Lato', fontSize: '48px', textAlign: "center"}}>Sigma embedding is designed to be ... </h1>
            </div>

            <div id="icon-container" style={{width:"100%", height: "600px", display:"flex",justifyContent: "space-between"}}>
              <div style={{width: "300px", height:"100%", display: "flex", alignItems: "center"}}>
                <img src={QuickToDevelopPNG} style={{width: "100%"}}></img>
              </div>
              
              <div style={{width: "300px", height:"100%", display: "flex", alignItems: "center"}}>
                <img src={SecurePNG} style={{width: "100%"}}></img>
              </div>
        
              <div style={{width: "300px", height:"100%", display: "flex", alignItems: "center"}}>
                <img src={RobustPNG} style={{width: "100%"}}></img>
              </div>
            </div>

            <div id="title" style={{width: "100%", height:"50px", display: "flex", alignContent:"center", justifyContent:"center"}}>
              <Button onClick={nextPage} style={{backgroundColor: "white", border:"2px solid #1976d2", borderRadius: "8px", fontFamily: "Lato", fontSize: "24px", color: "#1976d2"}}>Enter Plugs Portal</Button>
            </div>
        </div>
        )}
      </AppContainer>
  );
}

