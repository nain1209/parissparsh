'use client';

import { useId } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Image1 from '@/_assets/gallery/pics/pic-35.jpeg';
import Image2 from '@/_assets/gallery/pics/pic-34.jpeg';
import Image3 from '@/_assets/gallery/pics/pic-33.jpeg';
import Image4 from '@/_assets/gallery/pics/pic-32.jpeg';
import Image5 from '@/_assets/gallery/pics/pic-31.jpeg';
import Image6 from '@/_assets/gallery/pics/pic-30.jpeg';

import H3 from '../UI/HeadingH3';

import { useRouter } from '../../navigation';

import { LAPTOP_MEDIA, DESKTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Gallery = ({ textContent = '' }) => {
	const router = useRouter();

	const onClickHandler = () => {
		router.push('/gallery');
	};

	const images = [
		{ image: Image1, alt: '', id: useId() },
		{ image: Image2, alt: '', id: useId() },
		{ image: Image3, alt: '', id: useId() },
		{ image: Image4, alt: '', id: useId() },
		{ image: Image5, alt: '', id: useId() },
		{ image: Image6, alt: '', id: useId() }
	];
	return (
		<Section>
			<H3>{textContent.heading}</H3>
			<GridSection>
				{images.map((image) => {
					return (
						<GridImageWrapper key={image.id}>
							<GridImage src={image.image} alt={image.alt} fill={true} />
						</GridImageWrapper>
					);
				})}
			</GridSection>
			<OutlinedButton onClick={onClickHandler}>{textContent.cta}</OutlinedButton>
		</Section>
	);
};

export default Gallery;

const Section = styled.section`
	${DESKTOP_MEDIA} {
		margin-left: auto;
		margin-right: auto;
		gap: 0 126px;
	}
`;

const GridSection = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 16px;
	margin-top: 32px;

	${TABLET_MEDIA} {
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
	}

	${LAPTOP_MEDIA} {
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
	}

	${DESKTOP_MEDIA} {
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
	}
`;

const GridImageWrapper = styled.div`
	position: relative;
	height: 220px;
	width: 100%;

	${TABLET_MEDIA} {
		height: 220px;
		width: 230px;
	}

	${LAPTOP_MEDIA} {
		height: 250px;
		width: 380px;
	}

	${DESKTOP_MEDIA} {
		height: 300px;
		width: 500px;
	}
`;

const GridImage = styled(Image)`
	object-fit: cover;
	object-position: left top;
`;

const OutlinedButton = styled.button`
	font-family: var(--font-accent);
	background-color: transparent;
	text-transform: uppercase;
	border-color: var(--primary);
	color: var(--primary);
	cursor: pointer;
	padding: 12px 25px;
	letter-spacing: 0.5px;
	margin-top: 24px;
	float: right;
	&:hover {
		background-color: var(--primary);
		color: var(--pure-white);
	}
`;
