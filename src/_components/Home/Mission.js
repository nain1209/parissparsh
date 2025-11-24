'use client';

import styled from 'styled-components';
import Image from 'next/image';

import sectionImage2 from '@/_assets/gallery/gallery-6.jpg';
import sectionImage1 from '@/_assets/gallery/gallery-2.jpg';
import logoMask from '../../_assets/logo-mask.svg';

import Link from '../UI/Link';
import H3 from '../UI/HeadingH3';
import H4 from '../UI/HeadingH4';
import Rectangle from '../UI/Rectangle';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Work = ({ textContent }) => {
	return (
		<Section id={'mission'}>
			<ImageWrapper>
				<SectionImage2>
					<Image
						src={sectionImage2}
						fill={true}
						alt='A woman taking care of sick elderly'
						style={{ objectFit: 'cover' }}
					/>
					<Rectangle $options={['right', 'bottom']}></Rectangle>
					<SectionImage1>
						<Image
							src={sectionImage1}
							alt='A woman taking care of sick elderly'
							fill={true}
							style={{ objectFit: 'cover' }}
						/>
					</SectionImage1>
				</SectionImage2>
			</ImageWrapper>
			<ContentWrapper>
				<LogoImage src={logoMask} alt='Filled logo' />
				<H4>{textContent.smallHeading}</H4>
				<H3>{textContent.heading}</H3>
				<Description>{textContent.text}</Description>
				<Link href='/about'>{textContent.link}</Link>
			</ContentWrapper>
		</Section>
	);
};

const Section = styled.section`
	${LAPTOP_MEDIA} {
		display: flex;
		flex-direction: row-reverse;
		gap: 0 60px;
		padding-bottom: 60px;
	}

	${DESKTOP_MEDIA} {
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	position: relative;

	${TABLET_MEDIA} {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}

	${LAPTOP_MEDIA} {
		width: 50vw;
		margin-left: revert;
		margin-right: revert;
	}
`;

const SectionImage1 = styled.div`
	position: absolute;
	bottom: -16px;
	left: -48px;
	width: 96px;
	height: 98px;
	z-index: 3;

	${TABLET_MEDIA} {
		width: 22vw;
		height: 15vh;
	}

	${LAPTOP_MEDIA} {
		width: 12vw;
		height: 25vh;
	}

	${DESKTOP_MEDIA} {
		width: 14vw;
		height: 28vh;
	}
`;

const SectionImage2 = styled.div`
	position: relative;
	width: 80%;
	height: 230px;
	margin-left: auto;
	right: 16px;

	${TABLET_MEDIA} {
		height: 35vh;
	}

	${LAPTOP_MEDIA} {
		height: 54vh;
		width: 80%;
	}

	${DESKTOP_MEDIA} {
		height: 47vh;
		width: 30vw;
	}
`;

const ContentWrapper = styled.div`
	position: relative;

	${LAPTOP_MEDIA} {
		width: 50vw;
	}
`;

const LogoImage = styled(Image)`
	position: absolute;
	top: -80px;
	left: -200px;
	transform: scale(0.8);

	${TABLET_MEDIA} {
		left: -42%;
		transform: scale(0.5);
	}

	${LAPTOP_MEDIA} {
		transform: scale(0.8);
		top: -40%;
		left: -45%;
	}

	${DESKTOP_MEDIA} {
		top: -25%;
		left: -60%;
		transform: revert;
	}
`;

const Description = styled.p`
	padding-bottom: 10px;
`;

export default Work;
