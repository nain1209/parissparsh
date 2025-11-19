import { getTranslations } from 'next-intl/server';
import cloudinary from '@/lib/cloudinary';
import getBase64ImageUrl from '@/lib/generateBlurPlaceholder';
import Gallery from '@/_components/Gallery/Gallery';

const GalleryPics = async () => {
	const dict = await getTranslations('galleryPage');

	const gallery = {
		heading: dict('heading')
	};

	const results = await cloudinary.v2.search
		.expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
		.sort_by('public_id', 'desc')
		.max_results(400)
		.execute();

	let images = results.resources.map((image, idx) => ({
		id: idx,
		height: image.height,
		width: image.width,
		public_id: image.public_id,
		format: image.format
	}));

	const blurPromises = images.map((img) => getBase64ImageUrl(img));
	const blurUrls = await Promise.all(blurPromises);

	images = images.map((img, idx) => ({
		...img,
		blurDataUrl: blurUrls[idx]
	}));

	return (
		<main>
			<Gallery textContent={gallery} images={images} />
		</main>
	);
};

export default GalleryPics;
