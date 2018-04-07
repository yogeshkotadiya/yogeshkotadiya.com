module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  pathPrefix: `/yogeshkotadiya.github.io`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-117149846-1",
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
    },
  },
};
