import React from 'react';
import styled from 'styled-components';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import ImageGrid from '@components/molecules/ImageGrid';
import Image from '@components/atoms/Image/Image';
import CompassIcon from '@public/assets/Compass.svg';

export default function Location({ blok }) {
  // Block types are:
  // blok.title, blok.content, blok.buttonContainer, blok.address

  return (
    <StyledContainer {...storyblokEditable(blok)} id="location">
      <StyledContent>
        <StyledPip>Location</StyledPip>
        <h2>{blok.title}</h2>
        <p>{blok.content}</p>
        <StyledButtonContainer>
          {blok.buttonContainer.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </StyledButtonContainer>
        <StyledLocationContainer>
          <CompassIcon />
          <p>{blok.address}</p>
        </StyledLocationContainer>
      </StyledContent>
      <ImageGridContainer>
        <ImageGrid columns="6fr 3fr 4fr 3fr">
          <Image src="/content/pelham/pelham-1.jpg" animatedGrain alt="pelham 1" />
          <Image src="/content/pelham/pelham-2.jpg" animatedGrain alt="pelham 2" />
          <Image src="/content/pelham/pelham-3.jpg" animatedGrain alt="pelham 3" />
          <Image src="/content/pelham/pelham-4.jpg" animatedGrain alt="pelham 4" />
        </ImageGrid>
        <ImageGrid columns="3fr 5fr 3fr 5fr">
          <Image src="/content/pelham/pelham-5.jpg" animatedGrain alt="pelham 5" />
          <Image src="/content/pelham/pelham-6.jpg" animatedGrain alt="pelham 6" />
          <Image src="/content/pelham/pelham-7.jpg" animatedGrain alt="pelham 7" />
          <Image src="/content/pelham/pelham-8.jpg" animatedGrain alt="pelham 8" />
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

  h2 {
    font-size: 64px;
  }
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
