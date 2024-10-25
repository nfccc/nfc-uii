import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current filename and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],  // Use the updated __filename
      },
    };
    return config;
  },
};

export default nextConfig;
