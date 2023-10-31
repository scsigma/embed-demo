import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #DFDFDF;
  height: 100%;
  min-width: 200px
`;

const SidebarOption = styled.div`
  padding: 10px;
`;

export const Sidebar = ({ currPage }) => {
  return (
    <SidebarContainer>
      <SidebarOption style={{
        color: currPage === 2 ? "#777" : "black"
      }}>Summary</SidebarOption>
      <SidebarOption style={{
        color: currPage === 3 ? "#777" : "black"
      }}>Analytics</SidebarOption>
      <SidebarOption>Awaiting Fulfillment</SidebarOption>
      <SidebarOption>Late</SidebarOption>
      <SidebarOption>Payments</SidebarOption>
    </SidebarContainer>
  );
}