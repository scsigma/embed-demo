import { React, useContext, useEffect, useState } from 'react';
import { ModalPage }from './components/nativeAppComponents/loginModal.js';
import { PillarsPage } from './components/nativeAppComponents/pillarsModal.js';
import { Navbar } from './components/nativeAppComponents/navbar.js';
import { Sidebar } from './components/nativeAppComponents/sidebar.js';
import PlugsLogo from './components/graphics/plugs_electronics_logo_green.png';
import { AnalyticsPage } from './components/analyticsPage/AnalyticsPage.js';
import { SummaryPage } from './components/summaryPage/SummaryPage.js';
import { Header } from './components/nativeAppComponents/header.js';
import { OutroPage } from './components/outroPage/outroPage.js';
import { MacWindow, TitleBar, RedButton, YellowButton, GreenButton } from './components/macBorder/MacBorder.js';


const App = () => {

  // THIS IS WHERE WE WILL CONTROL THE PAGE THAT IS BEING VIEWED -- this will be 0 
  const [currPage, setCurrPage] = useState(0);

  // THIS IS WHERE WE CONTROL THE STEP IN THIS PROCESS
  const [currStep, setCurrStep] = useState(0);

  // Global Step Counter for progress bar
  const [globalStep, setGlobalStep] = useState(0);

  const increaseGlobalStep = () => {
    setGlobalStep(globalStep + 1);
  }

  const decreaseGlobalStep = (stepsBack) => {
    setGlobalStep(globalStep - stepsBack);
  }

  const nextStep = () => {
    setCurrStep(currStep + 1);
    increaseGlobalStep();
  }

  const previousStep = (stepsBack) => {
    setCurrStep(currStep - stepsBack);
    decreaseGlobalStep(stepsBack);
  }

  const nextPage = () => {
    if (currPage !== 0) {
      increaseGlobalStep();
    }
    setCurrPage(currPage + 1);
    setCurrStep(0);
  }

  const previousPage = (stepToStartAt) => {
    setCurrPage(currPage - 1);
    setCurrStep(stepToStartAt);
  }

  return (
    <div className='page-container' style={{"display":"flex", flexDirection: "column", "alignItems":"center", "minHeight":"100vh", "minWidth":"100vw", "position":"absolute"}}>
      <Header/>

      <MacWindow>
        <TitleBar>
          <RedButton />
          <YellowButton />
          <GreenButton />
        </TitleBar>
      
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

            <div className='navbar-container'>
              <Navbar className='navbar' globalStep={globalStep}/>
            </div>

            <div className='below-navbar-container' style={{"height":"100%", "display":"flex"}}>
              <div className='sidebar-container' style={{"height":"100%", "width":"200px", "display":"flex","flexDirection":"column"}}>
                <Sidebar className='side-bar' style={{"height": "100%"}} currPage={currPage}/>
              </div>

              <div className='app-container' style={{ "width":"100%", "backgroundColor":"#ffffff", "color":"white", "display":"flex", justifyContent: "center", alignItems: "center"}}>
                <SummaryPage currStep={currStep} nextStep={nextStep} nextPage={nextPage} previousPage={previousPage} previousStep={previousStep} increaseGlobalStep={increaseGlobalStep} decreaseGlobalStep={decreaseGlobalStep} globalStep={globalStep} />
              </div>
            </div>
          </div>
        )}
        {/* ANALYTICS PAGE */}
        { currPage === 3 && (
          <div style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column"}}>

            <div className='navbar-container'>
              <Navbar className='navbar' globalStep={globalStep}/>
            </div>

            <div className='below-navbar-container' style={{"height":"100%", "display":"flex"}}>
              <div className='sidebar-container' style={{"height":"100%", "width":"200px", "display":"flex","flexDirection":"column"}}>
                <Sidebar className='side-bar' style={{"height": "100%"}} currPage={currPage} />
              </div>

              <div className='app-contents' style={{ "width":"100%", "backgroundColor":"#ffffff", "color":"white", "display":"flex", "alignItems": "center", "justifyContent": "center"}}>
                <AnalyticsPage currStep={currStep} nextStep={nextStep} nextPage={nextPage} previousPage={previousPage} previousStep={previousStep} increaseGlobalStep={increaseGlobalStep} decreaseGlobalStep={decreaseGlobalStep} globalStep={globalStep} />
              </div>

            </div>
          </div>
        )}
        { currPage === 4 && (
          <OutroPage/>
        )}
      </div>
      </MacWindow>
    </div>
  )
}


export default App;
