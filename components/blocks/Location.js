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
    <StyledContainer {...storyblokEditable(blok)}>
      <StyledContent>
        <StyledPip>About us</StyledPip>
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
        <ImageGrid columns="3fr 4fr 3fr 6fr">
          <Image src="https://picsum.photos/400/387" animatedGrain alt="location" />
          <Image src="https://picsum.photos/401/387" animatedGrain alt="location" />
          <Image src="https://picsum.photos/500/387" animatedGrain alt="location" />
          <Image src="https://picsum.photos/700/387" animatedGrain alt="location" />
        </ImageGrid>
        <ImageGrid columns="3fr 6fr 3fr 5fr">
          <Image src="https://picsum.photos/402/387" animatedGrain alt="about" />
          <Image src="https://picsum.photos/501/387" animatedGrain alt="about" />
          <Image src="https://picsum.photos/803/387" animatedGrain alt="about" />
          <Image src="https://picsum.photos/423/387" animatedGrain alt="about" />
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
  width: 100%;
  max-width: 46.875%;
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
