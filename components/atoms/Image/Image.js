import React from 'react';
import styled, { css } from 'styled-components';
import Grain from '@components/atoms/Grain/Grain';

export default function Image(props) {
  const { src, animatedGrain } = props;

  if (!src) {
    return null;
  }

  const alt = src.split('/').pop().split('.')[0];

  return (
    <>
      <ImageContainer className="image-container">
        <StyledImage src={src} alt={alt ? alt : ''} />
        {animatedGrain && <Grain />}
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: auto;
  height: auto;
  max-width: 100%;
  display: flex;
`;

const StyledImage = styled.img`
  height: auto;
  width: auto;
  object-fit: cover;
  max-width: 100%;
`;
