const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com'
				/*   port: "",
        pathname: "/my-account/**",
        search: "", */
			}
		]
	}
};

module.exports = withNextIntl(nextConfig);
