'use client';
import styled from 'styled-components';
import { useRouter } from '../../navigation';
import Carousel from '@/_components/Gallery/Carousel';

const Photo = ({ currentPhoto }) => {
	const router = useRouter();
	const { photoId } = router.query;
	let index = Number(photoId);

	return (
		<>
			<Main>
				<Carousel currentPhoto={currentPhoto} index={index} />
			</Main>
		</>
	);
};

export default Photo;

// --- Styled Components ---
const Main = styled.main`
	max-width: 1960px;
	margin: 0 auto;
	padding: 1rem;
`;
