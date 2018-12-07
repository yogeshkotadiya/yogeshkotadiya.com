import React from "react";
import Helmet from "react-helmet";

export default props => (
  <Helmet htmlAttributes={{ lang: "en" }}>
    <title>{props.title}</title>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="Webpage of Yogesh Kotadiya." />
    <meta name="author" content="Yogesh Kotadiya" />
    <meta
      name="keywords"
      content="yogesh kotadiya, web developer, javscript, developer"
    />
    <meta property="og:title" content="Yogesh Kotadiya" />
    <meta
      property="og:description"
      content="Personal Webpage of Yogesh Kotadiya."
    />
    <meta property="og:type" content="profile" />
    <meta property="og:url" content="https://yogeshkotadiya.com" />
    <meta name="theme-color" content="#e53935" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@yogeshkotadiya" />
    <meta name="twitter:creator" content="@yogeshkotadiya" />
    <link rel="canonical" href="https://yogeshkotadiya.com" />
  </Helmet>
);
