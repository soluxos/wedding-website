import React from 'react';
import styled from 'styled-components';

export default function About(props) {
  const {
    children,
    columns = '4fr 8fr 4fr',
    height = '387px',
    mobileColumns = '1fr',
    mobileHeight = '387px',
  } = props;
  return (
    <StyledImageRow
      columns={columns}
      height={height}
      mobileColumns={mobileColumns}
      mobileHeight={mobileHeight}
    >
      {children}
    </StyledImageRow>
  );
}

const StyledImageRow = styled.div`
  width: 100%;
  max-width: 100%;
  flex-wrap: nowrap;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: auto;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: ${(props) => props.mobileColumns};

    img {
      height: ${(props) => props.mobileHeight};
      max-width: 100%;
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

    > div {
      height: ${(props) => props.mobileHeight};
    }
  }

  @media (min-width: 679px) {
    img {
      height: ${(props) => props.height};
      max-width: 100%;
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

    > div {
      height: ${(props) => props.height};
    }
  }
`;
