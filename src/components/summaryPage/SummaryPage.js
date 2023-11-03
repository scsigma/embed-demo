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
import ProfitEmbedProductFamilyDropdownPNG from './images/ProfitEmbed_Product_Type_Dropdown.png';
import ProfitEmbedCustomersFamilyPNG from './images/ProfitEmbed_Lucy_Daniels_Computers.png';

// Table Import
import { SimpleTable } from "../tableComponent/chakraTable";


const FadingDiv = styled.div`
  opacity: ${props => (props.isvisible === "true" ? '1' : '0')};
  transition: opacity 1s;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 3px 2px 8px 2px grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
            <img src={ProfitEmbedProductFamilyDropdownPNG} style={{width: "612px"}}/>
        )
    } else if (currStep >= 5) {
        return (
            <img src={ProfitEmbedCustomersFamilyPNG} style={{width: "612px"}}/>
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
    <div className='app-contents' style={{width: "1189px", height: "682px", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", position: "absolute"}}>
                
        <div className='kpis-container' style={{width: "1189px", height: "154px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "space-around",top:"0px"}}>
            <img src={OrderKPIPNG} style={{width: "352px"}}/>
            <img src={RevenueKPIPNG} style={{width: "352px"}}/>
            <img src={CustomerKPIPNG} style={{width: "352px"}}/>
        </div>

        <div className='table-and-profit-container' style={{width: "1189px", height: "499px", position: "absolute", top: "175px", "display":"flex", "justifyContent":"space-evenly", "alignItems":"center"}}>
        
            <div className='table container' style={{width: "577px", height: "499px", backgroundColor: "#ffffff", padding: "13px", borderRadius: "14px", color: "black"}}>
                <div><p style={{margin: "0px", textAlign:"center", fontFamily: "Lato", fontSize: "20px", fontWeight: "700"}}>Recent Orders</p></div>
                <SimpleTable currStep={currStep}/>
            </div>

            <div className='embed-container' style={{width: "612px", height: "499px"}}>
                {profitEmbedRender(currStep)}
            </div>
        </div>

        {isVisible && modalStep === 1 && (
            <FadingDiv isvisible={isVisible} className="first-modal" style={{height: "auto", position: "absolute", color: "black", top: "200px", left: "-200px"}}>
                <div className="text-container" style={{fontSize: "23px", width: "400px", margin: "20px", marginBottom: "50px"}}>
                    This portal has some features that are native to the app and some that are embedded from Sigma.
                </div>
                <button onClick={resetVisbility} style={{width: "50px", position: "absolute", bottom: "10px", right: "10px"}}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 2 && (
            <FadingDiv isvisible={isVisible} className="second-modal" style={{height: "auto", position: "absolute", color: "black", top: "160px", left: "243px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "300px", margin: "20px", marginBottom: "50px"}}>
                    The three KPI tiles above are individual visualizations from Sigma.
                </div>
                <button onClick={resetVisbility} style={{width: "50px", position: "absolute", bottom: "10px", right: "10px"}}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 3 && (
            <FadingDiv isvisible={isVisible} className="third-modal" style={{height: "auto", position: "absolute", color: "black", top: "160px", left: "167px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "350px", margin: "20px", marginBottom: "50px"}}>
                    And the <strong>Profit Snapshot</strong> to the right is a full page from a Sigma workbook, with multiple filters and visualizations.
                </div>
                <button onClick={resetVisbility} style={{width: "50px", position: "absolute", bottom: "10px", right: "10px"}}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 4 && (
            <FadingDiv isvisible={isVisible} className="third-modal" style={{height: "auto", position: "absolute", color: "black", top: "160px", left: "226px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "350px", margin: "20px"}}>
                    Click on the <strong>All Customers</strong> filter to set the Profit Snapshot to an individual customer.
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 5 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "160px", left: "236px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "350px", margin: "20px"}}>
                    Click on <strong>Nick Holmes</strong> to see his lifetime profit and top products.

                    This will execute a live query against the CDW to show you the latest information.
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 6 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-104px", left: "100px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "600px", margin: "20px"}}>
                    <p>Now the Profit Snapshot shows Nick’s information.</p> 
                    
                    <p>The <strong>Recent Orders</strong> list below is a custom part of Plugs Portal and does not come from Sigma, but we can pass its values to the Sigma embed.</p>

                    <p>Click on <strong>Lucy Daniels</strong> and watch the <strong>Profit Snapshot</strong> filter down to Lucy:</p>
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 7 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-97px", left: "272px"   }}>

                <div className="text-container" style={{fontSize: "23px", width: "400px", margin: "20px", marginBottom: "50px"}}>

                    <p>We have now filtered to see profitability info for only Lucy. We used a <strong style={{color: "navy"}}>POST</strong> request to pass information from the recent orders list to the embedded iframe.</p>

                    <a href="https://help.sigmacomputing.com/hc/en-us/articles/14395308051091-JavaScript-Events-for-Embedded-Elements#Updating-Controls-within-Sigma" target="blank">Click here</a> to see the documentation
                </div>

                <button onClick={resetVisbility} style={{width: "50px", position: "absolute", bottom: "10px", right: "10px"}}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 8 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-76px", left: "600px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "500px", margin: "20px"}}>
                    <p>Plugs has also created interactions in the other direction, capturing events in Sigma and applying them to other components of the portal.</p> 
                    
                    <p>Click on the <strong>Product Type</strong> filter to set a value and see that filter applied to the <strong>Recent Orders</strong> list.</p>
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 9 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "60px", position: "absolute", color: "black", top: "278px", left: "690px"   }}>
                <div className="text-container" style={{fontSize: "23px", margin: "10px"}}>
                    <p>Select <strong>Computers</strong></p>                     
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 10 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-100px", left: "300px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "500px", margin: "20px", marginBottom: "50px"}}>
                    <p>Now we see only computer products in <strong>Recent Orders</strong>.</p> 
                    
                    <p>Applying the filter in Sigma fires a javascript event, so the application can listen for that event and capture the information from the filter selection.</p>

                    <a href="https://help.sigmacomputing.com/hc/en-us/articles/14395308051091-JavaScript-Events-for-Embedded-Elements#dashboard:variables:onchange" target="blank">Click here</a> to see the documentation.
                </div>
                <button onClick={resetVisbility} style={{width: "50px", position: "absolute", bottom: "10px", right: "10px"}}>next</button>
            </FadingDiv>
        )}

        {isVisible && modalStep === 11 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-30px", left: "-33px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "500px", margin: "20px"}}>
                    <p>So far we've seen a canned dashboard, but Sigma also provides powerful ad hoc analytics capabilities.</p> 
                    
                    <p>Plugs has restricted access to these more advanced features to a subset of users/clients and are charging clients more for it.</p>

                    <p>Click on the <strong>Analytics</strong> tab to check it out</p>
                </div>
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
                 }}
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
                 }}
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
                 }}
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
                 }}
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
                 }}
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
                 }}
            onClick={() => nextPage()}
        >
                clickable div
        </div>


    </div>
  );
};