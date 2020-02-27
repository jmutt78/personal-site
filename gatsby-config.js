const wordpressUrl = `https://entra.flywheelsites.com/graphql`;

module.exports = {
  siteMetadata: {
    title: `Justin McIntosh`,
    description: `Justin McIntosh is a freelance developer and entreprenur. Book now!`,
    author: `Justin McIntosh`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-jss`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphql`,
        fieldName: `wpgraphql`,
        url: wordpressUrl
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/logo.svg` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
