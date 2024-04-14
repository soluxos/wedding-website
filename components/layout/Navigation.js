import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Navigation(props) {
  const { toggleModal } = props;

  return (
    <StyledNav className="">
      <img src="/Logo.svg" alt="logo" />
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
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: static;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 750px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
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
  font-size: 14px;
  font-weight: 500;

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
