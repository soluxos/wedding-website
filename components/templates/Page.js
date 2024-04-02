import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import styled from 'styled-components';
import Navigation from '@components/layout/Navigation';
import Theme from '@components/Theme';

const Page = ({ blok }) => (
  <Theme>
    <Navigation />
    <StyledMain className="boxed-width" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </StyledMain>
  </Theme>
);

export default Page;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 160px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
`;
