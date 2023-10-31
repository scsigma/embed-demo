import { React, useContext, useEffect, useState } from 'react';
import { ModalPage }from './components/nativeAppComponents/loginModal.js';
import { Navbar } from './components/nativeAppComponents/navbar.js';
import { Sidebar } from './components/nativeAppComponents/sidebar.js';
// import PlugsLogo from './graphics/plugs_electronics_logo_green.png';
import PlugsLogo from './components/graphics/plugs_electronics_logo_green.png';
import { AnalyticsPage } from './components/analyticsPage/AnalyticsPage.js';
import { SummaryPage } from './components/summaryPage/SummaryPage.js';

const App = () => {

  // THIS IS WHERE WE WILL CONTROL THE PAGE THAT IS BEING VIEWED
  const [currPage, setCurrPage] = useState(1);

  // THIS IS WHERE WE CONTROL THE STEP IN THIS PROCESS
  const [currStep, setCurrStep] = useState(0);

  const nextStep = () => {
    setCurrStep(currStep + 1);
    console.log("currStep", currStep)
  }

  const nextPage = () => {
    setCurrPage(currPage + 1);
    setCurrStep(0);
    console.log("currPage", currPage);
  }


  // PAGE RENDERING
  if (currPage === 1) {
    return (
      <div className='page-container' style={{"display":"flex", "justifyContent":"center","alignItems":"center","minHeight":"100vh","minWidth":"100vw","position":"fixed"}}>
        <div className='app-container' style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column"}}>
          <ModalPage nextPage={nextPage} currStep={currStep} />
        </div>
      </div>
    )
  }


  // THIS IS THE SUMMARY PAGE
  else if (currPage === 2) {
    return (
      <div className='page-container' style={{"display":"flex", "justifyContent":"center","alignItems":"center","minHeight":"100vh","minWidth":"100vw","position":"fixed"}}>
                
        <div className='app-container' style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column"}}>
          
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
      </div>
    );
  }

  // THIS IS THE ANALYTICS PAGE
  else if (currPage === 3) {
    return (
      <div className='page-container' style={{"display":"flex", "justifyContent":"center","alignItems":"center","minHeight":"100vh","minWidth":"100vw","position":"fixed"}}>
                
        <div className='app-container' style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column"}}>
          
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
      </div>
    );
  }
}


export default App;
