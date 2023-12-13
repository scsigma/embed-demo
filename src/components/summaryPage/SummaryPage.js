import React, { useState, useEffect } from "react";
import styled from 'styled-components';

// Import PNGs
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

// Cursor Import
import { RippleCircle } from "../circleAnimation/RippleCircle.js";
import { ImArrowLeft2 } from 'react-icons/im';

const FadingDiv = styled.div`
  opacity: ${props => (props.isvisible === "true" ? '1' : '0')};
  transition: ${props => (props.notransition === "true" ? 'opacity 0s' : 'opacity 0.75s')};
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 3px 2px 8px 2px grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// For the iframe modals
const CodeBlockContainer = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  white-space: pre;
  line-height: 1.4;
  overflow-x: auto;
  font-size: 12px;
`;

// For the iframe modals
const Code = styled.code`
  color: #333;
`;

// For the iframe modals
const HighlightedText = styled.p`
  background-color: #A0CBE8; 
  display: inline; 
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

export const SummaryPage = ({ currStep, nextStep, previousStep, nextPage, previousPage, increaseGlobalStep, decreaseGlobalStep, globalStep }) => {

  const images = [
    ProfitEmbedMainPNG
    , ProfitEmbedCustomerDropdownPNG
    , ProfitEmbedNickHolmesPNG
    , ProfitEmbedLucyDanielsPNG
    , ProfitEmbedProductFamilyDropdownPNG
    , ProfitEmbedCustomersFamilyPNG
  ];

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

//   const [modalStep, setModalStep] = useState(1);
  const [modalStep, setModalStep] = useState(globalStep);

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
                {
                    images.map((src, index)=> (
                        <img key={index} src={src} style={{display: currStep === index ? "block" : 'none', width: "100%"}}/>
                    ))
                }
            </div>
        </div>

        {isVisible && modalStep === 1 && (
            <FadingDiv isvisible={isVisible} className="first-modal" style={{height: "auto", position: "absolute", color: "black", top: "200px", left: "-200px"}}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", width: "400px", margin: "20px", marginBottom: "50px"}}>
                    This portal has some components that are native to the application and some that come from Sigma.
                    <br/>
                    <br/>
                    The three KPI tiles above are individual visualizations from Sigma.
                    <br/>
                    <br/>
                    The <strong>Profit Snapshot</strong> to the right is a full page from a Sigma workbook, with multiple filters and visualizations.
                    <br/>
                    <br/> 
                    The <strong>Recent Orders</strong> table to the left is a custom piece of the application and does not come from Sigma.
                </div>
                <NextButton onClick={() => resetVisibility({direction: "next"})} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousPage(0);
                        }}/>
            </FadingDiv>
        )}

        {/* {isVisible && modalStep === 2 && (
            <FadingDiv isvisible={isVisible} className="second-modal" style={{height: "auto", position: "absolute", color: "black", top: "160px", left: "243px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "300px", margin: "20px", marginBottom: "50px"}}>
                    The three KPI tiles above are individual visualizations from Sigma.
                </div>
                <NextButton onClick={() => resetVisibility({direction: "next"})} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        }}/>
            </FadingDiv>
        )} */}

        {/* {isVisible && modalStep === 3 && (
            <FadingDiv isvisible={isVisible} className="third-modal" style={{height: "auto", position: "absolute", color: "black", top: "160px", left: "167px"   }}>
                <div className="text-container" style={{fontSize: "23px", width: "350px", margin: "20px", marginBottom: "50px"}}>
                    And the <strong>Profit Snapshot</strong> to the right is a full page from a Sigma workbook, with multiple filters and visualizations.
                </div>
                <NextButton onClick={() => resetVisibility({direction: "next"})} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        }}/>
            </FadingDiv>
        )} */}

        {isVisible && modalStep === 2 && (
            <FadingDiv isvisible={isVisible} className="third-modal" style={{height: "auto", position: "absolute", color: "black", top: "160px", left: "226px"   }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", width: "350px", margin: "30px"}}>
                    Click on the <strong>All Customers</strong> filter to set the Profit Snapshot to an individual customer.
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-6px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "69px", left: "534px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 3 && (
            <FadingDiv isvisible={isVisible} notransition="true" className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "260px", left: "236px"   }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", width: "350px", margin: "20px", marginBottom: "30px"}}>
                    Click on <strong>Nick Holmes</strong> to see his lifetime profit and top products.

                    This will execute a live query against the cloud data warehouse.
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "45px", right: "-200px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 4 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-104px", left: "100px"   }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", width: "600px", margin: "14px"}}>
                    <p>With Sigma embedding, you can create bidirectional interactions between Sigma and your application.</p>
                    <p>First we will see an action in the app update the Sigma embed.</p>
                    <p>Click on <strong>Lucy Daniels</strong> and watch the <strong>Profit Snapshot</strong> filter down to Lucy:</p>
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "347px", left: "72px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 5 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-97px", left: "272px"   }}>

                <div className="text-container" style={{fontSize: "18px", color:"#171717", width: "400px", margin: "20px", marginBottom: "60px"}}>

                    <p>We have now filtered to see profitability info for only Lucy. We used a <strong style={{color: "navy"}}>postMessage</strong> to pass information from the recent orders list to the embedded iframe.</p>

                    <a href="https://help.sigmacomputing.com/hc/en-us/articles/14395308051091-JavaScript-Events-for-Embedded-Elements#Updating-Controls-within-Sigma" target="blank">Click here</a> to see the documentation
                </div>
                <NextButton onClick={() => resetVisibility({direction: "next"})} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        previousStep(1);
                        }}/>
            </FadingDiv>
        )}

        {isVisible && modalStep === 6 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-76px", left: "600px"   }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", width: "500px", margin: "20px"}}>
                    <p>You can also capture events in Sigma and apply them to other components of the application.</p> 
                    
                    <p>Click on the <strong>Product Type</strong> filter to set a value and see that filter applied to the <strong>Recent Orders</strong> list.</p>
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 1});
                        }}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "305px", left: "460px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 7 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "60px", position: "absolute", color: "black", top: "278px", left: "690px"   }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", margin: "10px"}}>
                    <p>Select <strong>Computers</strong></p>                     
                </div>
                <div className="circle-pointer-container" style={{position: "absolute", top: "28px", left: "345px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 8 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-100px", left: "300px"   }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", width: "500px", margin: "20px", marginBottom: "50px"}}>
                    <p>Now we see only computer products in <strong>Recent Orders</strong>.</p> 
                    
                    <p>Applying the filter in Sigma fires a javascript event, so the application can listen for that event and capture the information from the filter selection.</p>

                    <a href="https://help.sigmacomputing.com/hc/en-us/articles/14395308051091-JavaScript-Events-for-Embedded-Elements#dashboard:variables:onchange" target="blank">Click here</a> to see the documentation.
                    <p>So, we saw an action in a custom piece of the app update the Sigma embed and an action in the Sigma embed update the app.</p>
                </div>
                <NextButton onClick={() => resetVisibility({direction: "next"})} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} 
                    onClick={() => {
                        resetVisibility({direction: "back", steps: 2});
                        previousStep(2);
                        }}/>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
            </FadingDiv>
        )}

        {/* BEGINNING OF IFRAME CONTENT */}
        {isVisible && modalStep === 9 && (
            <FadingDiv isvisible={isVisible} className="iframe-modal" style={{height: "auto", position: "absolute", color: "black", top: "-50px", left: "200px"   }}>
                <div className="iframe-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "800px", margin: "20px", marginBottom: "60px"}}>
                    <div className="text-container" style={{height: "350px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p>Sigma uses iframe embedding, which is both secure and extensible, allowing us to work with all types of security/authentication frameworks.</p> 
                    
                        <p>We’ll use an example to explain how iframe embedding works.</p>

                        <p>You will generate this URL in the backend of your app and sign it using a secret key and a hashing function (HMAC-SHA256). This signature is unique to the parameters in the URL and cannot be modified.</p>
                    </div>
                    <CodeBlockContainer>
                        <pre>
                            <Code>
                                <p>&lt;iframe src=”https://app.sigmacomputing.com/embed/DX5Dhyw0BPGlw3lyQHeqg?:nonce=f39c4be6-95cd-4fb8b06a-</p>
                                <p>792c768428d7&:email=alfonso@acmesupply.com&:mode=userbacked&:session_length=3600&:time=1698644306&:client_id</p>
                                <p>=c6c5391cd1b2a8b878a48351a36573decf133335e90d67d0851145a4676e5eaf&:ua_region=West,Southwest&:signature=</p>
                                <p>ec3a7732d64ebba0d0bb255ce5ca27746a6c5c7063902075aea712b8c175bc21”&gt;</p>
                            </Code>
                        </pre>
                    </CodeBlockContainer>
                </div>
                <NextButton onClick={increaseModalStep} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} onClick={() => resetVisibility({direction: "back", steps: 1})}/>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 10 && (
            <FadingDiv isvisible={isVisible} notransition="true" className="iframe-modal" style={{height: "auto", position: "absolute", color: "black", top: "-50px", left: "200px"   }}>
                <div className="iframe-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "800px", margin: "20px", marginBottom: "60px"}}>
                    <div className="text-container" style={{height: "350px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p>The <strong>:email</strong> field tells Sigma which user from your application is accessing the embed and drives the permissions.</p> 
                    </div>
                    <CodeBlockContainer>
                        <pre>
                            <Code>
                                <p>&lt;iframe src=”https://app.sigmacomputing.com/embed/DX5Dhyw0BPGlw3lyQHeqg?</p>

                                <p>:nonce=f39c4be6-95cd-4fb8b06a-792c768428d7</p>

                                <p><HighlightedText>&:email=alfonso@acmesupply.com</HighlightedText></p>

                                <p>&:mode=userbacked</p>

                                <p>&:session_length=3600</p>

                                <p>&:time=1698644306</p>

                                <p>&:client_id=c6c5391cd1b2a8b878a48351a36573decf133335e90d67d0851145a4676e5eaf</p>

                                <p>&:ua_region=West,Southwest</p>

                                <p>&:signature=ec3a7732d64ebba0d0bb255ce5ca27746a6c5c7063902075aea712b8c175bc21”&gt;</p>
                            </Code>
                        </pre>
                    </CodeBlockContainer>
                </div>
                <NextButton onClick={increaseModalStep} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} onClick={() => resetVisibility({direction: "back", steps: 1})}/>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 11 && (
            <FadingDiv isvisible={isVisible} notransition="true" className="iframe-modal" style={{height: "auto", position: "absolute", color: "black", top: "-50px", left: "200px"   }}>
                <div className="iframe-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "800px", margin: "20px", marginBottom: "60px"}}>
                    <div className="text-container" style={{height: "350px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p>The <strong>:nonce</strong> field makes the URL (and therefore the signature) unique.</p> 
                    
                        <p>Sigma tracks the nonce to ensure each nonce is only used once; you cannot copy/paste this URL and use it elsewhere.</p> 
                    </div>
                    <CodeBlockContainer>
                        <pre>
                            <Code>
                                <p>&lt;iframe src=”https://app.sigmacomputing.com/embed/DX5Dhyw0BPGlw3lyQHeqg?</p>

                                <p><HighlightedText>:nonce=f39c4be6-95cd-4fb8b06a-792c768428d7</HighlightedText></p>

                                <p>&:email=alfonso@acmesupply.com</p>

                                <p>&:mode=userbacked</p>

                                <p>&:session_length=3600</p>

                                <p>&:time=1698644306</p>

                                <p>&:client_id=c6c5391cd1b2a8b878a48351a36573decf133335e90d67d0851145a4676e5eaf</p>

                                <p>&:ua_region=West,Southwest</p>

                                <p>&:signature=ec3a7732d64ebba0d0bb255ce5ca27746a6c5c7063902075aea712b8c175bc21”&gt;</p>
                            </Code>
                        </pre>
                    </CodeBlockContainer>
                </div>
                <NextButton onClick={increaseModalStep} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} onClick={() => resetVisibility({direction: "back", steps: 1})}/>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 12 && (
            <FadingDiv isvisible={isVisible} notransition="true" className="iframe-modal" style={{height: "auto", position: "absolute", color: "black", top: "-50px", left: "200px"   }}>
                <div className="iframe-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "800px", margin: "20px", marginBottom: "60px"}}>
                    <div className="text-container" style={{height: "350px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p>The <strong>:ua_region</strong> field is an example of a user attribute. User attributes allow you to administer security.</p> 
                        
                        <p>In this example, Alfonso can only see data from the West and Southwest regions, but a different user might be able to see East and Midwest regions.</p>
                    </div>
                    <CodeBlockContainer>
                        <pre>
                            <Code>
                                <p>&lt;iframe src=”https://app.sigmacomputing.com/embed/DX5Dhyw0BPGlw3lyQHeqg?</p>

                                <p>:nonce=f39c4be6-95cd-4fb8b06a-792c768428d7</p>

                                <p>&:email=alfonso@acmesupply.com</p>

                                <p>&:mode=userbacked</p>

                                <p>&:session_length=3600</p>

                                <p>&:time=1698644306</p>

                                <p>&:client_id=c6c5391cd1b2a8b878a48351a36573decf133335e90d67d0851145a4676e5eaf</p>

                                <p><HighlightedText>&:ua_region=West,Southwest</HighlightedText></p>

                                <p>&:signature=ec3a7732d64ebba0d0bb255ce5ca27746a6c5c7063902075aea712b8c175bc21”&gt;</p>
                            </Code>
                        </pre>
                    </CodeBlockContainer>
                </div>
                <NextButton onClick={increaseModalStep} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} onClick={() => resetVisibility({direction: "back", steps: 1})}/>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
            </FadingDiv>
        )}

        {isVisible && modalStep === 13 && (
            <FadingDiv isvisible={isVisible} notransition="true" className="iframe-modal" style={{height: "auto", position: "absolute", color: "black", top: "-50px", left: "200px"   }}>
                <div className="iframe-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "800px", margin: "20px", marginBottom: "60px"}}>
                    <div className="text-container" style={{height: "350px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p>And finally, the <strong>signature</strong> is the unique result of hashing this URL with your secret key.</p> 
                        
                        <p>iframe embedding is secure for two reasons:</p>

                        <p>   1. the URL cannot be reused because the nonce can only be used once.</p>
                        <p>   2. the URL cannot be modified because modifying the URL invalidates the signature. To modify the URL it must be re-signed, which requires the secret key.</p>
                    </div>
                    <CodeBlockContainer>
                        <pre>
                            <Code>
                                <p>&lt;iframe src=”https://app.sigmacomputing.com/embed/DX5Dhyw0BPGlw3lyQHeqg?</p>

                                <p>:nonce=f39c4be6-95cd-4fb8b06a-792c768428d7</p>

                                <p>&:email=alfonso@acmesupply.com</p>

                                <p>&:mode=userbacked</p>

                                <p>&:session_length=3600</p>

                                <p>&:time=1698644306</p>

                                <p>&:client_id=c6c5391cd1b2a8b878a48351a36573decf133335e90d67d0851145a4676e5eaf</p>

                                <p>&:ua_region=West,Southwest</p>

                                <p><HighlightedText>&:signature=ec3a7732d64ebba0d0bb255ce5ca27746a6c5c7063902075aea712b8c175bc21”&gt;</HighlightedText></p>
                            </Code>
                        </pre>
                    </CodeBlockContainer>
                </div>
                <NextButton onClick={() => resetVisibility({direction: "next"})} style={{bottom: "10px", right: "10px"}}>Next &rarr;</NextButton>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "17px"}} onClick={() => resetVisibility({direction: "back", steps: 1})}/>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "0px", position: "absolute"}}><p>{globalStep}/29</p></div>
            </FadingDiv>
        )}

        {/* END OF IFRAME CONTENT */}
        

        {isVisible && modalStep === 14 && (
            <FadingDiv isvisible={isVisible} className="fourth-modal" style={{height: "auto", position: "absolute", color: "black", top: "-30px", left: "-33px"   }}>
                <div className="text-container" style={{fontSize: "18px", color:"#171717", fontFamily: "Lato", width: "700px", margin: "20px"}}>
                    <p>So far we've seen a canned dashboard, but Sigma also provides powerful ad hoc analytics capabilities.</p> 
                    
                    <p>Plugs also offers a premium analytics experience and charges customers who want more analytical capabilities.</p>

                    <p>Click on the <strong>Analytics</strong> tab to check it out</p>
                </div>
                <div className="global-step-container" style={{width:"fit-content", left: "35px", bottom: "-7px", position: "absolute"}}><p>{globalStep}/29</p></div>
                <ImArrowLeft2 style={{position: "absolute", cursor: "pointer", left: "10px", bottom: "10px"}} onClick={() => resetVisibility({direction: "back", steps: 1})}/>
                <div className="circle-pointer-container" style={{position: "absolute", top: "34px", left: "-122px"}}>
                    <RippleCircle />
                </div>
            </FadingDiv>
        )}


        {/* ALL OF THE CLICKABLE DIVS BELOW */}
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
                // resetVisibility();
                increaseModalStep();
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
                resetVisibility({direction: "next"});                
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
                resetVisibility({direction: "next"});
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
                // resetVisibility();
                increaseModalStep();
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
                resetVisibility({direction: "next"});
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