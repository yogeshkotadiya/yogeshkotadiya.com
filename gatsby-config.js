module.exports = {
  siteMetadata: {
    title: 'Yogesh Kotadiya | Full-Stack Web Developer',
  },
  plugins: [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-117149846-1",
      // Puts tracking script in the head instead of the body
      head: true,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
    },
  },
],
  pathPrefix: `/`,
};
