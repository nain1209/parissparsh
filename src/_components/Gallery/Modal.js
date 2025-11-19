'use client';
import { useSearchParams } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from '../../navigation';
import { useRef, useState } from 'react';
import useKeypress from 'react-use-keypress';
import styled from 'styled-components';
import SharedModal from './SharedModal';

/* =========================
   FIXED Z-INDEX STACKING
   ========================= */

const ModalContainer = styled.div`
	position: fixed;
	inset: 0;
	z-index: 50; /* ABOVE backdrop */
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Backdrop = styled(motion.div)`
	position: fixed;
	inset: 0;
	z-index: 20; /* BELOW modal */
	background: rgba(0, 0, 0, 0.7);
	backdrop-filter: blur(24px);
`;

export default function Modal({ images, onClose }) {
	let overlayRef = useRef();
	const router = useRouter();

	const searchParams = useSearchParams();
	const photoId = searchParams.get('photoId');
	let index = Number(photoId);

	const [direction, setDirection] = useState(0);
	const [curIndex, setCurIndex] = useState(index);

	function handleClose() {
		router.push('/gallery', undefined, { shallow: true });
		onClose?.();
	}

	function changePhotoId(newVal) {
		setDirection(newVal > index ? 1 : -1);
		setCurIndex(newVal);

		router.push(`?photoId=${newVal}`, { scroll: false });
	}

	/* arrow keys navigation */
	useKeypress('ArrowRight', () => {
		if (index + 1 < images.length) changePhotoId(index + 1);
	});
	useKeypress('ArrowLeft', () => {
		if (index > 0) changePhotoId(index - 1);
	});

	return (
		<Dialog static open={true} onClose={handleClose} initialFocus={overlayRef}>
			{/* backdrop FIRST */}
			<Backdrop ref={overlayRef} key='backdrop' initial={{ opacity: 0 }} animate={{ opacity: 1 }} />

			{/* modal content ABOVE backdrop */}
			<ModalContainer>
				<SharedModal
					index={curIndex}
					direction={direction}
					images={images}
					changePhotoId={changePhotoId}
					closeModal={handleClose}
					navigation={true}
				/>
			</ModalContainer>
		</Dialog>
	);
}
