/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = async () => {
  const { default: withPlaiceholder } = await import('@plaiceholder/next');

  return withPlaiceholder(nextConfig);
};
