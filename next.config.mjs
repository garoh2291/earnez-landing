/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Remove rewrites and redirects since they don't work in static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Define paths that need to be statically generated
};

export default nextConfig;
