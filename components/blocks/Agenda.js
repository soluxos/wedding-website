import React from 'react';
import styled from 'styled-components';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import ImageGrid from '@components/molecules/ImageGrid';
import Image from '@components/atoms/Image/Image';
import CompassIcon from '@public/assets/Compass.svg';

export default function Location({ blok }) {
  // Block types are:
  // blok.title, blok.content, blok.buttonContainer, blok.agenda

  return (
    <StyledContainer {...storyblokEditable(blok)} id="agenda">
      <StyledContent>
        <StyledPip>Agenda</StyledPip>
        <h2>{blok.content}</h2>
      </StyledContent>
      <StyledAgendaContainer>
        {blok.agenda.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </StyledAgendaContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const StyledContent = styled.div`
  width: 750px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
`;

const StyledPip = styled.span`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 100px;
  font-size: 11px;
  line-height: 100%;
  padding: 4px 10px;
`;

const StyledAgendaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
