import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import MainWrapper from '@/_components/Home/MainWrapper';
import Hero from '@/_components/Home/Hero';
import Features from '@/_components/Home/Features';
import Mission from '@/_components/Home/Mission';
import Care from '@/_components/Home/Care';
import InfoWrapper from '@/_components/Home/InfoWrapper';
import Testimonials from '@/_components/Home/Testimonials';
import Address from '@/_components/Home/Address';
import Gallery from '@/_components/Home/Gallery';

export default async function Home({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const dict = await getTranslations('homePage');
	const featuresKeys = ['quality-food', 'medical-care', 'mental-support'];
	const features = [];

	featuresKeys.map((key) => {
		features.push({
			title: dict(`features.${key}.title`),
			description: dict(`features.${key}.description`)
		});
	});

	const mission = {
		smallHeading: dict('mission.smallHeading'),
		heading: dict('mission.heading'),
		text: dict('mission.text'),
		link: dict('mission.link')
	};

	const careKeys = ['food', 'check-ins', 'visiting', 'library', 'activities', 'av', 'community'];
	const careList = [];

	careKeys.map((key) => {
		careList.push(dict(`facilities.list.${key}.content`));
	});

	const care = {
		smallHeading: dict('facilities.smallHeading'),
		heading: dict('facilities.heading'),
		list: careList,
		link: dict('facilities.link')
	};

	const gallery = {
		heading: dict('gallery.heading'),
		cta: dict('gallery.cta')
	};

	const address = {
		heading: dict('address.heading'),
		name: dict('address.name'),
		block: dict('address.block'),
		landmark: dict('address.landmark'),
		town: dict('address.town'),
		district: dict('address.district'),
		pincode: dict('address.pincode')
	};

	return (
		<>
			<MainWrapper>
				<Hero
					heading={dict.rich('hero.heading', {
						em: (chunks) => <em>{chunks}</em>
					})}
					text={dict('hero.text')}
					ctaText={dict('hero.cta')}
					locale={locale}
				/>
				<Features features={features} />
				<Mission textContent={mission} />
				<Care textContent={care} />
				<Gallery textContent={gallery} />
				<InfoWrapper>
					<Testimonials />
					<Address textContent={address} />
				</InfoWrapper>
			</MainWrapper>
		</>
	);
}
