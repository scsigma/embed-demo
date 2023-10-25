import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #f4f4f4;
  height: 100%;
  min-width: 200px
`;

const SidebarOption = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const SubSection = styled.div`
  padding: 10px;
  color: #777;
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarOption>Summary</SidebarOption>
      <SidebarOption>KPIs</SidebarOption>
      <SidebarOption>Awaiting Fulfillment</SidebarOption>
      <SidebarOption>Late</SidebarOption>
      <SubSection>Payments</SubSection>
      <SidebarOption>Summary</SidebarOption>
      <SidebarOption>Late</SidebarOption>
    </SidebarContainer>
  );
}