import { React, useContext, useEffect, useState } from 'react';
import { ModalPage }from './components/nativeAppComponents/loginModal.js';
import { PillarsPage } from './components/nativeAppComponents/pillarsModal.js';
import { Navbar } from './components/nativeAppComponents/navbar.js';
import { Sidebar } from './components/nativeAppComponents/sidebar.js';
import PlugsLogo from './components/graphics/plugs_electronics_logo_green.png';
import { AnalyticsPage } from './components/analyticsPage/AnalyticsPage.js';
import { SummaryPage } from './components/summaryPage/SummaryPage.js';
import { ProgressBar } from './components/progressBar/ProgressBar.js';
import SigmaLogo from './components/graphics/sigma-full-black.png'

const App = () => {

  // THIS IS WHERE WE WILL CONTROL THE PAGE THAT IS BEING VIEWED
  const [currPage, setCurrPage] = useState(0);

  // THIS IS WHERE WE CONTROL THE STEP IN THIS PROCESS
  const [currStep, setCurrStep] = useState(0);

  // Global Step Counter for progress bar
  const [globalStep, setGlobalStep] = useState(0);

  const increaseGlobalStep = () => {
    setGlobalStep(globalStep + 1);
  }

  const nextStep = () => {
    setCurrStep(currStep + 1);
    increaseGlobalStep();
  }

  const nextPage = () => {
    if (currPage !== 0) {
      increaseGlobalStep();
    }
    setCurrPage(currPage + 1);
    setCurrStep(0);
  }

  return (
    <div className='page-container' style={{"display":"flex", flexDirection: "column", "alignItems":"center", "minHeight":"100vh", "minWidth":"100vw", "position":"fixed"}}>
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
      <div className='app-container' style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column"}}>
        {/* INTRO / PILLARS SCREEN */}
        { currPage === 0 && (
          <PillarsPage nextPage={nextPage} currStep={currStep} />
        )}
        {/* LOGIN SCREEN */}
        { currPage === 1 && (
          <ModalPage nextPage={nextPage} currStep={currStep} />
        )}
        {/* SUMMARY PAGE */}
        { currPage === 2 && (
          <div style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column"}}>
            <div className='progressBar-container' style={{width: "fit-content", height: "20px", position: "relative", top: "45px", left: "138px", color: "white"}}>
              <ProgressBar globalStep={globalStep}/>
            </div>
            
            <div className='navbar-container'>
              <Navbar className='navbar'/>
            </div>

            <div className='below-navbar-container' style={{"height":"100%", "display":"flex"}}>
              <div className='sidebar-container' style={{"height":"100%", "width":"200px", "display":"flex","flexDirection":"column"}}>
                <Sidebar className='side-bar' style={{"height": "100%"}} currPage={currPage}/>
                <div className='logo div sidebar' style={{"height":"100px", "width":"100%" }}>
                  <img src={PlugsLogo} style={{"height":"100%", "width":"100%", "backgroundColor":"#DFDFDF"}}></img>
                </div>
              </div>

              <div className='app-container' style={{ "width":"100%", "backgroundColor":"#d6d6d6", "color":"white", "display":"flex", justifyContent: "center", alignItems: "center"}}>
                <SummaryPage currStep={currStep} nextStep={nextStep} nextPage={nextPage} />
              </div>
            </div>
          </div>
        )}
        {/* ANALYTICS PAGE */}
        { currPage === 3 && (
          <div style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column"}}>

            <div className='progressBar-container' style={{width: "fit-content", height: "20px", position: "relative", top: "45px", left: "138px", color: "white"}}>
              <ProgressBar globalStep={globalStep}/>
            </div>
            
            
            <div className='navbar-container'>
              <Navbar className='navbar'/>
            </div>

            <div className='below-navbar-container' style={{"height":"100%", "display":"flex"}}>
              <div className='sidebar-container' style={{"height":"100%", "width":"200px", "display":"flex","flexDirection":"column"}}>
                <Sidebar className='side-bar' style={{"height": "100%"}} currPage={currPage} />
                <div className='logo div sidebar' style={{"height":"100px", "width":"100%" }}>
                  <img src={PlugsLogo} style={{"height":"100%", "width":"100%", "backgroundColor":"#DFDFDF"}}></img>
                </div>
              </div>

              <div className='app-contents' style={{ "width":"100%", "backgroundColor":"#d6d6d6", "color":"white", "display":"flex", "alignItems": "center", "justifyContent": "center"}}>
                <AnalyticsPage currStep={currStep} nextStep={nextStep} />
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default App;
