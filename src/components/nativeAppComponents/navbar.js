import React from 'react';
import styled from 'styled-components';
import AcmeLogo from '../graphics/acme_logo.png';
import AlfonsoHeadshot from '../graphics/alfonso.png';

import { ProgressBar } from '../progressBar/ProgressBar';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #124342;
  color: #124342;
`;

const Logo = styled.img`
  width: 100px; /* Adjust the size as needed */
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CloudProviderIcon = styled.p`
  width: 30px; /* Adjust the size as needed */
  margin-right: 10px;
  color: white;
`;

const UserAvatar = styled.img`
  width: 40px; /* Adjust the size as needed */
  border-radius: 50%;
`;

export const Navbar = ({ globalStep }) => {
  return (
    <NavbarContainer>
      <div style={{display: "flex", alignItems: "center"}}>
        <Logo src={AcmeLogo} alt="Company Logo" />
        <ProgressBar globalStep={globalStep}/>
      </div>
      <UserInfo>
        <CloudProviderIcon>GCP</CloudProviderIcon>
        <UserAvatar src={AlfonsoHeadshot} alt="User Avatar" />
      </UserInfo>
    </NavbarContainer>
  );
}
