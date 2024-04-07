import styled from 'styled-components';
import { useLocale } from 'next-intl';
import Underline from './Underline';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const HeadingH3 = ({ children }) => {
	const locale = useLocale();

	return (
		<>
			<Heading locale={locale}>{children}</Heading>
			<Underline />
		</>
	);
};

const Heading = styled.h3`
	font-family: var(--font-heading);
	font-weight: 700;
	font-size: ${(props) => (props.locale === 'en' ? 'calc(32 / 16 * 1rem)' : 'calc(28 / 16 * 1rem)')};
	line-height: ${(props) => (props.locale === 'en' ? '1.08' : '1.5')};
	color: var(--primary-darker);

	${TABLET_MEDIA} {
		font-size: calc(40 / 16 * 1rem);
	}

	${LAPTOP_MEDIA} {
		font-size: ${(props) => (props.locale === 'en' ? 'calc(44 / 16 * 1rem)' : 'calc(36 / 16 * 1rem)')};
		line-height: ${(props) => (props.locale === 'en' ? '1.08' : '1.3')};
	}

	${DESKTOP_MEDIA} {
		font-size: ${(props) => (props.locale === 'en' ? 'calc(47 / 16 * 1rem)' : 'calc(45 / 16 * 1rem)')};
	}
`;

export default HeadingH3;
