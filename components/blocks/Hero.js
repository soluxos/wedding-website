import React from 'react';
import styled from 'styled-components';
import { storyblokEditable } from '@storyblok/react';
import Image from '@components/atoms/Image/Image';

export default function Hero({ blok }) {
  const { title, image } = blok;
  const imageFile = image.filename;

  return (
    <StyledContainer {...storyblokEditable(blok)}>
      <Styledh1>{title}</Styledh1>
      <StyledImage src={imageFile} alt="hero" animatedGrain />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 160px;
  gap: 80px;
  width: 100%;

  @media (max-width: 480px) {
    margin-top: 80px;
  }
`;

const Styledh1 = styled.h1`
  font-size: 36px;
  line-height: 150%;
  width: 750px;
  max-width: 100%;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 100%;
  height: auto;
`;
