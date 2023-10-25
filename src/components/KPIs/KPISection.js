import React from "react";
import styled from "styled-components";
import { CustomersKpi } from "./sections/CustomersKPI/CustomersKPI.js";
import { OrdersKpi } from "./sections/OrdersKPI/OrdersKPI.js";
import { RevenueKpi } from "./sections/RevenueKPI/RevenueKPI.js";

const StyledBox = styled.div`
  height: 220px;
  position: relative;
  width: 1861px;

  & .KP-is {
    height: 220px;
    left: 0;
    position: fixed;
    top: 0;
    width: 1861px;
  }
`;

export const KPISection = () => {
  return (
    <StyledBox>
      <div className="KP-is">
        <OrdersKpi />
        <RevenueKpi />
        <CustomersKpi />
      </div>
    </StyledBox>
  );
};