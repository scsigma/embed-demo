import React from "react";
import styled from "styled-components";
import { TitleFilterKPIs } from "./title-filters-kpis/TitleFilterKpis";
import { SigmaFooter } from "./footerNavBar/SigmaFooter";
import { BarChart } from "./charts/barchart/BarChart";
import PivotTable from './charts/pivot/pivot_table.png';
import DrillDownPNG from './images/drill_down.png';
import BarChartComputerDrillDown from './images/drill_down_comuter_analytics_page.png';
import SaveBookmarkPNG from './images/save_bookmark.png';

// Correct Import
import FullPageEmbedPNG from './images/full_page_embed.png';
import FullPageEmbedWithDrilldownPNG from './images/full_page_embed_drilldown.png';
import FullPageEmbedWithComputerBarchartPNG from './images/full_page_embed_computer_barchart.png';
import FullPageEmbedSaveBookmarkPNG from './images/full_page_embed_save_bookmark.png';
import FullPageEmbedEditorModePNG from './images/full_page_embed_editor_mode.png';


export const AnalyticsPage = ({ currStep }) => {

  const screenshotRender = (currStep) => {
    if (currStep === 0) {
        return (
            <img src={FullPageEmbedPNG} style={{width: "100%"}}/>
        )
    } else if (currStep > 0 & currStep < 2) {
        return (
            <img src={FullPageEmbedWithDrilldownPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 2 & currStep < 3 || currStep >= 4 & currStep < 5) {
        return (
            <img src={FullPageEmbedWithComputerBarchartPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 3 & currStep < 4){
        return (
            <img src={FullPageEmbedSaveBookmarkPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 5) {
        return (
            <img src={FullPageEmbedEditorModePNG} style={{width: "100%"}} />
        )
    }
  }


  return (
    <div className="analytics-page-container" style={{"width":"1222px", "height":"723px", borderRadius: "18px", backgroundColor: "#ffffff", display: "flex", flexDirection:"column", position:"relative", alignItems:"center"}}>
        {screenshotRender(currStep)}
    </div>
  );
};