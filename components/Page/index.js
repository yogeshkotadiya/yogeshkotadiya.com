import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "../Header/Head";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyles, { theme } from "../styles/globalStyles";

const IndexPage = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head title="Yogesh Kotadiya" />
        <Header />
        {children}
        <Footer />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
};

export default IndexPage;
