import React from 'react';
import styled, { css } from 'styled-components';

export default function Button(props) {
  const { children, url } = props;

  return (
    <>
      {url ? (
        <StyledLink href={url}>{children}</StyledLink>
      ) : (
        <StyledButton>{children}</StyledButton>
      )}
    </>
  );
}

const sharedStyle = css`
  font-size: 13px;
  color: ${(props) => props.theme.colors.primary};
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  text-decoration: none;
  padding: 10px 14px;
  font-weight: 500;
  transition: ${(props) => props.theme.transitions.all};

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const StyledLink = styled.a`
  ${sharedStyle};
`;

const StyledButton = styled.button`
  ${sharedStyle};
`;
