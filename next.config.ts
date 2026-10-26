import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    // L'ancienne page tarifs a été supprimée : on redirige les anciens liens.
    return [
      {
        source: "/tarifs",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
