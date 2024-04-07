import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Gallery from '@/_components/Gallery/Gallery';

const GalleryPics = async ({ params: { locale } }) => {
	unstable_setRequestLocale(locale);
	const dict = await getTranslations('galleryPage');

	const gallery = {
		heading: dict('heading')
	};
	return (
		<main>
			<Gallery textContent={gallery} />
		</main>
	);
};

export default GalleryPics;
