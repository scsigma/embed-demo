import React, { useState, useEffect } from "react";
import styled from 'styled-components';
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

const Button = styled.button`
  padding: 10px;
  background-color: #124342;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


export const OutroPage = ({ currStep, nextStep, nextPage }) => {
  //const [modalStep, setModalStep] = useState(1);
  const [modalStep, setModalStep] = useState(1);
  const [isVisible, setIsVisible] = useState("false");

  const resetVisbility = () => {
    setIsVisible("false");
    const timer = setTimeout(() => {
        setIsVisible("true");
      }, 3000);
    setModalStep(modalStep + 1);
  }

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
        <div id="pillar-container" style={{width: "1200px", height:"750px", display: "flex", flexDirection: "column"}}>
            <div id="title" style={{width: "100%", height:"300px", alignContent:"center"}}>
              <h1 style={{fontFamily: 'Lato', fontSize: '58px', textAlign: "center"}}>Thanks for taking a tour of Sigma embedding!</h1>
              <br></br>
              <h3 style={{fontFamily: 'Lato', fontSize: '44px', textAlign: "center"}}>Want to see more?</h3>
            </div>

            <div id="icon-container" style={{width:"100%", height: "200px", display:"flex",justifyContent: "center"}}>
                <div className='free-trial-container' style={{width: "500px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <form action="https://www.sigmacomputing.com/free-trial-embedded?trial_theme=Embedded%20Analytics">
                    <button style={{
                        padding: "24px",
                        backgroundColor: "#0004E1",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "16px",
                        fontFamily: "Lato",
                        cursor: "pointer",
                        fontSize: "30px",
                        fontWeight: "700"
                        }}>
                        FREE TRIAL
                        </button>
                    </form>
                </div>
                <div className='request-demo-container' style={{width: "500px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <form action="https://www.sigmacomputing.com/request-a-demo">
                        <button style={{
                        padding: "24px",
                        backgroundColor: "#ffffff",
                        color: "#171717",
                        border: "2px solid #171717",
                        borderRadius: "16px",
                        cursor: "pointer",
                        fontFamily: "Lato",
                        fontSize: "30px",
                        fontWeight: "700"
                        }}>
                        REQUEST A DEMO
                        </button>
                    </form>
                </div>
            </div>

            <div id="title" style={{width: "100%", height:"200px", display: "flex", alignContent:"center", justifyContent:"center"}}>
                <a href="https://www.sigmacomputing.com/product/embedded-analytics"  style={{textDecoration: "none", fontFamily: 'Lato', fontSize: '24px', textAlign: "center", color:"#0004E1"}}><h3>Back to Sigma</h3></a>
            </div>
        </div>
      </AppContainer>
  );
}

