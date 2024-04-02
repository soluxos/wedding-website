import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Navigation() {
  return (
    <StyledNav className="boxed-width">
      <img src="/Logo.svg" alt="logo" />
      <StyledUl>
        <li>
          <StyledLink href="/test">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="#2">Venue</StyledLink>
        </li>
        <li>
          <StyledLink href="#3">Agenda</StyledLink>
        </li>
        <li>
          <StyledLink href="#4">FAQ</StyledLink>
        </li>
        <li>
          <StyledLink href="#5">Contact</StyledLink>
        </li>
        <li>
          <StyledLink href="#6">RSVP</StyledLink>
        </li>
      </StyledUl>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: static;
  top: 0;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledUl = styled.ul`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 58px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  list-style-type: none;
  border-radius: 100px;
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.grey};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
