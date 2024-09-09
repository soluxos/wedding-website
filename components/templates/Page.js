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
      <StyledBanner>
        <p>Make sure you get to Pelham House for 13:00 on the 16th September</p>
      </StyledBanner>
      <Navigation toggleModal={toggleModal} />
      <RsvpForm toggleModal={toggleModal} modal={modal} setModal={setModal} />
      <StyledMain className="boxed-width" {...storyblokEditable(blok)}>
        {blok.body &&
          blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
      </StyledMain>
      <Footer toggleModal={toggleModal} />
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

  @media (max-width: 480px) {
    gap: 80px;
  }
`;

const StyledBanner = styled.div`
  background-color: rgb(35, 66, 43);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.background};
  }
`;
