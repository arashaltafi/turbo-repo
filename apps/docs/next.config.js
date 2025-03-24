/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/docs',
    assetPrefix: '/docs/',
    experimental: {
      appDir: true
    }
};

export default nextConfig;
