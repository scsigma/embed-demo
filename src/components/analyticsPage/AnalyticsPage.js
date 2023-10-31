import React, {useState, useEffect} from "react";
import styled from "styled-components";

// PNG Imports
import FullWorkbookEmbedPNG from './images/full_workbook_embed.png';
import FullWorkbookEmbedWithDrilldownPNG from './images/full_workbook_embed_drilldown.png';
import FullWorkbookEmbedWithComputerBarchartPNG from './images/full_workbook_embed_computer_barchart.png';
import FullWorkbookEmbedSaveBookmarkPNG from './images/full_workbook_embed_save_bookmark.png';
import FullWorkbookEmbedExploreModePNG from './images/full_workbook_embed_explore_mode.png';
import FullWorkbookEmbedAddVizPNG from './images/full_workbook_embed_add_viz.png';
import FullWorkbookEmbedAddMonthPNG from './images/full_workbook_embed_add_viz_month.png';
import FullWorkbookEmbedAreachartPNG from './images/full_workbook_embed_with_area_chart.png';
import FullWorkbookEmbedMenuPNG from './images/full_workbook_embed_menu.png';
import FullWorkbookEmbedScheduledExportPNG from './images/full_workbook_embed_scheduled_export.png';


const FadingDiv = styled.div`
  opacity: ${props => (props.isvisible === "true" ? '1' : '0')};
  transition: opacity 1s;
`;

export const AnalyticsPage = ({ currStep, nextStep }) => {

  const screenshotRender = (currStep) => {
    if (currStep === 0) {
        return (
            <img src={FullWorkbookEmbedPNG} style={{width: "100%"}}/>
        )
    } else if (currStep > 0 & currStep < 2) {
        return (
            <img src={FullWorkbookEmbedWithDrilldownPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 2 & currStep < 3 || currStep >= 4 & currStep < 5) {
        return (
            <img src={FullWorkbookEmbedWithComputerBarchartPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 3 & currStep < 4){
        return (
            <img src={FullWorkbookEmbedSaveBookmarkPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 5 & currStep < 6) {
        return (
            <img src={FullWorkbookEmbedExploreModePNG} style={{width: "100%"}} />
        )
    } else if (currStep >=6 & currStep < 7) {
        return (
            <img src={FullWorkbookEmbedAddVizPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 7 & currStep < 8) {
        return (
            <img src={FullWorkbookEmbedAddMonthPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 8 & currStep < 9) {
        return (
            <img src={FullWorkbookEmbedAreachartPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 9 & currStep < 10) {
        return (
            <img src={FullWorkbookEmbedMenuPNG} style={{width: "100%"}} />
        )
    } else if (currStep >= 10) {
        return (
            <img src={FullWorkbookEmbedScheduledExportPNG} style={{width: "100%"}} />
        )
    }
  }

  const resetVisbility = () => {
    setIsVisible("false");
    const timer = setTimeout(() => {
        setIsVisible("true");
      }, 3000);
    setModalStep(modalStep + 1);
  }

  const [modalStep, setModalStep] = useState(1);

  const [isVisible, setIsVisible] = useState("false");

  useEffect(() => {
    // Use setTimeout to change the state after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible("true");
    }, 3000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="analytics-page-container" style={{"width":"1222px", "height":"723px", borderRadius: "18px", backgroundColor: "#ffffff", display: "flex", flexDirection:"column", position:"relative", alignItems:"center"}}>
        {screenshotRender(currStep)}

        {isVisible && modalStep === 1 && (
            <FadingDiv isvisible={isVisible} className="first-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "200px", left: "-200px", backgroundColor: "white", border: "1px solid red"}}>
                This is a power-user experience, for users who want to ask follow up questions

                Usually that means the Plugs dev/data team will take that request into their backlog, but Sigma allows those users to answer their own questions and customize their analysis.
                <button onClick={resetVisbility}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 2 && (
            <FadingDiv isvisible={isVisible} className="second-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "200px", left: "530px", backgroundColor: "white", border: "1px solid red"}}>
                One advanced functionality is drill down, which allows users to drill into any dimension of a pivot table or bar chart.

                Click on the bar for Computers to drill into performance for specific products.
            </FadingDiv>
        )}

        {isVisible && modalStep === 3 && (
            <FadingDiv isvisible={isVisible} className="third-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "100px", left: "868px", backgroundColor: "white", border: "1px solid red"}}>
                Sigma workbooks are built on top of the finest grain of data (data is never pre-aggregated or exported from the CDW), so you don’t need to preconfigure drill paths.

                Click on Product Name to drill into it
            </FadingDiv>
        )}

        {isVisible && modalStep === 4 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "500px", left: "868px", backgroundColor: "white", border: "1px solid red"}}>
                Now you see the top computer products.  From here you could drill down again or show the underlying data.

                After continuing this ad hoc analysis, users can create a Bookmark to save their changes for the next time they come back into the portal.

                Click here to create a bookmark
            </FadingDiv>
        )}

        {isVisible && modalStep === 5 && (
            <FadingDiv isvisible={isVisible} className="fifth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "300px", left: "0px", backgroundColor: "white", border: "1px solid red"}}>
                Users also have the option to set this bookmark as their default view (without overriding any other users’ preferences).

                Click Save. 
            </FadingDiv>
        )}

        {isVisible && modalStep === 6 && (
            <FadingDiv isvisible={isVisible} className="sixth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "579px", left: "875px", backgroundColor: "white", border: "1px solid red"}}>
                You can also allow users to build their own analyses and add elements to this page.

                Click explore to see what users can add. 
            </FadingDiv>
        )}

        {isVisible && modalStep === 7 && (
            <FadingDiv isvisible={isVisible} className="seventh-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "150px", left: "270px", backgroundColor: "white", border: "1px solid red"}}>
                Users can add a whole variety of elements to enhance / customize their analysis

                Select VIZ to add a viz
            </FadingDiv>
        )}

        {isVisible && modalStep === 8 && (
            <FadingDiv isvisible={isVisible} className="eigth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "459px", left: "257px", backgroundColor: "white", border: "1px solid red"}}>
                Click on Month to add it to the X axis
            </FadingDiv>
        )}

        {isVisible && modalStep === 9 && (
            <FadingDiv isvisible={isVisible} className="ninth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "459px", left: "257px", backgroundColor: "white", border: "1px solid red"}}>
                Click on Revenue to add it to the Y axis
            </FadingDiv>
        )}

        {isVisible && modalStep === 10 && (
            <FadingDiv isvisible={isVisible} className="tenth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "459px", left: "257px", backgroundColor: "white", border: "1px solid red"}}>
                Congrats! You just added a chart.  Open the menu at the bottom left his workbook can now be shared or exported
            </FadingDiv>
        )}

        {isVisible && modalStep === 11 && (
            <FadingDiv isvisible={isVisible} className="eleventh-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "502px", left: "372px", backgroundColor: "white", border: "1px solid red"}}>
                Users can share their analysis with other users at their company (Alfonso could share with other Acme employees, in our case).

                They can also created scheduled or conditional alerts.  Click “Schedule exports” to learn more
            </FadingDiv>
        )}

        {isVisible && modalStep === 12 && (
            <FadingDiv isvisible={isVisible} className="eleventh-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "220px", left: "-3px", backgroundColor: "white", border: "1px solid red"}}>
                There are many options here:users can export the whole workbook or specific elements, export as a CSV/PDF/etc, and customize a schedule.

                And you can even set a conditional export, like exporting the workbook when profit margin decreases by more than 3%.

                This capability (along with all the others covered today) are ones that you can give to specific users or even monetize.
            </FadingDiv>
        )}

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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
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