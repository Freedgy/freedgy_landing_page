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
            resolve: `gatsby-plugin-material-ui`,
        },
    ],
};