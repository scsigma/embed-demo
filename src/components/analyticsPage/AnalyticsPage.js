import React from "react";
import styled from "styled-components";


export const AnalyticsPage = () => {
  return (
   <div className="analytics-page-container" style={{"width":"1222px", "height":"723px", border: "1px solid red", borderRadius: "18px", display: "flex", flexDirection:"column", position:"relative", alignItems:"center"}}>
    
    
    <div className="title-filters-kpis-container" style={{"width":"1176px", height:"201px", border:"1px solid blue", position:"absolute", top:"20px"}}>
        title, filter, kpis
    </div>

    <div className="charts-container" style={{"width":"1183px", height:"393px", border:"1px solid blue", position:"absolute", top:"255px"}}>
        charts
    </div>

    <div className="navbar-container" style={{"width":"100%", height:"50px", border:"1px solid blue", position:"absolute", bottom:"0px"}}>
        bottom navbar
    </div>
   </div>
  );
};