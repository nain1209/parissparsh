'use client';
import Image from 'next/image';
import { useRouter } from '../../navigation';
import useKeypress from 'react-use-keypress';
import styled from 'styled-components';
import { useLastViewedPhoto } from '../../lib/useLastViewedPhoto';
import SharedModal from './SharedModal';

const Wrapper = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BackdropButton = styled.button`
	position: absolute;
	inset: 0;
	z-index: 30;
	cursor: default;
	background: black;
	backdrop-filter: blur(24px);
`;

const BlurredBackground = styled(Image)`
	pointer-events: none;
	width: 100%;
	height: 100%;
`;

export default function Carousel({ index, currentPhoto }) {
	const router = useRouter();
	const [, setLastViewedPhoto] = useLastViewedPhoto();

	function closeModal() {
		setLastViewedPhoto(currentPhoto.id);
		router.push('/', undefined, { shallow: true });
	}

	function changePhotoId(newVal) {
		return newVal;
	}

	useKeypress('Escape', () => {
		closeModal();
	});

	return (
		<Wrapper>
			<BackdropButton onClick={closeModal}>
				<BlurredBackground src={currentPhoto.blurDataUrl} alt='blurred background' fill priority />
			</BackdropButton>

			<SharedModal
				index={index}
				changePhotoId={changePhotoId}
				currentPhoto={currentPhoto}
				closeModal={closeModal}
				navigation={false}
			/>
		</Wrapper>
	);
}
