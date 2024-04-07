'use client';

import styled from 'styled-components';
import Image from 'next/image';

import H3 from '../UI/HeadingH3';

import Location from '../../_assets/Location.png';

import { DESKTOP_MEDIA, LAPTOP_MEDIA } from '@/lib/utils';

const Address = ({ textContent }) => {
	return (
		<AddressSection>
			<H3>{textContent.heading}</H3>
			<LocationImageWrapper>
				<LocationImage
					src={Location}
					alt='Google Map location of the centre'
					fill={true}
					style={{ objectFit: 'cover' }}
				/>
			</LocationImageWrapper>
			<Text>
				{textContent.name}, <br />
				{textContent.block},
				<br /> {textContent.landmark},
				<br /> {textContent.town},
				<br /> {textContent.district} - {textContent.pincode}
			</Text>
		</AddressSection>
	);
};

export default Address;

const LocationImageWrapper = styled.div`
	position: relative;
	height: 230px;

	${DESKTOP_MEDIA} {
		height: 400px;
		/* width: 80%; */
	}
`;

const LocationImage = styled(Image)`
	margin-top: 32px;
`;

const AddressSection = styled.section`
	${LAPTOP_MEDIA} {
		flex-basis: 50%;
	}
`;

const Text = styled.address`
	font-style: normal;
	margin-top: 54px;
`;
