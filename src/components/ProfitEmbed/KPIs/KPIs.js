import React from "react";
import styled from "styled-components";

const StyledKPIs = styled.div`
  height: 96px;
  left: 90px;
  position: absolute;
  top: 166px;
  width: 784px;

  & .total-profit {
    height: 96px;
    left: 0;
    position: absolute;
    top: 0;
    width: 166px;
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
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 33.6px;
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
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 67.2px;
    margin-top: -1.18px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .total-profit-2 {
    height: 96px;
    left: 309px;
    position: absolute;
    top: 0;
    width: 166px;
  }

  & .text-wrapper-3 {
    color: #828282;
    font-family: "Source Sans Pro", Helvetica;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 33.6px;
    margin-top: -1.18px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .customer-rank {
    height: 96px;
    left: 618px;
    position: absolute;
    top: 0;
    width: 166px;
  }
`;

export const KPIs = ({ currClick }) => {
  return (
    <StyledKPIs>
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
              <div className="text-wrapper-2">{currClick === 1 ? "100%" : "2.8%"}</div>
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
              <div className="text-wrapper-2">{currClick === 1 ? "$3.18M" : "$89.4k"}</div>
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
              <div className="text-wrapper-2">{currClick === 1 ? "0" : "2"}</div>
            </div>
          </div>
        </div>
      </div>
    </StyledKPIs>
  );
};
