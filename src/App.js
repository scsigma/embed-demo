import { React, useContext, useEffect, useState } from 'react';
import { Frame }from './components/singlevalue.js';
import { ModalPage }from './components/loginModal';
import { Navbar } from './components/navbar.js';
import { Sidebar } from './components/sidebar.js';
import styled from 'styled-components';
import PlugsLogo from './graphics/PlugsElect_White.png';
import { StyledTable } from './components/tableComponent.js';
import { KPISection } from './components/KPIs/KPISection.js';
import { OrdersKpi } from './components/SingleValueKPI/KPI.js';
import { ProfitEmbed } from './components/ProfitEmbed/ProfitEmbed.js';


import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';



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

const ClickPath = () => {

}

const Main = () => {
  const [currPage, setCurrPage] = useState(2);
  const [currClick, setCurrClick] = useState(2);

  const changeClick = () => {
    setCurrClick(currClick === 1 ? 2 : 1);
  }

  return { currPage, currClick };
}



const App = () => {
  // const {currPage, currClick} = Main();

  const [currPage, setCurrPage] = useState(2);
  const [currClick, setCurrClick] = useState(2);

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
              <img src={PlugsLogo} style={{"height":"100%", "width":"100%", "backgroundColor":"black"}}></img>
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

  else if (currPage === 3) {
    return (
      <div>
        page3
      </div>
    );
  }
}


export default App;
