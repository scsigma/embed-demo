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
          <Modal>
            <h2 style={{"color":"#124342"}}>Supplier Portal</h2>
            <LoginForm>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="text" placeholder="Cloud Provider" />
              <Button onClick={resetVisbility}>Login</Button>
            </LoginForm>
            <Logo src={PlugsLogo}/>
          </Modal>
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
              <button onClick={nextPage} style={{alignSelf: "center", fontSize: "24px", fontFamily: "Lato", padding: "12px", backgroundColor: "white"}}>I'm ready to start the tutorial</button>
            </div>
        </div>
        )}
      </AppContainer>
  );
}

