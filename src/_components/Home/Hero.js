'use client';

import styled from 'styled-components';
import Image from 'next/image';

import { useRouter } from '../../navigation';

import heroImage from '@/_assets/hero.jpg';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Hero = ({ heading, text, ctaText, ghostCtaText, locale }) => {
	const router = useRouter();
	const onClickHandler = () => {
		router.push('/contact');
	};

	const onGhostClickHandler = () => {
		document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	return (
		<Section>
			<Wrapper>
				<Image
					src={heroImage}
					alt='A woman caring for the elderly'
					fill={true}
					priority={true}
					/* srcset={`${mobileHeroImage} 1x, ${laptopHeroImage} 2x`} */
					/* sizes={`${LAPTOP_MEDIA} 1100vw, 580vw`} */
					sizes={`100vw, ${LAPTOP_MEDIA} 50vw`}
					style={{ objectFit: 'cover', objectPosition: '50% 0%' }}
				/>
			</Wrapper>
			<ContentWrapper>
				<Title locale={locale}>{heading}</Title>
				<Text>{text}</Text>
				<FilledButton onClick={onClickHandler}>{ctaText}</FilledButton>
				<OutlinedButton onClick={onGhostClickHandler}>{ghostCtaText}</OutlinedButton>
			</ContentWrapper>
		</Section>
	);
};

const Section = styled.section`
	min-height: 50vh;
	${TABLET_MEDIA} {
		display: flex;
		align-items: center;
		gap: 0 64px;
	}

	${LAPTOP_MEDIA} {
		margin-top: -100px;
		gap: revert;
	}
`;

const Wrapper = styled.div`
	position: relative;
	min-height: 58vh;
	margin-left: -16px;
	margin-right: -16px;

	${TABLET_MEDIA} {
		width: 46vw;
		margin-right: -32px;
		margin-left: -32px;
	}

	${LAPTOP_MEDIA} {
		width: 50vw;
		min-height: 100vh;
		margin-left: -48px;
		margin-right: unset;
		position: relative;
		z-index: -1;
	}
`;

const ContentWrapper = styled.div`
	${TABLET_MEDIA} {
		width: 50vw;
	}
	${LAPTOP_MEDIA} {
		width: 50vw;
		padding-left: 60px;
	}

	${DESKTOP_MEDIA} {
		padding-left: 80px;
	}
`;

const Title = styled.h2`
	font-size: ${(props) => (props.locale === 'en' ? 'calc(60 / 16 * 1rem)' : 'calc(55 / 16 * 1rem)')};
	line-height: ${(props) => (props.locale === 'en' ? '1.08' : '1.2')};
	font-weight: 700;
	margin-left: auto;
	margin-right: auto;
	padding-top: 30px;
	padding-bottom: 20px;

	${LAPTOP_MEDIA} {
		padding-top: 100px;
		font-size: ${(props) => (props.locale === 'en' ? 'calc(59 / 16 * 1rem)' : 'calc(55 / 16 * 1rem)')};
	}

	${DESKTOP_MEDIA} {
		font-size: calc(80 / 16 * 1rem);
		width: 44vw;
		margin-left: revert;
		margin-right: revert;
	}
`;

const Text = styled.p`
	font-family: var(--font-satoshi);
	font-weight: 400;
	line-height: 1.41;
	padding-bottom: 26px;

	${LAPTOP_MEDIA} {
		width: 38vw;
	}

	${DESKTOP_MEDIA} {
		font-size: calc(20 / 16 * 1rem);
	}
`;
const FilledButton = styled.button`
	font-family: var(--font-accent);
	background-color: var(--primary);
	text-transform: uppercase;
	border-color: var(--primary);
	color: var(--pure-white);
	cursor: pointer;
	padding: 12px 25px;
	letter-spacing: 0.5px;
	margin-right: 8px;

	&:hover {
		background-color: var(--pure-white);
		color: var(--primary);
	}

	${TABLET_MEDIA} {
		margin-right: 24px;
	}
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

	&:hover {
		background-color: var(--primary);
		color: var(--pure-white);
	}
`;

export default Hero;
