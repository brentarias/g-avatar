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
    {
      resolve: `gatsby-plugin-google-analytics`,
      //FULL LIST OF OPTIONS
      //https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-159564828-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,

        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        //pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        siteSpeedSampleRate: 25,
      },
    },    
  ],
}
