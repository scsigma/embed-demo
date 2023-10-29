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
import FullPageEmbedAddVizPNG from './images/full_page_embed_add_viz.png';
import FullPageEmbedAddMonthPNG from './images/full_page_embed_add_viz_month.png';
import FullPageEmbedLinechartPNG from './images/full_page_embed_with_linechart.png';
import FullPageEmbedShareModalPNG from './images/full_page_embed_share_modal.png';
import FullPageEmbedScheduledExportPNG from './images/full_page_embed_scheduled_export.png';


export const AnalyticsPage = ({ currStep, nextStep }) => {

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
    } else if (currStep >= 5 & currStep < 6) {
        return (
            <img src={FullPageEmbedEditorModePNG} style={{width: "100%"}} />
        )
    } else if (currStep >=6 & currStep < 7) {
        return (
            <img src={FullPageEmbedAddVizPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 7 & currStep < 8) {
        return (
            <img src={FullPageEmbedAddMonthPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 8 & currStep < 9) {
        return (
            <img src={FullPageEmbedLinechartPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 9 & currStep < 10) {
        return (
            <img src={FullPageEmbedShareModalPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 10) {
        return (
            <img src={FullPageEmbedScheduledExportPNG} style={{width: "100%"}} />
        )
    }
  }


  return (
    <div className="analytics-page-container" style={{"width":"1222px", "height":"723px", borderRadius: "18px", backgroundColor: "#ffffff", display: "flex", flexDirection:"column", position:"relative", alignItems:"center"}}>
        {screenshotRender(currStep)}

        <div
            className="computerBarChart"
            style={{
                zIndex: "1"
                , display: currStep === 0 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "353px"
                , height:"27px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "307px"
                , left: "183px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="computerBarChart"
            style={{
                zIndex: "1"
                , display: currStep === 1 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "456px"
                , height:"34px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "200px"
                , left: "372px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="createBookmark"
            style={{
                zIndex: "1"
                , display: currStep === 2 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "38px"
                , height:"34px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "668px"
                , left: "859px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="saveBookmark"
            style={{
                zIndex: "1"
                , display: currStep === 3 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "106px"
                , height:"34px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "390px"
                , left: "787px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="explore"
            style={{
                zIndex: "1"
                , display: currStep === 4 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "145px"
                , height:"36px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "668px"
                , left: "931px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="addViz"
            style={{
                zIndex: "1"
                , display: currStep === 5 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "105px"
                , height:"82px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "145px"
                , left: "42px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="addMonth"
            style={{
                zIndex: "1"
                , display: currStep === 6 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "211px"
                , height:"25px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "459px"
                , left: "42px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="addRevenue"
            style={{
                zIndex: "1"
                , display: currStep === 7 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "211px"
                , height:"25px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "460px"
                , left: "42px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="openMenu"
            style={{
                zIndex: "1"
                , display: currStep === 8 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "25px"
                , height:"25px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "673px"
                , left: "256px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="scheduledExports"
            style={{
                zIndex: "1"
                , display: currStep === 9 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "187px"
                , height:"27px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "571px"
                , left: "90px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>

        <div
            className="createScheduledExport"
            style={{
                zIndex: "1"
                , display: currStep === 10 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "72px"
                , height:"31px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "574px"
                , left: "808px"
                , border: "1px solid red"}}
            onClick={() => nextStep()}
        >
                clickable div
        </div>
    </div>
  );
};