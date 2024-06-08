/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		YANDEX_USER: process.env.YANDEX_USER,
		YANDEX_PASS: process.env.YANDEX_PASS,
	},
};

export default nextConfig;
