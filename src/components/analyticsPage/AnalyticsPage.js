import React from "react";
import styled from "styled-components";
import { TitleFilterKPIs } from "./title-filters-kpis/TitleFilterKpis";
import { SigmaFooter } from "./footerNavBar/SigmaFooter";
import { BarChart } from "./charts/barchart/BarChart";
import PivotTable from './charts/pivot/pivot_table.png';
import DrillDownPNG from './images/drill_down.png';


export const AnalyticsPage = ({ currStep }) => {
  return (
   <div className="analytics-page-container" style={{"width":"1222px", "height":"723px", borderRadius: "18px", backgroundColor: "#ffffff", display: "flex", flexDirection:"column", position:"relative", alignItems:"center"}}>
    
    {currStep > 0 ? <div className="opaque-div" style={{width: "1222px", height: "652px", backgroundColor: "rgb(217, 217, 217, 0.65)", zIndex:"1", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={DrillDownPNG} style={{width:"500px"}}/>
    </div> : <></>}
    
    <div className="title-filters-kpis-container" style={{"width":"1176px", height:"201px", position:"absolute", top:"20px"}}>
        <TitleFilterKPIs />
    </div>

    <div className="charts-container" style={{"width":"1183px", height:"393px", position:"absolute", top:"242px", display:"flex", justifyContent:"space-between"}}>
        <div className="barchart-container" style={{width:"573px", height: "393px"}}>
            <BarChart />
        </div>
        <div className="pivot-container" style={{width:"573px", height: "389px"}}>
            <img src={PivotTable} style={{width: "100%"}}/>
        </div>
    </div>

    <div className="navbar-container" style={{"width":"100%", height:"70px", position:"absolute", bottom:"0px"}}>
        <SigmaFooter />
    </div>
   </div>
  );
};