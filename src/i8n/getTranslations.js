import { createTranslator } from 'next-intl';

export const getTranslations = async (config) => {
	const { locale, namespace } = config;
	const messagesModule = await import(`../i8n/messages/${locale}.json`);

	const translator = createTranslator({
		locale,
		messages: messagesModule.default,
		namespace
	});

	return translator.rich;
};
