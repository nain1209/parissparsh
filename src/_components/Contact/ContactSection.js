'use client';

import styled from 'styled-components';

import H3 from '../UI/HeadingH3';

import { LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Contact = ({ textContent }) => {
	return (
		<ContactSection>
			<H3>{textContent.emailHeading}</H3>
			<Info>parissparshfoundation7787@gmail.com</Info>
			<Info>vaishalinemade.mam@gmail.com</Info>
			<H3>{textContent.phoneHeading}</H3>
			<Info>{textContent.phone1}</Info>
			<Info>{textContent.phone2}</Info>
			<H3>{textContent.visitingInfo.heading}</H3>
			<Info>{textContent.visitingInfo.text}</Info>
		</ContactSection>
	);
};

export default Contact;

const ContactSection = styled.section`
	& h3 {
		margin-top: 24px;
	}

	${TABLET_MEDIA} {
		margin-top: 48px;
	}

	${LAPTOP_MEDIA} {
		& h3:not(:first-of-type) {
			margin-top: 50px;
		}
	}
`;

const Info = styled.p``;
