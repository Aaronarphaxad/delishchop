module.exports = {
  siteMetadata: {
    title: `Delish Chop`,
    description: `One stop shop to get amazing meals at a great price`,
    siteUrl: `https://delishchop.com`, // Replace with your domain name
    author: `@arphy_dev`, // Replace with your twitter handle
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Delish Chop`,
        short_name: `Delish`,
        start_url: `/`,
        background_color: `#7C3AED`,
        theme_color: `#C44719`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // Replace with your favicon (This path is relative to the root of the site)
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `GA-TRACKING_ID`, // Replace with your Google Analytics tracking ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    // Use this plugin if you are deploying you site to Gatsby Cloud
    // To learn more, visit: https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/
    // `gatsby-plugin-gatsby-cloud`,
  ],
};
