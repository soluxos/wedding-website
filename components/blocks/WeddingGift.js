import React from 'react';
import styled from 'styled-components';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import ImageGrid from '@components/molecules/ImageGrid';
import Image from '@components/atoms/Image/Image';
import CompassIcon from '@public/assets/Compass.svg';

export default function WeddingGift({ blok }) {
  // Block types are:
  // blok.title, blok.content, blok.buttonContainer, blok.address

  return (
    <StyledContainer {...storyblokEditable(blok)}>
      <StyledContent>
        <StyledPip>Wedding Gifts</StyledPip>
        <h2>{blok.content}</h2>
      </StyledContent>
      <ImageGridContainer>
        <ImageGrid columns="1fr" height="480px">
          <Image src="https://picsum.photos/1600/480" animatedGrain alt="location" />
        </ImageGrid>
      </ImageGridContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  max-width: 100%;
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
  gap: 20px;
`;

const StyledPip = styled.span`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 100px;
  font-size: 11px;
  line-height: 100%;
  padding: 4px 10px;
`;

const ImageGridContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLocationContainer = styled.div`
  display: flex;
  gap: 4px;
`;
