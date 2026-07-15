/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The proposal is the substance; keep a couple of friendly aliases.
      { source: '/read', destination: '/proposal', permanent: false },
      { source: '/full', destination: '/proposal', permanent: false },
    ];
  },
};

export default nextConfig;
