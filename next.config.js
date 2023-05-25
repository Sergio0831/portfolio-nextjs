/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		deviceSizes: [320, 480, 720, 960, 1200, 1440],
		formats: ['image/avif', 'image/webp'],
	},
};

module.exports = nextConfig;
