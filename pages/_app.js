import { storyblokInit, apiPlugin } from '@storyblok/react';
import Theme from '@components/Theme';

// Custom blocks
import Page from '@/components/templates/Page';
import Hero from '@components/blocks/Hero';
import Location from '@components/blocks/Location';
import About from '@components/blocks/About';
import LinkButton from '@components/blocks/LinkButton';
import Agenda from '@components/blocks/Agenda';
import AgendaItem from '@components/blocks/AgendaItem';
import Menu from '@components/blocks/Menu';
import WeddingGift from '@components/blocks/WeddingGift';

const components = {
  page: Page,
  hero: Hero,
  about: About,
  location: Location,
  linkButton: LinkButton,
  agenda: Agenda,
  agendaItem: AgendaItem,
  menu: Menu,
  weddingGift: WeddingGift,
};

storyblokInit({
  accessToken: 'urjCBREf6OrLpC3oWCrPqQtt',
  use: [apiPlugin],
  components,
  apiOptions: {
    region: '',
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
