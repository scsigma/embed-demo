import React from "react";
import styled from "styled-components";
import { TitleFilterKPIs } from "./title-filters-kpis/TitleFilterKpis";
import { SigmaFooter } from "./footerNavBar/SigmaFooter";
import { BarChart } from "./charts/barchart/BarChart";


export const AnalyticsPage = () => {
  return (
   <div className="analytics-page-container" style={{"width":"1222px", "height":"723px", border: "1px solid red", borderRadius: "18px", backgroundColor: "#ffffff", display: "flex", flexDirection:"column", position:"relative", alignItems:"center"}}>
    
    
    <div className="title-filters-kpis-container" style={{"width":"1176px", height:"201px", border:"1px solid blue", position:"absolute", top:"20px"}}>
        <TitleFilterKPIs />
    </div>

    <div className="charts-container" style={{"width":"1183px", height:"393px", border:"1px solid blue", position:"absolute", top:"255px", display:"flex", justifyContent:"space-between"}}>
        <div className="barchart-container" style={{width:"573px", height: "393px", border: "1px solid red"}}>
            {/* barchart */}
            <BarChart />
        </div>
        <div className="pivot-container" style={{width:"573px", height: "389px", border: "1px solid blue"}}>
            pivot
        </div>
    </div>

    <div className="navbar-container" style={{"width":"100%", height:"70px", border:"1px solid blue", position:"absolute", bottom:"0px"}}>
        <SigmaFooter />
    </div>
   </div>
  );
};