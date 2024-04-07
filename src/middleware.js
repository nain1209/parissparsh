'use server';

import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
	locales,
	// Used when no locale matches
	defaultLocale: 'en',
	localePrefix
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(mr|en)/:path*']
};
