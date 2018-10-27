require('dotenv');

module.exports = {
  siteMetadata: {
    title: 'Yogesh Kotadiya | Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        path: `(__dirname)/src/pages`,
        name: 'pages',
        trackingId: process.env.ANALYTICS_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    'gatsby-mdx',
  ],
  pathPrefix: `/`,
};
