import React from 'react';
import styled from 'styled-components';
import AcmeLogo from '../graphics/acme_logo.png';
import AlfonsoHeadshot from '../graphics/alfonso.png';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: grey;
  color: #fff;
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
`;

const UserAvatar = styled.img`
  width: 40px; /* Adjust the size as needed */
  border-radius: 50%;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={AcmeLogo} alt="Company Logo" />
      <UserInfo>
        <CloudProviderIcon>GCP</CloudProviderIcon>
        <UserAvatar src={AlfonsoHeadshot} alt="User Avatar" />
      </UserInfo>
    </NavbarContainer>
  );
}
