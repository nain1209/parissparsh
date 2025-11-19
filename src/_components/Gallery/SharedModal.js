'use client';

import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import { variants } from '../../lib/animationVariants';
import { range } from '../../lib/range';
import Spinner from '../UI/Spinner';
import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

//
// ─────────────────────────────────────────────
//   STYLED COMPONENTS
// ─────────────────────────────────────────────
//

const Wrapper = styled.div`
	position: relative;
	z-index: 50;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	max-width: 100vw;
	max-height: 100vh;
	overflow: hidden;
	background: transparent;
`;

const MainImageWrapper = styled.div`
	position: relative;
	z-index: 100;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CenteredAspect = styled.div`
	position: relative;
	z-index: 150;
	width: 90vw;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 90vw;
	max-height: 90vh;
	overflow: hidden;
`;

const AbsoluteMotion = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const OverlayControlsWrapper = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
	z-index: 1000;
`;

const NavigationButton = styled.button`
	pointer-events: auto;
	position: absolute;
	top: calc(50% - 24px);
	padding: 1rem;
	border-radius: 9999px;
	background: var(--primary-dark);
	border: none;
	color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(16px);
	transition: background 0.2s, transform 0.2s, color 0.2s;
	z-index: 1200;
	svg {
		height: 20px;
		width: 20px;
	}

	&:hover {
		background: var(--black);
		color: white;
		transform: scale(1.1);
	}

	${TABLET_MEDIA} {
		svg {
			height: 20px;
			width: 20px;
		}
	}

	${LAPTOP_MEDIA} {
		svg {
			height: 28px;
			width: 28px;
		}
	}

	${DESKTOP_MEDIA} {
		svg {
			height: 32px;
			width: 32px;
		}
	}
`;

const TopRightButtons = styled.div`
	pointer-events: auto;
	position: absolute;
	top: 0;
	right: 0;
	padding: 1rem;
	z-index: 1300;
`;

const RoundButton = styled.button`
	border-radius: 9999px;
	padding: 0.75rem;
	background: var(--primary-dark);
	color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(16px);
	transition: background 0.2s, transform 0.2s;
	border: none;
	svg {
		height: 20px;
		width: 20px;
	}

	&:hover {
		background: var(--black);
		color: white;
		transform: scale(1.1);
	}

	${TABLET_MEDIA} {
		svg {
			height: 20px;
			width: 20px;
		}
	}

	${LAPTOP_MEDIA} {
		svg {
			height: 28px;
			width: 28px;
		}
	}

	${DESKTOP_MEDIA} {
		svg {
			height: 32px;
			width: 32px;
		}
	}
`;

const BottomNavContainer = styled.div`
	pointer-events: auto;
	position: fixed;
	inset-inline: 0;
	bottom: 0;
	z-index: 1400;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
	padding: 1rem 0;
`;

const BottomNavStrip = styled.div`
	display: flex;
	gap: 0.5rem;
	padding: 0 1rem;
	overflow-x: auto;
	scroll-behavior: smooth;
`;

const ThumbButton = styled(motion.button)`
	position: relative;
	display: inline-block;
	width: 100px;
	height: 66px;
	border-radius: 0.5rem;
	overflow: hidden;
	flex-shrink: 0;
	cursor: pointer;

	&.active {
		transform: scale(1.2);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
		z-index: 20;
	}
`;

const ThumbImage = styled(Image)`
	height: 100%;
	width: 100%;
	object-fit: cover;
	transition: filter 0.2s;

	&.active {
		filter: brightness(1.1);
	}

	&.inactive {
		filter: brightness(0.6) contrast(1.1);
	}

	&:hover {
		filter: brightness(0.85);
	}
`;

//
// ─────────────────────────────────────────────
//   COMPONENT
// ─────────────────────────────────────────────
//

export default function SharedModal({ index, images, changePhotoId, closeModal, navigation, currentPhoto, direction }) {
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(true);

	const filteredImages = images?.filter((img) => range(index - 15, index + 15).includes(img.id)) || [];

	const handlers = useSwipeable({
		onSwipedLeft: () => index < images.length - 1 && changePhotoId(index + 1),
		onSwipedRight: () => index > 0 && changePhotoId(index - 1),
		trackMouse: true
	});

	const currentImage = images ? images[index] : currentPhoto;

	useEffect(() => {
		setLoaded(false);
		setLoading(true);
	}, [index]);

	return (
		<MotionConfig
			transition={{
				x: { type: 'spring', stiffness: 300, damping: 30 },
				opacity: { duration: 0.2 }
			}}
		>
			<Wrapper {...handlers}>
				{/* MAIN IMAGE */}
				<MainImageWrapper>
					<CenteredAspect>
						{loading && (
							<div
								style={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									zIndex: 2000
								}}
							>
								<Spinner />
							</div>
						)}

						<AnimatePresence initial={false} custom={direction}>
							<AbsoluteMotion
								key={index}
								custom={direction}
								variants={variants}
								initial='enter'
								animate='center'
								exit='exit'
							>
								<Image
									src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_1600/${currentImage.public_id}.${currentImage.format}`}
									fill
									sizes='90vw'
									style={{ objectFit: 'contain' }}
									alt='Image'
									onLoad={() => {
										setLoaded(true);
										setLoading(false);
									}}
								/>
							</AbsoluteMotion>
						</AnimatePresence>
					</CenteredAspect>
				</MainImageWrapper>

				{/* OVERLAY CONTROLS */}
				<OverlayControlsWrapper>
					{loaded && (
						<>
							{navigation && index > 0 && (
								<NavigationButton style={{ left: '1rem' }} onClick={() => changePhotoId(index - 1)}>
									<ChevronLeftIcon />
								</NavigationButton>
							)}

							{navigation && index + 1 < images.length && (
								<NavigationButton style={{ right: '1rem' }} onClick={() => changePhotoId(index + 1)}>
									<ChevronRightIcon />
								</NavigationButton>
							)}

							<TopRightButtons>
								<RoundButton onClick={closeModal}>
									<XMarkIcon />
								</RoundButton>
							</TopRightButtons>
						</>
					)}
				</OverlayControlsWrapper>

				{/* BOTTOM PREVIEW STRIP */}
				{navigation && (
					<BottomNavContainer>
						<BottomNavStrip>
							{filteredImages.map(({ id, public_id, format }) => (
								<ThumbButton
									key={id}
									animate={{ scale: id === index ? 1.2 : 1 }}
									onClick={() => changePhotoId(id)}
									className={id === index ? 'active' : ''}
								>
									<ThumbImage
										alt='thumbnail'
										width={180}
										height={120}
										src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${public_id}.${format}`}
										className={id === index ? 'active' : 'inactive'}
									/>
								</ThumbButton>
							))}
						</BottomNavStrip>
					</BottomNavContainer>
				)}
			</Wrapper>
		</MotionConfig>
	);
}
