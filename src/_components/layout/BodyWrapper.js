'use client';

import styled from 'styled-components';
import StyledComponentsRegistry from '../../lib/registry';
import GlobalStyles from '../../../GlobalStyles';
import Nav from '@/_components/layout/Nav';
import Footer from '@/_components/layout/Footer';
import { LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';
import { NextIntlClientProvider } from 'next-intl';

const BodyWrapper = ({ children, locale, menu, footer, address, logoText }) => {
	return (
		<Body>
			<StyledComponentsRegistry>
				<GlobalStyles />
				<NextIntlClientProvider locale={locale}>
					<Nav menu={menu} logoText={logoText} />
					{children}
					<Footer textContent={footer} address={address} />
				</NextIntlClientProvider>
			</StyledComponentsRegistry>
		</Body>
	);
};

const Body = styled.body`
	padding-left: 16px;
	padding-right: 16px;

	${TABLET_MEDIA} {
		padding-left: 32px;
		padding-right: 32px;
	}

	${LAPTOP_MEDIA} {
		padding-left: 48px;
		padding-right: 48px;
	}
`;

export default BodyWrapper;
