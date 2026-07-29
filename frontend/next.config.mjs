/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1'}/:path*`,
      },
    ];
  },
};

export default nextConfig;
