/** @type {import('next').NextConfig} */
const nextConfig = {
  // the services page was renamed to expertise; keep old links working
  async redirects() {
    return [{ source: "/services", destination: "/expertise", permanent: true }];
  },
};

export default nextConfig;
