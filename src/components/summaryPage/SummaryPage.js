import React from "react";

// Correct Import
import OrderKPIPNG from './images/OrdersKPI.png';
import RevenueKPIPNG from './images/RevenueKPI.png';
import CustomerKPIPNG from './images/CustomerKPI.png';
import ProfitEmbedMainPNG from './images/ProfitEmbed_Main.png';
import ProfitEmbedCustomerDropdownPNG from './images/ProfitEmbed_Customers_Dropdown.png';
import ProfitEmbedNickHolmesPNG from './images/ProfitEmbed_Nick_Holmes.png';
import ProfitEmbedLucyDanielsPNG from './images/ProfitEmbed_Lucy_Daniels.png';
import ProfitEmbedProductFamilyDropdownPNG from './images/ProfitEmbed_Product_Family_Dropdown.png';
import ProfitEmbedCustomersFamilyPNG from './images/ProfitEmbed_Computers.png';

export const SummaryPage = ({ currStep }) => {

  const screenshotRender = (currStep) => {
    if (currStep === 0) {
        return (
            <img src={OrderKPIPNG} style={{width: "100%"}}/>
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
    } else if (currStep === 5) {
        return (
            <img src={ProfitEmbedCustomersFamilyPNG} style={{width: "612px"}}/>
        )
    }
  }


  return (
    <div className='app-contents' style={{width: "1189px", height: "682px", display: "flex", flexDirection:"column",justifyContent: "center", alignItems: "center", position: "absolute",border: "1px solid blue"}}>
                
        <div className='kpis-container' style={{width: "1189px", height: "154px", position: "absolute", display: "flex", alignItems: "center", justifyContent: "space-around",top:"0px",border: "1px solid red"}}>
            <img src={OrderKPIPNG} style={{width: "352px"}}/>
            <img src={RevenueKPIPNG} style={{width: "352px"}}/>
            <img src={CustomerKPIPNG} style={{width: "352px"}}/>
        </div>

        <div className='table-and-profit-container' style={{width: "1189px", height: "499px", position: "absolute", top: "175px",border: "1px solid red", "display":"flex", "justifyContent":"space-evenly","alignItems":"center"}}>
        
            <div className='table container' style={{width: "577px", height: "499px", border: "1px solid red"}}>
                Table Container
                {/* <SimpleTable currStep={currStep} /> */}
            </div>

            <div className='embed-container' style={{width: "612px", height: "499px", border: "1px solid red"}}>
                {profitEmbedRender(currStep)}
            </div>
        </div>
    </div>
  );
};