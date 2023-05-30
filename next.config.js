/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		deviceSizes: [480, 960],
		formats: ['image/avif', 'image/webp'],
	},
};

module.exports = nextConfig;
