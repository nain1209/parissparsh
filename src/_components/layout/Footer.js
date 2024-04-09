import Image from 'next/image';
import { Link } from '@/navigation';
import styled from 'styled-components';
import { useLocale } from 'next-intl';
import QRCode from '../../_assets/qr-code.jpeg';
import { DESKTOP_MEDIA, LAPTOP_MEDIA, TABLET_MEDIA } from '@/lib/utils';

const Footer = ({ textContent, address }) => {
	const locale = useLocale();
	return (
		<Wrapper>
			<LinkSection locale={locale}>
				<Link
					href='https://www.facebook.com/profile.php?id=100092656143995'
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					{textContent.socialLinkText}
				</Link>
			</LinkSection>
			<InfoSection>
				<CompanyName locale={locale}>{textContent.companyName}</CompanyName>
				<div>
					<Address locale={locale}>{address.heading}</Address>
					<AddressText>
						{address.name}, <br />
						{address.block},
						<br /> {address.landmark},
						<br /> {address.town},
						<br /> {address.district} - {address.pincode}
					</AddressText>
				</div>
				<InfoWrapper>
					<Address locale={locale}>{textContent.contactInfo.heading}</Address>
					<AddressText>
						{textContent.contactInfo.phone1} <br />
						{textContent.contactInfo.phone2} <br />
						{textContent.contactInfo.email1}
						<br />
						{textContent.contactInfo.email2}
					</AddressText>
					<Address locale={locale}>{textContent.visitingInfo.heading}</Address>
					<InfoText>{textContent.visitingInfo.text}</InfoText>
				</InfoWrapper>
				<div>
					<DonateHeader locale={locale}>{textContent.donateInfo.heading}</DonateHeader>
					<ImageWrapper>
						<Image src={QRCode} alt='QR Code for donation' fill={true} />
					</ImageWrapper>
				</div>
			</InfoSection>
			<Copyright>&copy; Copyright 2024 - Present. Parissparsh Multipurpose Foundation. All Rights Reserved.</Copyright>
			<Credits>
				Website designed and developed by <Link href='https://www.linkedin.com/in/nainysewaney/'>Nainy Sewaney</Link>
			</Credits>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	margin-left: -16px;
	margin-right: -16px;
	margin-top: 120px;

	${TABLET_MEDIA} {
		margin-left: -32px;
		margin-right: -32px;
	}

	${LAPTOP_MEDIA} {
		margin-left: -48px;
		margin-right: -48px;
	}
`;

const LinkSection = styled.section`
	background-color: var(--gray);
	padding-top: 39px;
	padding-bottom: 38px;
	text-align: center;
	a {
		color: var(--primary-darker);
		font-family: var(--font-accent);
		font-size: ${(props) => (props.locale === 'en' ? 'calc(13 / 16 * 1rem)' : 'calc(18 / 16 * 1rem)')};
		font-weight: 700;
		text-decoration: none;
		text-transform: uppercase;
		line-height: 1.41;
		letter-spacing: 2.56px;
	}

	${TABLET_MEDIA} {
		& a {
			font-size: ${(props) => (props.locale === 'en' ? 'calc(16 / 16 * 1rem)' : 'calc(18 / 16 * 1rem)')};
		}
	}

	${LAPTOP_MEDIA} {
		& a {
			font-size: ${(props) => (props.locale === 'en' ? 'calc(17 / 16 * 1rem)' : 'calc(20 / 16 * 1rem)')};
		}
	}

	${DESKTOP_MEDIA} {
		& a {
			font-size: ${(props) => (props.locale === 'en' ? 'calc(20 / 16 * 1rem)' : 'calc(22 / 16 * 1rem)')};
		}
	}
`;

const InfoSection = styled.section`
	background: var(--primary-dark);
	padding-top: 30px;
	padding-bottom: 40px;
	padding-left: 16px;
	padding-right: 16px;

	${LAPTOP_MEDIA} {
		display: flex;
		gap: 0 60px;
		align-items: center;
	}

	${DESKTOP_MEDIA} {
		justify-content: space-around;
	}
`;

const CompanyName = styled.h3`
	color: var(--pure-white);
	font-family: var(--font-accent);
	font-weight: 600;
	font-size: ${(props) => (props.locale === 'en' ? 'calc(12 / 16 * 1rem)' : 'calc(17 / 16 * 1rem)')};
	line-height: 1.71;
	letter-spacing: 2.56px;
	text-transform: uppercase;

	${DESKTOP_MEDIA} {
		font-size: ${(props) => (props.locale === 'en' ? 'calc(14 / 16 * 1rem)' : 'calc(18 / 16 * 1rem)')};
	}
`;

const Address = styled.h3`
	color: var(--pure-white);
	font-family: var(--font-accent);
	font-size: ${(props) => (props.locale === 'en' ? 'calc(14 / 16 * 1rem)' : 'calc(18 / 16 * 1rem)')};
	font-weight: 600;
	line-height: 1.71;
	letter-spacing: 2.56px;
	text-transform: uppercase;
	padding-top: 32px;
	display: inline-block;
	width: max-content;

	${LAPTOP_MEDIA} {
		padding-top: 0px;
	}

	${DESKTOP_MEDIA} {
		font-size: ${(props) => (props.locale === 'en' ? 'calc(15 / 16 * 1rem)' : 'calc(18 / 16 * 1rem)')};
	}
`;

const AddressText = styled.address`
	color: var(--pure-white);
	font-family: var(--font-satoshi);
	font-size: calc(14 / 16 * 1rem);
	font-weight: 500;
	line-height: 1.41;
	font-style: normal;
	width: max-content;

	${DESKTOP_MEDIA} {
		font-size: calc(15 / 16 * 1rem);
	}
`;

const InfoText = styled.p`
	color: var(--pure-white);
	font-family: var(--font-satoshi);
	font-size: calc(14 / 16 * 1rem);
	font-weight: 500;
	line-height: 1.41;
	white-space: nowrap;
`;

const ImageWrapper = styled.div`
	position: relative;
	height: 175px;
	width: 175px;
	padding-top: 12px;
`;

const InfoWrapper = styled.div`
	${LAPTOP_MEDIA} {
		& h3:nth-of-type(2) {
			padding-top: 26px;
		}
	}
`;

const DonateHeader = styled(Address)`
	width: max-content;
`;

const Copyright = styled.small`
	color: var(--pure-white, #fff);
	font-family: var(--font-satoshi);
	background: var(--primary-dark);
	font-size: calc(14 / 16 * 1rem);
	font-weight: 400;
	line-height: 1.42;
	letter-spacing: -0.14px;
	text-align: center;
	padding-top: 10px;
	padding-bottom: 24px;
	padding-left: 16px;
	padding-right: 16px;
	display: block;
`;

const Credits = styled.small`
	background-color: var(--primary-dark);
	color: var(--pure-white, #fff);
	font-family: var(--font-satoshi);
	display: block;
	text-align: center;
	margin-top: -2px;
	padding-bottom: 8px;
	font-size: calc(14 / 16 * 1rem);

	& a {
		color: var(--pure-white, #fff);
	}
`;
export default Footer;
