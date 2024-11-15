import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles:
        process.env.NODE_ENV === "development"
          ? [
              {
                source: "/:path*",
                has: [
                  {
                    type: "host",
                    value: "es.localhost:3000",
                  },
                ],
                destination: "/es/:path*",
              },
            ]
          : [],
    };
  },
};

export default withNextIntl(nextConfig);
