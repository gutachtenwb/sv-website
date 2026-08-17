/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/technische-ausstattung",
        destination: "/pruefzentrum",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
