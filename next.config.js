/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you're using GitHub Pages, uncomment the following lines:
  // basePath: '/grocerygold-web', // Your repository name
  // assetPrefix: '/grocerygold-web/', // Your repository name with trailing slash
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Add this if you have a custom domain
  // trailingSlash: true,
};

module.exports = nextConfig;
