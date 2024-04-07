const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	compiler: {
		styledComponents: true
	}
};

module.exports = withNextIntl(nextConfig);
