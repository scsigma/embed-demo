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

// Cursor Import
import { RippleCircle } from "../circleAnimation/RippleCircle.js";
import { ImArrowLeft2 } from 'react-icons/im';



const FadingDiv = styled.div`
  opacity: ${props => (props.isvisible === "true" ? '1' : '0')};
  transition: opacity 0.75s;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 3px 2px 8px 2px grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NextButton = styled.button`
    background-color: #FFFFFF;
    cursor: pointer;
    border: 2px solid #0004E1;     
    border-radius: 5px;
    padding: 8px;
    position: absolute;
    color: #0004E1;
    font-family: Lato;
    font-weight: 700;
    font-size: 18px;
`;

export const AnalyticsPage = ({ currStep, nextStep, previousStep, nextPage, previousPage, increaseGlobalStep, decreaseGlobalStep, globalStep }) => {

  const resetVisibility = ({ direction, steps }) => {
    setIsVisible("false");
    if (direction === "next") {
        increaseModalStep();
        const timer = setTimeout(() => {
            setIsVisible("true");
          }, 750);
    } else {
        decreaseModalStep(steps);
        setIsVisible("true");
    }
  }

  const increaseModalStep = () => {
    increaseGlobalStep();
    setModalStep(modalStep + 1);
  }

  const decreaseModalStep = (stepsBack) => {
    decreaseGlobalStep(stepsBack);
    setModalStep(modalStep - stepsBack);
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

        {<img src={FullWorkbookEmbedPNG} style={{display: currStep===0 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedWithDrilldownPNG} style={{display: currStep > 0 && currStep < 2 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedWithComputerBarchartPNG} style={{display: currStep === 2 || currStep === 4 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedSaveBookmarkPNG} style={{display: currStep === 3 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedExploreModePNG} style={{display: currStep === 5 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedAddVizPNG} style={{display: currStep === 6 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedAddMonthPNG} style={{display: currStep === 7 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedAreachartPNG} style={{display: currStep === 8 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedMenuPNG} style={{display: currStep === 9 ? "block" : "none", width: "100%"}}/>}
        {<img src={FullWorkbookEmbedScheduledExportPNG} style={{display: currStep === 10 ? "block" : "none", width: "100%"}}/>}
        
        

        {isVisible && modalStep === 1 && (
            <FadingDiv isvisible={isVisible} className="first-modal" style={{height: "auto", position: "absolute", color: "black", top: "200px", left: "-200px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "400px", margin: "20px", marginBottom: "50px"}}>
                    <p>Plugs has embedded an entire Sigma workbook here for a power-user experience, perfect for users who need to perform ad-hoc analysis to answer follow-up questions.</p>

                    <p>These requests would usually be routed to the Plugs analytics team, but Sigma allows those users to answer their own questions and customize their analysis.</p>
                </div>                
                <NextButton onClick={() => resetVisibility({direction: "next"})} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousPage(5);
                        }}/>            
            </FadingDiv>
        )}

        {isVisible && modalStep === 2 && (
            <FadingDiv isvisible={isVisible} className="second-modal" style={{  height: "auto", position: "absolute", color: "black", top: "29px", left: "330px"}}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "500px", margin:"10px"}}>
                    <p>One advanced feature is <strong>drill down</strong>, which allows users to drill into any dimension of a pivot table or chart.</p>

                    <p>In the chart below, click on the bar for <strong>Computers</strong> to drill into performance for specific products.</p>
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "283px", left: "72px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 3 && (
            <FadingDiv isvisible={isVisible} className="third-modal" style={{  height: "auto", position: "absolute", color: "black", top: "100px", left: "-105px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "400px", margin:"20px"}}>
                    <p>Sigma workbooks are built on top of the finest grain of data (data is never pre-aggregated or exported from the CDW), so you <strong>don’t need to preconfigure drill paths</strong>.</p>

                    <p>Click on <strong>Product Name</strong> to drill into it</p>
                </div> 
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "106px", left: "705px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 4 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{  height: "auto", position: "absolute", color: "black", top: "270px", left: "700px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "400px", margin:"20px"}}>
                    <p>Now the chart shows the top computer products.  From here you could drill down again or show the underlying data.</p>

                    <p>You can also allow users to create <strong>Bookmarks</strong> to save their changes for the next time they come into the portal.</p>

                    <p>Click on the icon below to create a bookmark.</p>
                </div> 
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "407px", left: "148px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 5 && (
            <FadingDiv isvisible={isVisible} className="fifth-modal" style={{  height: "auto", position: "absolute", color: "black", top: "440px", left: "500px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "400px", margin:"20px"}}>
                    <p>Users have the option to set this bookmark as their default view (without overriding any other users’ preferences).</p>

                    <p>Click the <strong>Save</strong> Button</p>
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div> 
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "-41px", left: "366px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 6 && (
            <FadingDiv isvisible={isVisible} className="sixth-modal" style={{  height: "auto", position: "absolute", color: "black", top: "410px", left: "750px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "400px", margin:"20px"}}>
                    <p>You can also allow users to build their own analyses and add elements to this page.</p>

                    <p>Toggle into <strong>Explore</strong> mode to see what users can add.</p>
                </div> 
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "267px", left: "158px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 7 && (
            <FadingDiv isvisible={isVisible} className="seventh-modal" style={{  height: "auto", position: "absolute", color: "black", top: "100px", left: "270px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "330px", margin:"20px"}}>
                    <p>Users can add new elements to enhance / customize their analysis</p>

                    <p>Select <strong>VIZ</strong> to add a new chart</p>
                </div>    
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>             
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "61px", left: "-154px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 8 && (
            <FadingDiv isvisible={isVisible} className="eigth-modal" style={{  height: "60px", position: "absolute", color: "black", top: "437px", left: "257px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "383px", margin:"20px"}}>
                    <p>Click on <strong>Month</strong> to add it to the X axis</p>
                </div>  
                <div className="circle-pointer-container" style={{position: "absolute", top: "26px", left: "-121px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 9 && (
            <FadingDiv isvisible={isVisible} className="ninth-modal" style={{  height: "60px", position: "absolute", color: "black", top: "438px", left: "257px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "401px", margin:"20px"}}>
                    <p>Click on <strong>Revenue</strong> to add it to the Y axis</p>
                </div> 
                <div className="circle-pointer-container" style={{position: "absolute", top: "26px", left: "-121px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 10 && (
            <FadingDiv isvisible={isVisible} className="tenth-modal" style={{  height: "auto", position: "absolute", color: "black", top: "459px", left: "120px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "401px", margin:"10px"}}>
                    <p>Congrats! You just added a chart. Sigma's drag-and-drop UI makes it easy for non-technical users to build analytics.</p>

                    <p>This workbook can now be shared or exported.  Open the menu using the caret below.</p>
                </div> 
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 3});
                        previousStep(3);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "217px", left: "164px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 11 && (
            <FadingDiv isvisible={isVisible} className="eleventh-modal" style={{  height: "auto", position: "absolute", color: "black", top: "411px", left: "372px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "500px", margin:"20px"}}>
                    <p>If enabled, users can <strong>share</strong> their analysis with other users at their company (Alfonso could share with other Acme employees, in our case).</p>

                    <p>They can also create <strong>scheduled or conditional alerts</strong>.  Click <strong>Schedule exports</strong> to learn more</p>
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "164px", left: "-91px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 12 && (
            <FadingDiv isvisible={isVisible} className="eleventh-modal" style={{  height: "auto", position: "absolute", color: "black", top: "121px", left: "-219px"      }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "500px", margin:"20px"}}>
                    <p>There are many options here: users can export the whole workbook or specific elements, export as a CSV/PDF/etc, and customize a schedule.</p>

                    <p>Or they can set a conditional export, like sending an email when profit margin decreases by more than 3%.</p>

                    <p>This capability (along with all the others covered today) are ones that you can give to specific users or even monetize.</p>
                    <p>Click <strong>Create</strong>.</p>
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "460px", left: "1105px"}}>
                    <RippleCircle />
                </div>
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
                   }}
            onClick={() => {
                nextStep();
                // resetVisibility();
                increaseModalStep();
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
                   }}
            onClick={() => {
                nextStep();
                resetVisibility({direction: "next"});
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
                , width: "53px"
                , height:"36px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "668px"
                , left: "844px"
                   }}
            onClick={() => {
                nextStep();
                // resetVisibility();
                increaseModalStep();
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
                   }}
            onClick={() => {
                nextStep();
                resetVisibility({direction: "next"});
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
                , width: "177px"
                , height:"36px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "668px"
                , left: "900px"
                   }}
            onClick={() => {
                nextStep();
                resetVisibility({direction: "next"});
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
                   }}
            onClick={() => {
                nextStep();
                // resetVisibility();
                increaseModalStep();
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
                   }}
            onClick={() => {
                nextStep();
                // resetVisibility();
                increaseModalStep();
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
                   }}
            onClick={() => {
                nextStep();
                resetVisibility({direction: "next"});
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
                , width: "58px"
                , height:"25px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "673px"
                , left: "253px"
                   }}
            onClick={() => {
                nextStep();
                // resetVisibility();
                increaseModalStep();
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
                , width: "262px"
                , height:"27px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "571px"
                , left: "90px"
                   }}
            onClick={() => {
                nextStep();
                resetVisibility({direction: "next"});
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
                   }}
            onClick={() => nextPage()}
        >
                clickable div
        </div>
    </div>
  );
};