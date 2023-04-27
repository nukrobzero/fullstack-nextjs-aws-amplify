/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "amplifynextjse29362e18b684af09cca9e6297efb5d122818-staging.s3.ap-southeast-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
