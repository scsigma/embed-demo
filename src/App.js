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
  const [currPage, setCurrPage] = useState(4);

  const [currClick, setCurrClick] = useState(2);
  // THIS IS WHERE WE CONTROL THE STEP IN THIS PROCESS
  const [currStep, setCurrStep] = useState(0);

  const nextStep = () => {
    setCurrStep(currStep + 1);
  }

  const changeClick = () => {
    setCurrClick(currClick === 1 ? 2 : 1);
  }

  if (currPage === 1) {
    return (
      <div>
        <ModalPage></ModalPage>
      </div>
    )
  }

  else if (currPage === 2) {
    return (
      <MainDiv className='main-div'>
        <button onClick={changeClick}>I AM A BUTTON BIG BIG BUTTON</button>
        
        <div className='navbar container'>
          <Navbar className='nav-bar'/>
        </div>
        
        <div className='below navbar div' style={{"height":"100%", "display":"flex"}}>
          
          <div className='sidebarcontainer-div' style={{"height":"100%", "width":"200px", "display":"flex","flexDirection":"column"}}>
            <Sidebar className='side-bar' style={{"height": "100%"}}/>
            <div className='logo div sidebar' style={{"height":"100px", "width":"100%" }}>
              <img src={PlugsLogo} style={{"height":"100%", "width":"100%", "backgroundColor":"white"}}></img>
            </div>
          </div>
          
          <div className='app-contents main-div' style={{ "width":"100%", "backgroundColor":"#1e1e1e", "color":"white", "display":"flex", "flexDirection":"column"}}>
            {/* THIS IS WHERE ALL OF SIGMA EMBEDDED WILL GO */}
            
            <div className='single-vizzes div' style={{"width":"100%", "height":"300px", "border":"2px dotted white", "display":"flex", "justifyContent":"space-evenly"}}>
              {/* THIS IS WHERE THE SINGLE VALUE VIZZES WILL GO */}
              <OrdersKpi mainNum={"218"} title={"Daily Orders"} firstNum={"-0.86"} secondNum={"+27.87"} thirdNum={"+32.33"}/>
              <OrdersKpi mainNum={"$23,988"} title={"Daily Revenue"} firstNum={"-1.73"} secondNum={"+22.40"} thirdNum={"+28.06"}/>
              <OrdersKpi mainNum={"197"} title={"Daily Customers"} firstNum={"-0.05"} secondNum={"+19.79"} thirdNum={"+32.34"}/>
            </div>
            
            <div className='table and workbook embed div' style={{"width":"100%", "height":"100%", "border":"2px dotted red", "display":"flex"}}>
              {/* THIS IS WHERE THE TABLE ELEMENT AND THE EMBED ELEMENT WILL GO */}
              <div className='table container' style={{"width":"50%", "height":"100%"}} >
                <StyledTable />
              </div>
              {/* THIS IS WHERE THE PROFIT EMBED WILL GO */}
              <div className='embed-container'>
                <ProfitEmbed currClick={currClick} />
              </div>
            
            </div>
        
          </div>
        
        </div>
      </MainDiv>
    );
  }

  // THIS IS THE SUMMARY PAGE
  else if (currPage === 3) {
    return (
      <div className='page-container' style={{"display":"flex", "justifyContent":"center","alignItems":"center","minHeight":"100vh","minWidth":"100vw","position":"fixed", "border":"1px solid red"}}>
        
        <button style={{"position":"fixed", "top":"15px"}} onClick={nextStep}>NEXT STEP</button>
        
        <div className='app-container' style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column","border":"1px solid blue"}}>
          
          <div className='navbar-container'>
            <Navbar className='navbar'/>
          </div>

          <div className='below-navbar-container' style={{"height":"100%", "display":"flex", "border":"1px solid red"}}>
            <div className='sidebar-container' style={{"height":"100%", "width":"200px", "display":"flex","flexDirection":"column"}}>
              <Sidebar className='side-bar' style={{"height": "100%"}}/>
              <div className='logo div sidebar' style={{"height":"100px", "width":"100%" }}>
                <img src={PlugsLogo} style={{"height":"100%", "width":"100%", "backgroundColor":"#DFDFDF"}}></img>
              </div>
            </div>

            <div className='app-contents' style={{ "width":"100%", "backgroundColor":"#d6d6d6", "color":"white", "display":"flex", "flexDirection":"column"}}>
              <div className='kpis-div' style={{"backgroundColor":"#F4f4f4", "width":"100%", "height":"200px", "display":"flex", "justifyContent":"space-evenly", "alignItems":"center"}}>
                <KPI mainNum={"218"} title={"Daily Orders"} firstNum={"-0.86"} secondNum={"+27.87"} thirdNum={"+32.33"}/>
                <KPI mainNum={"$23,988"} title={"Daily Revenue"} firstNum={"-1.73"} secondNum={"+22.40"} thirdNum={"+28.06"}/>
                <KPI mainNum={"197"} title={"Daily Customers"} firstNum={"-0.05"} secondNum={"+19.79"} thirdNum={"+32.34"}/>
              </div>

              <div className='table-and-embed-container' style={{"flex":"1", "display":"flex","backgroundColor":"#F4F4F4", "justifyContent":"space-evenly","alignItems":"center"}}>
                
                <div className='table container' style={{backgroundColor: "lightgrey", padding: "13px", borderRadius: "14px", color: "black"}}>
                  Recent Orders
                  <SimpleTable currStep={currStep} />
                </div>
                
                <div className='embed-container'>
                  <PageEmbed currStep={currStep}/>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // THIS IS THE ANALYTICS PAGE
  else if (currPage === 4) {
    return (
      <div className='page-container' style={{"display":"flex", "justifyContent":"center","alignItems":"center","minHeight":"100vh","minWidth":"100vw","position":"fixed", "border":"1px solid red"}}>
        
        <button style={{"position":"fixed", "top":"15px"}} onClick={nextStep}>NEXT STEP</button>
        
        <div className='app-container' style={{"width":"1468px","height":"844px", "display":"flex","flexDirection":"column","border":"1px solid blue"}}>
          
          <div className='navbar-container'>
            <Navbar className='navbar'/>
          </div>

          <div className='below-navbar-container' style={{"height":"100%", "display":"flex", "border":"1px solid red"}}>
            <div className='sidebar-container' style={{"height":"100%", "width":"200px", "display":"flex","flexDirection":"column"}}>
              <Sidebar className='side-bar' style={{"height": "100%"}}/>
              <div className='logo div sidebar' style={{"height":"100px", "width":"100%" }}>
                <img src={PlugsLogo} style={{"height":"100%", "width":"100%", "backgroundColor":"#DFDFDF"}}></img>
              </div>
            </div>

            <div className='app-contents' style={{ "width":"100%", "backgroundColor":"#d6d6d6", "color":"white", "display":"flex", "alignItems": "center", "justifyContent": "center"}}>
              <AnalyticsPage />
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default App;
