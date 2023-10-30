import { React, useContext, useEffect, useState } from 'react';
import { Frame }from './components/singlevalue.js';
import { ModalPage }from './components/loginModal';
import { Navbar } from './components/navbar.js';
import { Sidebar } from './components/sidebar.js';
import styled from 'styled-components';
import PlugsLogo from './graphics/plugs_electronics_logo_green.png';
import { StyledTable } from './components/tableComponent.js';
import { KPISection } from './components/KPIs/KPISection.js';
import { OrdersKpi } from './components/SingleValueKPI/KPI.js';
import { ProfitEmbed } from './components/ProfitEmbed/ProfitEmbed.js';

// NEW SECTION
import { KPI } from './components/newKPIs/KPI.js';
import { PageEmbed } from './components/newProfitEmbed/ProfitEmbed.js';
import { SimpleTable } from './components/tableComponent/chakraTable.js';
import { AnalyticsPage } from './components/analyticsPage/AnalyticsPage.js';
import { SummaryPage } from './components/summaryPage/SummaryPage.js';


const MainDiv = styled.div`
  // border: 2px solid red;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;




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
        
        {/* <button style={{"position":"fixed", "top":"15px"}} onClick={nextStep}>NEXT STEP</button> */}

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
        
        {/* <button style={{"position":"fixed", "top":"15px"}} onClick={nextStep}>NEXT STEP</button> */}
        
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
        
        {/* <button style={{"position":"fixed", "top":"15px"}} onClick={nextStep}>NEXT STEP</button> */}
        
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
