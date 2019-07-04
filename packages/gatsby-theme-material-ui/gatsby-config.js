const pkg = require(`./package.json`);

const defaultStylesConfig = {
  stylesProvider: {
    injectFirst: true,
  },
};

module.exports = themeOptions => {
  const {
    stylesConfig = defaultStylesConfig,
  } = themeOptions;

  return {
    plugins: [
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          ...stylesConfig,
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        // This is only needed temporarily. Themes will automatically be transpiled in later versions.
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [pkg.name],
        },
      },
    ],
  };
};
