import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  padding: 10px 0;
  display: flex;
//   justify-content: left;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #F41CB2;
  margin: 0;
  font-size: 25px;
  padding-left: 22px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Title>Color Analysis</Title>
    </NavbarContainer>
  );
};

export default Navbar;
