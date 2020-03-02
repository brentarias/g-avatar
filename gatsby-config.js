module.exports = {
  pathPrefix: `/discover`,
  siteMetadata: {
    title: `The Avatar Assembly`,
    fullTitle: `The Avatar Assembly: Embracing Humanity`,
    description: `Holistic wellness through food, lifestyle, and connection.`,
    author: `Brent Arias`,
    url: `https://avatarassembly.com`,
    image: `/images/Hohenzollern_morning_fog_zoom_540x281.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-avatar-assembly`,
        short_name: `avatar`,
        start_url: `/`,
        background_color: `#5c4d42`,
        theme_color: `#f4623a`,
        display: `minimal-ui`,
        icon: `src/images/avatar_favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Merriweather:400,300,300italic,400italic,700,700italic', 'Merriweather+Sans:400,700']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
