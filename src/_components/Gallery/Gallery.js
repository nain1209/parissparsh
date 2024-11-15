'use client';

import styled from 'styled-components';
import { useId } from 'react';

import HeadingH2 from '../UI/HeadingH2';

import Image1 from '@/_assets/gallery/pics/pic-1.jpeg';
import Image2 from '@/_assets/gallery/pics/pic-2.jpeg';
import Image3 from '@/_assets/gallery/pics/pic-3.jpeg';
import Image4 from '@/_assets/gallery/pics/pic-4.jpeg';
import Image5 from '@/_assets/gallery/pics/pic-5.jpeg';
import Image6 from '@/_assets/gallery/pics/pic-6.jpeg';
import Image7 from '@/_assets/gallery/pics/pic-7.jpeg';
import Image8 from '@/_assets/gallery/pics/pic-8.jpeg';
import Image9 from '@/_assets/gallery/pics/pic-9.jpeg';
import Image10 from '@/_assets/gallery/pics/pic-10.jpeg';
import Image11 from '@/_assets/gallery/pics/pic-11.jpeg';
import Image12 from '@/_assets/gallery/pics/pic-12.jpeg';
import Image13 from '@/_assets/gallery/pics/pic-13.jpeg';
import Image14 from '@/_assets/gallery/pics/pic-14.jpeg';
import Image15 from '@/_assets/gallery/pics/pic-15.jpeg';
import Image16 from '@/_assets/gallery/pics/pic-16.jpeg';
import Image17 from '@/_assets/gallery/pics/pic-17.jpeg';
import Image18 from '@/_assets/gallery/pics/pic-18.jpeg';
import Image19 from '@/_assets/gallery/pics/pic-19.jpeg';
import Image20 from '@/_assets/gallery/pics/pic-20.jpeg';
import Image21 from '@/_assets/gallery/pics/pic-21.jpeg';
import Image22 from '@/_assets/gallery/pics/pic-22.jpeg';
import Image23 from '@/_assets/gallery/pics/pic-23.jpeg';
import Image24 from '@/_assets/gallery/pics/pic-24.jpeg';

import Image from 'next/image';
import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Gallery = ({ textContent = '' }) => {
	const images = [
		{ src: Image1, alt: '', id: useId() },
		{ src: Image2, alt: '', id: useId() },
		{ src: Image3, alt: '', id: useId() },
		{ src: Image4, alt: '', id: useId() },
		{ src: Image5, alt: '', id: useId() },
		{ src: Image6, alt: '', id: useId() },
		{ src: Image7, alt: '', id: useId() },
		{ src: Image8, alt: '', id: useId() },
		{ src: Image9, alt: '', id: useId() },
		{ src: Image10, alt: '', id: useId() },
		{ src: Image11, alt: '', id: useId() },
		{ src: Image12, alt: '', id: useId() },
		{ src: Image13, alt: '', id: useId() },
		{ src: Image14, alt: '', id: useId() },
		{ src: Image15, alt: '', id: useId() },
		{ src: Image16, alt: '', id: useId() },
		{ src: Image17, alt: '', id: useId() },
		{ src: Image18, alt: '', id: useId() },
		{ src: Image19, alt: '', id: useId() },
		{ src: Image20, alt: '', id: useId() },
		{ src: Image21, alt: '', id: useId() },
		{ src: Image22, alt: '', id: useId() },
		{ src: Image23, alt: '', id: useId() },
		{ src: Image24, alt: '', id: useId() }
	];

	return (
		<MainSection>
			<HeadingH2>{textContent.heading}</HeadingH2>
			<PicturesWrapper>
				{images.reverse().map((image) => {
					return (
						<ImageWrapper key={image.id}>
							<Image src={image.src} alt={image.alt} fill={true} />
						</ImageWrapper>
					);
				})}
			</PicturesWrapper>
		</MainSection>
	);
};

export default Gallery;

const MainSection = styled.section`
	margin-top: 30px;
`;

const PicturesWrapper = styled.section`
	margin-top: 30px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 14px;

	${TABLET_MEDIA} {
		grid-template-columns: repeat(3, 1fr);
	}

	${LAPTOP_MEDIA} {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	height: 200px;

	${TABLET_MEDIA} {
		height: 300px;
	}

	${LAPTOP_MEDIA} {
		height: 400px;
	}

	${DESKTOP_MEDIA} {
		height: 480px;
	}
`;
