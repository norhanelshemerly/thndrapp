
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "micrositesstorge.blob.core.windows.net",
        port: "",
        pathname: "/ehsasak-nema-prod/assets/**",
      },
    ],
  },
};

export default nextConfig;

