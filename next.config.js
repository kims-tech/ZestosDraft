/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: '../public/images',
  },
  reactStrictMode: true,
  trailingSlash: true,
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  target: 'serverless', // add this line
}

module.exports = nextConfig
