import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import Header from './Header';
import favicon from '../assets/images/logo_favicon.ico';
import { theme } from './styles/globalStyles';
import Footer from './Footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet
        title="Yogesh Kotadiya"
        meta={[
          {
            name: 'description',
            content:
              'Personal Webpage of Yogesh Kotadiya, FullStack developer, .',
          },
          { name: 'author', content: 'Yogesh Kotadiya' },
          {
            name: 'keywords',
            content:
              'yogesh kotadiya, web developer, full-stack developer making wierd stuff for web. ',
          },
          { property: 'og:title', content: 'Yogesh Kotadiya' },
          {
            property: 'og:description',
            content: 'Personal Webpage of Yogesh Kotadiya.',
          },
          { property: 'og:type', content: 'profile' },
          { property: 'og:url', content: 'https://yogeshkotadiya.com' },
          { name: 'theme-color', content: '#821cdb' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@yogeshkotadiya' },
          { name: 'twitter:creator', content: '@yogeshkotadiya' },
        ]}
      />
      <Helmet>
        <html lang="en" />
        <link rel="canonical" href="https://yogeshkotadiya.com" />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
