'use client';

import Image from 'next/image';
import styled from 'styled-components';

import Rectangle from '../UI/Rectangle';
import H4 from '../UI/HeadingH4';
import H3 from '../UI/HeadingH3';
import List from '../UI/List';
import Link from '../UI/Link';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

import sectionImage from '@/_assets/section-image-1-care.jpg';

const Care = ({ textContent }) => {
	return (
		<CareSection>
			<ImageWrapper>
				<Image
					src={sectionImage}
					alt='A doctor checking on an elderly person'
					fill={true}
					style={{ objectFit: 'cover', objectPosition: '40% top' }}
				/>
				<Rectangle $options={['left', 'bottom']}></Rectangle>
			</ImageWrapper>
			<ContentWrapper>
				<H4>{textContent.smallHeading}</H4>
				<H3>{textContent.heading}</H3>
				<List list={textContent.list}></List>
				<Link href='/facilities'>{textContent.link}</Link>
			</ContentWrapper>
		</CareSection>
	);
};

const CareSection = styled.section`
	${LAPTOP_MEDIA} {
		display: flex;
		gap: 0 64px;
		align-items: center;
	}

	${DESKTOP_MEDIA} {
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		gap: 0 126px;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	width: calc(100% - 16px); // to leave 16px of space from left edge of the screen
	margin-left: auto; // to center the image from left edge
	height: 42vh;

	${TABLET_MEDIA} {
		height: 50vh;
		width: 70%;
		margin-left: auto;
		margin-right: auto;
	}

	${LAPTOP_MEDIA} {
		width: 45vw;
		height: 90vh;
		margin-left: revert;
		margin-right: revert;
	}

	${DESKTOP_MEDIA} {
		width: 40vw;
		height: 68vh;
	}
`;

const ContentWrapper = styled.div`
	& a {
		margin-top: 16px;
	}

	${LAPTOP_MEDIA} {
		width: 50vw;
		& a {
			margin-top: 24px;
		}
	}

	${DESKTOP_MEDIA} {
		& a {
			margin-top: 32px;
		}
	}
`;

export default Care;
