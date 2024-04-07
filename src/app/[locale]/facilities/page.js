import { unstable_setRequestLocale } from 'next-intl/server';
import Facilities from '@/_components/Facilities/Facilities';

const FacilitiesPage = ({ params: { locale } }) => {
	unstable_setRequestLocale(locale);
	return <Facilities locale={locale} />;
};

export default FacilitiesPage;
