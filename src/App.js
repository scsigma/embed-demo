import { React, useContext, useEffect, useState } from 'react';
import { Frame }from './components/singlevalue.js';
import { ModalPage }from './components/loginModal';
import { Navbar } from './components/navbar.js';
import { Sidebar } from './components/sidebar.js';
import styled from 'styled-components';
import PlugsLogo from './graphics/PlugsElect_White.png';
import { StyledTable } from './components/tableComponent.js';



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

const App = () => {
  return (
    <MainDiv className='main-div'>
      <Navbar className='nav-bar'/>
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
            <Frame />
            <Frame />
            <Frame />
          </div>
          <div className='table and workbook embed div' style={{"width":"100%", "height":"100%", "border":"2px dotted red"}}>
            {/* THIS IS WHERE THE TABLE ELEMENT AND THE EMBED ELEMENT WILL GO */}
            <div className='table container' style={{"width":"50%", "height":"100%"}} >
              <StyledTable />
            </div>
          </div>
        </div>
      </div>
      {/* <Frame></Frame> */}
      {/* <ModalPage></ModalPage> */}
    </MainDiv>
  );
}


export default App;
