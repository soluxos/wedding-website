import React from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import styled from 'styled-components';
import Navigation from '@components/layout/Navigation';
import Theme from '@components/Theme';
import Footer from '@components/layout/Footer';
import RsvpForm from '@components/molecules/RsvpForm';

export default function Page({ blok }) {
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  React.useEffect(() => {
    console.log('modal changed!', modal);
  }, [modal]);

  return (
    <Theme>
      <Navigation toggleModal={toggleModal} />
      <RsvpForm toggleModal={toggleModal} modal={modal} />
      <StyledMain className="boxed-width" {...storyblokEditable(blok)}>
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </StyledMain>
      <Footer />
    </Theme>
  );
}
// const Page = ({ blok }) => (
//   <Theme>
//     <Navigation />
//     <RsvpForm />
//     <StyledMain className="boxed-width" {...storyblokEditable(blok)}>
//       {blok.body.map((nestedBlok) => (
//         <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
//       ))}
//     </StyledMain>
//     <Footer />
//   </Theme>
// );

// export default Page;

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
