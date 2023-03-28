/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental : {
    appDir : true
  },
  images : {
    domains : ["pbs.twimg.com", "cdn.sanity.io"]
  }
}

module.exports = nextConfig
