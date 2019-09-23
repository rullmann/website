module.exports = {
    siteMetadata: {
        title: `Ferdi`,
        description: `All your messages in one place`,
        author: `@vantezzen`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ferdi`,
                short_name: `ferdi`,
                start_url: `/`,
                background_color: `#CE9FFC`,
                theme_color: `#CE9FFC`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['PT Serif'],
                },
                custom: {
                    families: ['Inter'],
                    urls: ['/fonts/fonts.css']
                }
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
