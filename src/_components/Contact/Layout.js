'use client';

import styled from 'styled-components';
import H2 from '../UI/HeadingH2';

import { DESKTOP_MEDIA } from '@/lib/utils';

const Layout = ({ children, textContent }) => {
	return (
		<Container>
			<H2>{textContent}</H2>
			{children}
		</Container>
	);
};

export default Layout;

const Container = styled.main`
	padding-top: 40px;
	padding-left: 16px;
	padding-right: 16px;

	${DESKTOP_MEDIA} {
		padding-top: 70px;
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
`;
