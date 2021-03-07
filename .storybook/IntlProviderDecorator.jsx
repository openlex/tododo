export const IntlProviderDecorator = (storyFn, context) => {
	const supportedLocales = {
		'en-GB': 'en-GB',
		'en-US': 'en-US',
		fr: 'fr',
		ja: 'ja',
		es: 'es',
		de: 'de',
		ru: 'ru',
	};
	const locale = select('Locale', supportedLocales, 'en-GB');
	const story = storyFn();
	return <IntlProvider locale={locale}>{story}</IntlProvider>;
};

export default IntlProviderDecorator;
