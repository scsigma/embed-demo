import React from 'react';
import SigmaLogo from '../graphics/sigma-full-black.png'

export const Header = () => {
    return (
        <div className='header-container' style={{height: "100px", width: "100%", display: "flex", marginBottom: "5px"}}>
        <div className='sigma-logo-container' style={{width: "300px", height: "100%", display: "flex", alignItems: "center", justifyContent:"center"}}>
            <a href="https://www.sigmacomputing.com/product/embedded-analytics" style={{display: "flex", alignItems: "center"}}><img src={SigmaLogo} style={{height: "60px"}}></img></a>
        </div>
        <div className='button-container' style={{position: "relative", width: "80%", right: "0px", display: "flex", flexDirection: "row-reverse"}}>
          <div className='free-trial-container' style={{width: "300px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <form action="https://www.sigmacomputing.com/free-trial-embedded?trial_theme=Embedded%20Analytics">
              <button style={{
                  padding: "14px",
                  backgroundColor: "#0004E1",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  fontFamily: "Lato",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "700"
                }}>
                  FREE TRIAL
                </button>
            </form>
          </div>
          <div className='request-demo-container' style={{width: "300px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <form action="https://www.sigmacomputing.com/request-a-demo">
                <button style={{
                  padding: "14px",
                  backgroundColor: "#ffffff",
                  color: "#171717",
                  border: "2px solid #171717",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: "700"
                }}>
                  REQUEST A DEMO
                </button>
              </form>
          </div>
        </div>
      </div>
    );
}
