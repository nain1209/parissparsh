'use client';

import styled from 'styled-components';

import { DESKTOP_MEDIA, LAPTOP_MEDIA } from '@/lib/utils';

const Wrapper = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Wrapper;

const Container = styled.div`
	margin-top: 32px;
	${LAPTOP_MEDIA} {
		margin-top: 60px;
		display: flex;
		gap: 0 150px;
	}

	/* ${DESKTOP_MEDIA} {
		gap: revert;
	} */
`;
