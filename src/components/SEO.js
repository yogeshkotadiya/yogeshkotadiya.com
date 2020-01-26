import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const SEO = props => {
  const SeoQuery = graphql`
    {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          social {
            twitter
          }
        }
      }
    }
  `;

  const {
    site: { siteMetadata },
  } = useStaticQuery(SeoQuery);
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={siteMetadata.description} />
        <meta name="author" content={siteMetadata.author} />
        <meta name="theme-color" content="#ef5350" />
        <meta
          name="keywords"
          content="yogesh kotadiya, developer, javscript, front end"
        />
        {/* Open Grapgh Tags */}
        <meta property="og:title" content={siteMetadata.author} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        {/* Twiiter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={siteMetadata.social.twitter} />
        <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      </Helmet>
      <SchemaOrg
        author={siteMetadata.author}
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
    </>
  );
};
export default SEO;

// Picked from kentcdodds.com
const SchemaOrg = ({
  author,
  canonicalUrl,
  datePublished,
  defaultTitle,
  description,
  image,
  isBlogPost,
  organization,
  title,
  url,
}) => {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ];

  const schema = isBlogPost
    ? [
        ...baseSchema,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          description,
          author: {
            "@type": "Person",
            name: author,
          },
          publisher: {
            "@type": "Organization",
            url: organization.url,
            logo: organization.logo,
            name: organization.name,
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": canonicalUrl,
          },
          datePublished,
        },
      ]
    : baseSchema;

  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
