import React from 'react';
import styled from 'styled-components';
import { storyblokEditable } from '@storyblok/react';

export default function AgendaItem({ blok }) {
  return (
    <StyledContainer {...storyblokEditable(blok)}>
      <SmallColumn>
        <h4>{blok.title}</h4>
      </SmallColumn>
      <LargeColumn>
        <p>{blok.content}</p>
      </LargeColumn>
      <SmallColumnRight>
        <p>{blok.time}</p>
      </SmallColumnRight>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    div {
      width: 100%;
      justify-content: flex-start;
    }
  }

  h4 {
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};
  }

  &:first-child {
    border-top: solid 1px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }
`;

const SmallColumn = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-start;
`;

const SmallColumnRight = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
`;

const LargeColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
