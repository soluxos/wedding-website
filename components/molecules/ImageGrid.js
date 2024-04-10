import React from 'react';
import styled from 'styled-components';

export default function About(props) {
  const { children, columns = '4fr 8fr 4fr', height = '387px' } = props;
  return <StyledImageRow columns={columns}>{children}</StyledImageRow>;
}

const StyledImageRow = styled.div`
  width: 100%;
  max-width: 100%;
  flex-wrap: nowrap;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: auto;
  gap: 20px;

  img {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: ${(props) => props.height};
    object-fit: cover;
    border-radius: 10px;
  }

  > div {
    height: ${(props) => props.height};
  }
`;
