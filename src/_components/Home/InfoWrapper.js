'use client';

import styled from 'styled-components';
import { LAPTOP_MEDIA, DESKTOP_MEDIA } from '@/lib/utils';

const InfoWrapper = ({ children }) => {
	return <Info>{children}</Info>;
};

const Info = styled.div`
	${LAPTOP_MEDIA} {
		display: flex;
		gap: 0 64px;
	}

	${DESKTOP_MEDIA} {
		gap: 0 136px;
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
`;

export default InfoWrapper;
