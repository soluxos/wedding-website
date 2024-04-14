import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledNav>
      <StyledColumn>
        <img src="/Logo.svg" alt="logo" />
        <SmallP>Made by Callum & Dawn</SmallP>
      </StyledColumn>
      <StyledColumn>
        <StyledUl>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="#venue">Venue</StyledLink>
          </li>
          <li>
            <StyledLink href="#agenda">Agenda</StyledLink>
          </li>
          <li>
            <StyledLink href="#menu">Menu</StyledLink>
          </li>
          <li>
            <StyledButton onClick={() => toggleModal()}>RSVP</StyledButton>
          </li>
        </StyledUl>
      </StyledColumn>
    </StyledNav>
  );
}

const SmallP = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.colors.grey};
`;

const StyledNav = styled.nav`
  position: static;
  top: 0;
  padding: 80px 40px 40px 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  list-style-type: none;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.grey};
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 100px;
  padding: 10px;
`;
