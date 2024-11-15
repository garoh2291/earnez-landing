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
                    value: "ru.localhost:3000",
                  },
                ],
                destination: "/ru/:path*",
              },
              {
                source: "/:path*",
                has: [
                  {
                    type: "host",
                    value: "en.localhost:3000",
                  },
                ],
                destination: "/en/:path*",
              },
              {
                source: "/:path*",
                has: [
                  {
                    type: "host",
                    value: "localhost:3000",
                  },
                ],
                destination: "/en/:path*",
              },
              {
                source: "/:path*",
                has: [
                  {
                    type: "host",
                    value: "zh.localhost:3000",
                  },
                ],
                destination: "/zh/:path*",
              },
              {
                source: "/:path*",
                has: [
                  {
                    type: "host",
                    value: "fa.localhost:3000",
                  },
                ],
                destination: "/fa/:path*",
              },
            ]
          : [],
    };
  },
};

export default withNextIntl(nextConfig);
