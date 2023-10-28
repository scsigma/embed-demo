import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #DFDFDF;
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
      <SubSection>Summary</SubSection>
      <SidebarOption>Analytics</SidebarOption>
      <SidebarOption>Awaiting Fulfillment</SidebarOption>
      <SidebarOption>Late</SidebarOption>
      <SidebarOption>Payments</SidebarOption>
    </SidebarContainer>
  );
}