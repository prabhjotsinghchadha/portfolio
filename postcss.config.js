/* eslint-env node */

module.exports = {
  plugins: {
    'postcss-nesting': {},
    '@tailwindcss/postcss': {},
    'postcss-preset-env': {
      features: {'nesting-rules': false},
    },
    ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
  },
};
