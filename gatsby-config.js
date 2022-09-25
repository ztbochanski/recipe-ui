module.exports = {
  siteMetadata: {
    title: `recipeui`,
    description: `Access to clean, searchable, and consistently formatted recipes; no time for long me stories`,
    author: `@zachbochanski`,
    siteUrl: `https://recipeui.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `recipeui`,
        short_name: `recipeui`,
        description: `easy, organized recipes for everyone`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
