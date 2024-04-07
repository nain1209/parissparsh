'use client';

import styled from 'styled-components';

import H2 from '../UI/HeadingH2';

import { DESKTOP_MEDIA } from '@/lib/utils';

const DonateWrapper = ({ children, textContent }) => {
	return (
		<Wrapper>
			<H2>{textContent}</H2>
			<Section>{children}</Section>
		</Wrapper>
	);
};

export default DonateWrapper;

const Wrapper = styled.main`
	padding-top: 32px;

	${DESKTOP_MEDIA} {
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 80px 0;
`;
