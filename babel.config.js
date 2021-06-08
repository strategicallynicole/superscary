module.exports = (api) => {
    api.cache(true);

    return {
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime', 'babel-plugin-react-scoped-css'],
    };
  };
