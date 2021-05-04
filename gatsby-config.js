module.exports = {
    siteMetadata: {
        title: "Freedgy",
        author: `Hugo Lachkar`,
        description: `Freedgy landing`,
        siteUrl: `https://freedgy.com/`,
        social: {
            instagram: `freedgy`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-i18n`,
            options: {
                langKeyDefault: 'en',
                langKeyForNull: 'en',
                prefixDefault: false,
                useLangKeyLayout: false,
            },
        },
        {
            resolve: 'gatsby-plugin-material-ui', // If you want to use styled components you should change the injection order. 
            options: {
                stylesProvider: { injectFirst: true, },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Freedgy',
                short_name: 'Freedgy',
                start_url: '/',
                display: 'standalone',
                icon: 'src/images/watermark.png',
            },
        }
    ],
};