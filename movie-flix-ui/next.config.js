/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images:{
    domains:['occ-0-1168-299.1.nflxso.net']
  }
}

module.exports = nextConfig
