import localFont from 'next/font/local';
import { getTranslations } from 'next-intl/server';
import { Crimson_Pro, Prompt, Poppins } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import BodyWrapper from '@/_components/layout/BodyWrapper';

const crimsonPro = Crimson_Pro({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-heading',
	fallback: ['Times New Roman', 'Times', 'serif']
});

const satoshi = localFont({
	src: '../../fonts/Satoshi-Variable.ttf',
	variable: '--font-satoshi',
	subsets: ['latin'],
	fallback: ['Helvetica', 'Arial', 'sans-serif']
});

const prompt = Prompt({
	subsets: ['latin'],
	weight: ['500'],
	variable: '--font-accent',
	fallback: ['Arial', 'sans-serif']
});

const poppins = Poppins({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-heading',
	fallback: ['Times New Roman', 'Times', 'serif']
});

export default async function RootLayout({ children, params: { locale } }) {
	const textContent = await getTranslations('home');
	const navContent = await getTranslations('menu');
	const footerContent = await getTranslations('footer');
	const homePage = await getTranslations('homePage');

	const logo = {
		part1: navContent('logoText.part1'),
		part2: navContent('logoText.part2'),
		part3: navContent('logoText.part3'),
		registrationNumber: navContent('logoText.registrationNumber')
	};

	const menu = {
		home: navContent('home'),
		about: navContent('about'),
		facilities: navContent('facilities'),
		contact: navContent('contact'),
		donate: navContent('donate')
	};

	const address = {
		heading: homePage('address.heading'),
		name: homePage('address.name'),
		block: homePage('address.block'),
		landmark: homePage('address.landmark'),
		town: homePage('address.town'),
		district: homePage('address.district'),
		pincode: homePage('address.pincode')
	};

	const footer = {
		socialLinkText: footerContent('socialLinkText'),
		companyName: footerContent.rich('companyName', {
			br: () => <br />
		}),
		contactInfo: {
			heading: footerContent('contactInfo.heading'),
			phone1: footerContent('contactInfo.phone.num1'),
			phone2: footerContent('contactInfo.phone.num2'),
			email1: footerContent('contactInfo.email.address1'),
			email2: footerContent('contactInfo.email.address2')
		},
		visitingInfo: {
			heading: footerContent('vistingInfo.heading'),
			text: footerContent('vistingInfo.text')
		},
		donateInfo: {
			heading: footerContent('donateInfo.heading')
		},
		copyrightInfo: {
			heading: footerContent('copyrightInfo.text')
		}
	};

	return (
		<html
			lang={locale}
			className={`${satoshi.variable} ${prompt.variable} ${locale === 'en' ? crimsonPro.variable : poppins.variable} `}
		>
			<head>
				<title>{textContent('title')}</title>
				<meta name='description' content={textContent('metaDescription')}></meta>
			</head>
			<BodyWrapper menu={menu} footer={footer} address={address} logoText={logo} locale={locale}>
				{children}
			</BodyWrapper>
		</html>
	);
}
