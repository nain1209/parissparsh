import styled from 'styled-components';
import Underline from './Underline';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const HeadingH2 = ({ children }) => {
	return (
		<>
			<Heading>{children}</Heading>
			<Underline />
		</>
	);
};

const Heading = styled.h2`
	font-family: var(--font-heading);
	font-weight: 700;
	font-size: calc(34 / 16 * 1rem);
	line-height: 1.08;
	color: var(--primary-darker);
	text-transform: capitalize;

	${TABLET_MEDIA} {
		font-size: calc(41 / 16 * 1rem);
	}

	${LAPTOP_MEDIA} {
		font-size: calc(47 / 16 * 1rem);
	}

	${DESKTOP_MEDIA} {
		font-size: calc(52 / 16 * 1rem);
	}
`;

export default HeadingH2;
