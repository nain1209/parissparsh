import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
	const locales = ['en', 'mr'];
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale)) notFound();

	return {
		messages: (
			await (locale === 'en'
				? // When using Turbopack, this will enable HMR for `en`
				  import('../messages/en.json')
				: import(`../messages/${locale}.json`))
		).default
	};
});
