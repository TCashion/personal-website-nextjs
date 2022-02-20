/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
