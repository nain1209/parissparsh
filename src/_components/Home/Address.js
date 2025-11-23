'use client';

import styled from 'styled-components';
import H3 from '../UI/HeadingH3';
import { LAPTOP_MEDIA } from '@/lib/utils';

const Address = ({ textContent }) => {
	return (
		<Wrapper>
			<H3>{textContent.heading}</H3>
			<AddressText>
				{textContent.name},
				<br /> {textContent.block}, <br /> {textContent.landmark},
				<br /> {textContent.town},
				<br /> {textContent.district} - {textContent.pincode}
			</AddressText>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 130px;

	${LAPTOP_MEDIA} {
		padding-top: revert;
	}
`;

const AddressText = styled.address`
	font-style: normal;
`;
export default Address;
