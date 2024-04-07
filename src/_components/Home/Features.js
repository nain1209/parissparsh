'use client';

import styled from 'styled-components';
import Image from 'next/image';
import foodIconMobile from '../../_assets/mobile/food-mobile-icon.svg';
import medicalIconMobile from '../../_assets/mobile/medical-mobile-icon.svg';
import mentalSupportIconMobile from '../../_assets/mobile/mental-support-mobile-icon.svg';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Features = ({ features }) => {
	return (
		<FeaturesList>
			<FeaturesListItem>
				<Image src={foodIconMobile} height={92} width={92} alt='Icon of fresh leaves' />
				<Wrapper>
					<Title>{features[0].title}</Title>
					<Text>{features[0].description}</Text>
				</Wrapper>
			</FeaturesListItem>
			<FeaturesListItem>
				<Image src={medicalIconMobile} height={92} width={92} alt='Icon of stethoscope' />
				<Wrapper>
					<Title>{features[1].title}</Title>
					<Text>{features[1].description}</Text>
				</Wrapper>
			</FeaturesListItem>
			<FeaturesListItem>
				<Image src={mentalSupportIconMobile} height={92} width={92} alt='Icon of hand for support' />
				<Wrapper>
					<Title>{features[2].title}</Title>
					<Text>{features[2].description}</Text>
				</Wrapper>
			</FeaturesListItem>
		</FeaturesList>
	);
};

const FeaturesList = styled.ul`
	list-style: none;
	margin-left: auto;
	margin-right: auto;

	li:last-of-type {
		padding-bottom: 0;
	}

	${TABLET_MEDIA} {
		display: flex;
		flex-wrap: wrap;

		li {
			flex-basis: 50%;
			justify-content: center;
		}

		li:last-of-type {
			margin-left: auto;
			margin-right: auto;
		}
	}

	${LAPTOP_MEDIA} {
		gap: 0 70px;
		flex-wrap: revert;

		li {
			flex-basis: revert;
			justify-content: revert;
		}

		li:last-of-type {
			margin-left: revert;
			margin-right: revert;
		}
	}

	${DESKTOP_MEDIA} {
		gap: 0 130px;
		padding-bottom: 60px;
	}
`;

const FeaturesListItem = styled.li`
	display: flex;
	gap: 0 14px;
	padding-bottom: 60px;

	${DESKTOP_MEDIA} {
		gap: 0 24px;
		img {
			transform: scale(1.2);
		}
	}
`;

const Wrapper = styled.div`
	/* 	max-width: 168px; */
`;

const Title = styled.h3`
	font-size: calc(26 / 16 * 1rem);
	color: var(--black);
	line-height: 1.08;
	font-weight: 600;
	padding-bottom: 4px;

	${LAPTOP_MEDIA} {
		font-size: calc(28 / 16 * 1rem);
	}

	${DESKTOP_MEDIA} {
		font-size: calc(32 / 16 * 1rem);
	}
`;

const Text = styled.p`
	color: var(--black);
	line-height: 1.41;
	max-width: 168px;

	${LAPTOP_MEDIA} {
		max-width: 230px;
	}

	${DESKTOP_MEDIA} {
		max-width: 290px;
	}
`;

export default Features;
