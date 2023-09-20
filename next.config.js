/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/only-client-side',
        destination: '/destination',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
