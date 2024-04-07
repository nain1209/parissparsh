'use client';

import styled from 'styled-components';
import Image from 'next/image';

import H3 from '../UI/HeadingH3';

import QRCode from '../../_assets/qr-code.jpeg';

import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const PaymentsSection = ({ textContent }) => {
	return (
		<PaymentsWrapper>
			<section>
				<H3>{textContent.offline.heading}</H3>
				<List>
					<Pair>
						<Key>{textContent.offline.details.bank.label}</Key>
						<Value>{textContent.offline.details.bank.value}</Value>
					</Pair>
					<Pair>
						<Key>{textContent.offline.details.beneficiary.label}</Key>
						<Value>{textContent.offline.details.beneficiary.value}</Value>
					</Pair>
					<Pair>
						<Key>{textContent.offline.details.account.label}</Key>
						<Value>{textContent.offline.details.account.value}</Value>
					</Pair>
					<Pair>
						<Key>{textContent.offline.details.ifsc.label}</Key>
						<Value>{textContent.offline.details.ifsc.value}</Value>
					</Pair>
					<Pair>
						<Key>{textContent.offline.details.branch.label}</Key>
						<Value>{textContent.offline.details.branch.value}</Value>
					</Pair>
				</List>
			</section>
			<Divider />
			<section>
				<H3>{textContent.upi.qrcode.heading}</H3>
				<SubHeading>{textContent.upi.qrcode.subHeading}</SubHeading>
				<QRCodeWrapper>
					<QRCodeImage
						src={QRCode}
						alt='QR Code for donation'
						style={{ marginLeft: 'auto', marginRight: 'auto' }}
						fill={true}
					/>
				</QRCodeWrapper>
				<Separator>
					<Line></Line>
					<Text>{textContent.upi.separator}</Text>
					<Line></Line>
				</Separator>
				<SubHeadingUPI>{textContent.upi.upiDetails.heading}</SubHeadingUPI>
				<List>
					<Pair>
						<UPIKey style={{ paddingTop: '20px', paddingBottom: '20px' }}>
							{textContent.upi.upiDetails.upiId.label}
						</UPIKey>
						<Value style={{ paddingTop: '20px', paddingBottom: '20px' }}>
							{textContent.upi.upiDetails.upiId.value}
						</Value>
					</Pair>
					<Pair>
						<UPIKey>{textContent.upi.upiDetails.name.label}</UPIKey>
						<Value>{textContent.upi.upiDetails.name.value}</Value>
					</Pair>
				</List>
			</section>
		</PaymentsWrapper>
	);
};

export default PaymentsSection;

const PaymentsWrapper = styled.div`
	& h3:first-of-type {
		padding-top: 26px;
	}

	& section:last-of-type {
		margin-top: 40px;
	}
	${LAPTOP_MEDIA} {
		display: flex;
		gap: 0 32px;
		padding-top: 32px;
		justify-content: space-between;
		& h3:first-of-type {
			padding-top: revert;
		}
		& section:first-of-type {
			width: 50%;
			max-width: 450px;
		}

		& section:last-of-type {
			margin-top: revert;
			width: 50%;
			max-width: 490px;
		}
	}

	${DESKTOP_MEDIA} {
		& section:first-of-type {
			width: 40%;
			max-width: revert;
		}

		& section:last-of-type {
			width: 40%;
			max-width: revert;
		}
	}
`;

const List = styled.dl``;

const Pair = styled.div`
	display: flex;
	border-bottom: 1px solid hsl(0deg 0% 0% / 0.1);
`;

const Key = styled.dt`
	min-width: 50%;
	padding-top: 32px;
	padding-bottom: 32px;
	font-weight: 500;
`;

const Value = styled.dd`
	padding-top: 32px;
	padding-bottom: 32px;
`;

const UPIKey = styled(Key)`
	min-width: 20%;

	${TABLET_MEDIA} {
		min-width: 50%;
	}
`;

const SubHeading = styled.h4`
	color: var(--black);
	font-family: var(--font-heading);
	font-size: calc(24 / 16 * 1rem);
	font-weight: 600;
	line-height: 1.53;
	/* 	padding-top: 20px; */

	${TABLET_MEDIA} {
		text-align: center;
	}

	${DESKTOP_MEDIA} {
		font-size: calc(27 / 16 * 1rem);
	}
`;

const Divider = styled.div`
	display: none;
	${LAPTOP_MEDIA} {
		display: revert;
		height: 70vh;
		width: 1px;
		opacity: 0.5;
		background-color: #d9d9d9;
		align-self: center;
	}

	${DESKTOP_MEDIA} {
		height: 40vh;
	}
`;

const SubHeadingUPI = styled(SubHeading)`
	padding-top: 0;

	${LAPTOP_MEDIA} {
		text-align: center;
	}
`;

const QRCodeWrapper = styled.div`
	position: relative;
	height: 245px;
	width: 245px;
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto;
`;

const QRCodeImage = styled(Image)`
	object-fit: cover;
`;

const Separator = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Line = styled.div`
	height: 1px;
	display: inline-block;
	background-color: #d9d9d9;
	width: 30%;
`;

const Text = styled.span`
	color: var(--black);
	font-family: var(--font-heading);
	font-size: calc(20 / 16 * 1rem);
	font-weight: 400;
	line-height: 1.53;
	opacity: 0.65;
	padding-left: 21px;
	padding-right: 21px;
	padding-top: 30px;
	padding-bottom: 30px;
`;
