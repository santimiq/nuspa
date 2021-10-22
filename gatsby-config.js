/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        includeInDevelopment: true,
        id: 'GTM-NNX9TJP',
        defaultDataLayer: {
          platform: 'gatsby',
        },
      },
    },
  ]
}
