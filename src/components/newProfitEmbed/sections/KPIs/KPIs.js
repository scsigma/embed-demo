import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const StyledKpIs = styled.div`
  height: 72px;
  left: 20px;
  position: absolute;
  top: 89px;
  width: 572px;

  & .total-profit {
    height: 72px;
    left: 0;
    position: absolute;
    top: 0;
    width: 121px;
  }

  & .frame {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .div-wrapper {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 9.43px;
    position: relative;
  }

  & .text-wrapper {
    color: #828282;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 25.2px;
    margin-top: -1.18px;
    position: relative;
    width: 170px;
  }

  & .frame-wrapper {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  & .div {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4.71px;
    position: relative;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "Roboto", Helvetica;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 50.4px;
    margin-top: -1.18px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .total-profit-2 {
    height: 72px;
    left: 225px;
    position: absolute;
    top: 0;
    width: 121px;
  }

  & .text-wrapper-3 {
    color: #828282;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 25.2px;
    margin-top: -1.18px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .customer-rank {
    height: 72px;
    left: 451px;
    position: absolute;
    top: 0;
    width: 121px;
  }
`;

const renderValues = (currStep) => {
    if (currStep < 2) {
        return {
            "percentage": "100.0%",
            "totalProfit": "$3.18M",
            "customerRank": "0"
        }
    } else if (currStep === 2) {
        return {
            "percentage": "2.8%",
            "totalProfit": "$89.4k",
            "customerRank": "2"
        }
    } else {
        return {
            "percentage": "1.4%",
            "totalProfit": "$44.5k",
            "customerRank": "3"
        }
    }
}

export const KpIs = ({ currStep }) => {
  return (
    <StyledKpIs>
      <div className="total-profit">
        <div className="frame">
          <div className="div-wrapper">
            <div className="div-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper">% of Total Profit</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="div">
              <div className="text-wrapper-2">{renderValues(currStep).percentage}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="total-profit-2">
        <div className="frame">
          <div className="div-wrapper">
            <div className="div-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-3">Total Profit</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="div">
              <div className="text-wrapper-2">{renderValues(currStep).totalProfit}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-rank">
        <div className="frame">
          <div className="div-wrapper">
            <div className="div-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-3">Customer Rank</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="div">
              <div className="text-wrapper-2">{renderValues(currStep).customerRank}</div>
            </div>
          </div>
        </div>
      </div>
    </StyledKpIs>
  );
};
