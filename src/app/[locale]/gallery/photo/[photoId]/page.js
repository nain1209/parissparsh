import getResults from '@/lib/cachedImages';
import cloudinary from '@/lib/cloudinary';
import getBase64ImageUrl from '@/lib/generateBlurPlaceholder';
import Photo from '@/_components/Gallery/Photo';

const Home = async ({ params }) => {
	const { photoId } = params;
	const results = await getResults();

	let reducedResults = [];
	let i = 0;
	for (let result of results.resources) {
		reducedResults.push({
			id: i,
			height: result.height,
			width: result.width,
			public_id: result.public_id,
			format: result.format
		});
		i++;
	}

	const currentPhoto = reducedResults.find((img) => img.id === Number(photoId));
	currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto);

	return (
		<>
			<Photo currentPhoto={currentPhoto} />
		</>
	);
};

export default Home;

/* export const getStaticProps = async (context) => {
	return {
		props: {
			currentPhoto: currentPhoto
		}
	};
}; */

export async function generateStaticParams() {
	const results = await cloudinary.v2.search
		.expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
		.sort_by('public_id', 'desc')
		.max_results(400)
		.execute();

	return results.resources.map((_, i) => ({
		photoId: i.toString()
	}));
}
