import React from 'react';
import styled from 'styled-components';
import ImageGrid from '@components/molecules/ImageGrid';
import Image from '@components/atoms/Image/Image';
import CountdownFromDate from '@components/utils/CountdownFromDate';

export default function About({ blok }) {
  const { content } = blok;
  return (
    <StyledContainer>
      <StyledContent>
        <StyledPip>About us</StyledPip>
        <Styledh2>
          <StyledCountdownFromDate inputDate="12-10-2015" />
          {content}
        </Styledh2>
      </StyledContent>
      <ImageGrid>
        <Image src="https://picsum.photos/400/387" animatedGrain alt="location" />
        <Image src="https://picsum.photos/800/387" animatedGrain alt="location" />
        <Image src="https://picsum.photos/420/387" animatedGrain alt="location" />
      </ImageGrid>
    </StyledContainer>
  );
}

const StyledCountdownFromDate = styled(CountdownFromDate)``;

const Styledh2 = styled.h2`
  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

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