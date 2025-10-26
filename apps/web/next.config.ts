import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	transpilePackages: ["@synk/api"],
};

export default nextConfig;
