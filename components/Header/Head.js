import Head from "next/head";

export default props => (
  <Head>
    <title>{props.title}</title>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="description"
      content="Webpage of Yogesh Kotadiya, A Javascript developer."
    />
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
    <link
      rel="shortcut icon"
      href="../../static/logo_favicon.ico"
      type="image/x-icon"
    />
  </Head>
);
