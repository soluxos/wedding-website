import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledNav className="boxed-width">
      <StyledColumn>
        <img src="/Logo.svg" alt="logo" />
        <SmallP>Made by Callum & Dawn</SmallP>
      </StyledColumn>
      <StyledColumn>
        <StyledUl>
          <li>
            <h4>Links</h4>
          </li>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/">Venue</StyledLink>
          </li>
          <li>
            <StyledLink href="/">Agenda</StyledLink>
          </li>
          <li>
            <StyledLink href="/">Contact</StyledLink>
          </li>
          <li>
            <StyledLink href="/">RSVP</StyledLink>
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
  padding: 160px 40px 40px 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style-type: none;
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
