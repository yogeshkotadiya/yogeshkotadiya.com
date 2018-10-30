require('dotenv');

module.exports = {
  siteMetadata: {
    title: 'Yogesh Kotadiya | Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-mdx',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
  pathPrefix: `/`,
};
