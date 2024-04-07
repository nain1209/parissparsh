import { LAPTOP_MEDIA, DESKTOP_MEDIA } from '@/lib/utils';
import styled from 'styled-components';

const HeadingH4 = ({ children }) => {
	return <Heading>{children}</Heading>;
};

const Heading = styled.h4`
	font-family: var(--font-accent);
	font-weight: 500;
	font-size: ${(props) => (props.locale === 'en' ? 'calc(12 / 16 * 1rem)' : 'calc(14 / 16 * 1rem)')};
	line-height: 1.41;
	letter-spacing: 1.92px;
	opacity: 0.8;
	text-transform: uppercase;
	padding-top: 54px;
	padding-bottom: 3px;

	${LAPTOP_MEDIA} {
		padding-top: revert;
	}

	${DESKTOP_MEDIA} {
		font-size: calc(14 / 16 * 1rem);
	}
`;

export default HeadingH4;
