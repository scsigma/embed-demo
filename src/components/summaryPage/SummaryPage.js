import React, { useState, useEffect } from "react";
import styled from 'styled-components';

// Correct Import
import OrderKPIPNG from './images/OrdersKPI.png';
import RevenueKPIPNG from './images/RevenueKPI.png';
import CustomerKPIPNG from './images/CustomerKPI.png';
import ProfitEmbedMainPNG from './images/ProfitEmbed_Main.png';
import ProfitEmbedCustomerDropdownPNG from './images/ProfitEmbed_Customers_Dropdown.png';
import ProfitEmbedNickHolmesPNG from './images/ProfitEmbed_Nick_Holmes.png';
import ProfitEmbedLucyDanielsPNG from './images/ProfitEmbed_Lucy_Daniels.png';
import ProfitEmbedProductTypeDropdownPNG from './images/ProfitEmbed_Product_Type_Dropdown.png';
import ProfitEmbedLucyDanielsComputersPNG from './images/ProfitEmbed_Lucy_Daniels_Computers.png';

// Table Import
import { SimpleTable } from "../tableComponent/chakraTable";


const FadingDiv = styled.div`
  opacity: ${props => (props.isvisible === "true" ? '1' : '0')};
  transition: opacity 1s;
`;

export const SummaryPage = ({ currStep, nextStep, nextPage }) => {

  const profitEmbedRender = (currStep) => {
    if (currStep === 0) {
        return (
            <img src={ProfitEmbedMainPNG} style={{width: "612px"}}/>
        );
    } else if (currStep === 1) {
        return (
            <img src={ProfitEmbedCustomerDropdownPNG} style={{width: "612px"}}/>
        )
    } else if (currStep === 2) {
        return (
            <img src={ProfitEmbedNickHolmesPNG} style={{width: "612px"}}/>
        )
    } else if (currStep === 3) {
        return (
            <img src={ProfitEmbedLucyDanielsPNG} style={{width: "612px"}}/>
        )
    } else if (currStep === 4) {
        return (
            <img src={ProfitEmbedProductTypeDropdownPNG} style={{width: "612px"}}/>
        )
    } else if (currStep >= 5) {
        return (
            <img src={ProfitEmbedLucyDanielsComputersPNG} style={{width: "612px"}}/>
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
    <div className='app-contents' style={{width: "1189px", height: "682px", display: "flex", flexDirection:"column",justifyContent: "center", alignItems: "center", position: "absolute"}}>
                
        <div className='kpis-container' style={{width: "1189px", height: "154px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "space-around",top:"0px"}}>
            <img src={OrderKPIPNG} style={{width: "352px"}}/>
            <img src={RevenueKPIPNG} style={{width: "352px"}}/>
            <img src={CustomerKPIPNG} style={{width: "352px"}}/>
        </div>

        <div className='table-and-profit-container' style={{width: "1189px", height: "499px", position: "absolute", top: "175px", "display":"flex", "justifyContent":"space-evenly","alignItems":"center"}}>
        
            <div className='table container' style={{width: "577px", height: "499px", backgroundColor: "lightgrey", padding: "13px", borderRadius: "14px", color: "black"}}>
                Recent Orders
                <SimpleTable currStep={currStep} />
            </div>

            <div className='embed-container' style={{width: "612px", height: "499px"}}>
                {profitEmbedRender(currStep)}
            </div>
        </div>

        {isVisible && modalStep === 1 && (
            <FadingDiv isvisible={isVisible} className="first-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "200px", left: "-200px", backgroundColor: "white", border: "1px solid red"}}>
                This portal has some features that are native to the app and some that are embedded from Sigma.
                <button onClick={resetVisbility}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 2 && (
            <FadingDiv isvisible={isVisible} className="second-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "160px", left: "243px", backgroundColor: "white", border: "1px solid red"}}>
                These KPI tiles are individual visualizations from Sigma
                <button onClick={resetVisbility}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 3 && (
            <FadingDiv isvisible={isVisible} className="third-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "160px", left: "400px", backgroundColor: "white", border: "1px solid red"}}>
                And this is a full page from a Sigma workbook, with multiple filters and visualizations.
                <button onClick={resetVisbility}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 4 && (
            <FadingDiv isvisible={isVisible} className="third-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "160px", left: "400px", backgroundColor: "white", border: "1px solid red"}}>
                Click on Customer Name to get the Profit Snapshot for an individual customer.
            </FadingDiv>
        )}

        {isVisible && modalStep === 5 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "160px", left: "400px", backgroundColor: "white", border: "1px solid red"}}>
                Click on Nick Holmes to see his lifetime profit and top products.
 
                This will execute a live query against the CDW to show you the latest information.
            </FadingDiv>
        )}

        {isVisible && modalStep === 6 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "160px", left: "400px", backgroundColor: "white", border: "1px solid red"}}>
                And now the Profit Snapshot shows Nick’s latest info.
                
                This Recent Orders list is a custom part of Plugs Portal and does not come from Sigma, but we can pass its values to the Sigma embed.

                Click on Lucy Daniels and watch the Profit Snapshot filter down to Lucy:
            </FadingDiv>
        )}

        {isVisible && modalStep === 7 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "160px", left: "272px", backgroundColor: "white", border: "1px solid red"}}>
                We have now filtered to see profitability info for only Lucy. We used a POST request to pass information from the recent orders list to the embedded iframe.

                See the payload here: [payload]
                <button onClick={resetVisbility}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 8 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "160px", left: "600px", backgroundColor: "white", border: "1px solid red"}}>
                Plugs has also created interactions in the other direction, capturing events in Sigma and applying them to other components of the portal.

                Click on the Product Type filter to set a value and see that filter applied to the Recent Orders list.
            </FadingDiv>
        )}

        {isVisible && modalStep === 9 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{width: "100px", height: "auto", position: "absolute", color: "black", top: "278px", left: "820px", backgroundColor: "white", border: "1px solid red"}}>
                Select Computers
            </FadingDiv>
        )}

        {isVisible && modalStep === 10 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "262px", left: "500px", backgroundColor: "white", border: "1px solid red"}}>
                    Now we see only computer products in Recent Orders.

                    Applying the filter in Sigma fires a javascript event, so the application can listen for that event and capture the information from the filter selection.
                <button onClick={resetVisbility}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 11 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{width: "300px", height: "auto", position: "absolute", color: "black", top: "-30px", left: "-33px", backgroundColor: "white", border: "1px solid red"}}>
                So far we've seen a canned dashboard, but Sigma also provides powerful ad hoc analytics capabilities.

                Plugs has monetized premium features like drilldown, Explore mode and scheduled exports, to name a few.

                Click on the Analytics tab to check them out!
            </FadingDiv>
        )}


        <div
            className="filterClick"
            style={{
                zIndex: "1"
                , display: currStep === 0 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "200px"
                , height:"20px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "227px"
                , left: "647px"
                , border: "1px solid red"}}
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
        >
                clickable div
        </div>


        <div
            className="NickHolmes" 
            style={{
                zIndex: "1"
                , display: currStep === 1 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "274px"
                , height:"27px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "303px"
                , left: "647px"
                , border: "1px solid red"}}
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
        >
                clickable div
        </div>

        <div
            className="LucyDaniels" 
            style={{
                zIndex: "1"
                , display: currStep === 2 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "528px"
                , height:"23px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "240px"
                , left: "12px"
                , border: "1px solid red"}}
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
        >
                clickable div
        </div>

        <div
            className="productFamily"
            style={{
                zIndex: "1"
                , display: currStep === 3 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "200px"
                , height:"20px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "227px"
                , left: "920px"
                , border: "1px solid red"}}
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
        >
                clickable div
        </div>


        <div
            className="Computers" 
            style={{
                zIndex: "1"
                , display: currStep === 4 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "224px"
                , height:"27px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "303px"
                , left: "924px"
                , border: "1px solid red"}}
            onClick={() => {
                nextStep();
                resetVisbility();
            }}
        >
                clickable div
        </div>

        <div
            className="AnalyticsTab" 
            style={{
                zIndex: "1"
                , display: currStep === 5 ? "inline" : "none"
                , opacity: "0"
                , color: "black"
                , width: "200px"
                , height:"27px"
                , cursor: "pointer"
                , position: "absolute"
                , top: "0px"
                , left: "-241px"
                , border: "1px solid red"}}
            onClick={() => nextPage()}
        >
                clickable div
        </div>


    </div>
  );
};