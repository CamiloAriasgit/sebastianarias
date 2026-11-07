import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

module.exports = {
  async headers() {
    return [
      {
        source: '/downloads/:file*.apk',
        headers: [
          { key: 'Content-Type', value: 'application/vnd.android.package-archive' },
          { key: 'Content-Disposition', value: 'attachment' },
          { key: 'Cache-Control', value: 'no-cache' },
        ],
      },
    ]
  },
}