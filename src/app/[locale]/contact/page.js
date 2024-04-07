import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Layout from '@/_components/Contact/Layout';
import Address from '@/_components/Contact/AddressSection';
import ContactSection from '@/_components/Contact/ContactSection';
import Wrapper from '@/_components/Contact/Wrapper';

export default async function Contact({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const dict = await getTranslations('contactPage');

	const address = {
		heading: dict('address.heading'),
		name: dict('address.name'),
		block: dict('address.block'),
		landmark: dict('address.landmark'),
		town: dict('address.town'),
		district: dict('address.district'),
		pincode: dict('address.pincode')
	};

	const contactDetails = {
		emailHeading: dict('email.heading'),
		phoneHeading: dict('phone.heading'),
		phone1: dict('phone.num1'),
		phone2: dict('phone.num2'),
		email1: dict('email.address1'),
		email2: dict('email.address2'),
		visitingInfo: {
			heading: dict('visitingInfo.heading'),
			text: dict('visitingInfo.text')
		}
	};

	return (
		<Layout textContent={dict('heading')}>
			<Wrapper>
				<Address textContent={address} />
				<ContactSection textContent={contactDetails} />
			</Wrapper>
		</Layout>
	);
}
